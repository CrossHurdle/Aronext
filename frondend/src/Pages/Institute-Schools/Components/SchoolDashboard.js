import React from "react";
import { Col, Row, Card } from "antd";
import "../../../Components/Css/Dashboard.scss";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { FaBlogger, FaGraduationCap } from "react-icons/fa";
import { BiBuildings, BiBuilding } from "react-icons/bi";

export default function StudentDashboard() {
  return (
    <div>
       <Row className="admin-row ">
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <BiBuilding
                  className="dashIcons"
                
                />
              </div>
              <div>
                <h4 className="fieldsname">Our Profile</h4>
                <h4 className="fieldscount">65</h4>
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
                 
                />
              </div>
              <div>
                <h4 className="fieldsname">Seminar Request</h4>
                <h4 className="fieldscount">20</h4>
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
                  
                />
              </div>
              <div>
                <h4 className="fieldsname">Admission</h4>
                <h4 className="fieldscount">20</h4>
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
                
                />
              </div>
              <div>
                <h4 className="fieldsname">Application</h4>
                <h4 className="fieldscount">50</h4>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
