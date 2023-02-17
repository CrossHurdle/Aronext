import React from "react";
import { Col, Row, Card } from "antd";
import "../../../Components/Css/Dashboard.scss";
import { BsBook } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Row className="admin-row ">
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <FaGraduationCap className="dashIcons" />
              </div>
              <div>
                <h4 className="fieldsname">No.of Companies</h4>
                <h4 className="fieldscount">10</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <BsBook className="dashIcons" />
              </div>
              <div>
                <h4 className="fieldsname">No.of Employers</h4>
                <h4 className="fieldscount">3</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <AiOutlineProject className="dashIcons" />
              </div>
              <div>
                <h4 className="fieldsname">No.of Accountant</h4>
                <h4 className="fieldscount">4</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card
            className="Dash-cards"
            onClick={() => navigate("/student/intern")}
          >
            <div className="card-field">
              <div>
                <BiBuilding className="dashIcons" />
              </div>
              <div>
                <h4 className="fieldsname">Internship</h4>
                <h4 className="fieldscount">3</h4>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
