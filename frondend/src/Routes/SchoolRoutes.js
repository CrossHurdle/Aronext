
import SchoolDashboard from "../Pages/Institute-Schools/Components/SchoolDashboard";
import OurProfile from "../Pages/Institute-Schools/Components/OurProfile";
import SeminarRequest from "../Pages/Institute-Schools/Components/SeminarRequest";
import Admission from "../Pages/Institute-Schools/Components/Admission";
import Application from "../Pages/Institute-Schools/Components/Application";

const Routers = [
  {
    path: "school",
    name: "Dashboard",
    element: <SchoolDashboard />,
  },
  {
    path: "school/ourprofile",
    name: "Our Profile",
    element: <OurProfile />,
  },
  {
    path: "school/seminar-request",
    name: "SeminarRequest",
    element: <SeminarRequest />,
  },
  {
    path: "school/admission",
    name: "Admission",
    element: <Admission />,
  },
  {
    path: "school/application",
    name: "Application",
    element: <Application />,
  },


];
export default Routers;
