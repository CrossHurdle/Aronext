import React, { useState } from "react";
import { Layout } from "antd";
import HeaderNavbar2 from "../../../Components/HeaderNavbar2/index";
import HeaderNavbar from "../../../Components/HeaderNavbar";
import JobSidebar from './sidebar/sidebar'
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function Joblayout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    
    <div>
    <HeaderNavbar onChange={handleChange} />
    {/* <JobSidebar collapsed={collapsed} /> */}
    <div
      // className={collapsed === true ? "main-content open" : "main-content"}
      >
      <Outlet />
    </div>
   
  </div>
  );
}

export default Joblayout;
