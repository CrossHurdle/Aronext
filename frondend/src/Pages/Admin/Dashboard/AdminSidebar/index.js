import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import HeaderNavBar2 from "../../../../Components/HeaderNavbar2";
import DemoSidebar from "./Sidebar";
import "../../../../Components/Css/Sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Aeronext from "../../../../Images/Aeronext.png";

import { HiUserCircle } from "react-icons/hi";

function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const handleChange = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  const UserName = localStorage.getItem("name");

  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/adminlogin");
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
                {/* <span className="logo" onClick={() => navigate("/")}>
                  {UserName}
                </span> */}
              </div>
              <div onClick={logoutHandler}>
                <Link to="/login" className="navMenus">
                  Logout
                </Link>
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

export default DefaultLayout;
