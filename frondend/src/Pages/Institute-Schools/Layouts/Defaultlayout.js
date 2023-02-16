import React, { useState } from "react";
// import "./SchoolLayoutstyle.css";
import { Layout } from "antd";
import HeaderNavbar2 from "../../../Components/HeaderNavbar2/index";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routers from "../../../Routes/SchoolRoutes";
const { Content } = Layout;

function Defaultlayout() {
  const [collapsed, setCollapsed] = useState(true);

  const handleChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <HeaderNavbar2 onChange={handleChange} />
      <Sidebar collapsed={collapsed} />
      <div
        className={collapsed === true ? "main-content open" : "main-content"}>
        <Outlet />
      </div>
      
    </div>
  );
}

export default Defaultlayout;
