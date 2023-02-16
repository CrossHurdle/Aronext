import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import "../../../Components/Css/Sidebar.scss";
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
  console.log("UserName", UserName);
  const [logout, setLogout] = React.useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/login");
  }, [logout]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("stu-token");
    setLogout(true);
  };
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
            <div onClick={logoutHandler}>
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
