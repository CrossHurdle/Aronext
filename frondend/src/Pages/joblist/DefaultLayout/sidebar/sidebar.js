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
import "../../../../Components/Css/Sidebar.scss";

function JobSidebar({ collapsed }) {
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <div>
        <div className="nav-list">
          <NavLink to="" activeClassName="main-nav-active-style">
            <MdOutlineDashboardCustomize className="Nav-Icon" />
            Dashboard
          </NavLink>
          <NavLink
            to="/college/profile"
            activeClassName="main-nav-active-style"
          >
            <MdPerson className="Nav-Icon" />
            Profile
          </NavLink>
          <NavLink
            to="/college/application"
            activeClassName="main-nav-active-style"
          >
            <MdMenuBook className="Nav-Icon" />
            Received Application
          </NavLink>
          <NavLink
            to="/college/application"
            activeClassName="main-nav-active-style"
          >
            <MdMenuBook className="Nav-Icon" />
            Approved List
          </NavLink>
          <NavLink to="/college/blog" activeClassName="main-nav-active-style">
            <FaBlogger className="Nav-Icon" />
            Blog
          </NavLink>
          <NavLink
            to="/college/seminar"
            activeClassName="main-nav-active-style"
          >
            <MdRequestPage className="Nav-Icon" />
            Seminar Request
          </NavLink>
          <NavLink
            to="/college/seminar"
            activeClassName="main-nav-active-style"
          >
            <MdDetails className="Nav-Icon" />
            Seminar Details
          </NavLink>
          <NavLink
            to="/college/profile"
            activeClassName="main-nav-active-style"
          >
            <VscPersonAdd className="Nav-Icon" />
            Update Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default JobSidebar;
