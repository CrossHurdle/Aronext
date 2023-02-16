import axios from 'axios';
import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';


const StudentRejectModal = ({ show, handleClose, handleReject, id }) => {
    const [rejectReason, setRejectReason] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = await axios.put(`signup/update/${id}`, { status: "2", rejectedReasonByAdmin: JSON.stringify(rejectReason || "") });
            if (result.data) {
                handleReject();
                handleClose();
            }
        } catch (error) {
            console.log("Error", error);
        }
        handleReject();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Reject Student</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId='rejectReason'>
                        <Form.Label>Reason to reject  </Form.Label>
                        <Form.Control as="textarea" rows={5} value={rejectReason} onChange={e => setRejectReason(e.target.value)} />
                    </Form.Group>

                    <div className="text-center mt-5">
                    <button className="button1" type='submit' onClick={handleClose}>Submit</button>
                        <button className="button2 ms-3" type='reset'>Cancel</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default StudentRejectModal;