import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Popover } from "antd";
import { HiUserCircle } from "react-icons/hi";

// styles
import "../Css/HeaderNavbar.scss";
// images
import Aeronext from "../../Images/Aeronext.png";

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = React.useState(false);

  const role = localStorage.getItem("role");
  const groupName = localStorage.getItem("Group_Name");
  const auth = localStorage.getItem("USER_AUTH_STATE");
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("emplo-token");
    localStorage.removeItem("email");
    localStorage.removeItem("stu-token");
    localStorage.removeItem("pro-token");
    localStorage.removeItem("institute-token");
    localStorage.removeItem("college-token");

    setLogout(true);
  };
  return (
    <div>
      <Navbar className="nav-brand">
        <Container fluid>
          <Navbar.Brand>
            <img
              className="feril_logo"
              src={Aeronext}
              alt="add"
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="collapse-style me-2 ">
              {(auth && role === "student") ||
              (auth && role === "Employee") ||
              (auth && role === "Employer") ||
              (auth && role === "institute") ||
              (auth && role === "college") ||
              (auth && role === "admin") ? (
                <Popover
                  content={
                    <div>
                      <Nav.Link>Dashboard</Nav.Link>
                      <hr />
                      <Nav.Link>
                        <NavLink onClick={logoutHandler}>LogOut</NavLink>
                      </Nav.Link>
                    </div>
                  }
                  trigger="click"
                  open={open}
                >
                  <HiUserCircle
                    style={{ fontSize: 40, cursor: "pointer" }}
                    onClick={() => setOpen(!open)}
                  />
                </Popover>
              ) : (
                <Nav.Link>
                  <Link className="navbartitle p-3" to="/login">
                    Login
                  </Link>
                  <Link to="/signup" className="navbartitle p-3">
                    Signup
                  </Link>
                </Nav.Link>
              )}
              {/* <Link className="navbartitle p-3" to="/login">
                Login
              </Link>
              <Link to="/signup" className="navbartitle p-3">
                Signup
              </Link> */}
            </Nav>
          </Navbar.Collapse>

          {/* <Button variant=" loginbutton mx-3">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Button>
              
              <Button variant=" registerbutton mx-3">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Signup
                </Link>
              </Button> */}
          {/* <div class="button_grp style_1">
          <button class="iocn_btn"><span> </span>Login</button>
          <button class="simpl_btn">Login</button>
        </div> */}

          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="collapse-style mx-auto ">

            </Nav>
            <Nav>
              <Button variant=" loginbutton mt-1 mx-3">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Button>
              <Button variant=" registerbutton mt-1 mx-3">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Signup
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {/* </div> */}
    </div>
  );
};
export default HeaderNavbar;
