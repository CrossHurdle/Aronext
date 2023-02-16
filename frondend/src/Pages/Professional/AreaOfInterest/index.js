import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button, Checkbox } from "antd";
import '../../../Components/Css/Professional/professionalstyle.scss';
import { Select } from "antd";
import Api from "../../../Api";
import { Dropdown } from "primereact/dropdown";

const { Option } = Select;

const plainOptions = ["Frontend", "Backend", "Fullstack", "Data analytics"];

function AreaOfInterest() {

  const [domainList, setdomainList]= useState([]);
  const [domainValue, setDomainValue]= useState();
  const [subdomainList, setsubdomainList]= useState([]);
  const [subdomainValue, setSubDomainValue] = useState();
  const [fieldValue, setfieldValue] = useState();
  const [fieldList, setfieldList] = useState([]);
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    getDomain();
  },[]);
  //DOMAIN
const  getDomain = async()=> {
await Api.get("professional/").then((res) => {
  setdomainList(res.data.data)
})
}
  const getSubDomain = (domainId) => {
    setDomainValue(domainId);
    Api.get(`professional/subdomain/${domainId}`).then((res)=>{
      setsubdomainList(res.data.data);
    });
  }
  const getField = (subdomainId) => {
    setSubDomainValue(subdomainId);
    Api.get(`Student/fieldById/${subdomainId}`).then((res) => {
      setfieldList(res.data.data);
    });
  };
  //SUBDOMIN
  const handleFormSubmit = async () => {
    const Details = {
      domainName: getValues().domainValue,
      subdomainName: getValues().SubdomainValue,
      fieldName: getValues().fieldValue,
    };
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="personal-informations p-5">
          <div className="pages-title mb-3">Area Of Interest</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <feild className="input-title">
                Domain   </feild><br></br>
             
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
              
            
              {errors.Domain && <span className="input-error">select</span>}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <div>
                <feild className="input-title">
                  Sub-Domain
                
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
                
                  
                </feild>
              
              </div>
            </Col>
          </Row>
          {/* <p style={{ marginBottom: "7px" }} className="input-subtitle mt-5 ">
            Fields
          </p>
          <Row>
            <br></br>
            <div className="status p-1 ">
              <Checkbox.Group options={plainOptions} />
            </div>
          </Row> */}
           <Col sm={24} md={8} className="Stud-aresint-col  p-2">
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
            </Col>

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

export default AreaOfInterest;
