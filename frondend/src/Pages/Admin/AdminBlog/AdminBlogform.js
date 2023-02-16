import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Select } from "antd";
import "./AdminBlogstyle.scss";
import {  Form } from "react-bootstrap";
import Api from "../../../Api";

function AdminBlog() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [logo, setLogo] = useState();
  const SelectFile = async (event) => {
    const file = event.target.files[0];
    const type = file?.type?.split("/")[0];
    const base64 = await convertBase64(file);
    setLogo(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleBlogSubmit = async () => {
    const BlogDetails = {
      Title: getValues().blogtitle,
      Description: getValues().blogdescription,
      Image: getValues().image,
    };
    console.log("BlogDetails", BlogDetails);

    await Api.post(`blog/createBlog`, BlogDetails).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleBlogSubmit)}>
        <div className="Blog-form p-5 ms-5">
          <div className="pages-title mb-3">Blog</div>
          <Row className="mb-3">
            <Col md={24} lg={12} className="p-2">
              <label className="input-title pe-5">Blog Title</label>
              <br />
              <input
                style={{ width: "85%", outline: "none" }}
                className="Blog-input"
                {...register("blogtitle", { required: true })}
              />
              <br />
              {errors.blogtitle && (
                <span className="Blog-error">Blog Title required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={24} lg={12} className="p-2">
              <label className="input-title pe-5">Blog Description</label>
              <br />
              <textarea
                style={{ width: "85%", outline: "none" }}
                rows="1"
                className="Blog-textArea p-2"
                {...register("blogdescription", { required: true })}
              />
              <br />
              {errors.blogdescription && (
                <span className="Blog-error">Blog Description required</span>
              )}
            </Col>
          </Row>
          <Row>
          <Col sm={24} md={24} lg={12} className="p-2">
                <Form.Group controlId="Image" className="mb-3 py-2">
                  <Form.Label>Blog Image</Form.Label>
                  <Form.Control
                  style={{ width: "85%", outline: "none" }}
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    // {...register("image", { required: true })}
                    onChange={(e) => {
                      setLogo(e.target.files[0]);
                      SelectFile(e);
                    }}
                  />
                </Form.Group>
                {errors.image && (
                  <span className="text-danger">Company Logo is required</span>
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

export default AdminBlog;
