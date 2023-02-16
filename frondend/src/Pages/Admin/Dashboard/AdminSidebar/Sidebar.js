import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdPerson,
  MdAreaChart,
  MdMenuBook,
  MdRequestPage,
  MdDetails,
  MdSend,
  MdSchool,
  MdOutlinePersonPin,
} from "react-icons/md";
import { VscPersonAdd } from "react-icons/vsc";
import { FaBlogger, FaGraduationCap, FaSchool } from "react-icons/fa";
import { AiFillProject, AiOutlineUser } from "react-icons/ai";
import { BiBuildings, BiBuilding } from "react-icons/bi";
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
        <NavLink to="">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Dashboard
        </NavLink>
        <NavLink to="Companylist">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          company List
        </NavLink>
        <SubMenu icon={<AiFillProject size={20}className="Nav-Icon1" />} title="Approval">
        <NavLink to="StudentList">
          <FaGraduationCap className="Nav-Icon" />
          Student
        </NavLink>
        <NavLink to="ProfessionalList">
          <MdOutlinePersonPin className="Nav-Icon" />
          Professional
        </NavLink>
        <NavLink to="EmployerList">
          <AiOutlineUser className="Nav-Icon" />
          Employer
        </NavLink>
        <NavLink to="TrainingInstitutionList">
          <BiBuilding className="Nav-Icon" />
          Institute
        </NavLink>
        <NavLink to="SchoolList">
          <FaSchool className="Nav-Icon" />
          School
        </NavLink>
        <NavLink to="CollegeList">
          <BiBuildings className="Nav-Icon" />
          College
        </NavLink>
        </SubMenu>
        <NavLink to="Advertisementlist">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Advertisementlist
        </NavLink>
        <NavLink to="Jobpostlist">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Jobpostlist
        </NavLink>
        <NavLink to="Blogs">
          <FaBlogger className="Nav-Icon" />
          Blog
        </NavLink>
        <NavLink to="Aboutus">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          AboutUs
        </NavLink>
      </Menu>
    </div>
  );
}
export default Sidebar;
