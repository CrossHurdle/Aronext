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
// import { Dropdown } from "antd";
import {
  CaretDownOutlined,
  SnippetsOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

import { AiFillIdcard, AiOutlineTeam } from "react-icons/ai";
import { FaAdversal, FaBlogger } from "react-icons/fa";
import { Layout } from "antd";
import "./Sidebar.css";

const { Sider } = Layout;

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <div>
        <div className="nav-list">
          <NavLink to="/institute" active ClassName="main-nav-style">
            <MdOutlineDashboardCustomize className="Nav-Icon" />
            Dashboard
          </NavLink>
          <NavLink to="/institute/ourprofile" ClassName="main-nav-style">
            <MdPerson className="Nav-Icon" />
            Ourprofile
          </NavLink>
          <NavLink to="/employer/Resume" ClassName="main-nav-style">
            <SiResurrectionremixos className="Nav-Icon" />
            Resume
          </NavLink>
          <nav>
            <ul className="main-nav-style">
              <li>
                <label for="options" style={{ fontFamily: "sans-serif" }}>
                  <AiFillShopping className="Nav-Icon mx-3" />
                  Jobs
                  <CaretDownOutlined className="mx-3" />
                </label>
                <input type="checkbox" id="options" />
                <ul className="submenu">
                  <li className="side-drop">
                    <NavLink
                      to="/employer/CreateJobForm"
                      ClassName="main-nav-style">
                      <SnippetsOutlined className="Nav-Icon mx-2" />
                      Create Job
                    </NavLink>
                  </li>
                  <li className="side-drop">
                    <NavLink to="" ClassName="main-nav-style">
                      <SnippetsOutlined className="Nav-Icon mx-2" />
                      View Job
                    </NavLink>
                  </li>
                  <li className="side-drop">
                    <NavLink to="/employer/form" ClassName="main-nav-style">
                      <ScheduleOutlined className="Nav-Icon mx-2" />
                      Schedule Interview
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <NavLink to="/employer/Project" ClassName="main-nav-style">
            <AiFillProject className="Nav-Icon" />
            Project Request
          </NavLink>
          <NavLink to="/employer/Internship" ClassName="main-nav-style">
            <AiOutlineSolution className="Nav-Icon" />
            Internship Request
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
