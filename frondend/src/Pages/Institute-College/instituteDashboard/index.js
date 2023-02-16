import React from "react";
import { Col, Row, Card } from "antd";
import "../../../Components/Css/Sidebar.scss";
import { AiOutlineUser, AiOutlineTeam,AiOutlineForm } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiBuildings, BiBuilding } from "react-icons/bi";

export default function StudentDashboard() {
  return (
    <div >
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
            
                 <h4 className="fieldsname">Campus Request</h4>
                <h4 className="fieldscount">15</h4>
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
                <h4 className="fieldscount">8</h4>
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
                <h4 className="fieldscount">100</h4>
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
                <h4 className="fieldscount">120</h4>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
