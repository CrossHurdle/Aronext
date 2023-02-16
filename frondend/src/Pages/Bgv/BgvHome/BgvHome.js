import React, { useState } from "react";
import { Col, Row, Card } from "antd";
import { useNavigate, Link } from "react-router-dom";
// import "../../../Components/Css/Dashboard.scss";
import jobs from "../../../assets/jobs.jpg";
import comments from "../../../assets/comment.jpg";
import trends from "../../../assets/trends.jpg";
import search from "../../../assets/search.jpg";
import resume from "../../../assets/resume.jpg.jpg";
import com from "../../../assets/com.jpg";
// import "./EmployerDashboard.css";
import { BiBuildings, BiTimer, BiCalendar } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
    MdPersonSearch,
    MdOutlinePermContactCalendar,
    MdOutlinePeopleOutline,
} from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import Carousel from 'react-bootstrap/Carousel';
import bgvimage from "../../../assets/57821.jpg"
import bgvmanagement from "../../../assets/remote_management-13.jpg"

export default function EmployerDashboard() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const data = [
        {
            // Image: { bgvmanagement },
            Image: "https://img.freepik.com/free-vector/remote-management-distant-work-isometric-icons-composition-with-woman-sitting-table-with-remote-workers-flowchart_1284-63069.jpg?w=740&t=st=1674219007~exp=1674219607~hmac=6f73660ae2ab7a3bacbdd1ab24e1bd160f6c4b9c3a12c14cdfefa3b4b11fd2d1",
            Title: "Get more responses through chat with Organization",
            Content:
                "Quickly connect with Companies through chat and get more responses.",
        },
        {
            Image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
            Title: "Smart Comments,Trackers & Sementic Search in RESDEX",
            Content:
                "Improve efficiency by using smart comments,tasks and reminders.",
        },
        // {
        //     Image: "https://media.istockphoto.com/id/1361507082/photo/businessman-plan-business-growth-and-financial-increase-of-positive-indicators-in-the-year.jpg?b=1&s=612x612&w=0&k=20&c=vZHDbX2To-l7KA5Qr4sPelTpglbRgJ23yKlQkJivEZg=",
        //     Title: "Trends",
        //     Content:
        //         "Hiring trends for IT,BFSI,BPO/ITes, & Pharma during Jul'22- Dec'22",
        // },
    ];
    const list = [
        {
            icon: <BiTimer />,
            Title: "2 Minutes to Post",
            Content:
                "Quick and easy to Post a free job in less than 5 minute",
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

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>

            <div className="m-5">
                <Card className="FirstCard">
                    <Row>
                        <Col sm={24} md={10}>
                            <img src={bgvimage}
                                className="FirstCardImage" />
                            {/* <img src={resume} className="FirstCardImage" /> */}
                        </Col>
                        <Col sm={24} md={12} className="px-2 ms-5">
                            <h4>Get The Customers from India's Largest Talent Pool</h4>
                            {/* <p>
                                Source candidate from Resdex - India's Largest Pool and find the
                                perfect talent for your organisation.
                            </p> */}
                            <button className="FirstCardButton" onClick={() => navigate("/BgvHome/BgvSubscription")}>
                                <h5 style={{ color: "#4f7eb5" }}>View All subscription Plans
                                    <AiOutlineArrowRight /></h5>
                            </button>
                        </Col>
                    </Row>
                </Card>
            </div>
            <p className="DataPara mx-5 ">BLOG POST</p>
            <h2 className="ms-5">What's New</h2>
            <Row className="p-5 DataRow">
                {data.map((data, i) => (
                    <Col sm={24} md={12} lg={7} className="p-2 mx-4">
                        <img src={data.Image} className="DataImage" />
                        <h4 className="mt-3">{data.Title}</h4>
                        <p className="mt-3 pe-4">{data.Content}</p>
                    </Col>
                ))}
            </Row>
            <div className="mx-5 mt-5">
                <p className="ThirdCardPara">KEY BENEFITS</p>
                <h2 style={{ textAlign: "center" }}>Why Choose Feril?</h2>
                {/* <Row className="p-3 DataRow">
                    {list.map((list, i) => (
                        <Col sm={24} md={12} lg={8} className="DataCol">
                            <Card className="employercard">
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "50px" }}>{list.icon}</div>
                                    <h4 className="mt-3">{list.Title}</h4>
                                    <div className="mt-3 pe-4">{list.Content}</div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row> */}
                {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="https://flink.in/assets/images/background_verification_bangalore.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="https://flink.in/assets/images/background_verification_bangalore.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src="https://flink.in/assets/images/background_verification_bangalore.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
            </div>
            <div className="mx-5 mt-5">
                <p className="ThirdCardPara">PRODUCTS & SERVICES</p>
                <h2 style={{ textAlign: "center" }}>
                    Feril is India's No.1 Background Verification Platform
                </h2>
                <h2 style={{ textAlign: "center" }}>& Recruitment Platform</h2>
                <Card className="FirstCard">
                    <Row>
                        <Col sm={24} md={12} lg={12} className="my-5 px-5">
                            <h3>Grab Organization as many as - Get Quality Services</h3>
                            <p>
                                Reach out to millions of Organization and hire quickly with our fast
                                and easy posting services.
                            </p>
                            <Row>
                                <Col sm={12} md={12}>
                                    <BsAlarm className="DataLastIcon" />2 Minutes to Post
                                </Col>
                                <Col sm={12} md={12}>
                                    <MdOutlinePermContactCalendar className="DataLastIcon" />
                                    Unlimited Verification
                                </Col>
                                <Col sm={12} md={12}>
                                    <MdOutlinePeopleOutline className="DataLastIcon" />
                                    Attract Audience
                                </Col>
                                <Col sm={12} md={12}>
                                    <SlCalender className="DataLastIcon" />
                                    30 Day Visibility
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={24} md={12} className="my-5 px-5">
                            <img src="https://les-articleimg.s3.amazonaws.com/17397_AdobeStock_111553575.jpeg"
                                className="DataImage" />
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
}
