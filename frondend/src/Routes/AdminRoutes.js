import React from "react";
import AdminDashboard from "../Pages/Admin/AdminDashboard/index";
import AdminBlog from "../Pages/Admin/AdminBlog/AdminBlogform";
import StudentApprovalList from "../Pages/Admin/Dashboard/StudentList";
import ProfessionalApprovalList from "../Pages/Admin/Dashboard/ProfessionalList";
import EmployerApprovalList from "../Pages/Admin/Dashboard/EmployerList";
import SchoolApprovalList from "../Pages/Admin/Dashboard/SchoolList";
import CollegeApprovalList from "../Pages/Admin/Dashboard/CollegeList";
import TrainingInstitutionList from "../Pages/Admin/Dashboard/TrainingInstitutionList";
import Blogslist from "../Pages/Admin/DashboardTablelist/Bloglist";
import Advertisementlist from "../Pages/Admin/DashboardTablelist/Advertismentlist";
import Jobpostlist from "../Pages/Admin/DashboardTablelist/Jobpostlist";
import Intershiprequest from "../Pages/Admin/DashboardTablelist/Intershiprequest";
import AboutUs from "../Pages/Admin/CreateFields/CreatAboutus";
import Companylist from "../Pages/Admin/DashboardTablelist/Companylist";
import CompanyListForm from "../Pages/Admin/AdminCompanyList/CompanyListForm";


const AdminRoutes = [
  {
    path: "/admin",
    name: "AdminDashboard",
    element: <AdminDashboard />,
  },
  {
    path:"Companylist",
    name:"Companylist",
    element:<Companylist/>,
  },
  {
    path:"/admin/Companylist/Companyform",
    name:"Companyform",
    element:<CompanyListForm/>,
  },
  {
    path: "Blogs/Blogform",
    name: "Blog",
    element: <AdminBlog />,
  },
  {
    path: "StudentList",
    name: "StudentApprovalList",
    element: <StudentApprovalList />,
  },
  {
    path: "ProfessionalList",
    name: "ProfessionalApprovalList",
    element: <ProfessionalApprovalList />,
  },
  {
    path: "EmployerList",
    name: "EmployerApprovalList",
    element: <EmployerApprovalList />,
  },
  {
    path: "SchoolList",
    name: "SchoolApprovalList",
    element: <SchoolApprovalList />,
  },
  {
    path: "CollegeList",
    name: "CollegeApprovalList",
    element: <CollegeApprovalList />,
  },
  {
    path: "TrainingInstitutionList",
    name: "TrainingInstitutionList",
    element: <TrainingInstitutionList />,
  },
  {
    path: "Blogs",
    name: "Blogs",
    element: <Blogslist />,
  },
  {
    path: "Advertisementlist",
    name: "Advertisementlist",
    element: <Advertisementlist />,
  },
  {
    path: "Jobpostlist",
    name: "Jobpostlist",
    element: <Jobpostlist />,
  },
  {

    path: "Aboutus",
    name: "aboutus",
    element: <AboutUs />,

    path: "intershiprequest",
    name: "intershiprequest",
    element: <Intershiprequest />,
  },
];
export default AdminRoutes;
