import React from "react";
import { NavLink } from "react-router-dom";
import { SiResurrectionremixos } from "react-icons/si";
import {
    AiFillProject,
    AiOutlineSolution,
    AiFillShopping,
    AiOutlineHome,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

import {
    MdOutlineDashboardCustomize,
    MdOutlineSubscriptions,
    MdPerson,
} from "react-icons/md";
import { CaretDownOutlined, SnippetsOutlined, ScheduleOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Layout } from "antd";
import '../../../Components/Css/Students/Student.scss';
// import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";


const { Sider } = Layout;

const { SubMenu } = Menu;


function Sidebar({ collapsed }) {
    const onClick = (e) => {
        console.log("click ", e);
    };

    return (
        // <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
        //     <div>
        //         <div className="nav-list">
        //             {/* <NavLink to="/employer" active ClassName="main-nav-style">
        //     <MdOutlineDashboardCustomize className="Nav-Icon" />
        //     Dashboard
        //   </NavLink> */}
        //             {/* <NavLink to="/employer" active ClassName="main-nav-style">
        //                 <Popup />
        //             </NavLink> */}
        //             <NavLink to="/Bgv" ClassName="main-nav-style">
        //                 <MdPerson className="Nav-Icon" />
        //                 Profile
        //             </NavLink>
        //             {/* <NavLink to="/employer/Resume" ClassName="main-nav-style">
        //                 <SiResurrectionremixos className="Nav-Icon" />
        //                 Resume
        //             </NavLink> */}

        //             {/* <nav>
        //                 <ul className="main-nav-style">
        //                     <li>
        //                         <label for="options">
        //                             <AiFillShopping className="Nav-Icon ms-3" />
        //                             Jobs
        //                             <CaretDownOutlined className="ms-2" />
        //                         </label>
        //                         <input type="checkbox" id="options" />
        //                         <ul class="submenu">
        //                             <li>
        //                                 <NavLink
        //                                     to="/employer/CreateJobForm"
        //                                     ClassName="sub-nav-style">
        //                                     <SnippetsOutlined className="Nav-Icon" />
        //                                     Create Job
        //                                 </NavLink>
        //                             </li>
        //                             <li className="side-drop">
        //                                 <NavLink to="/employer/viewjob" ClassName="main-nav-style">
        //                                     <SnippetsOutlined className="Nav-Icon mx-2" />
        //                                     View Job
        //                                 </NavLink>
        //                             </li>
        //                             <li>
        //                                 <NavLink to="/employer/form" ClassName="sub-nav-style">
        //                                     <SnippetsOutlined className="Nav-Icon" />
        //                                     Schedule Interview
        //                                 </NavLink>
        //                             </li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </nav> */}
        //             {/* 
        //             <NavLink to="/employer/employerdetail" ClassName="main-nav-style">
        //                 <BiMessageDetail className="Nav-Icon" />
        //                 Employer Details
        //             </NavLink> */}

        //             {/* <NavLink to="/employer/Project" ClassName="main-nav-style">
        //                 <AiFillProject className="Nav-Icon" />
        //                 Project Request
        //             </NavLink> */}

        //             <NavLink to="/Bgv" ClassName="main-nav-style">
        //                 <AiFillProject className="Nav-Icon" />
        //                 Enquiry

        //             </NavLink>


        //         </div>
        //     </div>
        // </div>
        <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
            <Menu onClick={onClick} mode="inline" className="nav-list">
                <NavLink to="/BgvHome/">
                    <AiOutlineHome className="Nav-Icon" />
                    Home
                </NavLink>
                <NavLink to="/BgvHome/OurProfile">
                    <MdPerson className="Nav-Icon" />
                    Profile
                </NavLink>
                <NavLink to="/BgvHome/Enquiry">
                    <AiFillProject className="Nav-Icon" />
                    Enquiry
                </NavLink>
                <NavLink to="/BgvHome/BgvSubscription">
                    <MdOutlineSubscriptions className="Nav-Icon" />
                    Subscription
                </NavLink>


            </Menu>
        </div>
    );
}

export default Sidebar;
