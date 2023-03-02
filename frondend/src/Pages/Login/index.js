import React, { useState } from "react";
import { Radio, Space, Divider } from "antd";
import "../../Components/Css/login.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import google from "../../assets/google.png";
import HeaderNavbar from "../../Components/HeaderNavbar";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../../Components/Css/login.css";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Api from "../../Api";

const Login = () => {
  const { state } = useLocation();
  const [role, setrole] = useState("");
  const [a, setA] = useState(state);
  const onChange = (e) => {
    setrole(e.target.value);
    setA(e.target.value);
  };
  const stateCheck = typeof state !== "object" ? (state ? a : role) : role;

  const [show, setShow] = useState(false);
  const [resres, setResres] = useState({
    status: null,
    message: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit();
    setShow(true);
  };
  const [passwordShown, setpasswordShown] = useState(false);

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    const userDetails = {
      email: getValues().email,
      password: getValues().password,
    };

    await Api.post(`users/login`, userDetails)
      .then((response) => {
        console.log("response 111", response);
        setResres({
          status: response.data?.status,
          message: response.data?.message,
        });
      })
      .catch((err) => {
        setResres({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };

  return (
    <div>
      <div>
        <HeaderNavbar />
        <ToastContainer
          className="bg-light"
          position="top-end"
          style={{ zIndex: 100000 }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong
                className={`me-auto text-${
                  resres?.status === "Success" ? "success" : "danger"
                }`}
              >
                {resres?.status}
              </strong>
            </Toast.Header>
            <Toast.Body>{resres?.message}</Toast.Body>
          </Toast>
        </ToastContainer>
        {/* <div className="d-flex justify-content-center align-items-center"> */}
        <Row className="login_page">
          <Col sm={12} md={5}>
            <div className="d-flex justify-content-center">
              <Card className="left-contents">
                <img
                  src="https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?w=740&t=st=1675937014~exp=1675937614~hmac=d39991814b263834f9af24ac71a71ad73fac49bd439f68ba851a02f1e7ffa3ce"
                  className="png-image"
                ></img>
              </Card>
            </div>
          </Col>
          <Col sm={12} md={7} className="mt-1">
            <Card className="right-contents py-5 px-5">
              <h4
                className="d-flex justify-content-center"
                style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
              >
                {/* {`${stateCheck + " " + "Login"}`} */}
                {/* <span style={{ color: "red" }}> FERIL </span>&nbsp; Login */}
                <span style={{ color: "#1568ba" }}> AroNext </span>&nbsp; Login
              </h4>
              <div className="maincontent ">
                <h5 style={{ fontSize: "16px" }}>Don't have an account ?</h5>
                <Link to="/signup/Student" className="signup-link" state={a}>
                  Signup Now
                </Link>
              </div>
              <br />
              <div className="head">
                <div className="d-block justify-content-center">
                  <div className="d-block justify-content-center align-items-center">
                    <label className="mb-1">Email ID</label>
                    <input
                      className="input-fields"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="error-text-color">Email is required</p>
                    )}
                  </div>
                  <br />
                  <div className="d-block justify-content-center align-items-center">
                    <label className="mb-1">Password</label>
                    <br />
                    <input
                      className="inputt"
                      type={passwordShown ? "text" : "password"}
                      {...register("password", { required: true })}
                    />
                    <FontAwesomeIcon
                      icon={passwordShown ? faEye : faEyeSlash}
                      onClick={() => handlePasswordShow()}
                      // size="5px"
                      style={{
                        cursor: "pointer",
                        color: "black",
                        marginLeft: "-25px",
                      }}
                    />
                    {errors.password && (
                      <p className="error-text-color">password is required</p>
                    )}
                    <div className="mb-2 mt-1 d-flex justify-content-end">
                      <Link to="/forgetpassword" className="forgetpassword">
                        Forget Your Password?
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <Button
                    className="login-button"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <Divider className="divider-content">Or</Divider>
              {/* <Link
                to="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                className="google-content"
              >
                <img className="google-icon" src={google}></img>
                <span className="google-span">Sign in with Google</span>
              </Link> */}
              <center className="GoogleIcon_Center">
                <Link
                  to="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  className="google-content"
                >
                  <img className="google-icon" src={google}></img>
                  <span className="google-span">Sign in with Google</span>
                </Link>
              </center>
            </Card>
          </Col>
        </Row>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
