import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import "../../Css/Footer/trustsafety.scss";
import { Col, Row } from "react-bootstrap";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Trustlogin from "./Trustlogin";

function FraudAlert() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <div className="alert-main-div">
          <h1>Welcome to Job Portal Security Center</h1>
          <p className="paragraph-alert-div">
            We value the trust yor place on job portal and are committed to
            making your job search a safe and fraud-free experience on our site.
            However, in the wake of an increasing numberof instances
            <span className="d-flex justify-content-center align-item-center">
              of fake job offers, we suggest you to be cautious of fraudulent
              emails and calls.
            </span>
          </p>
        </div>
        <div>
          <Row className="alert-second-div">
            <Col md={6}>
              <h4 className="alert-second-main">
                6 Signs to identify fake offers:
              </h4>
              <div className="alert-list">
                <li className="list-item">Ask for money(mostly refundable).</li>
                <li className="list-item">
                  Looking for confidential information(Credit
                  card/OTP/Aadhar/PAN, etc).
                </li>
                <li className="list-item">
                  Badly written job ads(incorrect grammer).
                </li>
                <li className="list-item">
                  Offering easy hiring creteria(on the spot offer,no interiew).
                </li>
                <li className="list-item">
                  Luring with salary beyond expectations.
                </li>
                <li className="list-item">
                  Using the names of knownjob portals(fake domains like
                  jobportal@gmail.com).
                </li>
              </div>
            </Col>
            <Col md={6}>
              <h4 className="alert-second-main">
                4 ways to protect yourself against job fraud:
              </h4>
              <div className="alert-list">
                <li className="list-item">
                  Never respond withoutverifying the legitimacy of the job
                  offer.
                </li>
                <li className="list-item">
                  Dont share personal/bank account details with anyone.
                </li>
                <li className="list-item">
                  Refuse to make any payment for job offers.
                </li>
                <li className="list-item">
                  Verify online presence and reviews of the recruitment firm.
                </li>
              </div>
            </Col>
          </Row>
          <div>
            <p className="paragraph-div d-flex justify-content-center mt-3">
              if you're received (or receive) any such suspicious email
              communication, reach out to us email at &nbsp;
              <span
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={() => navigate("/email-tag")}
              >
                complaince @jobportal.com
              </span>
            </p>
            <p className="d-flex justify-content-center">or</p>
            <Button
              type="primary"
              onClick={showModal}
              className="button-div mb-4"
            >
              Login and Report
            </Button>
            <Modal
              title="Login"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <Trustlogin />
            </Modal>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default FraudAlert;
