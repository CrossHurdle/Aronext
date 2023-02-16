import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdPerson,
  MdAreaChart,
  MdMenuBook,
  MdRequestPage,
  MdDetails,
} from "react-icons/md";
import { VscPersonAdd } from "react-icons/vsc";
import { FaBlogger } from "react-icons/fa";
import "../../../Components/Css/Students/Student.scss";
import { Menu } from "antd";

function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <Menu onClick={onClick} mode="inline" className="nav-list">
        <NavLink to="" activeClassName="main-nav-style">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Dashboard
        </NavLink>
        <NavLink
          to="/professional/professionalprofile"
          ClassName="main-nav-style"
        >
          <MdPerson className="Nav-Icon" />
          My profile
        </NavLink>
        <NavLink to="/professional/AreaOfInterest" ClassName="main-nav-style">
          <MdAreaChart className="Nav-Icon" />
          Area of interest
        </NavLink>
        <NavLink to="/professional/jobs" ClassName="main-nav-style">
          <MdAreaChart className="Nav-Icon" />
          Jobs
        </NavLink>
        <NavLink to="/professional/seminar" ClassName="main-nav-style">
          <MdAreaChart className="Nav-Icon" />
          Seminar
        </NavLink>
        <NavLink to="/professional/learing" ClassName="main-nav-style">
          <MdMenuBook className="Nav-Icon" />
          Learning
        </NavLink>
        <NavLink to="/professional/ProfessionalBlog" ClassName="main-nav-style">
          <FaBlogger className="Nav-Icon" />
          Blog
        </NavLink>

        <NavLink to="/professional/updateProfile" ClassName="main-nav-style">
          <VscPersonAdd className="Nav-Icon" />
          Update profile
        </NavLink>
      </Menu>
    </div>
  );
}

export default Sidebar;
