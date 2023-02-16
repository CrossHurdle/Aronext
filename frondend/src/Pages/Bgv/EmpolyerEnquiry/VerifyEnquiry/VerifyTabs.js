import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { Link, useParams } from 'react-router-dom';
import OurProfile from './PoliceVerification';
// import Popup from '../Popup/Popup';
import EducationVerification from './EducationVerification.js';
import EmployerVerification from './EmployerVerification';
import PoliceVerification from './PoliceVerification';
import Api from '../../../../Api';

function VerifyTabs() {
  const [employData, setEmployData] = useState()
  console.log("emp", employData)
  const { id } = useParams()


  const eduVerify = employData?.educationVerification
  const empVerify = employData?.employerVerification
  const policeVerify = employData?.policeVerification
  console.log(eduVerify, "eeeee")
  const getEmp = () => {
    Api.get(`/bgvemp/getBgvEmp/${id}`).then((res) => {
      setEmployData(res.data);
    });
  };
  useEffect(() => {
    getEmp()
    console.log(id, "vriid")

  }, [])
  return (

    <div>
      {/* {eduVerify.length >0 && empVerify.length>0&& policeVerify.length>0} */}
      <Tabs defaultActiveKey="1" centered className="p-3">

        <Tabs.TabPane tab="Verify Education" key="1" >
          <EducationVerification />

        </Tabs.TabPane>
        <Tabs.TabPane tab="Verify Employer" key="2"  >
          <EmployerVerification />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Verify Police" key="3" >
          {/* <p style={{ marginLeft:"30px" }}>KYC Complaince</p> */}
          {/* <Popup/> */}
          <PoliceVerification />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default VerifyTabs


