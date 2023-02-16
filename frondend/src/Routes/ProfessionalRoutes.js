import React from "react";

import ProfessionalDashboard from "../Pages/Professional/ProfessionalDashboard";
import ProfessionalProfile from "../Pages/Professional/MyProfile/index";
import AreaOfInterest from "../Pages/Professional/AreaOfInterest/index";
import ProfessionalBlog from "../Pages/Professional/ProfessionalBlog/index";
import UpdateProfile from "../Pages/Professional/UpdateProfile/index";
// import Jobs from "../Pages/Professional/ProfessionalDashboard/Jobs/jos"
import Jobs from "../Pages/Professional/ProfessionalDashboard/Jobs/jobs";
import JobSearch from "../Pages/Professional/ProfessionalDashboard/Jobs/Jobfilter";
import ProfessionalLearing from "../Pages/Professional/learing";
import JobInnerPage from "../Pages/Professional/ProfessionalDashboard/Jobs/JobInnerPage";
import ProfessionalSeminar from "../Pages/Professional/Seminar/ProfessionalSeminar";
import SeminarsInnerPage from "../Pages/Student/Seminar/SeminarInnerPage";
const ProfessionalRoutes = [
  {
    path: "",
    name: "ProfessionalDashboard",
    element: <ProfessionalDashboard />,
  },
  {
    path: "/professional/professionalprofile",
    name: "ProfessionalProfile",
    element: <ProfessionalProfile />,
  },
  {
    path: "/professional/AreaOfInterest",
    name: "AreaOfInterest",
    element: <AreaOfInterest />,
  },
  {
    path: "/professional/ProfessionalBlog",
    name: "ProfessionalBlog",
    element: <ProfessionalBlog />,
  },
  {
    path: "/professional/updateProfile",
    name: "Update Profile",
    element: <UpdateProfile />,
  },
  {
    path: "/professional/jobs",
    name: "professionaljobs",
    element: <Jobs />,
  },
  {
    path: "/professional/learing",
    name: "professionallearing",
    element: <ProfessionalLearing />,
  },
  {
    path: "/professional/jobfilter",
    name: "professionaljobfilter",
    element: <JobSearch />,
  },
  {
    path: "/professional/innerpage",
    name: "JobInnerPage",
    element: <JobInnerPage />,
  },
  {
    path: "/professional/seminar",
    name: "seminar",
    element: <ProfessionalSeminar />,
  },
  {
    path: "seminar/viewsinnerpage",
    name: "viewsinnerpage",
    element: <SeminarsInnerPage />,
  },
];
export default ProfessionalRoutes;
