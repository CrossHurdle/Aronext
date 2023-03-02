import React from "react";
// import AccountantDashboard from "../Pages/Accountant/AccountantDashboard/AccountantDashboard";
import AccountantDashboard from "../Pages/Accountent/AccountantDashboard/AccountantDashboard";
// import AccountRegister from "../Pages/Accountant/AccountantRegister/AccountRegister";
import AccountRegister from "../Pages/Accountent/AccountantRegister/AccountRegister";
// import CompaniesAccountDetails from "../Pages/Accountant/AccountantAccountDetails/CompaniesAccountDetails";
// import UserAccountDetails from "../Pages/Accountant/AccountantAccountDetails/UserAccountDetails";
// import StudentsAccountDetails from "../Pages/Accountant/AccountantAccountDetails/StudentsAccountDetails";
import CompaniesAccountDetails from "../Pages/Accountent/AccountantAccountDetails/CompaniesAccountDetails";
import UserAccountDetails from "../Pages/Accountent/AccountantAccountDetails/UserAccountDetails";
import StudentsAccountDetails from "../Pages/Accountent/AccountantAccountDetails/StudentsAccountDetails";

const AccoutantDashboard = [
  {
    path: "AccountantDashboard",
    name: "AccountantDashboard",
    element: <AccountantDashboard />,
  },
  {
    path: "AccountRegister",
    name: "AccountRegisters",
    element: <AccountRegister />,
  },
  {
    path: "CompaniesAccountDetails",
    name: "CompaniesAccountDetails",
    element: <CompaniesAccountDetails />,
  },
  {
    path: "StudentsAccountDetails",
    name: "StudentsAccountDetails",
    element: <StudentsAccountDetails />,
  },
  {
    path: "UserAccountDetails",
    name: "UserAccountDetails",
    element: <UserAccountDetails />,
  },
];
export default AccoutantDashboard;
