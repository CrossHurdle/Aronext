import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import HeaderNavbar2 from "../../../Components/HeaderNavbar2/index";
import DemoSidebar from "./Sidebar";
import "../../../Components/Css/Sidebar.scss";
import { Suspense } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import Aeronext from "../../../Images/Aeronext.png";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const { Content } = Layout;

function BgvDashboard() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const handleChange = () => {
    setCollapsed(!collapsed);
  };
  const UserName = localStorage.getItem("name");

  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/login");
  }, [logout]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("Role");
    localStorage.removeItem("id");
    localStorage.removeItem("admin-token");
    localStorage.removeItem("name");
    setLogout(true);
  };
  return (
    // <div>
    //     <div onChange={handleChange} />
    //     <div className="dashboards__headerNavs">
    //         <div className="dashboards__headerNavs--container">
    //             <div>
    //                 <span
    //                     className="navMenu p-2"
    //                     onClick={() => setCollapsed((prev) => !prev)}
    //                 >
    //                     {collapsed ? <AiOutlineClose /> : <GiHamburgerMenu />}
    //                 </span>
    //                 <img
    //                     className="feril_icon"
    //                     src={FerilIcon}
    //                     alt="add"
    //                     onClick={() => navigate("/")}
    //                 />
    //                 <span className="logo" onClick={() => navigate("/")}>
    //                     {UserName}
    //                 </span>
    //             </div>
    //             <div className="logoutAvatar" onClick={logoutHandler}>
    //                 {/* <Link to="/login">Logout</Link> */}
    //                 <HiUserCircle style={{ fontSize: 40, cursor: "pointer", color: "grey" }} />
    //             </div>
    //         </div>
    //     </div>
    //     <Sidebar collapsed={collapsed} />
    //     <div className={collapsed === true ? "main-content open" : "main-content"}>
    //         <Outlet />
    //     </div>
    // </div>
    <>
      <div>
        <div onChange={handleChange}>
          <div className="dashboards__headerNavs">
            <div className="dashboards__headerNavs--container">
              <div>
                <span
                  className="navMenu p-2"
                  onClick={() => setCollapsed((prev) => !prev)}
                >
                  {collapsed ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </span>
                <img
                  className="feril_icon"
                  src={Aeronext}
                  alt="add"
                  onClick={() => navigate("/")}
                />
              </div>
              <div className="logoutAvatar" onClick={logoutHandler}>
                {/* <Link to="/login">Logout</Link> */}
                <HiUserCircle
                  style={{ fontSize: 40, cursor: "pointer", color: "grey" }}
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <DemoSidebar collapsed={collapsed} />
      </div>
      <div
        className={collapsed === true ? "main-content open" : "main-content"}
      >
        <Outlet />
      </div>
    </>
  );
}

export default BgvDashboard;
