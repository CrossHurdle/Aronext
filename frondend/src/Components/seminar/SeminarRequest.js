import React, { useState } from 'react';
import { Container, Row, Col, Button, Radio } from 'antd';
import { Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import './seminar.css'
import Api from '../../Api'



function SeminarRequest() {
  const citySelectItems = [
    { label: "React", value: "React" },
    { label: "Angular", value: "Angular" },
    { label: "Vue", value: "Vue" },
    { label: "Node", value: "Node" },
    { label: "PHP", value: "PHP" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    form,
  } = useForm()
  const [technology, setTechnology] = useState()
  const[brochure, setBrochure] = useState();
  const onSubmit = (data) => console.log(data)

  const SelectFile = async (event) => {
    const file = event.target.files[0];
    const type = file?.type?.split("/")[0];
    const base64 = await convertBase64(file);
    setBrochure(base64);
    console.log("base64", base64);
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

  const handleFormSubmit = async() =>{
    const collectData= {
      // seminarTitle:getValues().seminarTitle,
      // time : getValues().time,
      Technology : getValues().technology,
      Date:getValues().fromdate,
      Date:getValues().todate,
      Target:getValues().audience,
      ContactPerson:getValues().ContactPerson,
      ContactNumber:getValues().ContactNumber,
      SeminarMode:getValues().mode,
      Link:getValues().registrationLink,
      Brochure:getValues().brochure,
      About:getValues().about,
      Fees:getValues.aboutFees,
      };
  
  console.log("collectData", collectData);

  await Api.post(`seminar/createSeminar`,collectData).then((resp)=>{
    console.log("resp.data", resp.data);
  });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Seminar Request</div>

          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className="px-4">
              <label className="input-title">Seminar Title</label>
              <br />
              <input
                className="seminarInput"
                {...register("seminarTitle", { required: true })}
              />

              <br />
              {errors.seminarTitle && (
                <span className="input-error">Seminar Title is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Time</label>
              <br />
              <input
                className="seminarInput"
                type={"time"}
                {...register("time", { required: true })}
              />

              <br />
              {errors.time && (
                <span className="input-error">Time is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className="px-4">
              <label>Technology</label>
              <br />
              <MultiSelect
                value={technology}
                options={citySelectItems}
                className="seminarSelect"
                {...register('technology', {
                  required: true,
                  onChange: e => {
                    setTechnology(e.target.value);
                  },
                })}
              ></MultiSelect>
              {errors.technology && (
                <p className="Stud-personal-error">Technology is required</p>
              )}
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={8} className=" px-4">
              <label className="input-title">Target audience </label>
              <br />

              <select
                className="seminarInput"
                {...register("audience", { required: true })}
              >
                <option value="">select </option>
                <option value="openForAll">Open for all</option>
                <option value="students">Students</option>
                <option value="professional">Professional</option>
                <option value="company">Company</option>
              </select>
              <br />
              {errors.audience && (
                <span className="input-error">
                  Target audience type is required
                </span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Contact Person </label>
              <br />
              <input
                className="seminarInput"
                {...register("contactPerson", { required: true })}
              />

              <br />
              {errors.contactPerson && (
                <span className="input-error">
                  Contact Person name is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                type="number"
                className="seminarInput"
                {...register("contactNumber", { required: true })}
              />

              <br />
              {errors.contactNumber && (
                <span className="input-error">Contact Number is required</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={8} className=" px-4">
              <label className="input-title">Seminar Mode </label>
              <br />

              <select
                className="seminarInput"
                {...register("mode", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Online</option>
                <option value="b">Direct</option>
                <option value="c">Both </option>
              </select>
              <br />
              {errors.mode && (
                <span className="input-error">Seminar mode is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Registration Link </label>
              <br />
              <input
                type="url"
                className="seminarInput"
                {...register("registrationLink", { required: true })}
              />

              <br />
              {errors.registrationLink && (
                <span className="input-error">
                  Registration Link is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" px-4">
              <label className="input-title">Brochure </label>
              <br />
              <input
                type="file"
                className="seminarInput"
                // {...register("brochure", { required: true })}
              />

              <br />
              {errors.brochure && (
                <span className="input-error">Brochure is required</span>
              )}
            </Col>
          </Row>

          <Row>
            <Col sm={24} md={8} className="Stud-personal-col px-4">
              <label className="input-title">From Date</label>
              <input
                className="seminarInput"
                type="date"
                {...register("fromDate", { required: true })}
              />

              <br />
              {errors.fromdate && (
                <span className="Stud-personal-error">
                  From Date is required
                </span>
              )}
            </Col>

            <Col sm={24} md={8} className="Stud-personal-col px-4">
              <label className="input-title">To Date</label>
              <br />

              <input
                className="seminarInput"
                type="date"
                {...register("toDate", { required: true })}
              />

              <br />
              {errors.todate && (
                <span className="Stud-personal-error">To Date is required</span>
              )}
            </Col>
          </Row>

          {/* <Row>
            <Col xs={24} sm={24} md={8} className=" px-4">
              <label className="input-title">Target audience </label>
              <br />

              <select
                className="seminarInput"
                {...register('audience', { required: true })}
              >
                <option value="">select </option>
                <option value="openForAll">Open for all</option>
                <option value="students">Students</option>
                <option value="professional">Professional</option>
                <option value="company">Company</option>
              </select>
              <br />
              {errors.audience && (
                <span className="input-error">Access is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Contact Person </label>
              <br />
              <input
                className="seminarInput"
                {...register('ContactPerson', { required: true })}
              />

              <br />
              {errors.ContactPerson && (
                <span className="input-error">
                  Contact Person name is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                type="number"
                className="seminarInput"
                {...register('ContactNumber', { required: true })}
              />

              <br />
              {errors.ContactNumber && (
                <span className="input-error">Contact Number is required</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={8} className=" px-4">
              <label className="input-title">Seminar Mode </label>
              <br />

              <select
                className="seminarInput"
                {...register('mode', { required: true })}
              >
                <option value="">select </option>
                <option value="a">Online</option>
                <option value="b">Direct</option>
                <option value="c">Both </option>
              </select>
              <br />
              {errors.mode && (
                <span className="input-error">Seminar mode is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className="  px-4">
              <label className="input-title">Registration Link </label>
              <br />
              <input
                type="url"
                className="seminarInput"
                {...register('registrationLink', { required: false })}
              />

              <br />
              {errors.registrationLink && (
                <span className="input-error">
                  Contact Person name is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" px-4">
              <Form.Group controlId="Image" className=" input-title">
                  <Form.Label>Brochure </Form.Label>
                  <br />
                  <Form.Control
                  className=" seminarInput"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    // {...register("brochure", { required: true })}
                    onChange={(e) => {
                      setBrochure(e.target.files[0]);
                      SelectFile(e);
                    }}
                  />
                </Form.Group>

              <br />
              {errors.brochure && (
                <span className="input-error">Brochure is required</span>
              )}
            </Col>
          </Row> */}

          <Col md={32} className="px-4">
            <label className="input-title">About</label>
            <br />
            <textarea
              style={{ height: "85px" }}
              className="seminarInput"
              {...register("about", { required: true })}
            />

            <br />
            {errors.about && (
              <span className="input-error">About is required</span>
            )}
          </Col>

          <Row style={{ display: "flex" }} className=" px-4">
            <Col sm={24} md={24} className="p-2">
              <p style={{ marginBottom: "7px" }} className="marital-checkbox" >
                <label className="input-title">Fees Type</label>
              </p>
              <div className="status p-1">
                <Row style={{ display: "flex" }}>
                  <Col className="radioGroup" xs={24} sm={12} md={5}>
                    <input
                      type="radio"
                      value="Paid Seminar"
                      {...register("fees", { required: true })}
                      className="radioGroup__input m-2"
                    />
                    Paid Seminar
                  </Col>
                  <Col className="radioGroup" xs={24} sm={12} md={5}>
                    <input
                      type="radio"
                      value="Free of Cost"
                      {...register("fees", { required: true })}
                      className="radioGroup__input m-2"
                    />
                    Free of cost
                  </Col>
                </Row>
              </div>
              {errors.fees && (
                <span className="input-error">Fees type is required</span>
              )}
            </Col>
          </Row>
          <div className="submitbuttons p-2">
            <button
              className="button1 m-2 p-2"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="button2 m-2 p-2" type="reset">
              Reset
            </button>
          </div>
          {/* </div> */}
        </div>
      </form>
    </>
  );
}

export default SeminarRequest;
