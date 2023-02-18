import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Radio } from "antd";
import { Dropdown } from "primereact/dropdown";
import Api from "../../../Api.js";
import "../../../Components/Css/Students/Student.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { DatePicker, Space } from "antd";

function PersonalInfo() {
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
  const { RangePicker } = DatePicker;

  const getDetails = async () => {
    const userId = localStorage.getItem("userI");

    await Api.get(`users/student_getone/${userId}`).then((res) => {
      setValue("firstName", res.data.data?.firstName);
      setValue("lastName", res.data.data?.LastName);
      setValue("gender", res.data.data?.gender);
    });
  };

  const handleFormSubmit = async () => {
    const Details = {
      firstName: getValues().firstName,
      lastName: getValues().lastName,
      gender: getValues().gender,
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

          {/* <Row className="mb-3"> */}
          <Row>
            <Col md={12} className="Stud-personal-col p-2 mt-4">
              <label className="input-title">Complaince Name </label>
              <input
                className="input-field"
                {...register("complaincename", { required: true })}
              />
              <br />
              {errors.complaincename && (
                <span className="Stud-personal-error">
                  Complaince Name is required
                </span>
              )}
            </Col>
          </Row>
          <Row>
            <Col md={12} className="Stud-personal-col p-2  mt-4">
              <label className="input-title">Description</label>
              <input
                className="input-field"
                {...register("description", { required: true })}
              />
              <br />
              {errors.description && (
                <span className="Stud-personal-error">
                  Description is required
                </span>
              )}
            </Col>
          </Row>
          <Row>
            <Col md={12} className="p-2 mt-4">
              <label className="input-title">Filing Period </label>
              <br />
              <select
                className="input-field"
                {...register("filingperiod", { required: true })}
              >
                <option value="select">select </option>
                <option value="Male">yearly</option>
                <option value="Female">halfly</option>
                <option value="Others">quaterly</option>
              </select>
              <br />
              {errors.filingperiod && (
                <span className="input-error">Filing Period required</span>
              )}
            </Col>
            <Col md={12} className="p-2 mt-5">
              <label className="input-title"> </label>
              <RangePicker picker="month" />
            </Col>
          </Row>
          {/* </Row> */}
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
