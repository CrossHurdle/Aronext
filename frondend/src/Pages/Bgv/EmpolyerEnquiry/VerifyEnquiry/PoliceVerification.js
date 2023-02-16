import React, { useEffect, useState } from "react";
// import "../../../Components/Css/Employer/OurProfile.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import Api from "../../../Api";
import { Dropdown } from "primereact/dropdown";
import TabsProfile from "./VerifyTabs";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Upload } from "antd";
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';



function PoliceVerification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [countryList, setcountryList] = useState([]);
  const [countryValue, setCountryValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [districtValue, setDistrictValue] = useState();
  const [cityList, setcityList] = useState([]);
  const [cityValue, setCityValue] = useState();
  const [domainList, setDomainList] = useState([]);
  const [domainValue, setDomainValue] = useState();
  const [subDomainList, setSubDomainList] = useState([]);
  const [subDomainValue, setSubDomainValue] = useState();
  const [companyType, setCompanyType] = useState([]);
  const [mode, setMode] = useState();

  const { Option } = Select;

  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const handleFormSubmit = async () => {
    const collectDetails = {
      criminalRecord: getValues().criminalRecord,
      companyType: getValues().type,
      verificationMode: getValues().verificationMode,
      status: getValues().status,
      domain: getValues().domainValue,
      subDomain: getValues().subDomainValue,
      country: getValues().country,
      state: getValues().state,
      district: getValues().district,
      city: getValues().city,
      pincode: getValues().pincode,
      website: getValues().website,
      Linkedin: getValues().linkedin,
      facebook: getValues().facebook,
      youtube: getValues().youtube,
      address: getValues().address,
      services: getValues().services,
    };

    console.log("collectDetails", collectDetails);

    // await Api.post(`ourProfile/create`, collectDetails).then((resp) => {
    //   console.log("resp.data", resp.data);
    // });
  };





  const [file, setFile] = useState();

  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }

  const modes = [
    { names: "Success", value: "Success" },
    { names: "Fail", value: "Fail" },
  ];

  const [addEduForm, setEduAddForm] = useState([1]);
  const [dob, setDob] = useState();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="content-profile">
      <Container className=" content-style ">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <Row className="mt-4">

            {addEduForm.map((item, index) =>
              <Row key={index} className="mt-4">
                <Row>
                  <Col lg={4}>
                    <label>Criminal Record</label>
                    <br />
                    <Select
                      // mode="multiple"
                      // className="mt-3"
                      style={{

                        width: '90%'
                      }}
                      placeholder="select type of verification"
                      onChange={handleChange}
                      optionLabelProp="label"
                      {...register("criminalRecord", { required: true })}


                    >
                      <Option value="Yes" label="Yes">
                        <div className="demo-option-label-item">

                          Yes
                        </div>
                      </Option>
                      <Option value="No" label="No">
                        <div className="demo-option-label-item">

                          No
                        </div>
                      </Option>

                    </Select>
                    {errors.criminalRecord && (
                      <p className="text-danger">criminal record is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label > Status </label>
                    <br />
                    <Select
                      // className="mt-3"
                      style={{

                        width: '90%'
                      }}
                      placeholder="select type of verification"
                      onChange={handleChange}
                      optionLabelProp="label"
                      {...register("status", { required: true })}


                    >
                      <Option value="Cleared" label="Cleared">
                        <div className="demo-option-label-item">

                          Cleared
                        </div>
                      </Option>
                      <Option value="Pending" label="Pending">
                        <div className="demo-option-label-item">

                          Pending
                        </div>
                      </Option>
                      <Option value="NA" label="NA">
                        <div className="demo-option-label-item">

                          NA
                        </div>
                      </Option>

                    </Select>
                    {errors.status && (
                      <p className="text-danger">status is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label > RemarkMarks </label>
                    <br />
                    <input

                      {...register("marks", { required: true })}
                      className="Create-input"
                    />
                    {errors.marks && (
                      <p className="text-danger">ReMarks is required</p>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">

                  <Col lg={4}>
                    <label>Verification</label>
                    <br />
                    <Dropdown
                      className="create-select"
                      name="mode"
                      value={mode}
                      options={modes}
                      optionLabel="names"
                      placeholder="Select a mode"
                      {...register("verificationMode", {
                        required: true,
                        onChange: (e) => {
                          setMode(e.target.value);
                        },
                      })}
                    />
                    {errors.verificationMode && (
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

                <button type="button" onClick={(e) => setEduAddForm([...addEduForm, 1])} className="button1 m-2 p-2 mt-4">
                  Add Record
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
}

export default PoliceVerification;
