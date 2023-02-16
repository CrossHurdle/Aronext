import React, { useState, useEffect } from "react";
import "../../../Components/Css/Employer/CreateJobForm.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Api from "../../../Api"
import { Select, Tabs } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { DatePicker, Space } from 'antd';
import { Checkbox } from 'antd';


const BgvForm = () => {
    const [Experience, setExperience] = useState();
    const [dob, setDob] = useState();
    const [gender, setGender] = useState();
    const [country, setcountry] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [verification, setVerification] = useState();
    const [selectSalary, setSelectSalary] = useState();
    const [skillist, setskilList] = useState([]);
    const [Qualification, setQualification] = useState([]);
    const [QualificationList, setQualificationList] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [jobMode, setJobMode] = useState([]);
    const [skill, setSkill] = useState([]);
    const [notice, setNotice] = useState();
    const [noticeList, setNoticeList] = useState([]);
    const [logo, setLogo] = useState();
    const [education, setEducation] = useState(false);
    const [employersFrmbtn, setemployersFrmbtn] = useState(false);
    const [policeFrmbtn, setPoliceFrmbtn] = useState(false);
    const [addEduForm, setEduAddForm] = useState([1]);
    const [addEmpForm, setEmpAddForm] = useState([1]);
    const [addPoliceForm, setPoliceAddForm] = useState([1]);
    const [bgvData, setBgvData] = useState();
    const [services, setServices] = useState();
    console.log(bgvData, "ddd")

    console.log("edu", education)
    // const [logo, setLogo] = useState();
    // const [logo, setLogo] = useState();

    const { Option } = Select;
    const { id } = useParams()



    const [review, setReview] = useState({
        name: "",
        lastname: "",
        gender: "",
        experience: "",
        dob: "",
        pan: "",
        adhaar: "",
        qualification: "",
        schoolname: "",
        country: "",
        state: "",
        city: "",
        verification: "",
        company_name: "",
        email: "",
        permanent_address: "",
        educationVerification: "",

    });
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: review,
        //  {
        //   area: selectedArea,
        //   technology: technology,
        //   qualification: Qualification,
        //   notice: notice,
        // },
    });
    console.log("getvaluessss", getValues());

    const SelectFile = async (event) => {
        const file = event.target.files[0];
        const type = file?.type?.split("/")[0];
        const base64 = await convertBase64(file);
        setLogo(base64);
    };
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const onChangeCheckBox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const handleCreateFormSubmit = async () => {
        const createFormDetails = {
            name: review.name,
            lastname: getValues().lastname,
            gender: getValues().gender,
            dob: getValues().dob,
            pan: getValues().pan,
            adhaar: getValues().adhaar,
            // qualification: getValues().qualification,
            educationVerification: getValues().educationVerification,
            country: getValues().country,
            state: getValues().state,
            city: getValues().city,
            verification: getValues().verification,
            company_name: getValues().company_name,
            experience: getValues().experience,
            email: getValues().email,
            noticePeriod: getValues().noticePeriod,
            companyLogo: getValues().logo,
            schoolname: getValues().schoolname,
            police: getValues().police,
            permanent_address: getValues().permanent_address,
        };
        await Api.post(`bgvemp/create`, createFormDetails).then((resp) => {

            console.log("resp.data", resp.data);

        });
    };

    const getBgv = () => {
        Api.get(`/bgvProfile/getBgv/${id}`).then((res) => {
            setBgvData(res.data?.services?.subServices?.map((item) => item));
        });
    };
    const servicesBased = bgvData
    useEffect(() => {
        getBgv();
        setServices(servicesBased?.map((item) => item))
        console.log(id, "idid")
    }, [])

    console.log(servicesBased, "servicesBased")

    // useEffect(() => {
    //     getSkill();
    //     getQualification();
    //     getNoticePeriod();
    // }, []);

    // const getQualification = async () => {
    //     await Api.get("qualificationForm/getAllqualification").then((res) => {
    //         setQualificationList(res.data.data);
    //     });
    // };

    const getSkill = async () => {
        await Api.get("skills/getSkill").then((res) => {
            setskilList(res.data.data);
        });
    };

    const getNoticePeriod = async () => {
        await Api.get("noticeperiod/getForm").then((res) => {
            setNoticeList(res.data.data);
        });
    };

    const Gender = [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
        { name: "Other", value: "Other" },
    ];
    const exprnce = [
        { name: "0-1", value: "0-1" },
        { name: "1-2", value: "2-3" },
        { name: "3-5", value: "3-5" },
        { name: "More than 5", value: "Morw than 5" },
    ];
    const countries = [
        { name: "India", value: "India" },

    ];
    const states = [
        { name: "Tamil Nadu", value: "Tamil Nadu" },
        { name: "Maharashtra", value: "Maharashtra" },
        { name: "Karnataka", value: "karnataka" },
        { name: "MP", value: "MP" },
        { name: "Dehli", value: "Dehli" },

    ];
    const cities = [
        { name: "Chennai", value: "Chennai" },
        { name: "Mumbai", value: "Mumbai" },
        { name: "Bangalore", value: "Bangalore" },
        { name: "Bhopal", value: "Bhopal" },
        { name: "Delhi", value: "Delhi" },


    ];
    const verificationType = [
        { name: "Police Verification", value: "Police Verification" },
        { name: "Education Cerification", value: "Education Verification" },
        { name: "Experience Verification", value: "Experience Verification" },

    ];


    return (
        <div>
            <Container className=" content-style ">
                <Row style={{ marginLeft: "5%" }}>

                    <form onSubmit={handleSubmit(handleCreateFormSubmit)}>
                        <br />
                        <div className="pages-title mt-3">Verification Form:</div>
                        <Row className="mt-4">
                            <Col lg={4}>
                                <label className="create-title">Name</label>
                                <br />
                                <input
                                    {...register("name", {
                                        required: true,
                                        onChange: (e) => {
                                            setReview((prev) => ({
                                                ...prev,
                                                name: e.target.value,
                                            }));
                                        },
                                    })}
                                    className="Create-input"
                                />
                                {errors.name && (
                                    <p className="text-danger">Name is required</p>
                                )}
                            </Col>
                            <Col lg={4}>
                                <label>Last Name</label>
                                <br />
                                <input
                                    {...register("lastname", { required: true })}
                                    className="Create-input"
                                />
                                {errors.lastname && <p className="text-danger">Last Name is required</p>}
                            </Col>
                            {/* <Col lg={4}>
                                <label>Date Of Birth</label>
                                <br />
                                <DatePicker onChange={onChange}  {...register("dob", {
                                    required: true,
                                    onChange: (e) => {
                                        setDob(e.target.value);
                                    },
                                })}
                                    className="Create-input" />
                                {errors.dob && (
                                    <p className="text-danger">Date of Birth is required</p>
                                )}
                            </Col> */}
                            <Col lg={4} >
                                <label className="input-title">Date of Birth</label>
                                <br />

                                <input
                                    // className="seminarInput"
                                    type="date"
                                    {...register("dob", { required: true })}
                                />

                                <br />
                                {errors.dob && (
                                    <span cclassName="text-danger">To Date is required</span>
                                )}
                            </Col>
                            {/* <Col lg={4}>
                  <label>Area</label>
                  <br />
                  <Dropdown
                    filter
                    name="area"
                    className="create-select"
                    value={selectedArea}
                    options={areas}
                    placeholder="Select a Area"
                    {...register("area", {
                      required: true,
                      onChange: (e) => {
                        setSelectedArea(e.target.value);
                      },
                    })}
                  />
                  {errors.area && <p className="text-danger">Area is required</p>}
                </Col> */}

                        </Row>
                        <Row className="mt-4">
                            <Col lg={4}>
                                <label>Gender</label>
                                <br />
                                <Dropdown
                                    filter
                                    className="create-select"
                                    name="gender"
                                    value={gender}
                                    options={Gender}
                                    optionLabel="name"
                                    placeholder="Select Gender"
                                    {...register("gender", {
                                        required: true,
                                        onChange: (e) => {
                                            setGender(e.target.value);
                                        },
                                    })}
                                />
                                {errors.gender && (
                                    <p className="text-danger">Gender is required</p>
                                )}
                            </Col>
                            <Col lg={4}>
                                <label>Email ID </label>
                                <br />
                                <input
                                    type='email'
                                    {...register("email", { required: true })}
                                    className="Create-input"
                                />
                                {errors.email && (
                                    <p className="text-danger">Email is required</p>
                                )}
                            </Col>
                            <Col lg={4}>
                                <label> Pan No. </label>
                                <br />
                                <input
                                    type="number"
                                    {...register("pan", { required: true })}
                                    className="Create-input"
                                />
                                {errors.pan && (
                                    <p className="text-danger">Pan number is required</p>
                                )}
                            </Col>

                        </Row>
                        <Row className="mt-4">
                            <Col lg={4}>
                                <label> Adhaar No. </label>
                                <br />
                                <input
                                    type="number"
                                    {...register("adhaar", { required: true })}
                                    className="Create-input"
                                />
                                {errors.adhaar && (
                                    <p className="text-danger">Adhaar number is required</p>
                                )}
                            </Col>
                            {/* <Col lg={4}>
                                <label>Job Role </label>
                                <br />
                                <input
                                    {...register("jobRole", { required: true })}
                                    className="Create-input"
                                />
                                {errors.jobRole && (
                                    <p className="text-danger">Job Role is required</p>
                                )}
                            </Col> */}


                        </Row>

                        <Row className="mt-4">
                            <Col lg={4}>
                                <label>Country</label>
                                <br />
                                <Dropdown
                                    filter
                                    className="create-select"
                                    name="country"
                                    value={country}
                                    options={countries}
                                    optionLabel="name"
                                    placeholder="Select Country"
                                    {...register("country", {
                                        required: true,
                                        onChange: (e) => {
                                            setcountry(e.target.value);
                                        },
                                    })}
                                />
                                {errors.country && (
                                    <p className="text-danger">Country is required</p>
                                )}
                            </Col>
                            <Col lg={4}>
                                <label>State</label>
                                <br />
                                <Dropdown
                                    filter
                                    className="create-select"
                                    name="state"
                                    value={state}
                                    options={states}
                                    optionLabel="name"
                                    placeholder="Select State"
                                    {...register("state", {
                                        required: true,
                                        onChange: (e) => {
                                            setState(e.target.value);
                                        },
                                    })}
                                />
                                {errors.state && (
                                    <p className="text-danger">State is required</p>
                                )}
                            </Col>

                            <Col lg={4}>
                                <label>City</label>
                                <br />
                                <Dropdown
                                    filter
                                    className="create-select"
                                    name="city"
                                    value={city}
                                    options={cities}
                                    optionLabel="name"
                                    placeholder="Select City"
                                    {...register("city", {
                                        required: true,
                                        onChange: (e) => {
                                            setCity(e.target.value);
                                        },
                                    })}
                                />
                                {errors.city && (
                                    <p className="text-danger">State is required</p>
                                )}
                            </Col>

                        </Row>

                        {/* {bgvData === "Education VerificationEmployer VerificationPolice Verification" ? */}
                        <Tabs defaultActiveKey="1" className="mt-4">

                            <Tabs.TabPane tab="Education Verification" key="1" >
                                <p className="pages-title mt-3">Education Details </p>
                                {addEduForm.map((item, index) =>
                                    <Row className="mt-4">
                                        <Col lg={4}>
                                            <label>Qualification</label>
                                            <br />
                                            <Select
                                                mode="multiple"
                                                // className="mt-3"
                                                style={{

                                                    width: '90%'
                                                }}
                                                placeholder="select type of verification"
                                                onChange={handleChange}
                                                optionLabelProp="label"
                                                {...register("educationVerification.qualification", { required: false })}


                                            >
                                                <Option value="10th" label="10th">
                                                    <div className="demo-option-label-item">

                                                        10th
                                                    </div>
                                                </Option>
                                                <Option value="12th" label="12th">
                                                    <div className="demo-option-label-item">

                                                        12th
                                                    </div>
                                                </Option>
                                                <Option value="UG" label="UG">
                                                    <div className="demo-option-label-item">

                                                        UG
                                                    </div>
                                                </Option>
                                                <Option value="PG" label="PG">
                                                    <div className="demo-option-label-item">

                                                        PG
                                                    </div>
                                                </Option>
                                            </Select>
                                            {errors.educationVerification && (
                                                <p className="text-danger">qualification is required</p>
                                            )}
                                        </Col>
                                        <Col lg={4}>
                                            <label > Institute Name </label>
                                            <br />
                                            <input

                                                {...register("educationVerification.intitute_Name", { required: true })}
                                                className="Create-input"
                                            />
                                            {errors.educationVerification && (
                                                <p className="text-danger">School name is required</p>
                                            )}
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group controlId="Image" className="">
                                                <Form.Label>Upload Documents</Form.Label>
                                                <Form.Control
                                                    accept=".png, .jpg, .jpeg"
                                                    type="file"
                                                    {...register("companyLogo", { required: false })}
                                                    onChange={(e) => {
                                                        setLogo(e.target.files[0]);
                                                        SelectFile(e);
                                                    }}
                                                />
                                            </Form.Group>
                                            {errors.companyLogo && (
                                                <span className="text-danger">Documents is required</span>
                                            )}
                                        </Col>

                                        <button type="button" onClick={(e) => setEduAddForm([...addEduForm, 1])} className="button1 m-2 p-2 w-25">
                                            Add Education
                                        </button>
                                        {addEduForm.length > 1 &&
                                            <button type="button" onClick={() => {
                                                console.log("first")
                                                if (addEduForm.length > 1) {
                                                    var rmove = addEduForm.pop()

                                                    setEduAddForm([...addEduForm])
                                                }
                                            }} className="button1 m-2 p-2">
                                                Remove
                                            </button>
                                        }
                                    </Row>
                                )}

                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Employer Verification" key="2" >
                                <p className="pages-title mt-3">Employer Details</p>
                                {addEmpForm.map((item, index) =>
                                    <Row  >
                                        <Col lg={4}>
                                            <label className="create-title mb-3 mt-3">Company Name</label>
                                            <br />
                                            <input
                                                {...register("company_name", { required: true })}
                                                rows={5}
                                                cols={5}
                                                className="profile-input"
                                            />
                                            {errors.company_name && (
                                                <p className="text-danger">company name is required</p>
                                            )}
                                        </Col>

                                        <Col lg={4}>
                                            <label className="mt-3 mb-3">Experience</label>
                                            <br />
                                            <Dropdown
                                                filter
                                                className="create-select"
                                                name="gender"
                                                value={Experience}
                                                options={exprnce}
                                                optionLabel="name"
                                                placeholder="Select Experience"
                                                {...register("experience", {
                                                    required: true,
                                                    onChange: (e) => {
                                                        setExperience(e.target.value);
                                                    },
                                                })}
                                            />
                                            {errors.experience && (
                                                <p className="text-danger">experience is required</p>
                                            )}
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group controlId="Image" className="mb-3 mt-3">
                                                <Form.Label >Upload Documents</Form.Label>
                                                <Form.Control
                                                    accept=".png, .jpg, .jpeg"
                                                    type="file"
                                                    {...register("companyLogo", { required: false })}
                                                    onChange={(e) => {
                                                        setLogo(e.target.files[0]);
                                                        SelectFile(e);
                                                    }}
                                                />
                                            </Form.Group>
                                            {errors.companyLogo && (
                                                <span className="text-danger">Documents is required</span>
                                            )}
                                        </Col>
                                        <button type="button" onClick={(e) => setEmpAddForm([...addEmpForm, 1])} className="button1 m-2 p-2">
                                            Add
                                        </button>
                                        {addEmpForm.length > 1 &&
                                            <button type="button" onClick={() => {
                                                console.log("first")
                                                if (addEmpForm.length > 1) {
                                                    var rmove = addEmpForm.pop()

                                                    setEmpAddForm([...addEmpForm])
                                                }
                                            }} className="button1 m-2 p-2">
                                                Remove
                                            </button>
                                        }
                                    </Row>
                                )}
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Police Verification" key="3"  >
                                <p className="pages-title mt-3">Details for police verification</p>
                                {addPoliceForm.map((item, index) =>
                                    <Row className="mt-4">
                                        <Col lg={4} >
                                            <label> Permmonent Address </label>
                                            <br />
                                            <input

                                                {...register("policeVerification.permanent_address", { required: true })}
                                                className="Create-input mt-3"
                                            />
                                            {errors.permanent_address && (
                                                <p className="text-danger">Permonent Address is required</p>
                                            )}
                                        </Col>
                                        <Col lg={4} >
                                            <label> Police </label>
                                            <br />
                                            <input

                                                {...register("policeVerification.police", { required: true })}
                                                className="Create-input mt-3"
                                            />
                                            {errors.police && (
                                                <p className="text-danger">School name is required</p>
                                            )}
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group controlId="Image" className="mb-3 py-2">
                                                <Form.Label>Upload Documents</Form.Label>
                                                <Form.Control
                                                    accept=".png, .jpg, .jpeg"
                                                    type="file"
                                                    // {...register("companyLogo", { required: true })}
                                                    onChange={(e) => {
                                                        setLogo(e.target.files[0]);
                                                        SelectFile(e);
                                                    }}
                                                />
                                            </Form.Group>
                                            {/* {errors.companyLogo && (
                                                <span className="text-danger">Documents is required</span>
                                            )} */}
                                        </Col>
                                    </Row>
                                )}
                            </Tabs.TabPane>

                        </Tabs>
                        {/* : null} */}
                        {/* <Row >
                                <div className=" p-2 mt-5">
                                    <button

                                        className="button1 m-2 p-2"
                                        type="button"
                                        // onClick={handleCreateFormSubmit}
                                        onClick={() => {
                                            setemployersFrmbtn(false)
                                            setPoliceFrmbtn(false)
                                            setEducation(!education)
                                        }}
                                    >
                                        Education Verification
                                    </button>
                                    <button type="button" onClick={() => {
                                        setEducation(false)
                                        setPoliceFrmbtn(false)
                                        setemployersFrmbtn(!employersFrmbtn)
                                    }
                                    } className="button1 m-2 p-2 w" >
                                        Employer Verification
                                    </button>
                                    <button type="button" onClick={() => {
                                        setEducation(false)
                                        setemployersFrmbtn(false)
                                        setPoliceFrmbtn(!policeFrmbtn)
                                    }} className="button1 m-2 p-2" >
                                        Police Verification
                                    </button>

                                </div>
                            </Row> */}

                        <div className="submitbuttons p-2">
                            <button
                                className="button1 m-2 p-2"
                                type="submit"
                                onClick={handleCreateFormSubmit}
                            >
                                Submit
                            </button>
                            <input className="button2 m-2 p-2" type="reset" value="Reset"></input>
                            {/* <button className="button2 m-2 p-2" type="reset">
                                Reset
                            </button> */}
                        </div>
                    </form>

                </Row>
            </Container>
        </div>
    );
};

export default BgvForm;