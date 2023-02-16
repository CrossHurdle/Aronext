import React from "react";
import { Col, Row, Card } from "antd";
import "../../../Components/Css/Dashboard.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaSchool, FaGraduationCap } from "react-icons/fa";
import { BiBuildings, BiBuilding } from "react-icons/bi";

export default function AdminDashboard() {
  return (
    <div className=" ">
      <Row className="admin-row">
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
            <div>
              <FaGraduationCap className="fieldicon1"/> {" "}
            </div>
              <div>
                <h4 className="fieldsname">Students</h4>
                <h4 className="fieldscount">200</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
            <div>
              <MdOutlinePersonPin className="fieldicon2"/>
            </div>
              <div>
                <h4 className="fieldsname">Professional</h4>
                <h4 className="fieldscount">100</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
            <div>
              <AiOutlineUser className="fieldicon3"/>
            </div>
              <div>
                <h4 className="fieldsname">Employer</h4>
                <h4 className="fieldscount">100</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
            <div>
              <BiBuildings className="fieldicon4"/>
            </div>
              <div>
                <h4 className="fieldsname">Colleges</h4>
                <h4 className="fieldscount">100</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
            <div>
              <FaSchool className="fieldicon5"/>
            </div>
              <div>
                <h4 className="fieldsname">Schools</h4>
                <h4 className="fieldscount">100</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
            <div>
              <BiBuilding className="fieldicon6"/>
            </div>
              <div>
                <h4 className="fieldsname">Training institution</h4>
                <h4 className="fieldscount">100</h4>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <div className="colors"></div>
    </div>
  );
}
