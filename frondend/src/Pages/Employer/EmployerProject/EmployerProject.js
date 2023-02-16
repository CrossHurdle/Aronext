import React from "react";
import { Space, Table } from "antd";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Components/Css/Employer/EmployerProject.scss";
import { Modal } from "antd";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { DatePicker } from "antd";

function EmployerProject() {
  const dataname = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <>
            <Button variant="success" onClick={showModal}>
              Approved
            </Button>
            <Modal
              title="Action Approved"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <Row>
                  <Col lg={5}>
                    <div>
                      <h6 className="input-modal">StartDate:</h6>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      {/* <p className="mx-3">9875563201</p> */}
                      <input className="mx-1 input-date" type="date" />
                    </div>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col lg={5}>
                    <div>
                      <h6 className="input-modal">EndDate:</h6>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                    <input className="mx-1 input-date" type="date" />
                    </div>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col lg={5}>
                    <div>
                      <h6 className="input-modal">Description:</h6>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                    <input type="text" className="project-input"/>
                    </div>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col lg={5}>
                    <div>
                      <h6 className="input-modal">PhoneNumber:</h6>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                    <input type="text" className="project-input"/>
                    </div>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col lg={5}>
                    <div>
                      <h6 className="input-modal">Email:</h6>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                    <input type="text" className="project-input"/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Modal>
          </>
          {/* <Button variant="success" className="btn-invite"><Link to="/">Invite</Link></Button> */}
          {/* <Button variant="danger">Reject</Button> */}
          <Button variant="danger" onClick={showRejectModal}>
            Reject
          </Button>
          <Modal
            title="Reject"
            open={isRejectModalOpen}
            onOk={rejectOk}
            onCancel={rejectCancel}
          >
            <div>
              <h6>why are projects Rejected?</h6>
              <textarea className="text-reject" />
            </div>
          </Modal>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Manju",
    },
    {
      key: "2",
      name: "Meenu",
    },
    {
      key: "3",
      name: "Sakthi",
    },
  ];

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
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const showRejectModal = () => {
    setIsRejectModalOpen(true);
  };
  const rejectOk = () => {
    setIsRejectModalOpen(false);
  };
  const rejectCancel = () => {
    setIsRejectModalOpen(false);
  };

  return (
    <div>
      <h3 className="pages-title p-3"
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        Project Response
      </h3>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className=" mt-10"
      >
        <Table
          className="table-action"
          columns={dataname}
          dataSource={data}
          style={{
            width: "60%",
          }}
        />
      </div>
    </div>
  );
}

export default EmployerProject;
