import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Radio, Space } from "antd";
import "../../Components/Css/signup.css";
import { Link, useLocation } from "react-router-dom";
import Studentsignup from "./StudentSignup";
import ProfessionalSignup from "./ProfessionalSignup";
import EmployerSignup from "./EmployerSignup";
import TrainingInstituteSignup from "./TrainingInstituteSignup";
import icons from "../../assets/iconss.png";
import HeaderNavbar from "../../Components/HeaderNavbar";
import CollegeSignup from "./CollegeSignup";
import BackroundVerificationSignup from "./BackgroundVerificationSignup";

const Signup = () => {
  const { state } = useLocation();
  const [role, setrole] = useState("Student");
  const [a, setA] = useState(state);
  const onChange = (e) => {
    setrole(e.target.value);
    setA(e.target.value);
  };
  const stateCheck = typeof state !== "object" ? (state ? a : role) : role;
  return (
    <div>
      <HeaderNavbar />
      <div className="main-con d-grid align-items-center">
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <Container>
              <Row>
                <Col sm={12} md={4} className="d-grid align-items-center">
                  <div>
                    <Card className="left-content" style={{ height: "405px" }}>
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: -35 }}
                      >
                        <img
                          src={icons}
                          className="user-icon-styles"
                          alt="icons"
                        ></img>
                      </div>
                      <h3
                        className="d-flex justify-content-center align-items-center mb-3"
                        style={{
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          marginTop: "10px",
                        }}
                      >
                        Signup
                      </h3>
                      {typeof state !== "object" && state ? (
                        <Radio.Group
                          className="contents"
                          style={{ marginTop: "20px" }}
                          onChange={onChange}
                          value={a}
                        >
                          <Space direction="vertical d-grid justify-content-center align-items-center">
                            <Radio value={"Auditor"} className="login-options">
                              Auditor
                            </Radio>
                            <Radio
                              value={"Company"}
                              className="login-options mt-1"
                            >
                              Company
                            </Radio>
                            {/* <Radio
                              value={"Employer"}
                              className="login-options mt-1"
                            >
                              Employer
                            </Radio>
                            <Radio
                              value={"Institute"}
                              className="login-options mt-1"
                            >
                              Training Institute
                            </Radio>
                            <Radio
                              value={"College"}
                              className="login-options mt-1"
                            >
                              College
                            </Radio>
                            <Radio
                              value={"BackroundVerification"}
                              className="login-options mt-1"
                            >
                              Backround Verification
                            </Radio> */}
                          </Space>
                        </Radio.Group>
                      ) : (
                        <Radio.Group
                          className="contents"
                          style={{ marginTop: "20px" }}
                          onChange={onChange}
                          value={role}
                        >
                          <Space direction="vertical d-grid justify-content-center align-items-center">
                            <Radio value={"Auditor"} className="login-options">
                              Auditor
                            </Radio>
                            <Radio
                              value={"Company"}
                              className="login-options mt-1"
                            >
                              Company
                            </Radio>
                            {/* <Radio
                              value={"Employer"}
                              className="login-options mt-1"
                            >
                              Employer
                            </Radio>
                            <Radio
                              value={"Institute"}
                              className="login-options mt-1"
                            >
                              Training Institute
                            </Radio>
                            <Radio
                              value={"College"}
                              className="login-options mt-1"
                            >
                              College
                            </Radio>
                            <Radio
                              value={"BackroundVerification"}
                              className="login-options mt-1"
                            >
                              Backround Verification
                            </Radio> */}
                          </Space>
                        </Radio.Group>
                      )}
                    </Card>
                  </div>
                </Col>
                <Col sm={12} md={8} className="mt-1">
                  <Card className="right-content py-4 px-2">
                    <h4
                      className="d-flex justify-content-center"
                      style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                    >
                      {`${stateCheck + " " + "Signup"}`}
                    </h4>
                    <div className="maincontent ">
                      <h5 style={{ fontSize: "16px" }}>
                        Already have an account ?
                      </h5>
                      <Link to="/login" className="login-link" state={a}>
                        Login Now
                      </Link>
                    </div>
                    {state &&
                      typeof state === "string" &&
                      (() => {
                        if (a === "Auditor") {
                          return <Studentsignup />;
                        }

                        if (a === "Company") {
                          return <ProfessionalSignup />;
                        }
                        if (a === "Employer") {
                          return <EmployerSignup />;
                        }
                        if (a === "Institute") {
                          return <TrainingInstituteSignup />;
                        }
                        if (a === "College") {
                          return <CollegeSignup />;
                        }
                        if (a === "BackroundVerification") {
                          return <BackroundVerificationSignup />;
                        }
                      })()}
                    {(typeof state !== "string" || !state) &&
                      (() => {
                        if (role === "Student") {
                          return <Studentsignup />;
                        }

                        if (role === "Professional") {
                          return <ProfessionalSignup />;
                        }
                        if (role === "Employer") {
                          return <EmployerSignup />;
                        }
                        if (role === "Institute") {
                          return <TrainingInstituteSignup />;
                        }
                        if (role === "College") {
                          return <CollegeSignup />;
                        }
                        if (role === "BackroundVerification") {
                          return <BackroundVerificationSignup />;
                        }
                      })()}
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
