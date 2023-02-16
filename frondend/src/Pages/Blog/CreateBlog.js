import React, { useState, useEffect, useCallback } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../../Components/Css/Blogspage.scss";
import axios from "axios";
import Api from "../../Api";
import Title from "antd/lib/skeleton/Title";
import { Tag } from "antd";
import { Formik, div } from "formik";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../Components/InputField";
import PrimeDropdown from "./BlogDropdown";

function CreateBlog() {
  const questionsvalue = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  };
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setimage] = useState();
  const [category, setCategory] = useState("");
  const [questions, setquestions] = useState([questionsvalue]);

  const formData = new FormData();

  // const onFileChange = (e) => {
  //   console.log(e.target.files[0]);
  //   if (e.target && e.target.files[0]) {
  //     formData.append("file", e.target.files[0]);
  //   }
  // };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      tag: "",
      description: "",
      category: "",
      questions: questions,
      image: image,
      // resolver: yupResolver(BlogDetails),
    },
  });

  const handleAddQuestion = () => {
    setquestions((prev) => [...prev, questionsvalue]);
  };

  const handleoption = useCallback((index, key, value) => {
    setquestions((prev) => {
      const newValue = [...prev];
      newValue[index][key] = value;
      return newValue;
    });
  }, []);

  const handleRemove = useCallback((idx, setValue) => {
    setquestions((prev) => {
      const newOne = prev.filter((item, index) => index !== idx);
      setValue("questions", [...newOne]);
      return [...newOne];
    });
  }, []);

  const commonProps = {
    register,
    errors,
    setValue,
  };

  const onSubmit = (e) => {
    blogCreate(getFormData(e, image));
  };

  //   const json = JSON.stringify(questions);
  // const blob = new Blob([json], {
  //   type: 'application/json'
  // });

  const blogCreate = async (DATA) => {
    // console.log('DATA :>> ', DATA);
    // const aa = JSON.stringify(DATA)
    // Api.post("student/blog/upload-files", DATA).then((res) => {
    // console.log("hhhhh", res.data);
    // axios
    //   .post("http://localhost:8080/student/blog/upload-files", DATA, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((response) => {
    //     console.log("response :>> ", response);
    //   });
        axios({
      method: "post",
      url: "http://localhost:8080/student/blog/upload-files",
      data: DATA,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      })
    // });
  };

  const getFormData = (data, image) => {
    const formData = new FormData();
    console.log("aa1234 :>> ", JSON.stringify(data.questions));

    formData.append("title", data.title);
    formData.append("tag", data.tag);
    formData.append("description", data.description);
    formData.append("questions", JSON.stringify(data.questions));
    formData.append("category", data.category);
    formData.append("image", image);

    return formData;
  };

  return (
    <div className="blogform">
      <div>
        <div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="container forncontent  p-3"
          >
            <h3 className="pagetitle mt-2">Create Blogs</h3>
            <InputField
              Name="Title"
              keyName="title"
              onChange={() => {}}
              {...commonProps}
            />
            <Row>
              <Col lg={6} className="p-1">
                <InputField
                  Name="Tag"
                  keyName="tag"
                  onChange={() => {}}
                  {...commonProps}
                />
              </Col>
              <Col lg={6} className="p-1">
                <InputField
                  Name="Category"
                  keyName="category"
                  onChange={() => {}}
                  {...commonProps}
                />
              </Col>
            </Row>
        

            <InputField
              Name="Description"
              keyName="description"
              others={{ as: "textarea", rows: 3 }}
              onChange={() => {}}
              {...commonProps}
            />

        
            <hr />
            <div className="mt-4">
              <h5 className="adduser--title mb-2">
                {questions.length >= 1 && "Add Question List"}
              </h5>
              {questions.map((item, index) => {
                return (
                  <div key={index} className="mb-2">
                    <Row>
                      <Col lg={12}>
                        <InputField
                          index={index}
                          Name="Question"
                          nameValue={`questions[${index}].question`}
                          keyName="question"
                          others={{ as: "textarea", rows: 2 }}
                          onChange={handleoption}
                          {...commonProps}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="p-1">
                        <InputField
                          index={index}
                          Name="Option A"
                          nameValue={`questions[${index}].optionA`}
                          keyName="optionA"
                          onChange={handleoption}
                          {...commonProps}
                        />
                      </Col>
                      <Col md={6} className="p-1">
                        <InputField
                          index={index}
                          Name="Option B"
                          nameValue={`questions[${index}].optionB`}
                          keyName="optionB"
                          onChange={handleoption}
                          {...commonProps}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="p-1">
                        <InputField
                          index={index}
                          Name="Option C"
                          nameValue={`questions[${index}].optionC`}
                          keyName="optionC"
                          onChange={handleoption}
                          {...commonProps}
                        />
                      </Col>
                      <Col md={6} className="p-1">
                        <InputField
                          index={index}
                          Name="Option D"
                          nameValue={`questions[${index}].optionD`}
                          keyName="optionD"
                          onChange={handleoption}
                          {...commonProps}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="p-1">
                        <InputField
                          index={index}
                          Name="Answer"
                          nameValue={`questions[${index}].answer`}
                          keyName="answer"
                          onChange={handleoption}
                          {...commonProps}
                        />
                      </Col>
                    </Row>
                    {questions.length > 1 && (
                      <div className="remove-button">
                        <Button
                          variant="danger"
                          className="mb-2"
                          disabled={questions.length <= 1}
                          onClick={() => {
                            handleRemove(index, setValue);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={handleAddQuestion}
              >
                Add Question
              </button>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Blog Image</Form.Label>
              <Form.Control
                {...register(
                  "image",
                  {
                    onChange: (e) => {
                      setimage(e.target.files[0]);
                    },
                  },
                  { required: true }
                )}
                type="file"
                autoComplete="off"
              />
              {errors.image && (
                <Form.Text className="text-danger">image required</Form.Text>
              )}

             

              {errors.image && (
                <p style={{ color: "red" }}>{errors.image.message}</p>
              )}
            </Form.Group>

            <div className="submitbuttons p-2">
              <Button
                className="button1 m-2"
                variant="primary"
                type="submit"
             
              >
                Submit
              </Button>
              <Button className="button2 m-2" variant="dark" type="reset">
                Reset
              </Button>
            </div>
          </Form>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default CreateBlog;
