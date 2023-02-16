import React from "react";
import { Tabs } from "antd";
import '../../../Components/Css/Students/Student.scss';
import PersonalInfo from "./PersonalInfo";
import QualificationInfo from "./QualificationInfo";
import SemesterScore from "./SemesterScore";

function MyProfile() {
  return (
    <div className="Student-Myprofile">
      <Tabs defaultActiveKey="1"  className="p-3">
        <Tabs.TabPane className='tabtext p-3' tab="Personal Information" key="1">
          <PersonalInfo />
        </Tabs.TabPane>
        <Tabs.TabPane className='tabtext p-3' tab="Qualification Information" key="2">
          <QualificationInfo />
        </Tabs.TabPane>
        <Tabs.TabPane className='tabtext p-3' tab="Semester Score" key="3">
          <SemesterScore />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default MyProfile;
