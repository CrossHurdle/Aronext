import React, { useState } from 'react';
// import "../../../Components/Css/Employer/AdminInfo.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
import "../../../../Components/Css/Bgv/BgvEnquiry.scss"
import { Select, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from 'antd';
import { Checkbox } from 'antd';

export default function BgvAdminInfo() {
  const [review, setReview] = useState({
    education: "",
    pass: "",
    marks: "",
    verification: "",

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
    // setLogo(base64);
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
      education: review.education,
      pass: getValues().pass,
      marks: getValues().pass,
      verification: getValues().verification,


    };
    // await Api.post(`createForm/createForm`, createFormDetails).then((resp) => {
    //     navigate("/employer/reviewpage", { state: createFormDetails });
    // });
  };


  const [addEduForm, setEduAddForm] = useState([1]);
  const [dob, setDob] = useState();





  const { Option } = Select;

  const employerCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <Container className=" content-style ">
        <form onSubmit={handleSubmit(handleCreateFormSubmit)}>

          <Row className="mt-4">

            {addEduForm.map((item, index) =>
              <Row key={index} className="mt-4">
                <Row>
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
                      {...register("qualification", { required: true })}


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
                    {errors.qualification && (
                      <p className="text-danger">qualification is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label > Institute Name </label>
                    <br />
                    <input

                      {...register("schoolname", { required: true })}
                      className="Create-input"
                    />
                    {errors.schoolname && (
                      <p className="text-danger">School name is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label > Marks </label>
                    <br />
                    <input

                      {...register("marks", { required: true })}
                      className="Create-input"
                    />
                    {errors.marks && (
                      <p className="text-danger">Marks is required</p>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={4}>
                    <label > Passed Out Year </label>
                    <br />
                    <DatePicker onChange={onChange}  {...register("pass", {
                      required: true,
                      onChangedate: (e) => {
                        setDob(e.target.value);
                      },
                    })}
                      className="Create-input" />
                    {errors.pass && (
                      <p className="text-danger">Passed out year is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label>Verification</label>
                    <br />
                    <Select
                      // className="mt-3"
                      style={{

                        width: '90%'
                      }}
                      placeholder="select type of verification"
                      onChange={handleChange}
                      optionLabelProp="label"
                      {...register("qualification", { required: true })}


                    >
                      <Option value="Success" label="Success">
                        <div className="demo-option-label-item">

                          Success
                        </div>
                      </Option>
                      <Option value="Failed" label="Failed">
                        <div className="demo-option-label-item">

                          Failed
                        </div>
                      </Option>

                    </Select>
                    {errors.qualification && (
                      <p className="text-danger">Verification is required</p>
                    )}
                  </Col>
                </Row>
                {/* <Col lg={4}>
                
                <div className="ms-3 mt-4 model_heading">
                  <Checkbox onChange={employerCheckbox}>Success</Checkbox>
                  <Checkbox onChange={employerCheckbox}>Fail</Checkbox>
                </div>
                {errors.companyLogo && (
                  <span className="text-danger">Documents is required</span>
                )}
              </Col> */}

                <button type="button" onClick={(e) => setEduAddForm([...addEduForm, 1])} className="button1 m-2 p-2 mt-4 w-25">
                  Add Education
                </button>
                {addEduForm.length > 1 &&
                  <button type="button" onClick={() => {
                    console.log("first")
                    if (addEduForm.length > 1) {
                      var rmove = addEduForm.pop()

                      setEduAddForm([...addEduForm])
                    }
                  }} className="button1 m-2 p-2 m-4">
                    Remove
                  </button>
                }
              </Row>
            )}
          </Row>
          <div className="submitbuttons p-2">
            <button
              className="button1 m-2 p-2"
              type="submit"
            // onClick={handleCreateFormSubmit}
            >
              Submit
            </button>
            <input className="button2 m-2 p-2" type="reset" value="Reset"></input>
            {/* <button className="button2 m-2 p-2" type="reset">
                                Reset
                            </button> */}
          </div>
        </form>
      </Container>
    </div>
  );
};

