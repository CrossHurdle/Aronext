import React, { Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminLogin from "./Pages/Login/AdminLogin";
import Homepage from "./Pages/Homepage";
import BlogsPage from "./Pages/Blog/BlogsPage";
import Blog from "./Pages/Blog";
import CreateBlog from "./Pages/Blog/CreateBlog";
import Employer from "./Pages/Employer/Dashboard";
import AdminRoutes from "./Routes/AdminRoutes";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy/index";
import EmployerRoutes from "./Routes/EmployerRoutes";
import JobRoutes from "./Routes/JobRoutes";
import DefaultLayouts from "./Pages/Student/DefaultLayout";
import StudentRoutes from "./Routes/StudentRoutes";
import ProfessionalDefaultLayout from "./Pages/Professional/ProfessionalDefaultLayout";
import EmployeeRoutes from "./Routes/ProfessionalRoutes";
import ErrorMessage from "./Components/Errorpage/ErrorMessage";
import School from "./Pages/Institute-Schools/Layouts/Defaultlayout";
import SchoolRoutes from "./Routes/SchoolRoutes";
import Traning from "./Pages/Institute-Training/Layouts/Defaultlayout";
import TrainingInstituteRoutes from "./Routes/TrainingInstituteRoutes";
import CollegeRoutes from "./Routes/CollegeRoutes";
import College from "./Pages/Institute-College/DefaultLayout/index";
import Forgetpassword from "./Pages/Login/Forgetpassword";
import Aboutus from "./Pages/Aboutus/index";
import Contactus from "./Pages/Contactus/index";
import Joblayout from "./Pages/joblist/DefaultLayout";
import Feedback from "./Components/Footer/feedback/feedback";
import TrustAndSafety from "./Components/Footer/TrustandSafety/TrustAndSafety";
import Term from "./Components/Footer/TermCondition/Term";
import Services from "./Pages/Services/Services";
import FraudAlert from "./Components/Footer/FraudAlert/FraudAlert";
import HelpCenter from "./Components/Footer/HelpCenter";
import Site from "./Components/Footer/SiteMap/Site";
import Career from "./Components/Footer/Career/Career";
import Client from "./Components/Footer/Clients/Client";
import Dashboard from "./Pages/Admin/Dashboard/AdminSidebar";
import BgvRoutes from "./Routes/BgvRoutes";
import BgvDashboard from "./Pages/Bgv/Dashboard";

const App = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        {/* Footer Route */}
        <Route path="/termsandcondition" element={<Term />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/sitemap" element={<Site />} />
        <Route path="/career" element={<Career />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogsPage" element={<BlogsPage />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="*" element={<ErrorMessage />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/trustsafety" element={<TrustAndSafety />} />
        <Route path="/fraudalert" element={<FraudAlert />} />

        <Route path="/student" element={<DefaultLayouts />} />
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute component={Dashboard} token={"admin-token"} />
          }
        > */}
        {/* {AdminRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route> */}
        <Route path="/student" element={<DefaultLayouts />}>
          {StudentRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        {/* <Route
          path="/BgvHome"
          element={
            <ProtectedRoute component={BgvDashboard} token={"stu-token"} />
          }
        >
          {BgvRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route> */}
        {/* <Route
          path="/professional"
          element={
            <ProtectedRoute
              component={ProfessionalDefaultLayout}
              token={"pro_token"}
            />
          }
        >
          {EmployeeRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route> */}
        {/* <Route
          path="/employer"
          element={
            <ProtectedRoute component={Employer} token={"employer_token"} />
          }
        >
          {EmployerRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>

        <Route
          path="/college"
          element={
            <ProtectedRoute component={College} token={"college-token"} />
          }
        >
          {CollegeRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route
          path="/institute"
          element={
            <ProtectedRoute component={Traning} token={"institute_token"} />
          }
        >
          {TrainingInstituteRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="" element={<Joblayout />}>
          {JobRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route> */}
      </Routes>
    </Suspense>
  );
};
export default App;
