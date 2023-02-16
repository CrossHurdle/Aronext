import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Divider } from "antd";
import "../../Css/login.css";
import { Link } from "react-router-dom";
import StudentLogin from "../../../Pages/Login/StudentLogin";
import google from "../../../assets/google.png";

const Login = () => {
  const [role, setrole] = useState("Student");

  return (
    <div>
      <div>
        <div className="d-flex ">
          <div className="">
            <Col className="mt-1">
              <div
                className="trust-contents py-5 px-5"
                style={{ height: "450px" }}
              >
                {role === "Student" ? <StudentLogin /> : null}
                <Divider className="divider-contents">Or</Divider>

                <Link
                  to="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  className="google-contents-div"
                >
                  <img
                    className="google-icons"
                    src={google}
                    alt="google-icon"
                  ></img>
                  <span className="google-spans">Sign in with Google</span>
                </Link>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
