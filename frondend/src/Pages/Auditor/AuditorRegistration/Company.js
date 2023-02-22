import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Checkbox } from "antd";
import { Dropdown } from "primereact/dropdown";
import Api from "../../../Api.js";
import "../../../Components/Css/Students/Student.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PersonalInfo() {
  const [passwordShown, setpasswordShown] = useState(false);
  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({});

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const userId = localStorage.getItem("userI");

    await Api.get(`users/student_getone/${userId}`).then((res) => {
      setValue("companyname", res.data.data?.companyname);
      setValue("companytype", res.data.data?.companytype);
      setValue("Designation", res.data.data?.Designation);
      setValue("LLPA", res.data.data?.LLPA);
      setValue("email", res.data.data?.email);
      setValue("contactperson", res.data.data?.contactperson);
      setValue("phone", res.data.data?.phone);
      setValue("PANnumber", res.data.data?.PANnumber);
    });
  };

  const handleFormSubmit = async () => {
    const Details = {
      companyname: getValues().companyname,
      lastName: getValues().lastName,
      dob: getValues().dob,
      registerNumber: getValues().registerNumber,

      email: getValues().email,
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Company Info</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Company Name </label>
              <input
                className="input-field"
                {...register("companyname", { required: true })}
              />
              <br />
              {errors.companyname && (
                <span className="Stud-personal-error">
                  Company Name is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Company Type </label>
              <input
                className="input-field"
                {...register("companytype", { required: true })}
              />
              <br />
              {errors.companytype && (
                <span className="Stud-personal-error">
                  Company Type is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">LLPA </label>
              <br />
              <input
                className="input-field"
                {...register("LLPA", { required: true })}
              />
              <br />
              {errors.LLPA && (
                <span className="Stud-personal-error">LLPA is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Phone Number </label>
              <input
                className="input-field"
                {...register("phone", { required: true })}
              />
              <br />
              {errors.phone && (
                <span className="Stud-personal-error">
                  Phone Number is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Contact Person </label>
              <input
                className="input-field"
                {...register("contactperson", { required: true })}
              />
              <br />
              {errors.contactperson && (
                <span className="Stud-personal-error">
                  Contact Person is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Email </label>
              <input
                className="input-field"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="Stud-personal-error">email is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Designation</label>
              <br />
              <textarea
                rows="1"
                className="input-field"
                {...register("Designation", { required: true })}
              />
              <br />
              {errors.Designation && (
                <span className="Stud-personal-error">
                  Designation is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">PAN Number </label>
              <input
                className="input-field"
                {...register("PANnumber", { required: true })}
              />
              <br />
              {errors.PANnumber && (
                <span className="Stud-personal-error">
                  PAN Number is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">TAN Number </label>
              <input
                className="input-field"
                {...register("TANnumber", { required: true })}
              />
              <br />
              {errors.TANnumber && (
                <span className="Stud-personal-error">
                  TAN Number is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">GST Number </label>
              <input
                className="input-field"
                {...register("GSTnumber", { required: true })}
              />
              <br />
              {errors.GSTnumber && (
                <span className="Stud-personal-error">
                  GSTnumber is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">CI Number </label>
              <input
                className="input-field"
                {...register("CInumber", { required: true })}
              />
              <br />
              {errors.CInumber && (
                <span className="Stud-personal-error">
                  CI Number is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">User Name</label>
              <input
                className="input-field"
                {...register("Username", { required: true })}
              />
              <br />
              {errors.username && (
                <span className="Stud-personal-error">
                  User Name is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Password</label>

              <input
                className="input-field"
                type={passwordShown ? "text" : "password"}
                {...register("password", { required: true })}
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
                <span className="Stud-personal-error">
                  Password is required
                </span>
              )}
            </Col>
          </Row>
          <p>Which Services you want?</p>
          <Row>
            <Col md={3}>
              <Checkbox>GST</Checkbox>
            </Col>
            <Col md={3}>
              <Checkbox>PF</Checkbox>
            </Col>
            <Col md={3}>
              <Checkbox>ESI</Checkbox>
            </Col>
            <Col md={3}>
              <Checkbox>PI</Checkbox>
            </Col>
            <Col md={3}>
              <Checkbox>Form11</Checkbox>
            </Col>
            <Col md={3}>
              <Checkbox>Form3</Checkbox>
            </Col>

            <Checkbox>Payroll</Checkbox>
          </Row>

          <div className="submitbuttons p-2">
            <button
              className="button1 m-2 p-2"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="button2 m-2 p-2" type="reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
