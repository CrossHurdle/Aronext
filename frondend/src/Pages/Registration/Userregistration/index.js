import React from "react";
import { Tabs } from "antd";
import PersonalDetails from "./PersonalDetails";
import QualificatoinDetails from "./QualificationDetails";

export default function Userregistration() {
  return (
    <div className="professionaltabs">
      <Tabs defaultActiveKey="1" className="p-3">
        <Tabs.TabPane
          className="tabtext p-3"
          tab="Personal Information"
          key="1"
        >
          <PersonalDetails />
        </Tabs.TabPane>
        <Tabs.TabPane className="tabtext p-3" tab="Qualification" key="2">
          <QualificatoinDetails />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
