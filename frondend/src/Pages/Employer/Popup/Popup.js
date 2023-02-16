import React, { useState , Link} from 'react';
import { Button, Modal } from 'antd';
import { Slider, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {  message, Upload } from 'antd';
import {
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import '../../../Components/Css/Employer/Popup.scss';


function Popup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state ,setState]= useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleNext = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const marks = {
    0:  {label: <strong>PanCard</strong>},
    100: {label: <strong>Address</strong>},
  };
  

  return (
    <div>
      <Button  className="pop-btn"
    onClick={showModal}>
      <MdOutlineDashboardCustomize className="Nav-Icon" />Dashboard
  </Button>
  <Modal title="KYC Complaince" open={isModalOpen} onNext={handleNext} onCancel={handleCancel} >
    <p>Complete KYC process to access the features</p>
    <Slider range marks={marks} defaultValue={[20, 50]}  />
    <br/>
    <h6>Upload PanCard Copy</h6>
    <p>Only 1 document in pdf,jpeg and png format with maximum 5Mb uploaded</p>
    <Upload >
    <Button icon={<UploadOutlined /> }type="primary">Choose file</Button>
  </Upload>
  <div style={{ display:"flex", justifyContent:"right" }}>
  <a href="#" >Need Help?</a>
  </div>
  </Modal>
  </div>
  )
}

export default Popup