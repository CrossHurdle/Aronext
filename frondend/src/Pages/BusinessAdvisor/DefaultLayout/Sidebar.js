import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdPerson,
  MdAreaChart,
  MdMenuBook,
  MdAccountBalance,
  MdRequestPage,
  MdDetails,
  MdHome,
  MdSend,
} from "react-icons/md";
import { VscPersonAdd } from "react-icons/vsc";
import { AiFillProject } from "react-icons/ai";
import { FaBlogger, FaGraduationCap, FaSchool } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";

import "../../../Components/Css/Sidebar.scss";
import { Menu } from "antd";

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <Menu onClick={onClick} mode="inline" className="nav-list">
        <NavLink to="businessDashboard" activeClassName="main-nav-style">
          <MdHome className="Nav-Icon" />
          Dashboard
        </NavLink>
        {/* <NavLink to="AccountRegister" activeClassName="main-nav-style">
          <GiArchiveRegister className="Nav-Icon" />
          Register
        </NavLink>
        <SubMenu
          icon={<MdAccountBalance size={20} className="Nav-Icon1" />}
          title="Account Details"
        >
          <NavLink to="CompaniesAccountDetails">
            <FaGraduationCap className="Nav-Icon" />
            Companies
          </NavLink>
          <NavLink to="UserAccountDetails">
            <FaGraduationCap className="Nav-Icon" />
            User
          </NavLink>
          <NavLink to="StudentsAccountDetails">
            <FaGraduationCap className="Nav-Icon" />
            Students
          </NavLink>
        </SubMenu> */}
      </Menu>
    </div>
  );
}
export default Sidebar;
