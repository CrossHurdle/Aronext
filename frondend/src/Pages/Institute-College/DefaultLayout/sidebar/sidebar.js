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
import { Menu } from "antd";

const { SubMenu } = Menu;
function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <Menu onClick={onClick} mode="inline" className="nav-list">
        <NavLink to="" active ClassName="main-nav-style">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Dashboard
        </NavLink>
        <NavLink to="/college/profile" activeClassName="main-nav-active-style">
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
        <NavLink to="/college/seminar" activeClassName="main-nav-active-style">
          <MdRequestPage className="Nav-Icon" />
          Seminar Request
        </NavLink>
        <NavLink to="/college/seminar" activeClassName="main-nav-active-style">
          <MdDetails className="Nav-Icon" />
          Seminar Details
        </NavLink>
        <NavLink to="/college/profile" activeClassName="main-nav-active-style">
          <VscPersonAdd className="Nav-Icon" />
          Update Profile
        </NavLink>
      </Menu>
    </div>
  );
}

export default Sidebar;
