import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Form, Input, Radio, Select, Checkbox, Row, Col } from "antd";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../../Components/Css/Professional/professionalstyle.scss";
import { Dropdown } from "primereact";

const { Title } = Typography;

export default function CourseInformation() {
  const [form] = Form.useForm();
  // const [value, setValue] = useState(1);
  const [textbox, setTextBox] = useState(null);
  const [courseField, setCourseField] = useState([]);
  const [addForm, setAddForm] = useState([1]);
  const courseAddHandler = () => {
    setCourseField((prev) => {});
  };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gendercheck: "",
    },
  });

  const check = () => {
    return (
      <Col sm={24} md={8} className=" p-2">
        <label>Fees Structure </label>
        <input
          className="input-field"
          {...register("feestructure", { required: true })}
        />

        <br />
        {errors.feestructure && (
          <span className="input-error">Fees Structure is required</span>
        )}
      </Col>
    );
  };

  const display = (e) => {
    e.target.checked === true ? setTextBox(check) : setTextBox(null);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onReset = () => {
    form.resetFields();
  };

  const API_URL = "http://localhost:8080";

  const Api = axios.create({
    baseURL: API_URL,
    // header,
  });

  const onFinish = (values) => {
    console.log(values);
    const check = Api.post(`/students/ourprofiles/courses`, values);
    console.log(check, 333333333333);
    check.then((resp) => {
      console.log("resp.values", resp.status);
    });
    form.resetFields();
  };
  const [mode, setMode] = useState("");

  const modeselect = [
    { label: "Online", value: "Online" },
    { label: "classroom", value: "classroom" },
  ];
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {addForm.map((item, index) => {
          return (
            <div key={index} className="personal-informations p-4">
              <div className="pages-title mb-3">Course Information</div>

              <Row md={16} className="mb-3">
                <Col sm={24} md={8} className=" p-2">
                  <label className="input-title">Course</label>
                  <br></br>
                  <input
                    className="input-field"
                    {...register("course", { required: true })}
                  />

                  <br />
                  {errors.course && (
                    <span className="input-error">Course is required</span>
                  )}
                </Col>

                <Col sm={24} md={8} className=" p-2">
                  <label className="input-title">Course Duration </label>
                  <input
                    className="input-field"
                    {...register("CourseDuration", { required: true })}
                  />

                  <br />
                  {errors.CourseDuration && (
                    <span className="input-error">
                      Course Duration is required
                    </span>
                  )}
                </Col>
                <Col sm={24} md={8} className=" p-2">
                  <label className="input-title">Fees </label>
                  <br />
                  <input
                    className="input-field"
                    {...register("Fees", { required: true })}
                  />

                  <br />
                  {errors.Fees && (
                    <span className="input-error">Fess is required</span>
                  )}
                </Col>
              </Row>
              <Row>
                <Col sm={24} md={8} className="p-2">
                  <label
                    style={{ marginBottom: "7px" }}
                    className="input-title"
                  >
                    Mode of Study
                  </label>
                  <div className="status p-1">
                    <Radio.Group
                      name="radiogroup"
                      {...register("modeOfStudy", { required: true })}
                    >
                      <Radio value={1}>Part Time</Radio>
                      <Radio value={2}>Full Time</Radio>
                    </Radio.Group>
                  </div>
                  {errors.modeOfStudy && (
                    <span className="input-error">
                      Mode of Study is required
                    </span>
                  )}
                </Col>
                <Col sm={24} md={8} className="p-2">
                  <label
                    style={{ marginBottom: "7px" }}
                    className="input-title"
                  >
                    mode
                  </label>
                  <div className="status p-1">
                    <Dropdown
                      filter
                      name="mode"
                      className="input-field"
                      value={mode}
                      options={modeselect}
                      {...register("mode", {
                        required: true,
                        onChange: (e) => {
                          setMode(e.target.value);
                        },
                      })}
                    />
                  </div>
                  {errors.mode && (
                    <span className="input-error">Mode is required</span>
                  )}
                </Col>
              </Row>
              <div
                className="sample"
                style={{
                  display: "block",

                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
          );
        })}
        <div style={{ marginRight: "14px" }} className="submitbuttons p-2">
          <button
            onClick={() => setAddForm([...addForm, 1])}
            className="button1 m-2 p-2"
          >
            Add Courses
          </button>
          {addForm.length > 1 && (
            <button
              onClick={() => {
                console.log("first");
                if (addForm.length > 1) {
                  var rmove = addForm.pop();
                  console.log("ss", addForm);
                  setAddForm([...addForm]);
                }
              }}
              className="button1 m-2 p-2"
            >
              Remove
            </button>
          )}
        </div>
        <div style={{ marginRight: "22px" }} className="submitbuttons p- 2">
          <button className="button1 m-2 p-2" type="submit">
            Submit
          </button>
          <button className="button2 m-2 p-2" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
