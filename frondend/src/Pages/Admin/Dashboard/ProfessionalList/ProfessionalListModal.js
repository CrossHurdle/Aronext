import React from 'react';
import { useState } from 'react';
import { Col, Modal } from 'react-bootstrap';
import { Row } from 'antd';

const ProfessionalListModal = ({ id, show, handleClose }) => {
    
    const result = [
        { key: "Name", value: "nahhs" },
        { key: "Phone Number", value: 854365346476 },
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Professional Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {result.map((item, index) =>
                        <Row className="mb-3" key={index}>
                            <Col className='fw-bold'>{item.key}</Col>
                            <Col>{item.value}</Col>
                        </Row>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ProfessionalListModal;