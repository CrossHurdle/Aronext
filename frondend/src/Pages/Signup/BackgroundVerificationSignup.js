import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/Css/signup.css";
import { Button, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Api from "../../Api";
import { Dropdown } from "primereact";
import { useNavigate } from "react-router-dom";
import { Radio, Space } from "antd";

function BackroundVerificationSignup() {
  const [step, setstep] = useState("first");
  const [details, setDetails] = useState("");
  const [show, setShow] = useState(false);
  const [countryList, setcountryList] = useState([]);
  const [countryValue, setCountryValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [districtValue, setDistrictValue] = useState();
  const [cityvalue, setCityValue] = useState();
  const [passwordShown, setpasswordShown] = useState(false);
  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const Cityselect = [
    { label: "Theni", value: "Theni" },
    { label: "Chennai", value: "Chennai" },
    { label: "Tiruvannamalai", value: "Tiruvannamalai" },
  ];
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setstep("second");
  };

  const onSubmit1 = (data) => {
    handleFormSubmit();
    setShow(true);
  };

  const navigate = useNavigate();
  const [resres, setResres] = useState({
    status: null,
    message: null,
  });
  useEffect(() => {
    getCountry();
    addDataList();
  }, []);

  const addDataList = () => {
    Api.get(`background/background_get`).then((resp) => {
      setDetails(resp.data.data);
    });
  };

  const handleFormSubmit = async () => {
    const userDetails = {
      role: "BgvHome",
      companyName: getValues().companyName,
      type: getValues().type,
      website: getValues().website,
      email: getValues().mail,
      phone: getValues().phone,
      password: getValues().password,
      country: getValues().country,
      state: getValues().State,
      district: getValues().district,
      city: getValues().City,
      address: getValues().address,
      pincode: getValues().pincode,
    };
    await Api.post(`background/background_create`, userDetails)
      .then((res) => {
        setResres({
          status: res.data?.status,
          message: res.data?.message,
        });
        localStorage.setItem("userId", res.data.data._id);
        setTimeout(() => {
          navigate("/");
        }, 10000);
      })
      .catch((err) => {
        setResres({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };
  const [role, setrole] = useState("Company");
  const onChange = (e) => {
    setrole(e.target.value);
  };

  const getCountry = async () => {
    await Api.get("country/getallcountry").then((res) => {
      setcountryList(res.data.data);
    });
  };

  const getState = (country_id) => {
    setCountryValue(country_id);
    Api.get(`state/stateById/${country_id}`).then((res) => {
      setstateList(res.data.data);
    });
  };

  const getDistrict = (state_id) => {
    setStateValue(state_id);
    Api.get(`district/districtById/${state_id}`).then((res) => {
      setdistrictList(res.data.data);
    });
  };
  return (
    <div>
      <div>
        <div className="px-5">
          <ToastContainer position="top-end">
            <Toast onClose={() => setShow(false)} show={show} autoClose={15000}>
              <Toast.Header>
                <strong className="me-auto text-success">Success</strong>
              </Toast.Header>
              <Toast.Body className="toast-message">
                Welcome to JOBMARS Family. <br />
                your profile will be activated within 24 hours. please check
                your email.
              </Toast.Body>
            </Toast>
          </ToastContainer>
          <h4>
            {step === "first" ? "Details" : step === "second" && "Address"}
          </h4>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="head">
                <div className="d-block justify-content-center">
                  {step === "first" ? (
                    <div>
                      <form>
                        <div className="head">
                          <div className="d-block justify-content-center">
                            <Row className="mt-3 mb-2">
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                md={6}
                              >
                                <label className="mb-1">Type</label>
                                <br />
                                <div onChange={onChange} value={role}>
                                  <label htmlFor="company">
                                    <input
                                      {...register("type", {
                                        required: true,
                                      })}
                                      type="radio"
                                      value="company"
                                      id="company"
                                      className="login-options"
                                    />
                                    &nbsp; Company
                                  </label>
                                  <label htmlFor="Inditual">
                                    <input
                                      {...register("type", {
                                        required: true,
                                      })}
                                      style={{ marginLeft: "20px" }}
                                      type="radio"
                                      value="Inditual"
                                      id="Inditual"
                                    />
                                    &nbsp;Inditual
                                  </label>
                                </div>
                                {errors.type?.type === "required" && (
                                  <p className="error-text-color">
                                    College Type is required
                                  </p>
                                )}
                              </Col>
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                md={6}
                              >
                                <label className="mb-1">{role} Name</label>
                                <input
                                  className="input"
                                  {...register("companyName", {
                                    required: true,
                                    pattern: /^[A-Za-z]+$/i,
                                  })}
                                />
                                {errors.companyName?.type === "required" && (
                                  <p className="error-text-color">
                                    Company Name is required
                                  </p>
                                )}
                                {errors?.companyName?.type === "pattern" && (
                                  <p className="error-text-color">
                                    characters only
                                  </p>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-3 mb-2">
                              <Col
                                className="d-block justify-content-center align-items-center  mt-3 "
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Companys Website</label>
                                <input
                                  className="input"
                                  {...register("website", {
                                    required: true,
                                  })}
                                />
                                {errors.website && (
                                  <p className="error-text-color">
                                    College Website is required
                                  </p>
                                )}
                              </Col>

                              <Col
                                className="d-block justify-content-center align-items-center  mt-3"
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Phone Number</label>
                                <input
                                  className="input"
                                  type="number"
                                  {...register("phone", {
                                    minLength: 10,
                                    maxLength: 10,
                                    maxLength: 10,
                                    required: true,
                                  })}
                                />
                                {errors.phone?.type === "required" && (
                                  <p className="error-text-color">
                                    Phone Number is required
                                  </p>
                                )}
                                {errors.phone?.type === "minLength" && (
                                  <p className="error-text-color">
                                    minimum 10 number is required
                                  </p>
                                )}
                                {errors.phone?.type === "maxLength" && (
                                  <p className="error-text-color">
                                    maximum 10 number is required
                                  </p>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-3 mb-2">
                              <Col
                                className="d-block justify-content-center align-items-center  mt-3 "
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Email ID</label>
                                <input
                                  className="input"
                                  {...register("mail", {
                                    required: true,
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "invalid email address",
                                    },
                                  })}
                                />
                                {errors.mail && (
                                  <p className="error-text-color">
                                    Email is required
                                  </p>
                                )}
                              </Col>
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Password</label>
                                <div>
                                  <input
                                    className="input1"
                                    type={passwordShown ? "text" : "password"}
                                    {...register("password", {
                                      required: true,
                                    })}
                                  />
                                  <FontAwesomeIcon
                                    icon={passwordShown ? faEye : faEyeSlash}
                                    onClick={() => handlePasswordShow()}
                                    style={{
                                      cursor: "pointer",
                                      color: "black",
                                      marginLeft: "82%",
                                      position: "relative",
                                      top: "-24px",
                                    }}
                                  />
                                  {errors.password && (
                                    <p
                                      className="error-text-color"
                                      style={{ marginTop: "-23px" }}
                                    >
                                      password is required
                                    </p>
                                  )}
                                </div>
                              </Col>
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Confirm Password</label>
                                <div>
                                  <input
                                    className="input1"
                                    // type="password"
                                    type={passwordShown ? "text" : "password"}
                                    {...register("confirmPassword", {
                                      required: true,
                                    })}
                                  />
                                  <FontAwesomeIcon
                                    icon={passwordShown ? faEye : faEyeSlash}
                                    onClick={() => handlePasswordShow()}
                                    style={{
                                      cursor: "pointer",
                                      color: "black",
                                      marginLeft: "82%",
                                      position: "relative",
                                      top: "-24px",
                                    }}
                                  />

                                  {errors.confirmPassword && (
                                    <p
                                      className="error-text-color"
                                      style={{ marginTop: "-23px" }}
                                    >
                                      Confirm password is required
                                    </p>
                                  )}
                                </div>
                              </Col>
                            </Row>
                            <div className="d-flex justify-content-end mt-2">
                              <Button
                                className="login-button"
                                variant="primary"
                                onClick={handleSubmit(onSubmit)}
                              >
                                Next
                              </Button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="head">
                          <div className="d-block justify-content-center">
                            <Row className="mt-3 mb-2">
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                sm={12}
                                md={6}
                              >
                                <label className="mb-1">Country</label>
                                <Dropdown
                                  filter
                                  className="input1"
                                  value={countryValue}
                                  options={countryList}
                                  {...register("country", { required: true })}
                                  optionLabel={"name"}
                                  optionValue={"id"}
                                  onChange={(e) => getState(e.value)}
                                />
                                {errors.country && (
                                  <p className="error-text-color">
                                    country is required
                                  </p>
                                )}
                              </Col>
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                sm={12}
                                md={6}
                              >
                                <label className="mb-1">State</label>&nbsp;
                                <Dropdown
                                  filter
                                  className="input1"
                                  value={stateValue}
                                  options={stateList}
                                  {...register("State", { required: true })}
                                  optionLabel={"name"}
                                  optionValue={"id"}
                                  onChange={(e) => getDistrict(e.value)}
                                />
                                {errors.State && (
                                  <p className="error-text-color">
                                    State is required
                                  </p>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-3 mb-2">
                              <Col
                                className="d-block justify-content-center align-items-center mt-3"
                                sm={12}
                                md={6}
                              >
                                <label className="mb-1">District</label>
                                <Dropdown
                                  filter
                                  className="input1"
                                  value={districtValue}
                                  options={districtList}
                                  {...register("district", { required: true })}
                                  optionLabel={"name"}
                                  optionValue={"id"}
                                  onChange={(e) => setDistrictValue(e.value)}
                                />

                                {errors.district && (
                                  <p className="error-text-color">
                                    District is required
                                  </p>
                                )}
                              </Col>

                              <Col
                                className="d-block justify-content-center align-items-center  mt-3 form-group"
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">City</label>
                                <Dropdown
                                  filter
                                  className="input1"
                                  value={cityvalue}
                                  options={Cityselect}
                                  {...register("City", { required: true })}
                                  // optionLabel={"CityName"}
                                  // optionValue={"_id"}
                                  onChange={(e) => setCityValue(e.value)}
                                />
                                {errors.City && (
                                  <p className="error-text-color">
                                    City is required
                                  </p>
                                )}
                              </Col>
                            </Row>
                            <Row>
                              <Col
                                className="d-block justify-content-center align-items-center mt-3 "
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Address</label>
                                <input
                                  className="input"
                                  {...register("address", { required: true })}
                                />
                                {errors.address && (
                                  <p className="error-text-color">
                                    Address is required
                                  </p>
                                )}
                              </Col>
                              <Col
                                className="d-block justify-content-center align-items-center mt-3 "
                                md={6}
                                sm={12}
                              >
                                <label className="mb-1">Pincode</label>
                                <input
                                  type="number"
                                  className="input"
                                  {...register("pincode", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 6,
                                  })}
                                />
                                {errors.pincode?.type === "required" && (
                                  <p className="error-text-color">
                                    Pincode is required
                                  </p>
                                )}
                                {errors.pincode?.type === "minLength" && (
                                  <p className="error-text-color">
                                    6 digit only
                                  </p>
                                )}{" "}
                                {errors.pincode?.type === "maxLength" && (
                                  <p className="error-text-color">
                                    6 digit only
                                  </p>
                                )}
                              </Col>
                            </Row>
                          </div>
                          <br />
                          <div className="d-flex justify-content-between mt-3 mb-2">
                            <Button
                              className="login-button"
                              variant="secondary"
                              onClick={() => setstep("first")}
                            >
                              Back
                            </Button>
                            <Button
                              className="login-button"
                              variant="primary"
                              onClick={handleSubmit(onSubmit1)}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackroundVerificationSignup;
