import SchoolInformation from "./SchoolInformation";
import CourseInformation from "./CourseInformation";
import { Tabs } from "antd";

const tabs = [
  {
    label: `School Information`,
    children: <SchoolInformation />,
  },
  {
    label: `Course Information`,
    children: <CourseInformation />,
  },
];

export default function OurProfile() {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered className="p-2">
        <Tabs.TabPane tab="School Information" key="1">
          <SchoolInformation />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Course Information" key="2">
          <CourseInformation />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
