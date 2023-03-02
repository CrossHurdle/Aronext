import { Button, InputText } from "primereact";
import React, { useEffect, useState } from "react";
import { Container, Card, ToastContainer, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Components/Css/adminlogin.scss";
import { useForm } from "react-hook-form";
import Api from "../../Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import HeaderNavbar from "../../Components/HeaderNavbar";

function AdminLogin() {
  const [show, setShow] = useState(false);

  const [passwordShown, setpasswordShown] = useState(false);

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

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

  const navigate = useNavigate();
  useEffect(() => {
    datalist();
  }, []);

  const datalist = () => {};

  const handleFormSubmit = async () => {
    const userDetails = {
      role: "admin",
      email: getValues().email,
      password: getValues().password,
    };
    await Api.post(`admin/admin_login`, userDetails)
      .then((response) => {
        setResres({
          status: response.data?.status,
          message: response.data?.message,
        });
        // if (response.data.token) {
        //   const token = response.data.token;
        //   const name = response.data.userName;

        //   localStorage.setItem("USER_AUTH_STATE", true);
        //   localStorage.setItem("Role", "admin");
        //   localStorage.setItem("admin-token", token);
        //   localStorage.setItem("name", name);

        //   navigate("/admin");
        //   sessionStorage.setItem("USER_AUTH_STATE", true);
        // }
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
      <HeaderNavbar />
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
      <div className="admin-main">
        <center>
          <Card className="admin-login-card">
            <center>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                className="admin-png"
              ></img>
            </center>
            <h4>Admin Login</h4>
            <div>
              <label className="admin_label">Email ID</label>
              <br />
              <InputText
                className="admin_input mt-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="forgot-error-text">email is required</p>
              )}
              <br />
              <label className="admin_label ">Password</label>
              <br />
              <InputText
                className="admin_input mt-2"
                type={passwordShown ? "text" : "password"}
                {...register("password", { required: true })}
              />{" "}
              <FontAwesomeIcon
                icon={passwordShown ? faEye : faEyeSlash}
                onClick={() => handlePasswordShow()}
                // size={"5px"}
                style={{
                  cursor: "pointer",
                  color: "black",
                  marginLeft: "-25px",
                }}
              />
              {errors.password && (
                <p className="forgot-error-text">password is required</p>
              )}
              <Button
                className="admin_button mt-5 justify-content-center"
                onClick={handleSubmit(onSubmit)}
              >
                Login
              </Button>
            </div>
          </Card>
        </center>
      </div>
    </div>
  );
}

export default AdminLogin;
