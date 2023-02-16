import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Form, Input, Radio, Select, Row, Col } from "antd";
import { useForm } from "react-hook-form";

import axios from "axios";

const { Title } = Typography;

export default function Index() {
  const [form] = Form.useForm();
  // const [value, setValue] = useState(1);

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
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [formLayout, setFormLayout] = useState("vertical");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const API_URL = "http://localhost:8080";

  const Api = axios.create({
    baseURL: API_URL,
    // header,
  });

  const onSubmit = (data) => {
    // reset();
    console.log(data);
    const check = Api.post(`/students/ourprofiles`, data);
    console.log(check, 333333333333);
    check.then((resp) => {
      console.log("resp.data", resp.data);
      if (resp.data.statusCode === 200) {
      }
    });
    form.resetFields();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Edit Profile</div>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Training Institute Name </label>
              <input
                className="input-field"
                {...register("schoolname", { required: true })}
              />
              <br />
              {errors.schoolname && (
                <span className="input-error">School Name is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Country</label>
              <br></br>
              <select
                className="input-field"
                {...register("country", { required: true })}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
              </select>
              <br />
              {errors.country && (
                <span className="input-error">Country is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">State</label>
              <br />
              <select
                className="input-field"
                {...register("state", { required: true })}
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Kerala">Kerala</option>
              </select>
              <br />
              {errors.state && (
                <span className="input-error">State is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">District</label>
              <br />
              <select
                className="input-field"
                {...register("district", { required: true })}
              >
                <option value="">Select District</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Chennai">Chennai</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="vellore">vellore</option>
              </select>
              <br />
              {errors.district && (
                <span className="input-error">District is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">City </label>
              <br />
              <input
                className="input-field"
                {...register("city", { required: true })}
              />

              <br />
              {errors.city && (
                <span className="input-error">City is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Address </label>
              <input
                className="input-field"
                {...register("address", { required: true })}
              />

              <br />
              {errors.address && (
                <span className="input-error">Address is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Pincode</label>
              <input
                className="input-field"
                {...register("pincode", { required: true })}
              />

              <br />
              {errors.pincode && (
                <span className="input-error">Pincode is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Person </label>
              <br />
              <input
                className="input-field"
                {...register("contactperson", { required: true })}
              />

              <br />
              {errors.contactperson && (
                <span className="input-error">
                  Contact Person name is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                className="input-field"
                {...register("contactnumber", { required: true })}
              />

              <br />
              {errors.contactnumber && (
                <span className="input-error">Contact Number is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Designation </label>
              <br />
              <input
                className="input-field"
                {...register("Designation", { required: true })}
              />

              <br />
              {errors.Designation && (
                <span className="input-error">Designation is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Department</label>
              <br />
              <input
                className="input-field"
                {...register("Department", { required: true })}
              />

              <br />
              {errors.Department && (
                <span className="input-error">Department is required</span>
              )}
            </Col>
            {/* </Row> */}
            {/* <Row className="mb-3"> */}
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Email Address </label>
              <br />
              <input
                className="input-field"
                {...register("emailAddress", { required: true })}
              />

              <br />
              {errors.emailAddress && (
                <span className="input-error">Email Address is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Website </label>
              <input
                className="input-field"
                {...register("Website", { required: true })}
              />

              {/* <br />
              {errors.Website && (
                <span className="input-error">Address is required</span>
              )} */}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Address </label>
              <textarea
                className="input-field"
                {...register("address", { required: true })}
              />

              <br />
              {errors.address && (
                <span className="input-error">Address is required</span>
              )}
            </Col>
          </Row>
          <div className="submitbuttons p-2">
            <button className="button1 m-2 p-2" type="submit">
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
