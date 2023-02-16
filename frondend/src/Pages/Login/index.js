import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Radio, Space, Divider } from "antd";
import "../../Components/Css/login.css";
import { Link, useLocation } from "react-router-dom";
import StudentLogin from "./StudentLogin";
import ProfessionalLogin from "./ProfessionalLogin";
import EmployerLogin from "./EmployerLogin";
import Traininglogin from "./Traininglogin";
import google from "../../assets/google.png";
import HeaderNavbar from "../../Components/HeaderNavbar";
import CollegeLogin from "./CollegeLogin";
import BackroundVerificationLogin from "./BackgroundVerificationLogin";

const Login = () => {
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
      <div>
        <HeaderNavbar />
        <div className="d-flex justify-content-center align-items-center">
          <Container>
            <Row className="login_page">
              <Col sm={12} md={4} className="d-grid align-items-center">
                <div>
                  <Card className="left-contents" style={{ height: "450px" }}>
                    <h3
                      className="mb-3 d-flex justify-content-center align-items-center"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Login
                    </h3>
                    {typeof state !== "object" && state ? (
                      <Radio.Group
                        className="contents"
                        style={{ marginLeft: "50px" }}
                        onChange={onChange}
                        value={a}
                      >
                        <Space direction="vertical">
                          <Radio value={"Auiditor"} className="login-option">
                            Auiditor
                          </Radio>
                          <Radio
                            value={"Company"}
                            className="login-option mt-1"
                          >
                            Company
                          </Radio>
                          <Radio
                            value={"Employer"}
                            className="login-option mt-1"
                          ></Radio>
                          {/* <Radio
                            value={"Institute"}
                            className="login-option mt-1"
                          >
                           
                          </Radio>
                          <Radio
                            value={"College"}
                            className="login-option mt-1"
                          >
                            College
                          </Radio>
                          <Radio
                            value={"BackroundVerification"}
                            className="login-option mt-1"
                          >
                            Background Verification
                          </Radio> */}
                        </Space>
                      </Radio.Group>
                    ) : (
                      <Radio.Group
                        className="contents"
                        style={{ marginLeft: "50px" }}
                        onChange={onChange}
                        value={role}
                      >
                        <Space direction="vertical">
                          <Radio value={"Auditor"} className="login-option">
                            Auditor
                          </Radio>
                          <Radio
                            value={"Company"}
                            className="login-option mt-1"
                          >
                            Company
                          </Radio>
                          {/* <Radio
                            value={"Employer"}
                            className="login-option mt-1"
                          >
                            Employer
                          </Radio>
                          <Radio
                            value={"Institute"}
                            className="login-option mt-1"
                          >
                            Training Institute
                          </Radio>
                          <Radio
                            value={"College"}
                            className="login-option mt-1"
                          >
                            College
                          </Radio>
                          <Radio
                            value={"BackroundVerification"}
                            className="login-option mt-1"
                          >
                            Background Verification
                          </Radio> */}
                        </Space>
                      </Radio.Group>
                    )}
                    <img
                      src="https://static.naukimg.com/s/5/105/i/register.png"
                      className="png-image"
                    ></img>
                  </Card>
                </div>
              </Col>
              <Col sm={12} md={8} className="mt-1">
                <Card
                  className="right-contents py-5 px-5"
                  style={{ height: "580px" }}
                >
                  <h4
                    className="d-flex justify-content-center"
                    style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                  >
                    {`${stateCheck + " " + "Login"}`}
                  </h4>
                  <div className="maincontent ">
                    <h5 style={{ fontSize: "16px" }}>
                      Don't have an account ?
                    </h5>
                    <Link to="/signup" className="signup-link" state={a}>
                      Signup Now
                    </Link>
                  </div>
                  <br />
                  {state &&
                    typeof state === "string" &&
                    (a === "Auditor" ? (
                      <StudentLogin role={role} />
                    ) : a === "Company" ? (
                      <ProfessionalLogin />
                    ) : a === "Employer" ? (
                      <EmployerLogin />
                    ) : a === "Institute" ? (
                      <Traininglogin />
                    ) : a === "College" ? (
                      <CollegeLogin />
                    ) : (
                      a === "BackroundVerification" && (
                        <BackroundVerificationLogin />
                      )
                    ))}
                  {(typeof state !== "string" || !state) &&
                    (role === "Auditor" ? (
                      <StudentLogin role={role} />
                    ) : role === "Company" ? (
                      <ProfessionalLogin />
                    ) : role === "Employer" ? (
                      <EmployerLogin />
                    ) : role === "Institute" ? (
                      <Traininglogin />
                    ) : role === "College" ? (
                      <CollegeLogin />
                    ) : (
                      role === "BackroundVerification" && (
                        <BackroundVerificationLogin />
                      )
                    ))}
                  <Divider className="divider-content">Or</Divider>
                  <Link
                    to="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    className="google-content"
                  >
                    <img className="google-icon" src={google}></img>
                    <span className="google-span">Sign in with Google</span>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Login;
