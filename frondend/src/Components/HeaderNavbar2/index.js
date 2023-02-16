import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Popover } from "antd";
import { HiUserCircle } from "react-icons/hi";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// styles
import "../../Components/Css/HeaderNavbar2.scss";
// images
import Feril from "../../Images/FerilNew1.png";
import { Link, NavLink } from "react-router-dom";

const HeaderNavBar2 = (props) => {
  const { onChange } = props;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar expand="xl" fixed="top" className="nav-brand">
        <Container fluid>
          <Navbar.Brand
          // className="nav-brand"
          >
            <FaIcons.FaBars
              className="icon-styles mx-3 me-4"
              onClick={onChange}
            />
            <img className="feril_logo2" src={Feril} alt="add" />
          </Navbar.Brand>

          <Nav className="navMenus">
            <Popover content="Logout">
              <Nav.Link>
                <NavLink to="/">
                  <HiUserCircle
                    style={{ fontSize: 40, cursor: "pointer", color: "grey" }}
                  />
                </NavLink>
              </Nav.Link>
            </Popover>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default HeaderNavBar2;
