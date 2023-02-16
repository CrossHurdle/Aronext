import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../../Components/Css/login.css";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api";

function Traininglogin() {
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

  const handleFormSubmit = async () => {
    const userDetails = {
      role: "institute",
      email: getValues().EmailId,
      password: getValues().password,
    };

    await Api.post(`instituteUser/institute_login`, userDetails)
      .then((response) => {
        console.log("response 111", response);
        setResres({
          status: response.data?.status,
          message: response.data?.message,
        });

        if (response.data.token) {
          const role = response.data.data.role;
          const token = response.data.token;
          const name = response.data.userName;
          console.log("name", name);

          localStorage.setItem("USER_AUTH_STATE", true);
          localStorage.setItem("role", role);
          localStorage.setItem("institute-token", token);
          localStorage.setItem("name", name);
          navigate("/Institute");
          sessionStorage.setItem("USER_AUTH_STATE", true);
        }
      })
      .catch((err) => {
        setResres({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };

  return (
    <form>
      <ToastContainer
        className="bg-light"
        position="top-end"
        style={{ zIndex: 100000 }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
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
      <div className="head">
        <div className="d-block justify-content-center">
          <div className="d-block justify-content-center align-items-center">
            <label className="mb-1">Email ID</label>
            <input
              className="input-fields"
              {...register("EmailId", { required: true })}
            />
            {errors.EmailId && (
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
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Traininglogin;
