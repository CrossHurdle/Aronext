import React, { useCallback, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Select } from "antd";
import { Form } from "react-bootstrap";
import "./CompanyListForm.css";
import Api from "../../../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanyListForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleCompanySubmit();
  };

  const [resume, setResume] = useState({});

  const [resres, setResres] = useState({
    status: null,
    message: null,
  });
  const navigate = useNavigate();

  const handleCompanySubmit = async () => {
    const CompanyDetails = {
      Title: getValues().Companytitle,
      Description: getValues().Companydescription,
    };
    const data = new FormData();
    data.append("resume", getValues().resume[0]);

    await Api.post("companylist/uploadImage", data).then(async (res) => {
      if (res.status == 201) {
        CompanyDetails.resume = res.data.path;
        await Api.post(`companylist/createCompanyList`, CompanyDetails)
          .then((res) => {
            setResres({
              status: res.data?.status,
              message: res.data?.message,
            });
            localStorage.setItem("userId", res.data.data._id);
            setTimeout(() => {
              navigate("/admin/Companylist");
            }, 700);
          })
          .catch((err) => {
            setResres({
              status: err?.response.data?.status,
              message: err?.response.data?.message,
            });
          });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleCompanySubmit)}>
        <div className="Company-form p-5 ms-5">
          <div className="pages-title mb-3">Company List</div>
          <Row className="mb-3">
            <Col md={24} lg={12} className="p-2">
              <label className="input-title pe-5">Company Title</label>
              <br />
              <input
                style={{ width: "85%", outline: "none" }}
                className="Company-input"
                {...register("Companytitle", { required: true })}
              />
              <br />
              {errors.Companytitle && (
                <span className="Company-error">Company Title required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={24} lg={12} className="p-2">
              <label className="input-title pe-5">Company Description</label>
              <br />
              <textarea
                style={{ width: "85%", outline: "none" }}
                rows="1"
                className="Company-textArea p-2"
                {...register("Companydescription", { required: true })}
              />
              <br />
              {errors.Companydescription && (
                <span className="Company-error">
                  Company Description required
                </span>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={12} className="p-2">
              <label className="input-title pe-5">Company Image </label>
              <Form.Group controlId="Resume" className="mb-3 py-2">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  accept=".png"
                  type="file"
                  {...register("resume")}
                  onChange={(e) => {
                    setResume(e.target.files[0]);
                    console.log("e.target.files[0]", e.target.files[0]);
                  }}
                />
              </Form.Group>
              {errors.resume && (
                <span className="text-danger">Company Logo is required</span>
              )}
            </Col>
          </Row>
          <div className="submitbuttons p-2">
            <button
              className="button1 m-2 p-2"
              type="submit"
              onClick={handleSubmit(onSubmit)}
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

export default CompanyListForm;
