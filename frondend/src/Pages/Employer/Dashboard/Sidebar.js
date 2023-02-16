import React from "react";
import { NavLink } from "react-router-dom";
import { SiResurrectionremixos } from "react-icons/si";
import { AiFillProject, AiOutlineSolution } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { SiSemanticweb } from "react-icons/si";
import { FaHandPaper } from "react-icons/fa";
import { MdPerson, MdOutlineDashboardCustomize, MdHome } from "react-icons/md";
import { SnippetsOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "../../../Components/Css/Students/Student.scss";
import "../../../Components/Css/Sidebar.scss";
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";
import { BsBack } from "react-icons/bs";

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <Menu onClick={onClick} mode="inline" className="nav-list">
      <NavLink to="/employer" active ClassName="main-nav-style">
          <MdHome className="Nav-Icon" />
       Home
        </NavLink>
        <NavLink to="/employer/dashboard" active ClassName="main-nav-style">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Dashboard
          {/* <Popup /> */}
        </NavLink>
        <NavLink to="/employer/OurProfile" ClassName="main-nav-style">
          <MdPerson className="Nav-Icon" />
          Ourprofile
        </NavLink>
        <NavLink to="/employer/Resume" ClassName="main-nav-style">
          <SiResurrectionremixos className="Nav-Icon" />
          Resume
        </NavLink>
        <NavLink to="/employer/Bgv" ClassName="main-nav-style">
          <BsBack className="Nav-Icon" />
          Bgv
        </NavLink>
        <SubMenu
          icon={<FaHandPaper size={20} className="Nav-Icon1" />}
          title="Jobs"
        >
          <NavLink to="/employer/CreateJobForm" ClassName="sub-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            Create Job
          </NavLink>
          <NavLink to="/employer/viewjob" ClassName="sub-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            View Jobs
          </NavLink>
          <NavLink to="/employer/jobrequest" ClassName="main-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            Job Request
          </NavLink>
          <NavLink to="/employer/form" ClassName="sub-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            Schedule Interview
          </NavLink>
        </SubMenu>
        <NavLink to="/employer/employerdetail" ClassName="main-nav-style">
          <BiMessageDetail className="Nav-Icon" />
          Employer Details
        </NavLink>
        {/* <NavLink to="/employer/Project" ClassName="main-nav-style">
          <AiFillProject className="Nav-Icon" />
          Project 
        </NavLink> */}
        <SubMenu icon={<FaHandPaper size={20} />} title="Project">
          <NavLink to="/employer/project_post" ClassName="sub-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            post
          </NavLink>
          <NavLink to="/employer/request" ClassName="main-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            view Project
          </NavLink>
          <NavLink to="/employer/projetrequest" ClassName="main-nav-style">
            <SnippetsOutlined className="Nav-Icon" />
            Request
          </NavLink>
          <NavLink to="/employer/response" ClassName="sub-nav-styles">
            <SnippetsOutlined className="Nav-Icon" />
            Response
          </NavLink>
        </SubMenu>
        <NavLink to="/employer/Internship" ClassName="main-nav-style">
          <AiOutlineSolution className="Nav-Icon" />
          Internship Request
        </NavLink>
        <SubMenu
          icon={<SiSemanticweb size={20} className="Nav-Icon1" />}
          title="Seminar"
        >
          <NavLink
            to="/employer/createSeminarRequest"
            ClassName="sub-nav-styles"
          >
            <SnippetsOutlined className="Nav-Icon" />
            Create Seminar
          </NavLink>
          <NavLink to="/employer/SeminarRequest" ClassName="sub-nav-styles">
            <SnippetsOutlined className="Nav-Icon" />
            View Seminar
          </NavLink>
        </SubMenu>
        <SubMenu
          icon={<SiSemanticweb size={20} className="Nav-Icon1" />}
          title="Contract Staffing"
        >
          <NavLink to="/employer/staff_post" ClassName="sub-nav-styles">
            <SnippetsOutlined className="Nav-Icon" />
            Post
          </NavLink>
          <NavLink to="/employer/staff_requirement" ClassName="sub-nav-styles">
            <SnippetsOutlined className="Nav-Icon" />
            Requirement
          </NavLink>
          <NavLink to="/employer/staff_search" ClassName="sub-nav-styles">
            <SnippetsOutlined className="Nav-Icon" />
            Applications
          </NavLink>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Sidebar;
