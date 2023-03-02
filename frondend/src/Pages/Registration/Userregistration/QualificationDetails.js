import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Row, Col, Button } from "antd";
import "../../../Components/Css/Professional/professionalstyle.scss";
import { Radio } from "antd";

function QualificationDetails() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //const [value, setValue] = useState(1);
  //   const [deposit, setDeposit] = useState();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Qualification Details</div>
          <Row className="mb-3">
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">Profession</label>
              <input
                className="input-field"
                {...register("Qualification", { required: true })}
              />

              <br />
              {errors.Qualification && (
                <span className="input-error"> required</span>
              )}
            </Col>

            <Col sm={24} md={12} className="p-2">
              <label className="input-title">Years of experience</label>
              <input
                className="input-field"
                {...register("University", { required: true })}
              />

              <br />
              {errors.University && (
                <span className="input-error">University required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={12} className="p-2">
              <label className="input-title mt-4">
                Have you paid electricity bill of more than 1 lakh in total
                during FY 2020-21?
              </label>
              <Radio.Group
                onChange={onChange}
                value={"deposit"}
                buttonStyle={"outline"}
              >
                <Radio value={"Yes"}>Yes</Radio>
                <Radio value={"No"}>No</Radio>
              </Radio.Group>
            </Col>
            <Col sm={24} md={12} className="p-2">
              <label className="input-title mt-4">
                Have you spent more than 2 Lakhs on yourself or another
                individual for the purpose of foreign travel in FY 2020-21 ?
              </label>
              <Radio.Group onChange={onChange} value={"deposit"}>
                <Radio value={"Yes"}>Yes</Radio>
                <Radio value={"No"}>No</Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={24} md={12} className="p-2">
              <label className="input-title mt-4">
                Do you hold any assets, bank accounts, signing authority in any
                entity located outside India?
              </label>
              <Radio.Group onChange={onChange} value={"deposit"}>
                <Radio value={"Yes"}>Yes</Radio>
                <Radio value={"No"}>No</Radio>
              </Radio.Group>
            </Col>
            <Col sm={24} md={12} className="p-2">
              <label className="input-title mt-4">
                Have you deposit more than 1 crore in any current bank account
                in FY 2020-21
              </label>
              <Radio.Group onChange={onChange} value={"deposit"}>
                <Radio value={"Yes"}>Yes</Radio>
                <Radio value={"No"}>No</Radio>
              </Radio.Group>
            </Col>
          </Row>
          {/* <div className="input-subtitle mt-4">Class XII :</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title"> </label>
              school Name
              <input
                className="input-field"
                {...register("classXIIschoolName", { required: true })}
              />
              <br />
              {errors.classXIIschoolName && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Percentage </label>
              <input
                className="input-field"
                {...register("classXIIPercentage", { required: true })}
              />

              <br />
              {errors.classXIIPercentage && (
                <span className="input-error">Percentage required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Year of Passing</label>
              <input
                className="input-field"
                {...register("classXIIPassing", { required: true })}
              />

              <br />
              {errors.classXIIPassing && (
                <span className="input-error">Year required</span>
              )}
            </Col>
          </Row>
          <div className="input-subtitle mt-4">Bachelore Degree :</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">College Name </label>
              <input
                className="input-field"
                {...register("Bcollegename", { required: true })}
              />

              <br />
              {errors.Bcollegename && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Percentage </label>
              <input
                className="input-field"
                {...register("BPercentage", { required: true })}
              />

              <br />
              {errors.BPercentage && (
                <span className="input-error">Percentage required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Year of Passing </label>
              <input
                className="input-field"
                {...register("BPassing", { required: true })}
              />

              <br />
              {errors.BPassing && (
                <span className="input-error">Year required</span>
              )}
            </Col>
          </Row>
          <div className="input-subtitle mt-4">Master Degree (optional*) :</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">College Name</label>
              <input
                className="input-field"
                {...register("Mcollegename", { required: true })}
              />

              <br />
              {errors.Mcollegename && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Percentage </label>
              <input
                className="input-field"
                {...register("MPercentage", { required: true })}
              />

              <br />
              {errors.MPercentage && (
                <span className="input-error">Percentage required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Year of Passing</label>
              <input
                className="input-field"
                {...register("MPassing", { required: true })}
              />

              <br />
              {errors.MPassing && (
                <span className="input-error">Year required</span>
              )}
            </Col>
          </Row> */}

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

export default QualificationDetails;
