import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Checkbox } from "antd";
import { Dropdown } from "primereact/dropdown";
import Api from "../../../Api.js";
import "../../../Components/Css/Students/Student.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

function AreaInterest() {
  const [domainList, setdomainList] = useState([]);
  const [domainValue, setDomainValue] = useState();
  const [subdomainList, setsubdomainList] = useState([]);
  const [subdomainValue, setSubDomainValue] = useState();
  const [fieldList, setfieldList] = useState([]);
  const [fieldValue, setfieldValue] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({});

  useEffect(() => {
    getDomain();
  }, []);

  const getDomain = async () => {
    await Api.get("Student/getdomainlist").then((res) => {
      setdomainList(res.data.data);
    });
  };

  const getSubDomain = (domainId) => {
    setDomainValue(domainId);
    Api.get(`Student/subdomainById/${domainId}`).then((res) => {
      setsubdomainList(res.data.data);
    });
  };

  const getField = (subdomainId) => {
    setSubDomainValue(subdomainId);
    Api.get(`Student/fieldById/${subdomainId}`).then((res) => {
      setfieldList(res.data.data);
    });
  };

  const handleFormSubmit = async () => {
    const Details = {
      domainName: getValues().domainValue,
      subdomainName: getValues().subdomainValue,
      fieldName: getValues().fieldValue,
    };
    await Api.post(`student/createareaofinterest`, Details).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };

  return (
    <div className="p-5">
      <div className="pages-title mb-3">Area Of Interest</div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="p-3">
          <Row className="mb-3">
            <Col sm={24} md={12} className="Stud-aresint-col  p-2">
              <lable>Domain</lable>
              <Dropdown
                className="Stud-aresint-input p-0"
                value={domainValue}
                options={domainList}
                {...register("domainValue", { required: true })}
                optionLabel={"domainName"}
                optionValue={"_id"}
                onChange={(e) => getSubDomain(e.value)}
                placeholder="Select a Domain"
              />
              <br />
              {errors.domainValue && (
                <span className="Stud-qual-error">Domain is required</span>
              )}
            </Col>
            <Col sm={24} md={12} className="Stud-aresint-col  p-2">
              <lable>Sub-Domain</lable>
              <Dropdown
                className="Stud-aresint-input p-0"
                value={subdomainValue}
                options={subdomainList}
                {...register("subdomainValue", { required: true })}
                optionLabel={"subdomainName"}
                optionValue={"_id"}
                onChange={(e) => getField(e.value)}
                placeholder="Select a Sub-Domain"
              />
              <br />
              {errors.subdomainValue && (
                <span className="Stud-qual-error">Sub-Domain is required</span>
              )}
            </Col>
            {/* <Col sm={24} md={12} className="Stud-aresint-col  p-2">
              <lable>Field</lable>
              <br />
              <Dropdown
                className="Stud-aresint-input p-0"
                value={fieldValue}
                options={fieldList}
                {...register("fieldValue", { required: true })}
                optionLabel={"fieldName"}
                optionValue={"_id"}
                onChange={(e) => setfieldValue(e.value)}
                placeholder="Select a Field"
              />
              <br />
              {errors.fieldValue && (
                <span className="Stud-qual-error">Field is required</span>
              )}
            </Col> */}
          </Row>
          <lable>Field</lable>
          <br />
           <Row>
            {fieldList.map((data) => {
              return (
                <div key={data.id} className="field-checkbox ps-4">
                  <Checkbox
                    inputId={data.id}
                    name="fieldList"
                    optionValue={"_id"}
                    onChange={(e) => setfieldValue(e.value)}
                    {...register("fieldValue", { required: true })}
                  />
                  <label htmlFor={data.id}>{data.fieldName}</label>
                </div>
              );
            })}
          </Row> 
          <br />
          {errors.fieldValue && (
            <span className="Stud-qual-error">Field is required</span>
          )}
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
    </div>
  );
}
export default AreaInterest;
