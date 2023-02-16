import React, { useState } from "react";
import { Container, Row, Col, button } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import "./kycComplaince.scss";
import { DatePicker, Space } from 'antd';
import { Select, Tabs } from "antd";


function EmployerVerification() {

  const [review, setReview] = useState({
    companyName: "",
    jobTitle: "",
    marks: "",
    verification: "",

  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleCreateFormSubmit = async () => {
    const createFormDetails = {
      companyName: review.companyName,
      jobTitle: getValues().jobTitle,
      pass: getValues().pass,
      marks: getValues().pass,
      verification: getValues().verification,


    };
  }

  const [addEduForm, setEduAddForm] = useState([1]);
  const [dob, setDob] = useState();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const { Option } = Select;

  return (
    <div>
      <Container className=" content-style ">
        <form onSubmit={handleSubmit(handleCreateFormSubmit)}>

          <Row className="mt-4">

            {addEduForm.map((item, index) =>
              <Row key={index} className="mt-4">
                <Row>
                  <Col lg={4}>
                    <label>Company Name</label>
                    <br />
                    <input

                      {...register("companyName", { required: true })}
                      className="Create-input"
                    />
                    {errors.companyName && (
                      <p className="text-danger">company name is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label > Job Title  </label>
                    <br />
                    <input

                      {...register("jobTitle", { required: true })}
                      className="Create-input"
                    />
                    {errors.jobTitle && (
                      <p className="text-danger">job title is required</p>
                    )}
                  </Col>
                  <Col lg={4}>
                    <label > Experience </label>
                    <br />
                    <input

                      {...register("marks", { required: true })}
                      className="Create-input"
                    />
                    {errors.marks && (
                      <p className="text-danger">experience is required</p>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={4}>
                    <label > From Year </label>
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
                    <label > Till Year </label>
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
                <Row className="mt-4">
                  <Col lg={4}>
                    <label>Remark </label>
                    <br />
                    <input

                      {...register("companyName", { required: true })}
                      className="Create-input"
                    />
                    {errors.companyName && (
                      <p className="text-danger">company name is required</p>
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
                  Add Company
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

export default EmployerVerification;
