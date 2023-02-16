import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useForm } from "react-hook-form";
import Api from "../../../Api.js";

function InternshipRequest() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleFormSubmit();
    reset();
    //API
  };
  const handleFormSubmit = async () => {
    const Details = {
      name: getValues().name,
      expectedField: getValues().expectedField,
      intershipDuration: getValues().internshipDuration,
      describtion: getValues().description,
      ModeOfIntern: getValues().modeOfStudy,
      CourseDuration: getValues().courseDuration,
    };
    await Api.post(`student/createintership`, Details).then((resp) => {
      alert("created successfully");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Internship Request</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Name</label>
              <br />
              <textarea
                className="input-field"
                {...register("name", { required: true })}
              />

              <br />
              {errors.name && (
                <span className="input-error">name is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Expected Field</label>
              <br />
              <input
                className="input-field"
                {...register("expectedField", { required: true })}
              />

              <br />
              {errors.category && (
                <span className="input-error">Category is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Internship Duration</label>
              <br />
              <input
                className="input-field"
                {...register("internshipDuration", { required: true })}
              />

              <br />
              {errors.internshipDuration && (
                <span className="input-error">
                  internship Duration is required
                </span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Description</label>
              <br />
              <textarea
                className="input-field"
                {...register("description", { required: true })}
              />

              <br />
              {errors.description && (
                <span className="input-error">Description is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Mode of Internship</label>
              <br />
              <select
                className="input-field"
                {...register("modeOfStudy", { required: true })}
              >
                <option value="">Select study mode</option>
                <option value="fullTime">Online Mode</option>
                <option value="partTime">Direct</option>
                {/* <option value="longDistance">Long-distance</option> */}
              </select>

              <br />
              {errors.modeOfStudy && (
                <span className="input-error">Mode of Study is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Course Duration</label>
              <br />
              <input
                className="input-field"
                type="string"
                {...register("courseDuration", { required: true })}
              />

              <br />
              {errors.courseDuration && (
                <span className="input-error">
                  Duration of course is required
                </span>
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

export default InternshipRequest;
