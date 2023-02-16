import React from "react";
import { Tabs } from "antd";
import '../../../Components/Css/Students/Student.scss';
import PersonalInfo from "./InstituteInfo";
import CourseInfo from "./CourseInfo";

function MyProfile() {
  return (
    <div className="Student-Myprofile" style={{background:'white'}}>
      <Tabs defaultActiveKey="1"  className="p-2">
        <Tabs.TabPane tab="Institute Information" key="1">
          <PersonalInfo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Course Information" key="2">
          <CourseInfo />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default MyProfile;
