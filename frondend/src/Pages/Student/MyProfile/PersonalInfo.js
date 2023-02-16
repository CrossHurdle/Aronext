import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Radio } from "antd";
import { Dropdown } from "primereact/dropdown";
import Api from "../../../Api.js";
import "../../../Components/Css/Students/Student.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

function PersonalInfo() {
  const [countryList, setcountryList] = useState([]);
  const [country, setCountry] = useState();
  const [stateList, setstateList] = useState([]);
  const [state, setState] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [district, setDistrict] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({});

  useEffect(() => {
    getDetails();
    getCountry();
  }, []);

  const getCountry = async () => {
    await Api.get("country/getallcountry").then((res) => {
      setcountryList(res.data.data);
    });
  };

  const getState = (countryId) => {
    setCountry(countryId);
    Api.get(`state/stateById/${countryId}`).then((res) => {
      setstateList(res.data.data);
    });
  };

  const getDistrict = (stateId) => {
    setState(stateId);
    Api.get(`district/districtById/${stateId}`).then((res) => {
      setdistrictList(res.data.data);
    });
  };

  const getDetails = async () => {
    const userId = localStorage.getItem("userI");

    await Api.get(`users/student_getone/${userId}`).then((res) => {
      setValue("firstName", res.data.data?.firstName);
      setValue("lastName", res.data.data?.LastName);
      setValue("gender", res.data.data?.gender);
      setValue("country", res.data.data?.country);
      setValue("state", res.data.data?.state);
      setValue("Address", res.data.data?.address);
      setValue("meritalStatus", res.data.data?.maritalStatus);
      setValue("email", res.data.data?.email);
      setValue("dob", res.data.data?.dob);
      setValue("phone", res.data.data?.phone);
    });
  };

  const handleFormSubmit = async () => {
    const Details = {
      firstName: getValues().firstName,
      lastName: getValues().lastName,
      dob: getValues().dob,
      registerNumber: getValues().registerNumber,
      gender: getValues().gender,
      email: getValues().email,
      age: getValues().age,
      country: getValues().country,
      state: getValues().state,
      district: getValues().district,
      meritalStatus: getValues().meritalStatus,
      school: getValues().school,
      class: getValues().class,
    };
    await Api.post(`Student/createpersonal`, Details).then((resp) => {
      localStorage.setItem("personalId", resp.data.data._id);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Personal Info</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">First Name </label>
              <input
                className="input-field"
                {...register("firstName", { required: true })}
              />
              <br />
              {errors.firstName && (
                <span className="Stud-personal-error">
                  First Name is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Last Name </label>
              <input
                className="input-field"
                {...register("lastName", { required: true })}
              />
              <br />
              {errors.lastName && (
                <span className="Stud-personal-error">
                  Last Name is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">Date of Birth</label>
              <input
                className="input-field"
                type="date"
                {...register("dob", { required: true })}
              />
              <br />
              {errors.dob && (
                <span className="Stud-personal-error">
                  Date of Birth is required
                </span>
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
              <label className="input-title">Address</label>
              <br />
              <textarea
                rows="1"
                className="input-field"
                {...register("Address", { required: true })}
              />
              <br />
              {errors.Address && (
                <span className="Stud-personal-error">Address is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label>Country</label>
              <Dropdown
                className="input-field p-0"
                value={country}
                options={countryList}
                {...register("country", { required: true })}
                optionLabel={"countryName"}
                optionValue={"_id"}
                onChange={(e) => getState(e.value)}
                placeholder="Select a Country"
              />
              <br />
              {errors.country && (
                <span className="Stud-personal-error">Country is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label>State</label>
              <br />
              <Dropdown
                className="input-field p-0"
                value={state}
                options={stateList}
                {...register("state", { required: true })}
                optionLabel={"stateName"}
                optionValue={"_id"}
                onChange={(e) => getDistrict(e.value)}
                placeholder="Select a State"
              />
              <br />
              {errors.state && (
                <span className="Stud-personal-error">State is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label>District</label>

              <Dropdown
                className="input-field p-0"
                value={district}
                options={districtList}
                {...register("district", { required: true })}
                optionLabel={"districtName"}
                optionValue={"_id"}
                onChange={(e) => setDistrict(e.value)}
                placeholder="Select a District"
              />
              <br />
              {errors.district && (
                <span className="Stud-personal-error">
                  District is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Marital status </label>
              <select
                className="input-field"
                {...register("meritalStatus", { required: true })}
              >
                <option value="Select">select </option>
                <option value="single">single</option>
                <option value="Married">Married</option>
                <option value="divorced">divorced</option>
              </select>
              <br />
              {errors.meritalStatus && (
                <span className="input-error">status required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label>School </label>
              <br />
              <input
                className="input-field"
                {...register("school", { required: true })}
              />
              <br />
              {errors.school && (
                <span className="Stud-personal-error">School is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label>Class </label>
              <br />
              <input
                className="input-field"
                {...register("class", { required: true })}
              />
              <br />
              {errors.class && (
                <span className="Stud-personal-error">Class is required</span>
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
