import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import TrainingInstitutionListModal from "./TrainingInstitutionListModal";
import TrainingInstitutionRejectModal from "./TrainingInstitutionRejectModal";

const btnStyles = { fontSize: "0.7rem" };

const TrainingInstitutionListActions = ({ record }) => {
    const [approve, setApproved] = useState(false);
    const [reject, setRejected] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [rejectModalOpen, setRejectModalOpen] = useState(false);
    const statusText = record?.isApproved == 1 || approve ? "Approved" : record?.isApproved === 2 || reject ? "Rejected" : [];

    const handleApprove = async () => {
        setApproved(true);
    };

    return (
        <>
            <TrainingInstitutionListModal id={record?.id} show={modalOpen} handleClose={() => setModalOpen(false)} />
            <TrainingInstitutionRejectModal id={record?.id} show={rejectModalOpen} handleClose={() => setRejectModalOpen(false)} handleReject={() => setRejected(true)} />
           
            <Button style={btnStyles} variant='primary' onClick={() => setModalOpen(true)}>View</Button>
            {
                record?.isApproved || approve || reject ? <span className="ms-2">{statusText}</span> :
                    <>
                        <Button style={btnStyles} className="mx-3" variant='success' onClick={handleApprove}>Approve</Button>
                        <Button style={btnStyles} variant='danger' onClick={() => setRejectModalOpen(true)}>Reject</Button>
                    </>
            }
        </>
    );
};



export default TrainingInstitutionListActions;