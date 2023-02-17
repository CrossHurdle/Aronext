import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Aeronext from "../../../Images/Aeronext.png";
import { HiUserCircle } from "react-icons/hi";

const { Content } = Layout;

function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(true);

  const handleChange = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();

  const UserName = localStorage.getItem("name");

  const [logout, setLogout] = React.useState(false);

  return (
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
            <div>
              <Link to="/login" className="navMenus">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <Sidebar collapsed={collapsed} />
      <div
        className={collapsed === true ? "main-content open" : "main-content"}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
