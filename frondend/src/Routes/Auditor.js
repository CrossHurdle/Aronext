import React from "react";
import StudentDashboard from "../Pages/Student/StudentDashboard";
import MyProfile from "../Pages/Student/MyProfile";
import AreaInterest from "../Pages/Student/AreaInterest";
import Learning from "../Pages/Student/Learning";
import Blog from "../Pages/Student/Blog";
import InternshipRequest from "../Pages/Student/InternshipRequest";
import IntershipDetails from "../Pages/Student/IntershipDetails";
import ChangeProfile from "../Pages/Student/ChangeProfile";
import Forgetpassword from "../Pages/Login/Forgetpassword";
import StudentIntern from "../Pages/Student/StudentDashboard/Intern/intern";
import Request from "../Pages/Student/Project/Request";
import Pending from "../Pages/Student/Project/pending";
import Home from "../Pages/Student/Home/Home";
import Approved from "../Pages/Student/Project/Approved";
import Viewprojects from "../Pages/Student/Project/Viewprojects";
import Seminar from "../Pages/Student/Seminar/Seminar";
import SeminarsInnerPage from "../Pages/Student/Seminar/SeminarInnerPage";
import Complainces from "../Pages/Auditor/complainces/Complainces";
import Dashboard from "../Pages/Auditor/Dasboard/Dashboard";
import Company from "../Pages/Auditor/AuditorRegistration/Company";

const AuditorRoutes = [
  {
    path: "",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "company",
    name: "Company",
    element: <Company />,
  },
  {
    path: "complainces",
    name: "Complainces",
    element: <Complainces />,
  },
  //   {
  //     path: "dashboard",
  //     name: "dashboard",
  //     element: <StudentDashboard />,
  //   },
  //   {
  //     path: "profile",
  //     name: "MyProfile",
  //     element: <MyProfile />,
  //   },
  //   {
  //     path: "areaInterest",
  //     name: "AreaInterest",
  //     element: <AreaInterest />,
  //   },
  //   {
  //     path: "learning",
  //     name: "Learning",
  //     element: <Learning />,
  //   },
  //   {
  //     path: "blog",
  //     name: "Blog",
  //     element: <Blog />,
  //   },
  //   {
  //     path: "internshipRequest",
  //     name: "InternshipRequest",
  //     element: <InternshipRequest />,
  //   },
  //   {
  //     path: "intershipDetails",
  //     name: "IntershipDetails",
  //     element: <IntershipDetails />,
  //   },
  //   {
  //     path: "changeProfile",
  //     name: "ChangeProfile",
  //     element: <ChangeProfile />,
  //   },
  //   {
  //     path: "/student/intern",
  //     name: "studentintern",
  //     element: <StudentIntern />,
  //   },
  //   {
  //     path: "request",
  //     name: "Request",
  //     element: <Request />,
  //   },
  //   {
  //     path: "pending",
  //     name: "Pending",
  //     element: <Pending />,
  //   },

  //   {
  //     path: "seminar",
  //     name: "seminar",
  //     element: <Seminar />,
  //   },
  //   {
  //     path: "seminar/viewsinnerpage",
  //     name: "viewsinnerpage",
  //     element: <SeminarsInnerPage />,
  //   },
];
export default AuditorRoutes;
