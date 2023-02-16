import React from "react";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import CreateJobForm from "../Pages/Employer/CreateJobForm";
import EmployerDashboard from "../Pages/Employer/EmployerDashboard";
import OurProfile from "../Pages/Employer/OurProfile/OurProfile";
import TabsProfile from "../Pages/Employer/OurProfile/TabsProfile";
import EmployerInternship from "../Pages/Employer/EmployerIntership/index";
import EmployerProject from "../Pages/Employer/EmployerProject/EmployerProject";
import ScheduleForm from "../Pages/Employer/CreateJobForm/ScheduleForm";
import ViewJob from "../Pages/Employer/CreateJobForm/ViewJob";
import EmployerResume from "../Pages/Employer/EmployerResume/EmployerResume";
import ResumeDetail from "../Pages/Employer/EmployerResume/ResumeDetail";
import CreateSeminarRequest from "../Pages/Employer/seminar/EmployerSeminar";
import ViewSeminar from "../Components/seminar/ViewSeminar";
import EmployerDetail from "../Pages/Employer/EmployerDetail/EmployerDetail";
import ReviewPage from "../Pages/Employer/CreateJobForm/ReviewPage";
import SubscriptionPage from "../Pages/Employer/SubscriptionPage";
import BackgroundVarifList from "../Pages/Employer/Backgroundverification/BgvList";
import BgvForm from "../Pages/Employer/Backgroundverification/BgvForm";
import BgvDetails from "../Pages/Employer/Backgroundverification/BgvDetails";
import StaffPost from "../Pages/Employer/ContractStaffing/StaffPost";
import StaffRequirement from "../Pages/Employer/ContractStaffing/StaffRequirement";
import StaffSearch from "../Pages/Employer/ContractStaffing/StaffSearch/index";
import ViewInnerPage from "../Pages/Employer/CreateJobForm/ViewInnerPage";
import Projectpost from "../Pages/Employer/projectpost/Projectpost";
import SeminarRequest from "../Pages/Employer/seminar/SeminarRequest";
import SeminarInnerPage from "../Pages/Employer/seminar/SeminarInnerPage";
import Request from "../Pages/Employer/Request";
import Response from "../Pages/Employer/Response";
import Home from "../Pages/Employer/Home/index"
import RequestProject from "../Pages/Employer/projectpost/Request";
import JobRequest from "../Pages/Employer/CreateJobForm/JobRequest";
import ViewProject from "../Pages/Employer/projectpost/ViewProject";

const EmployerRoutes = [
  {
    path: "/employer/dashboard",
    name: "EmployerDashboard",
    element: <EmployerDashboard />,
  },
  {
    path: "/employer",
    name: "EmployerHome",
    element: <Home />,
  },
  {
    path: "/employer/employerdetail",
    name: "EmployerDetail",
    element: <EmployerDetail />,
  },
  {
    path: "/employer/CreateJobForm",
    name: "Employerform",
    element: <CreateJobForm />,
  },
  {
    path: "/employer/form",
    name: "Employerform",
    element: <ScheduleForm />,
  },
  {
    path: "/employer/OurProfile",
    name: "profileform",
    element: <TabsProfile />,
  },
  {
    path: "/employer/Resume",
    name: "",
    element: <EmployerResume />,
  },
  {
    path: "/employer/Project",
    name: "",
    element: <EmployerProject />,
  },
  {
    path:"/employer/request",
    name:"",
    element:<Request/>,
  },
  {
      path:"/employer/response",
      name:"",
      element:<EmployerProject/>,
  },
  {
    path: "/employer/Internship",
    name: "profileform",
    element: <EmployerInternship />,
  },
  {
    path: "/employer/createSeminarRequest",
    name: "Create Seminar Request",
    element: <CreateSeminarRequest />,
  },
  {
    path: "/employer/subscription",
    name: "sebscription page",
    element: <SubscriptionPage />,
  },
  {
    path: "/employer/SeminarRequest",
    name: "SeminarRequest",
    element: <SeminarRequest />,
  },
  {
    path: "/employer/SeminarRequest/SeminarInnerPage",
    name: "SeminarInnerPage",
    element: <SeminarInnerPage />,
  },
  {
    path: "/employer/viewjob",
    name: "viewjob",
    element: <ViewJob />,
  },
  {
    path: "/employer/jobrequest",
    name: "viewjob",
    element: <JobRequest />,
  },
  {
    path: "/employer/viewjob/innerpage",
    name: "",
    element: <ViewInnerPage />,
  },
  {
    path: "/employer/reviewpage",
    element: <ReviewPage />,
  },
  {
    path: "/employer/Bgv",
    element: <BackgroundVarifList />,
  },
  {
    path: "/employer/Bgvform/:id",
    element: <BgvForm />,
  },
  {
    path: "/employer/BgvDetails/:id",
    element: <BgvDetails />,
  },
  {
    path: "/employer/staff_post",
    name: "staff post",
    element: <StaffPost />,
  },
  {
    path: "/employer/staff_requirement",
    name: "staff requirement",
    element: <StaffRequirement />,
  },
  {
    path: "/employer/staff_search",
    name: "staff search",
    element: <StaffSearch />,
  },
  {
    path: "/employer/project_post",
    name: "projectpost",
    element: <Projectpost />,
  },
  {
    path: "/employer/request_project",
    name: "projectRequest",
    element: <ViewProject />,
  },
  {
    path: "/employer/projetrequest",
    name: "projectRequest",
    element: <RequestProject />,
  },
];
export default EmployerRoutes;
