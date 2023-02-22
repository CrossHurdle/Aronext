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
      <Menu onClick={onClick} mode="inline" className="nav-list">
        <NavLink to="" activeClassName="main-nav-style">
          <MdHome className="Nav-Icon" />
          Dashboard
        </NavLink>
        <NavLink to="registration" activeClassName="main-nav-style">
          <MdHome className="Nav-Icon" />
          Registration
        </NavLink>
        {/* <NavLink to="company" activeClassName="main-nav-style">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Company
        </NavLink> */}
        <SubMenu
          icon={<MdOutlineDashboardCustomize size={20} className="Nav-Icon1" />}
          title="Company"
        >
          <NavLink to="company">
            <MdRequestPage className="Nav-Icon" />
            Company
          </NavLink>
          <NavLink to="user">
            <MdSend className="Nav-Icon" />
            User
          </NavLink>
          <NavLink to="accountant">
            <MdSend className="Nav-Icon" />
            Accountant
          </NavLink>
        </SubMenu>

        <NavLink to="complainces" activeClassName="main-nav-style">
          <MdPerson className="Nav-Icon" />
          complainces
        </NavLink>
      </Menu>
    </div>
  );
}
export default Sidebar;
