import React from "react";
import Layout from "../../Components/Layout";
import "./Contactus.scss";
import { Row, Col, Card } from "antd";
import { useForm } from "react-hook-form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdCall } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
// import { Button } from "react-bootstrap";
import TextArea from "antd/lib/input/TextArea";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  SecondName: Yup.string().required("Second Name is required"),
  CompanyName: Yup.string().required("Company Name is required"),
  email: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  phoneno: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("Phone Number is required"),
  Message: Yup.string().required("Message is required"),
});

function Contactus() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <div style={{ marginTop: "5%" }}>
        <div className="Contactimg">
          <div className="ContactSecond">
            <div className="ContactContent">
              {/* <h2 className="ContactHead">CONTACT US</h2> */}
            </div>
          </div>
        </div>
        <Row>
          <Col sm={24} md={10} className="p-5" style={{display:"flex",flexDirection:"column"}}>
            <Card className="ContUsCard">
            <div className="" style={{display:"flex",justifyContent:"space-around"}}>
              <div><MdCall className="ContUsIcon" size={50} /></div>
              <div className="ContUsPhone">
                <h2>Talk To Us</h2>
                + 987 6543 210
                </div>
            </div>
            </Card>
            <Card className="ContUsCard mt-4">
            <div className="" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="">
              <IoIosChatbubbles className="ContUsIcon" size={50} />
              </div>
              <div>
              <h2>Chart with Us</h2>
              <button className="ContUsBtn">CHAT WITH US</button>
              </div>
            </div>
            </Card>
          </Col>
          <Col sm={24} md={14} className="p-5">
            <Card className="ContsecConatiner">
              <h5 className="ContactSecHead mb-3">We are here to help</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Contactform">
                  <div className="mb-4">
                    <input
                      className="input-field"
                      placeholder="First Name *"
                      {...register("firstname", { required: true })}
                    />
                    <br />
                    {errors.firstname && (
                      <span className="input-error">First Name required</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      className="input-field"
                      placeholder="Last Name *"
                      {...register("lastname", { required: true })}
                    />
                    <br />
                    {errors.lastname && (
                      <span className="input-error">Last Name required</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      className="input-field"
                      placeholder="Enter Email *"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="input-error">Email is required</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      className="input-field"
                      placeholder="Phone Number *"
                      {...register("phoneno", { required: true })}
                    />
                    <br />
                    {errors.phoneno && (
                      <span className="input-error">Phone Number is required</span>
                    )}
                  </div>
                  <div className="mb-4">
                  <textarea
                rows="3"
                className="input-field"
                placeholder="Message *"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="input-error">Message is required</span>
              )}
              </div>
                   <div className="submitbuttons p-2">
                  <button className="button1 m-2 p-2" type="submit">
                    Submit
                  </button>
                </div>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default Contactus;
