import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdPerson,
  MdAreaChart,
  MdMenuBook,
  MdRequestPage,
  MdDetails,
  MdHome,
  MdSend,
} from "react-icons/md";
import { VscPersonAdd } from "react-icons/vsc";
import { FaBlogger } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import "../../../Components/Css/Sidebar.scss";
import { Menu } from "antd";

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
     <Menu onClick={onClick} mode="inline"  className="nav-list">
     <NavLink to="" activeClassName="main-nav-style">
          <MdHome className="Nav-Icon" />
          Home
        </NavLink>
        <NavLink to="dashboard" activeClassName="main-nav-style">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Dashboard
        </NavLink>
       
        <NavLink to="profile" activeClassName="main-nav-style">
          <MdPerson className="Nav-Icon" />
          My Profile
        </NavLink>
        <NavLink to="areaInterest" activeClassName="main-nav-style">
          <MdAreaChart className="Nav-Icon" />
          Area of Interest
        </NavLink>
        <SubMenu icon={<AiFillProject size={20} className="Nav-Icon1"/>} title="Project">
          <NavLink to="request">
            <MdRequestPage className="Nav-Icon" />
            Request
          </NavLink>
          <NavLink to="pending">
            <MdSend className="Nav-Icon" />
            Response
          </NavLink>
          <NavLink to="approved">
            <MdSend className="Nav-Icon" />
            Approved
          </NavLink>
          
        </SubMenu>
        <NavLink to="learning" activeClassName="main-nav-style">
          <MdMenuBook className="Nav-Icon" />
          Learning
        </NavLink>
        <NavLink to="seminar">
          <MdMenuBook className="Nav-Icon" />
          seminar
        </NavLink>
        <NavLink to="blog" activeClassName="main-nav-style">
          <FaBlogger className="Nav-Icon" />
          Blog
        </NavLink>
    
        <NavLink to="internshipRequest" activeClassName="main-nav-style">
          <MdRequestPage className="Nav-Icon" />
          Internship Request
        </NavLink>
        <NavLink to="intershipDetails" activeClassName="main-nav-style">
          <MdDetails className="Nav-Icon" />
          Internship Details
        </NavLink>
       
     
        
        <NavLink to="changeProfile">
          <VscPersonAdd className="Nav-Icon" />
          Change Profile
        </NavLink>
      </Menu>
    </div>
  );
}
export default Sidebar;
