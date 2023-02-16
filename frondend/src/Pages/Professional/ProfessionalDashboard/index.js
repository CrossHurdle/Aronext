import React from "react";
import { Col, Row, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import "./professionalstyle.css";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { FaBlogger, FaGraduationCap } from "react-icons/fa";
import { BiBuildings, BiBuilding } from "react-icons/bi";
import "../../../Components/Css/Dashboard.scss";

import { NavLink } from "react-router-dom";

export default function ProfessionalDashboard() {
  return (
    <div className="">
      <Row className="admin-row ">
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <FaGraduationCap
                  className="dashIcons"
                  // style={{ fontSize: "350%", color: "#4f7eb5" }}
                />
              </div>
              <div>
                <h4 className="fieldsname">Score</h4>
                <h4 className="fieldscount">70%</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <BiBuilding
                  className="dashIcons"
                  // style={{ fontSize: "350%", color: " #4f7eb5" }}
                />
              </div>
              <div>
                <h4 className="fieldsname">Semester CGPA</h4>
                <h4 className="fieldscount">7.8%</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <BiBuilding
                  className="dashIcons"
                  // style={{ fontSize: "350%", color: " #4f7eb5" }}
                />
              </div>
              <NavLink to="/professional/jobs">
                <h4 className="fieldsname">Jobs</h4>
                <h4 className="fieldscount">10</h4>
              </NavLink>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
