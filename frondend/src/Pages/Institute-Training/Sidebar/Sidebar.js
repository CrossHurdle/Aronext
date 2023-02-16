// import React from "react";
// import { NavLink } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
// import { SiResurrectionremixos } from "react-icons/si";
// import { FaClipboardList } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import {
//   AiFillProject,
//   AiOutlineSolution,
//   AiFillShopping,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { MdOutlineDashboardCustomize, MdPerson } from "react-icons/md";
// // import { Dropdown } from "antd";
// import {
//   CaretDownOutlined,
//   SnippetsOutlined,
//   ScheduleOutlined,
// } from "@ant-design/icons";
// import { Dropdown, Menu, Space } from "antd";

// import { AiFillIdcard, AiOutlineTeam } from "react-icons/ai";
// import { FaAdversal, FaBlogger } from "react-icons/fa";
// import { Layout } from "antd";
// import "../../../Components/Css/Sidebar.scss";

// const { Sider } = Layout;

// const { SubMenu } = Menu;

// function Sidebar({ collapsed }) {
//   return (
//     <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
//       <div>
//         <div className="nav-list">
//           <NavLink
//             to="/institute/training-institute"
//             active
//             ClassName="main-nav-style"
//           >
//             <MdOutlineDashboardCustomize className="Nav-Icon" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/institute/training-institute/ourprofile"
//             ClassName="main-nav-style"
//           >
//             <MdPerson className="Nav-Icon" />
//             Our profile
//           </NavLink>
//           <NavLink
//             to="/institute/training-institute/seminar-request"
//             ClassName="main-nav-style"
//           >
//             <SiResurrectionremixos className="Nav-Icon" />
//             Seminar
//           </NavLink>
//           <NavLink
//             to="/institute/training-institute/courseinformation"
//             ClassName="main-nav-style"
//           >
//             <SiResurrectionremixos className="Nav-Icon" />
//             CourseInformation
//           </NavLink>

//           <NavLink
//             to="/institute/training-institute/admission"
//             ClassName="main-nav-style"
//           >
//             <AiFillProject className="Nav-Icon" />
//             Admission{" "}
//           </NavLink>
//           <NavLink
//             to="/institute/training-institute/application"
//             ClassName="main-nav-style"
//           >
//             <AiOutlineSolution className="Nav-Icon" />
//             Application{" "}
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

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
        <NavLink to="/institute/training-institute">
          <MdOutlineDashboardCustomize className="Nav-Icon" />
          Dashboard
        </NavLink>
        <NavLink to="/institute/training-institute/ourprofile">
          <MdPerson className="Nav-Icon" />
          My Profile
        </NavLink>

        <SubMenu icon={<AiFillProject size={20} />} title="Seminar">
          <NavLink to="/institute/training-institute/SeminarPost">
            <MdRequestPage className="Nav-Icon" />
            Post
          </NavLink>
          <NavLink to="/institute/training-institute/SeminarRequest">
            <MdSend className="Nav-Icon" />
            Response
          </NavLink>
        </SubMenu>
        <NavLink to="/institute/training-institute/advertisment">
          <MdMenuBook className="Nav-Icon" />
          Advertisement
        </NavLink>
        <NavLink to="/institute/training-institute/changeProfile">
          <VscPersonAdd className="Nav-Icon" />
          Edit Profile
        </NavLink>
      </Menu>
    </div>
  );
}
export default Sidebar;
