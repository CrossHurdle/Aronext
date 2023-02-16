import React, { useState } from "react";
import { Container, Row, Col, Button, Radio, Checkbox } from "antd";
import { useForm } from "react-hook-form";
import { MultiSelect } from "primereact/multiselect";
// import Api from '../../Api'
import "../../../Components/Css/Employer/ContractStaffing.scss";
import { Input, Select } from "antd";
import "antd/dist/antd.css";
import { DatePicker, Form } from "antd";

export default function StaffPost() {
  const selectTechnology = [
    { label: "React", value: "React" },
    { label: "Angular", value: "Angular" },
    { label: "Vue", value: "Vue" },
    { label: "Node", value: "Node" },
    { label: "PHP", value: "PHP" },
  ];
  const selectAdditionalTechnology = [
    { label: "React", value: "React" },
    { label: "Angular", value: "Angular" },
    { label: "Vue", value: "Vue" },
    { label: "Node", value: "Node" },
    { label: "PHP", value: "PHP" },
  ];

  const selectlocation = [
    {
      label: "Chennai",
      value: "Chennai",
    },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Coimbature", value: "Coimbature" },
  ];
  const selectworklocation = [
    { label: "Work from InHouse", value: "Work from InHouse" },
    { label: "Work from our office", value: "Work from our office" },
  ];
  const selectqualification = [
    { label: "Any", value: "Any" },
    { label: "BE", value: "BE" },
    { label: "ME", value: "ME" },
    { label: "MBA", value: "MBA" },
    { label: "M.SC", value: "M.SC" },
    { label: "B.SC", value: "B.SC" },
  ];
  const [qualification, setqualification] = useState();
  const [worklocation, setworklocation] = useState();
  const [location, setlocation] = useState();
  const { Option } = Select;
  const [disabled, setdisabled] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    form,
  } = useForm();
  const [technology, setTechnology] = useState();
  const [additionaltechnology, setAdditionalTechnology] = useState();
  const [brochure, setBrochure] = useState();
  const { RangePicker } = DatePicker;

  const handleFormSubmit = async () => {
    const StaffData = {
      technology: getValues().technology,
      additionalTechnology: getValues().additionalTechnology,
      Date: getValues().startdate,
      Date: getValues().enddate,
    };
  };
  const toogleDisable = ()=> {
    setdisabled(!disabled)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="personal-informations p-4">
          <div className="staff-title mb-5">Post your Vaccancy here</div>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={10} className="px-4">
              <label>Technology</label>
              <MultiSelect
                value={technology}
                options={selectTechnology}
                className="seminarSelect"
                {...register("technology", {
                  required: true,
                  onChange: (e) => {
                    setTechnology(e.target.value);
                  },
                })}
              ></MultiSelect>
              {errors.technology && (
                <p className="Stud-personal-error">Technology is required</p>
              )}
            </Col>
            <Col xs={24} sm={24} md={10} className="px-4">
            <label className="input-title">Years of Experience</label>
              <input
                className="seminarInput"
                type="text"
                {...register("years", { required: true })}
              />
              {errors.years && (
                <span className="Stud-personal-error">Years required</span>
              )}
            </Col>
          </Row>
      
          <Row className=" mt-5">
            <Col xs={24} sm={24} md={10} className=" px-4">
              <label className="input-title">Location </label>
              <MultiSelect
                value={location}
                options={selectlocation}
                className="seminarSelect"
                {...register("location", {
                  required: true,
                  onChange: (e) => {
                    setlocation(e.target.value);
                  },
                })}
              ></MultiSelect>
              {errors.location && (
                <span className="input-error">Location required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={10} className=" px-4">
              <label className="input-title">Work Place </label>
              <MultiSelect
                value={worklocation}
                options={selectworklocation}
                className="seminarSelect"
                {...register("worklocation", {
                  required: true,
                  onChange: (e) => {
                    setworklocation(e.target.value);
                  },
                })}
              ></MultiSelect>

              {errors.worklocation && (
                <span className="input-error">Work Place required</span>
              )}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={24} sm={24} md={10} className=" px-4">
              <label className="input-title">Qualification </label>
              <MultiSelect
                value={qualification}
                options={selectqualification}
                className="seminarSelect"
                {...register("Qualification", {
                  required: true,
                  onChange: (e) => {
                    setqualification(e.target.value);
                  },
                })}
              ></MultiSelect>

              {errors.Qualification && (
                <span className="input-error">Qualification required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={14} className="price_field px-4">
              <div>
              <label className="input-title">Price </label>
              <Input.Group compact>
                <Input
                disabled={disabled}
                  style={{
                    width: 100,
                    textAlign: "center",
                  }}
                  placeholder="Minimum"
                />
                {/* <Input
                  className="site-input-split"
                  style={{
                    width: 30,
                    borderLeft: 0,
                    borderRight: 0,
                    pointerEvents: "none",
                  }}
                  placeholder="~"
                  disabled
                /> */}
                 <p className="mt-2 mx-2">-</p>
                <Input
                disabled={disabled}
                  className="site-input-right"
                  style={{
                    width: 100,
                    textAlign: "center",
                  }}
                  placeholder="Maximum"
                />
              </Input.Group>
              </div>
              <label className="checkbox_input ms-3" >
              <Checkbox onClick={toogleDisable} className="checkbox_field ms-2">
                {!disabled ? "Price Disclose" : "Disclosed " }
            
              </Checkbox>
              </label>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={24} md={24} className="px-4">
              <label className="input-title">Description</label>
              <br />
              <textarea
                rows="3"
                cols="100"
                className="description"
                {...register("description", { required: true })}
              />
              <br />
              {errors.description && (
                <span className="input-error">Description required</span>
              )}
            </Col>
          </Row>
          <div className="submitbuttons px-4">
            <button className="button1 m-2" type="submit">
              Submit
            </button>
            <button className="button2 m-2" type="reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
