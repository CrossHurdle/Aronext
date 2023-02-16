import CollegeDashboard from "../Pages/Institute-College/instituteDashboard/index";
import MyProfile from '../Pages/Institute-College/MyProfile/index';
import ApprovedList from '../Pages/Institute-College/application/ApprovedList';
import ApplicationResult from '../Pages/Institute-College/application/ApplicationResult'
import Blog from '../Pages/Institute-College/blog/BlogCollege'
import Seminar from '../Pages/Institute-College/Seminar/Seminar'
import InternshipCreate from '../Pages/Institute-College/internShip/InternShipCreate'


const Routers = [
  {
    path: "/college",
    name: "Dashboard",
    element: <CollegeDashboard/>,
  },
  {
    path: "/college/profile",
    name: "Our Profile",
    element: <MyProfile/>,
  },
  {
    path: "/college/application",
    name: "Application",
    element: <ApplicationResult/>,
  },
   {
    path: "/college/approved",
    name: "Approved List",
    element: <ApprovedList/>,
  },
  {
    path: "/college/blog",
    name: "College BLog",
    element: <Blog/>,
  },
  {
    path: "/college/seminar",
    name: "Seminar",
    element: <Seminar/>,
  },
  {
    path: "/college/intern",
    name: "Seminar",
    element: <InternshipCreate/>,
  },
];
export default Routers;
