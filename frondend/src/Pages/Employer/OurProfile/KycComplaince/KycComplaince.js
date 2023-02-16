import React from "react";
import { Container, Row, Col, button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./kycComplaince.scss";

function KycComplaince() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Container>
      <h4 className="pages-title mt-3">KYC Complaince</h4>
        <br />
        <p style={{backgroundColor:"#fccc55" , width:"40%"}}> Your Company details are required to meet kyc Complaince</p>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={12} lg={2}>
          <label>PanCard Number: </label>
          </Col>
          <Col sm={12} lg={6}>
          <input
          {...register("pancard", { required: true })}
          className="kyc-input"
        />
        {errors.pancard && <p className="text-danger">pancard is required</p>}
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={12} lg={2}>
          <label>PanCard Upload: </label>
          </Col>
          <Col sm={12} lg={6}>
          <input
          className="kyc-input"
          style={{ width: "85%", outline: "none" }}
          type="file"
          {...register("upload", { required: true })}
        />
        {errors.upload && <p className="text-danger">pancard upload is required</p>}
        <p>Only 1 document in pdf,jpeg and png format with maximum 5Mb uploaded</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={2}>
          <label>Address Proof: </label>
          </Col>
          <Col sm={12} lg={6}>
          <input
          {...register("address", { required: true })}
          className="kyc-input"
        />
        {errors.address && <p className="text-danger">Address is required</p>}
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={12} lg={2}>
          <label>Address Proof Upload: </label>
          </Col>
          <Col sm={12} lg={6}>
          <input
          className="kyc-input"
          style={{ width: "85%", outline: "none"}}
          type="file"
          {...register("addressProof", { required: true })}
        />
        {errors.addressProof && <p className="text-danger">Address Proof is required</p>}
        <p>Only 1 document in pdf,jpeg and png format with maximum 5Mb uploaded</p>
          </Col>
        </Row>
        <div className="submitbuttons px-4">
        <button className="button1 m-2 p-2" type="submit">
              Submit
        </button>
        <button className="button2 m-2 p-2" type="reset">
              cancel
        </button>
        </div>
  
        </form>
      
      </Container>
    </div>
  );
}

export default KycComplaince;
