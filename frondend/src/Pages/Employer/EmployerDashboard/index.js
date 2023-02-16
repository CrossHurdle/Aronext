import React from "react";
import { Col, Row, Card } from "antd";
import { useNavigate, Link } from "react-router-dom";
import "../../../Components/Css/Dashboard.scss";
import jobs from "../../../assets/jobs.jpg";
import comments from "../../../assets/comment.jpg";
import trends from "../../../assets/trends.jpg";
import search from "../../../assets/search.jpg";
import resume from "../../../assets/resume.jpg.jpg";
import com from "../../../assets/com.jpg";
// import "./EmployerDashboard.css";
import { BiBuilding, BiTimer, BiCalendar } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  MdPersonSearch,
  MdOutlinePermContactCalendar,
  MdOutlinePeopleOutline,
} from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

export default function EmployerDashboard() {
  const navigate = useNavigate();
  const data = [
    {
      Image:
        "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600",
      Title: "Get more responses through chat with jobseekers",
      Content:
        "Quickly connect with jobseekers through chat and get more responses.",
    },
    {
      Image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
      Title: "Smart Comments,Trackers & Sementic Search in RESDEX",
      Content:
        "Improve efficiency by using smart comments,tasks and reminders.",
    },
    {
      Image:
        "https://media.istockphoto.com/id/1361507082/photo/businessman-plan-business-growth-and-financial-increase-of-positive-indicators-in-the-year.jpg?b=1&s=612x612&w=0&k=20&c=vZHDbX2To-l7KA5Qr4sPelTpglbRgJ23yKlQkJivEZg=",
      Title: "Trends",
      Content:
        "Hiring trends for IT,BFSI,BPO/ITes, & Pharma during Jul'22- Dec'22",
    },
  ];
  const list = [
    {
      icon: <BiTimer />,
      Title: "2 Minutes to Post",
      Content: "Quick and easy to Post a free job in less than 5 minute",
    },
    {
      icon: <MdPersonSearch />,
      Title: "Attract Audience",
      Content: "Reach to over 8.69 crore talented jobseekers",
    },
    {
      icon: <BiCalendar />,
      Title: "30 days visibility",
      Content: "Get quality applies guarenteed with 30 days of yours jobs ads.",
    },
  ];
  return (
    <div>
      <Row className="admin-row">
        <Col sm={24} md={12} lg={8} className="dash-col">
          <Card className="Dash-cards">
            <div className="card-field">
              <div>
                <BiBuilding
                  className="dashIcons"
                  style={{ fontSize: "350%", color: " #4f7eb5" }}
                />
              </div>
              <div>
                <h4 className="fieldsname">No of Hiring</h4>
                <h4 className="fieldscount">10</h4>
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
                  style={{ fontSize: "350%", color: " #4f7eb5" }}
                />
              </div>
              <div>
                <h4 className="fieldsname">Number of Posting</h4>
                <h4 className="fieldscount">25</h4>
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
                  style={{ fontSize: "350%", color: " #4f7eb5" }}
                />
              </div>
              <div>
                <h4 className="fieldsname">Number of Project</h4>
                <h4 className="fieldscount">50</h4>
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
                  style={{ fontSize: "350%", color: " #4f7eb5" }}
                />
              </div>
              <div>
                <h4 className="fieldsname">Number of Internship</h4>
                <h4 className="fieldscount">100</h4>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    
    </div>
  );
}
