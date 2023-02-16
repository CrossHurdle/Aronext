import React, { useState, useEffect } from "react";
import Api from "../../../../Api.js";
import { Col, Modal } from "react-bootstrap";
import { Row } from "antd";

const StudentListModal = ({ id, show, handleClose }) => {
  console.log('object1213', id)
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (show) {
      getoneUser();
    }
  }, [show]);

  const getoneUser = async () => {
    try {
      const result = await Api.get(`signup/student_getone/${id}`);
      if (result.data?.length) {
        setDetails(result.data[0]);
        console.log("5647",result)
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const result = [
    { key: "Name", value: details?.firstName },
    { key: "Phone Number", value: details?.phone },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result.map((item, index) => (
            <Row className="mb-3" key={index}>
              <Col className="fw-bold">{item.key}</Col>
              <Col>{item.value}</Col>
            </Row>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudentListModal;
