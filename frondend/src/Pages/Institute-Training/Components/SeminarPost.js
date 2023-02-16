import React, { useState } from "react";
import { Row, Col } from "antd";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MultiSelect } from "primereact/multiselect";
import "../../../Components/seminar/seminar.css";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";

function SeminarPost() {
  const citySelectItems = [
    { label: "React", value: "React" },
    { label: "Angular", value: "Angular" },
    { label: "Vue", value: "Vue" },
    { label: "Node", value: "Node" },
    { label: "PHP", value: "PHP" },
  ];
  const [resres, setResres] = useState({
    status: null,
    message: null,
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    form,
  } = useForm();
  const [technology, setTechnology] = useState([]);
  const [brochure, setBrochure] = useState({});
  const handleFormSubmit = async () => {
    const collectData = {
      seminarTitle: getValues().seminarTitle,
      technology: getValues().technology,
      time: getValues().time,
      fromdate: getValues().fromdate,
      todate: getValues().todate,
      audience: getValues().audience,
      contactPerson: getValues().contactPerson,
      contactNumber: getValues().contactNumber,
      SeminarMode: getValues().SeminarMode,
      registrationLink: getValues().registrationLink,
      about: getValues().about,
      fees: getValues().fees,
    };
    const data = new FormData();
    data.append("resume", getValues().brochure[0]);

    await Api.post("institute/uploadimage", data).then(async (res) => {
      if (res.status == 201) {
        collectData.brochure = res.data.path;
        await Api.post(`institute/createSeminar`, collectData)
          .then((res) => {
            setResres({
              status: res.data?.status,
              message: res.data?.message,
            });
            localStorage.setItem("userId", res.data.data._id);
            setTimeout(() => {
              navigate("/employer");
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
                {...register("technology", {
                  required: true,
                  onChange: (e) => {
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
                {...register("SeminarMode", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Online</option>
                <option value="b">Direct</option>
                <option value="c">Both </option>
              </select>
              <br />
              {errors.SeminarMode && (
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
              {/* <input
                type="file"
                className="seminarInput"
                {...register("brochure", { required: true })}
              />

              <br />
              {errors.brochure && (
                <span className="input-error">Brochure is required</span>
              )} */}
              <Form.Group controlId="brochure" className="mb-3 py-2">
                {/* <Form.Label>Resume</Form.Label> */}
                <Form.Control
                  accept=".png"
                  type="file"
                  {...register("brochure")}
                  onChange={(e) => {
                    setBrochure(e.target.files[0]);
                  }}
                />
              </Form.Group>
              {errors.brochure && (
                <span className="text-danger">Company Logo is required</span>
              )}
            </Col>
          </Row>

          <Row>
            <Col sm={24} md={8} className="Stud-personal-col px-4">
              <label className="input-title">From Date</label>
              <input
                className="seminarInput"
                type="date"
                {...register("fromdate", { required: true })}
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
                {...register("todate", { required: true })}
              />

              <br />
              {errors.todate && (
                <span className="Stud-personal-error">To Date is required</span>
              )}
            </Col>
          </Row>

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
            <Col sm={24} md={7} className="p-2">
              <label className="input-title"> Fees Type</label>
              <select
                className="seminarInput"
                {...register("fees", { required: true })}
              >
                <option value="">select </option>
                <option value="paid">paid</option>
                <option value="free">free</option>
              </select>
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
        </div>
      </form>
    </>
  );
}

export default SeminarPost;
