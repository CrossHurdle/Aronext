import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

function ResumeDetail() {
  return (
    <div>
      <Row className="mx-5 mt-5">
        <Col sm={12} lg={2}></Col>
        <Col sm={12} lg={5}>
          <h3>Manuu</h3>
          <h6>
            <AiOutlinePhone /> 9087235521
          </h6>
          <h6>
            <AiFillMail /> xxx@gmail.com
          </h6>
          <h6>
            <CiLocationOn /> Chennai
          </h6>
        </Col>
        <Col sm={12} lg={2}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU"
            width="100"
          ></img>
           <Row className="mt-2">
        <Col sm={12} lg={6}>
          <button
            style={{
              border: "none",
              backgroundColor: "green",
              borderRadius: "3px",
              padding:"2px",
              display:"flex",
              justifyContent:"center",
              color:"white"
            }}
          >
            Downloaded Resume
          </button>
        </Col>
      </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} lg={2}></Col>
        <Col sm={12} lg={6} style={{ backgroundColor: "grey" }}>
          <h5 className="mx-2 p-2">Educational Details</h5>
        </Col>
      </Row>
      <div className="mx-2 mt-2">
        <Row>
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h5>2016-BE(80%)</h5>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h6>Major:Information Technology</h6>
            <h6>SRM Institude of Science and Technology</h6>
          </Col>
        </Row>
      </div>
      <div className="mx-2 mt-2">
        <Row className="mt-1">
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h5>2014-HSC(75%)</h5>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h6>Major:Computer Science</h6>
            <h6> Mahindra International School</h6>
          </Col>
        </Row>
      </div>
      <Row className="mt-3 ">
        <Col sm={12} lg={2}></Col>
        <Col sm={12} lg={6} style={{ backgroundColor: "grey" }}>
          <h5 className="mx-2 p-2">Work & Experience</h5>
        </Col>
      </Row>
      <div className="mx-2 mt-2">
        <Row>
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h5>Php Developer</h5>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h6>Zypew Solution private limited</h6>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </Col>
        </Row>
      </div>
      <div className="mx-2 mt-2">
        <Row>
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h5>Research Analyst</h5>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            <h6>gtek private limited</h6>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={2}></Col>
          <Col sm={12} lg={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </Col>
        </Row>
      </div>
      <Row className="mt-3">
        <Col sm={12} lg={2}></Col>
        <Col sm={12} lg={6} style={{ backgroundColor: "grey" }}>
          <h5 className="mx-2 p-2">Contact Us</h5>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={12} lg={2}></Col>
        <Col sm={12} lg={4}>
          <form>
            <div className="Contactform">
              <div className="mb-4">
                <input className="input-field" placeholder="First Name" />
              </div>
              <div className="mb-4">
                <input className="input-field" placeholder="Enter Email" />
                <br />
              </div>
              <div className="mb-4">
                <input className="input-field" placeholder="Phone Number" />
              </div>
              <div className="mb-4">
                <textarea
                  rows="3"
                  className="input-field"
                  placeholder="Message"
                />
              </div>
              <div className=" p-2">
                <button
                  style={{ border: "none", backgroundColor: "grey" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
     
    </div>
  );
}

export default ResumeDetail;
