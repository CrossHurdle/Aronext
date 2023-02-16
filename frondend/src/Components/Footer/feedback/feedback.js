import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "../../Css/Footer/feedback.scss";
import { useForm } from "react-hook-form";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import Layout from "../../Layout";

function Feedback() {
  const [areaConcern, setAreaConcern] = useState(null);
  const areaofconcern = [
    { name: "How to create the account", code: "NY" },
    { name: "how to create the resume", code: "RM" },
    { name: "How to block the companies", code: "LDN" },
    { name: "How to create cover letter", code: "IST" },
  ];
  const onCityChange = (e) => {
    setAreaConcern(e.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Layout>
        <div className="">
          <div className="feedback-main mt-5 mb-5">
            <Card className="feedback-card">
              <div>
                <h4 className="d-flex justify-content-center mt-4 mb-4">
                  Feedback
                </h4>
                <Row>
                  <Col className="feedback-column gx-5" sm={12}>
                    <div>
                      <label className="feedback-label1 mb-1">Your Name</label>
                      <br />
                      <input
                        className="feedback-input-filed1 mb-1"
                        placeholder="Enter Name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="error-text">*Name is required</p>
                      )}
                    </div>
                  </Col>
                  <Col className="feedback-column gx-5" sm={12}>
                    <div>
                      <label className="feedback-label1 mb-1 mt-3">
                        Email Address
                      </label>
                      <br />
                      <input
                        className="feedback-input-filed1 mb-1"
                        placeholder="Enter Email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p className="error-text">*email is required</p>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="feedback-column gx-5 " sm={12}>
                    <label className="feedback-label1 mb-1">
                      Area of Concern
                    </label>
                    <br />
                    <Dropdown
                      value={areaConcern}
                      options={areaofconcern}
                      onChange={onCityChange}
                      optionLabel="name"
                      placeholder="Select Any Avalible Option"
                      // {...register("area", { required: true })}
                      className="feedback-input-filed1 mb-1"
                    />
                    {errors.area && (
                      <p className="error-text">*area is required</p>
                    )}
                  </Col>
                  <Col className="feedback-column gx-5" sm={12}>
                    <label className="feedback-label1 mb-1 mt-3">Subject</label>
                    <br />
                    <input
                      className="feedback-input-filed1 mb-1"
                      placeholder="Enter Subject"
                      {...register("subject", { required: true })}
                    />
                    {errors.subject && (
                      <p className="error-text">*subject is required</p>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="feedback-column gx-5" sm={12}>
                    <label className="feedback-label1 mb-1">
                      Details of Concern
                    </label>
                    <br />
                    <textarea
                      className="feedback-input-fileds mb-1"
                      placeholder="Enter Details"
                      {...register("details", { required: true })}
                    />
                    {errors.details && (
                      <p className="error-text">
                        *details is concern is required
                      </p>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="feedback-column gx-5" sm={12}>
                    <Form.Group
                      controlId="Resume"
                      className="feedback-label mb-5 "
                    >
                      <Form.Label className="feedback-label">
                        Attach Screenshot
                      </Form.Label>
                      <Form.Control
                        accept=".doc, .docx, .pdf"
                        type="file"
                        className="feedback-input-filed-screenshot"
                        {...register("screenshot", { required: true })}
                        // onChange={(e) => {
                        //   setResume(e.target.files[0]);
                        //   console.log("e.target.files[0]", e.target.files[0]);
                        // }}
                      />
                    </Form.Group>
                    {errors.screenshot && (
                      <p className="error-texts">*screenshot is required</p>
                    )}
                  </Col>
                </Row>
                <div className="d-flex justify-content-center mb-4">
                  <Button
                    className="feedback-input-button"
                    onClick={handleSubmit()}
                  >
                    submit <BiRightArrowAlt />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Feedback;
