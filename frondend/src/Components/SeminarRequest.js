import React, { useState } from "react";
import { Container, Row, Col, Button, Radio } from "antd";
import { useForm } from "react-hook-form";
import { MultiSelect } from "primereact/multiselect";

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
  } = useForm();
  const [technology, setTechnology] = useState();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Seminar Request</div>

          {/* <div className="p-4"> */}
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className="p-2">
              <label>Technology</label>
              <br />
              <MultiSelect
                value={technology}
                options={citySelectItems}
                className="create-selects"
                {...register("Technology", {
                  required: true,
                  onChange: (e) => {
                    setTechnology(e.target.value);
                  },
                })}
              ></MultiSelect>
              {errors.Technology && (
                <p className="Stud-personal-error">Technology is required</p>
              )}
            </Col>

            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">From Date</label>
              <input
                className="input-field"
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

            <Col sm={24} md={8} className="Stud-personal-col p-2">
              <label className="input-title">To Date</label>
              <br />

              <input
                className="input-field"
                type="date"
                {...register("todate", { required: true })}
              />

              <br />
              {errors.todate && (
                <span className="Stud-personal-error">To Date is required</span>
              )}
            </Col>
          </Row>
          {/* <Row className="mb-3"> */}
          <Col md={32} className="p-2">
            <label className="input-title">About</label>
            <br />
            <textarea
              style={{ height: "85px" }}
              className="input-field"
              {...register("about", { required: true })}
            />

            <br />
            {errors.about && (
              <span className="input-error">About is required</span>
            )}
          </Col>
          {/* </Row> */}
          <Col sm={24} md={8} className="p-2">
            <p style={{ marginBottom: "7px" }} className="marital-checkbox">
              Fees
            </p>
            <div className="status p-1">
              <Radio.Group
                name="radiogroup"
                {...register("SchoolBoard", { required: true })}
              >
                <Radio value={"Paid"}>Paid</Radio>
                <Radio value={"Free"}>Free </Radio>
              </Radio.Group>
            </div>
            {errors.SchoolBoard && (
              <span className="input-error">School Board is required</span>
            )}
          </Col>
          <Row>
            <Col xs={24} sm={24} md={8} className="p-2">
              <label className="input-title">Access </label>
              <br />

              <select
                className="input-field"
                {...register("Gender", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Open for all</option>
                <option value="b">Students</option>
                <option value="c">Company</option>
              </select>
              <br />
              {errors.Gender && (
                <span className="input-error">Access is required</span>
              )}
            </Col>

            {/* <Row className="mb-3"></Row> */}
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Person </label>
              <br />
              <input
                className="input-field"
                {...register("ContactPerson", { required: true })}
              />

              <br />
              {errors.ContactPerson && (
                <span className="input-error">
                  Contact Person name is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                className="input-field"
                {...register("ContactNumber", { required: true })}
              />

              <br />
              {errors.ContactNumber && (
                <span className="input-error">Contact Number is required</span>
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
