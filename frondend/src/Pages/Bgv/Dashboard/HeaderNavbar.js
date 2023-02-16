// import {useState} from "react";
import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./Navbarstyle.scss";
import crosshurdle from "../../../assets/White logo - no background.png";

const HeaderNavbar = props => {
    const { onChange } = props;

    return (
        <div>
            <Navbar className="navfix" expand="lg" fixed="top" style={{ height: 65 }}>
                <Container fluid>
                    <Navbar.Brand className="nav-brand">
                        <MenuFoldOutlined className="icon-style" onClick={onChange} />
                        <img className="crosshurdle" src={crosshurdle} alt="add" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="toggle-btn"
                        aria-controls="responsive-navbar-nav"
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/*
            <Nav className="collapse-style me-auto">
              <Nav.Link href="" className="navtitle p-3">Student</Nav.Link>
              <Nav.Link href="" className="navtitle p-3">Employee</Nav.Link>
              <Nav.Link href="" className="navtitle p-3">Employer</Nav.Link>
              <Nav.Link href="" className="navtitle p-3">College</Nav.Link>
              <Nav.Link href="" className="navtitle p-3">Training Institute</Nav.Link>
            </Nav> */}

                        <Button className="btn-nav">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default HeaderNavbar;
