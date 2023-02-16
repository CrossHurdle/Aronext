import TrainingInstituteInformation from "./TrainingInstituteInformation";
import CourseInformation from "./CourseInformation";
import "../../../Components/Css/Professional/professionalstyle.scss";
import { Tabs } from "antd";

const tabs = [
  {
    label: `Training Institute Information`,
    children: <TrainingInstituteInformation />,
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
        <Tabs.TabPane tab="Training Institute Information" key="1">
          <TrainingInstituteInformation />{" "}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Course Information" key="2">
          <CourseInformation />{" "}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
