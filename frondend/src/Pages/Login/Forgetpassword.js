import { Button, InputText } from "primereact";
import React, { useEffect, useRef, useState } from "react";
import { Container, Card, ToastContainer, Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../Components/Css/login.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import Api from "../../Api";
import HeaderNavbar from "../../Components/HeaderNavbar";
function Forgetpassword(props) {
  const [step, setstep] = useState("first");
  const [show, setShow] = useState(false);
  const [resres, setResres] = useState({
    status: null,
    message: null,
  });
  const [OTP, setOTP] = useState("");
  const id = localStorage.getItem("id");
  function handleChange(OTP) {
    setOTP(OTP);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    validate,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit();
    console.log("formState", getValues());
  };
  const onSubmit1 = (data) => {
    checkCode();
  };
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit2 = (data, e) => {
    console.log(data);
    updatePassword();
    e.preventDefault();
  };
  const navigate = useNavigate();
  useEffect(() => {
    datalist();
  }, []);

  const datalist = () => {};

  const handleFormSubmit = async () => {
    const userDetails = {
      email: getValues().email,
    };
    await Api.post(`signup/forget/password`, userDetails).then((res) => {
      console.log("resp", res.status);
      if (res.status == 200) {
        localStorage.setItem("id", res.data.id);
        datalist();
      }
      setstep("second");
    });
  };

  const checkCode = async () => {
    const userDetails = {
      email: getValues().email,
      code: OTP,
    };
    await Api.post(`signup/verify/password`, userDetails)
      .then((res) => {
        console.log("resp", res);
        if (res.data.statuscode === 200) {
        }
        setstep("third");
      })
      .catch((err) => console.log("error", err));
  };

  const updatePassword = async () => {
    const userDetails = {
      email: getValues().email,
      password: getValues().password,
    };
    await Api.put(`signup/update/password/${id}`, { userDetails })
      .then((res) => {
        setResres({
          status: res.data?.status,
          message: res.data?.message,
        });

        setTimeout(() => {
          navigate("/login");
        }, 700);
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
      <HeaderNavbar />
      <Container className="forget_main">
        <center>
          <Card className="forget_password ">
            <img src="https://www.reolli.com/assets/images/reset-password.png"></img>
            <h4>Forget Password?</h4>
            <p>No worries, we'll send you reset instructions.</p>
            {step === "first" ? (
              <div>
                <label className="forget_label">Email ID</label>
                <br />
                <InputText
                  className="forget_input mt-2"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="forgot-error-text">email is required</p>
                )}
                <br />
                <p className="mt-4">Enter your Email to reset your password.</p>
                <Button
                  className="forget_button mt-4 justify-content-center"
                  onClick={handleSubmit(onSubmit)}
                >
                  Reset Password
                </Button>
              </div>
            ) : step === "second" ? (
              <div>
                <label className="forget_label">Enter OTP</label>
                <div className="otp">
                  <OTPInput
                    onChange={handleChange}
                    value={OTP}
                    inputStyle="inputStyle"
                    numInputs={4}
                    separator={<span> </span>}
                  />
                </div>
                <p className="resend-otp" onClick={handleSubmit(onSubmit1)}>
                  Resend OTP
                </p>
                <Button
                  className="forget_button mt-3 justify-content-center"
                  onClick={handleSubmit(onSubmit1)}
                >
                  Submit
                </Button>
              </div>
            ) : (
              <div>
                <label className="forget_label">New Passowrd</label>
                <br />
                <InputText
                  className="forget_input mt-2"
                  name="password"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="forgot-error-text">password is required</p>
                )}
                <br />
                <br />
                <label className="forget_label">Confirm Passowrd</label>
                <br />
                <InputText
                  className="forget_input mt-2"
                  name="confirm"
                  {...register("confirmpassword", { required: true })}
                  id="confirmPassword"
                  type="password"
                />
                {watch("confirmpassword") !== watch("password") &&
                getValues("confirmpassword") ? (
                  <p>password not match</p>
                ) : null}
                <Button
                  className="forget_button mt-4 justify-content-center"
                  type="submit"
                  onClick={handleSubmit(onSubmit2)}
                >
                  Set Password
                </Button>
              </div>
            )}
            <Link to="/login" className="forget_link mt-3">
              <AiOutlineDoubleLeft /> back to login
            </Link>
          </Card>
        </center>
      </Container>
    </div>
  );
}

export default Forgetpassword;
