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
          <div className="pages-title mb-3">Accountant Info</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Accountant Name </label>
              <input
                className="input-field"
                {...register("Accountantname", { required: true })}
              />
              <br />
              {errors.accountantname && (
                <span className="Stud-personal-error">
                  Accountant Name is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Gender </label>
              <select
                className="input-field"
                {...register("gender", { required: true })}
              >
                <option value="select">select </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <br />
              {errors.gender && (
                <span className="input-error">Gender required</span>
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
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Work Experience </label>
              <select
                className="input-field"
                {...register("Workexperience", { required: true })}
              >
                <option value="select">select </option>
                <option value="Male">0-5</option>
                <option value="Female">5-10</option>
                <option value="Others">Others</option>
              </select>
              <br />
              {errors.Workexperience && (
                <span className="input-error">Work Experience required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Aadhar Number </label>
              <input
                className="input-field"
                {...register("Aadharnumber", { required: true })}
              />
              <br />
              {errors.aadharnumber && (
                <span className="Stud-personal-error">
                  Aadhar Number is required
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
              <label className="input-title">Address</label>
              <br />
              <input
                rows="1"
                className="input-field"
                {...register("Address", { required: true })}
              />
              <br />
              {errors.Address && (
                <span className="Stud-personal-error">Address is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Country</label>
              <select
                className="input-field"
                {...register("Country", { required: true })}
              >
                <option value="select">select </option>
              </select>
              <br />
              {errors.country && (
                <span className="input-error">Country required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">State </label>
              <br />
              <select
                className="input-field"
                {...register("State", { required: true })}
              >
                <option value="select">select </option>
              </select>
              <br />
              {errors.state && (
                <span className="input-error">State required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">District </label>
              <select
                className="input-field"
                {...register("District", { required: true })}
              >
                <option value="select">select </option>
              </select>
              <br />
              {errors.district && (
                <span className="input-error">District required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">City </label>
              <br />
              <select
                className="input-field"
                {...register("City", { required: true })}
              >
                <option value="select">select </option>
              </select>
              <br />
              {errors.city && (
                <span className="input-error">City required</span>
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
