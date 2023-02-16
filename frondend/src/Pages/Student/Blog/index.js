import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col } from "antd";
import '../../../Components/Css/Students/Student.scss';

function Blog() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-5">
      <div className="pages-title mb-3">Blog</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <Row className="mb-3">
            <Col sm={24} md={12} className="Stud-blog-col p-2">
              <label>Domain</label>
              <br />
              <select
                className="Stud-blog-input"
                {...register("domain", { required: true })}
              >
                <option value="">Select Domain</option>
                <option value="a">It</option>
                <option value="b">Construction</option>
                <option value="c">Hr</option>
                <option value="d">Mech</option>
              </select>
              <br />
              {errors.domain && (
                <span className="Stud-blog-error">Domain is required</span>
              )}
            </Col>
            <Col sm={24} md={12} className="Stud-blog-col p-2">
              <label>Sub-Domain</label>
              <select
                className="Stud-blog-input"
                {...register("subdomain", { required: true })}
              >
                <option value="">Select Sub-Domain</option>
                <option value="a">Software</option>
                <option value="b">Hardware</option>
                <option value="c">Engineer</option>
                <option value="d">Finance</option>
              </select>
              <br />
              {errors.subdomain && (
                <span className="Stud-blog-error">Sub-Domain is required</span>
              )}
            </Col>
            <Col sm={24} md={12} className="Stud-blog-col p-2">
              <label>Description</label>
              <textarea rows="3" className="Stud-blog-input" />
            </Col>
            <Col sm={24} md={12} className="Stud-blog-col p-2">
              <label>Upload Image</label>
              <input type="file" className="Stud-blog-input" />
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

export default Blog;
