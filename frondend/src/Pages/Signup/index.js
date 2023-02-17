import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Radio, Space } from "antd";
import "../../Components/Css/signup.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Studentsignup from "./StudentSignup";
import ProfessionalSignup from "./ProfessionalSignup";
import EmployerSignup from "./EmployerSignup";
import TrainingInstituteSignup from "./TrainingInstituteSignup";
import icons from "../../assets/iconss.png";
import HeaderNavbar from "../../Components/HeaderNavbar";
import CollegeSignup from "./CollegeSignup";
import BackroundVerificationSignup from "./BackgroundVerificationSignup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const aa = useParams();
  console.log("aa", aa);
  const [role, setrole] = useState(aa.role);
  const [a, setA] = useState(state);
  const onChange = (e) => {
    navigate(`/signup/${e.target.value}`);
    setrole(e.target.value);
    setA(e.target.value);
  };
  const stateCheck = typeof state !== "object" ? (state ? a : role) : role;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <div>
      <HeaderNavbar />
      <div className="main-con d-grid align-items-center">
        <div>
          <div>
            <Row>
              <Col
                sm={12}
                md={5}
                className="d-flex justify-content-center align-items-center"
              >
                <Card className="left_card">
                  <div>
                    {state &&
                      typeof state === "string" &&
                      (() => {
                        if (a === "Student") {
                          return (
                            <img
                              src="https://urge.org/wp-content/uploads/2021/09/college-folk.jpg"
                              alt="student"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }

                        if (a === "User") {
                          return (
                            <img
                              src="https://wallpaperaccess.com/full/2484157.jpg"
                              alt="User"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (a === "Auditor") {
                          return (
                            <img
                              src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2021/07/27104546/How-a-Hybrid-Workforce-Benefits-Employers-and-Employees-1024x512.jpg"
                              alt="Auditor"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (a === "Accountant") {
                          return (
                            <img
                              src="https://ashokainstitute.com/assets/images/banners1.jpg"
                              alt="Accountant"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (a === "Advisor") {
                          return (
                            <img
                              src="https://media.istockphoto.com/id/1307457287/photo/group-of-happy-students-looking-at-exam-results-while-standing-at-university-hallway.jpg?b=1&s=170667a&w=0&k=20&c=zNDAjhdSVc-Y10IFdFBORjHIQzHnA0E-LaWkPynpzfI="
                              alt="Advisor"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (a === "IP/Copyright") {
                          return (
                            <img
                              src="https://media.istockphoto.com/id/1307457287/photo/group-of-happy-students-looking-at-exam-results-while-standing-at-university-hallway.jpg?b=1&s=170667a&w=0&k=20&c=zNDAjhdSVc-Y10IFdFBORjHIQzHnA0E-LaWkPynpzfI="
                              alt="Copywrites"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (a === "Lawer") {
                          return (
                            <img
                              src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.vira.co.uk/wp-content/uploads/2022/10/Categories-background-verification-check-is-implemented.jpg"
                              alt="Lawer"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                      })()}
                    {(typeof state !== "string" || !state) &&
                      (() => {
                        if (role === "Student") {
                          return (
                            <img
                              src="https://urge.org/wp-content/uploads/2021/09/college-folk.jpg"
                              alt="Student"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }

                        if (role === "User") {
                          return (
                            <img
                              src="https://wallpaperaccess.com/full/2484157.jpg"
                              alt="User"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (role === "Auditor") {
                          return (
                            <img
                              src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2021/07/27104546/How-a-Hybrid-Workforce-Benefits-Employers-and-Employees-1024x512.jpg"
                              alt="Auditor"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (role === "Accountant") {
                          return (
                            <img
                              src="https://ashokainstitute.com/assets/images/banners1.jpg"
                              alt="Accountant"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (role === "Advisor") {
                          return (
                            <img
                              src="https://media.istockphoto.com/id/1307457287/photo/group-of-happy-students-looking-at-exam-results-while-standing-at-university-hallway.jpg?b=1&s=170667a&w=0&k=20&c=zNDAjhdSVc-Y10IFdFBORjHIQzHnA0E-LaWkPynpzfI="
                              alt="Advisor"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (role === "IP/Copyright") {
                          return (
                            <img
                              src="https://media.istockphoto.com/id/1307457287/photo/group-of-happy-students-looking-at-exam-results-while-standing-at-university-hallway.jpg?b=1&s=170667a&w=0&k=20&c=zNDAjhdSVc-Y10IFdFBORjHIQzHnA0E-LaWkPynpzfI="
                              alt="IP/Copyright"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                        if (role === "Lawer") {
                          return (
                            <img
                              src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.vira.co.uk/wp-content/uploads/2022/10/Categories-background-verification-check-is-implemented.jpg"
                              alt="Lawer"
                              style={{ height: "80vh", width: "100%" }}
                            />
                          );
                        }
                      })()}
                  </div>
                </Card>
              </Col>
              <Col sm={12} md={7} className="mt-1">
                <Card
                  className="right-content py-4 px-2"
                  style={{ width: "90%" }}
                >
                  <h4 className="d-flex justify-content-center">
                    <span style={{ color: "red" }}> FERIL </span> &nbsp;Signup
                  </h4>
                  <p
                    className="d-flex justify-content-center mt-2"
                    style={{ fontSize: "19px" }}
                  >
                    {/* {`${stateCheck + " " + "Signup"}`} */} I'm &nbsp;&nbsp;
                    {typeof state !== "object" && state ? (
                      <select
                        // className="input-field"
                        {...register("Gender", { required: true })}
                        onChange={onChange}
                        value={a}
                      >
                        <option value={"Student"}>Student </option>
                        <option value={"User"}>User</option>
                        <option value={"Auditor"}>Auditor</option>
                        <option value={"Accountant"}>Accountant</option>
                        <option value={"Advisor"}>Advisor</option>
                        <option value={"IP/Copyright"}>IP/Copyright</option>
                        <option value={"Lawer"}>Lawer</option>
                      </select>
                    ) : (
                      <select
                        // className="input-field"
                        {...register("Gender", { required: true })}
                        onChange={onChange}
                        value={role}
                      >
                        <option value={"Student"}>Student </option>
                        <option value={"User"}>User</option>
                        <option value={"Auditor"}>Auditor</option>
                        <option value={"Accountant"}>Accountant</option>
                        <option value={"Advisor"}>Advisor</option>
                        <option value={"IP/Copyright"}>IP/Copyright</option>
                        <option value={"Lawer"}>Lawer</option>
                      </select>
                    )}{" "}
                    &nbsp; I'm Looking for {role}
                  </p>
                  <div className="maincontent">
                    <h5 style={{ fontSize: "13px" }}>
                      Already have an account ? &nbsp;
                    </h5>
                    <Link to="/login" className="login-link" state={a}>
                      Login Now
                    </Link>
                  </div>
                  <div className="mt-1">
                    {state &&
                      typeof state === "string" &&
                      (() => {
                        if (a === "Student") {
                          return <Studentsignup />;
                        }

                        if (a === "Professional") {
                          return <ProfessionalSignup />;
                        }
                        if (a === "Auditor") {
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
                        if (role === "Auditor") {
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
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
