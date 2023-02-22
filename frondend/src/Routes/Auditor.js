import React from "react";
import Complainces from "../Pages/Auditor/complainces/Complainces";
import Dashboard from "../Pages/Auditor/Dasboard/Dashboard";
import Company from "../Pages/Auditor/AuditorRegistration/Company";
import Registration from "../Pages/Auditor/Registration/Registration";
import User from "../Pages/Auditor/AuditorRegistration/User";
import Accountant from "../Pages/Auditor/AuditorRegistration/Accountant";

const AuditorRoutes = [
  {
    path: "registration",
    name: "Registration",
    element: <Registration />,
  },
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
    path: "user",
    name: "User",
    element: <User />,
  },
  {
    path: "accountant",
    name: "Accountant",
    element: <Accountant />,
  },
  {
    path: "complainces",
    name: "Complainces",
    element: <Complainces />,
  },
];
export default AuditorRoutes;
