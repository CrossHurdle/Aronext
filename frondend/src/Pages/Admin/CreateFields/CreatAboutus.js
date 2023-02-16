import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api.js";

export default function CreateAboutUs() {
  const [aboutList, setAboutList] = useState(null);

  const navigate = useNavigate();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm({});

  useEffect(() => {
    getAboutus();
    updateAboutus();
  }, []);

  const onSubmit = async (data, e) => {
   
    const Details = {
      title: getValues().title,
      description: getValues().description,
    };
    // await Api.post(`/aboutus/createaboutus`, Details).then((resp) => {
    //   console.log("resp.data", resp.data);
    // });
  };

  const getAboutus = async () => {
    await Api.get("aboutus/aboutus").then((res) => {
      console.log('res :>> ', res);
      setAboutList(res.data.data);
      setValue("title", res.data.data[0].title);
      setValue("description", res.data.data[0].description);
    });
   
  };

  const updateAboutus = async () => {
    await Api.put("aboutus/updateaboutus", ).then((res) => {
      console.log('jkjjj', res);
      setValue("title", res.data.title);
      setValue("description", res.data.description);
    });
  };


  return (
    <div className="createListForm p-4">
      <Toast ref={toast} />

      <Container>
        <h1 className="createListForm__title">About us</h1>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4">
              <Form.Label className="font-title">Title</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="name"
                  {...register("title", { required: true })}
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.title && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label className="font-title">Description</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="name"
                  as="textarea"
                  rows={6}
                  {...register("description", { required: true })}
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.description && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-end py-3">
              <button type="submit" className="me-4 button1" variant="primary">
                Submit
              </button>
              <button
                className="button2"
                type="reset"
                onClick={() => {
                  reset();
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
}
