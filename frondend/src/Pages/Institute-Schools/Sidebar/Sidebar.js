import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { SiResurrectionremixos } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AiFillProject,
  AiOutlineSolution,
  AiFillShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineDashboardCustomize, MdPerson } from "react-icons/md";
import { Dropdown, Menu, Space } from "antd";

import { Layout } from "antd";
import "../../../Components/Css/Sidebar.scss";

const { Sider } = Layout;

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <div>
        <div className="nav-list">
          <NavLink to="/institute/school" active ClassName="main-nav-style">
            <MdOutlineDashboardCustomize className="Nav-Icon" />
            Dashboard
          </NavLink>
          <NavLink to="/institute/school/ourprofile" ClassName="main-nav-style">
            <MdPerson className="Nav-Icon" />
            Our profile
          </NavLink>
          <NavLink
            to="/institute/school/seminar-request"
            ClassName="main-nav-style">
            <SiResurrectionremixos className="Nav-Icon" />
            Seminar Request
          </NavLink>

          <NavLink to="/institute/school/admission" ClassName="main-nav-style">
            <AiFillProject className="Nav-Icon" />
            Admission{" "}
          </NavLink>
          <NavLink
            to="/institute/school/application"
            ClassName="main-nav-style">
            <AiOutlineSolution className="Nav-Icon" />
            Application{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
