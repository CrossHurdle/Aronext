import React from "react";
import { useState } from "react";
import Layout from "../../Components/Layout";
import service from "../../Images/services2.jpg";
import "./Services.scss";
import { Button, Row, Col, Card, Popover, Container } from "react-bootstrap";
import { FcGraduationCap } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

export default function Services() {
  const [Partnercard, setPartnercard] = useState([
    {
      id: 1,
      name: "Student",
      image:
        "https://iconarchive.com/download/i89170/icons8/ios7/Users-Student-Filled.ico",
        link: "Student",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero corporis neque asperiores dolore, facere rerum provident.",
    },
    {
      id: 2,
      name: "Professional",
      image:
        "https://thumbs.dreamstime.com/b/employer-icon-vector-male-person-avatar-symbol-table-office-work-flat-color-glyph-pictogram-illustration-137559617.jpg",
        link: "Professional",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero corporis neque asperiores dolore, facere rerum provident.",
      },
    {
      id: 3,
      name: "Employer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQkKV3P3lOaVU7Ejy2dLz2w-2PHcYk2L4cg&usqp=CAU",
        link: "Employer",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero corporis neque asperiores dolore, facere rerum provident.",
    },
    {
      id: 4,
      name: "Institute",
      image:
        "https://image.shutterstock.com/image-vector/court-building-icon-vector-illustration-260nw-195126386.jpg",
        link: "Institute",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero corporis neque asperiores dolore, facere rerum provident.",
    },
  ]);
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <img className="service-image" src={service} />
        <div className="fading">Our Services</div>
      </div>
      <div>
        <Container>
          <div className="serviceheading mt-5">Services</div>
          <p style={{ color: "gray" }}>
            Learn about all available services, which will help you to prepare
            for your career.
          </p>
          <Row className="text-center mt-2 mb-5 ">
            {Partnercard.map((Partnercard, i) => (
              <Col className="mt-5 p-0 mb-5">
                <Card className="servicecard">
                  <img
                    className="serviceimage p-3"
                    src={Partnercard.image}
                    height={150}
                    width={"100%"}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#2a80b9" }}>
                      {Partnercard.name}
                    </Card.Title>
                    <p>{Partnercard.content}</p>
                    <Link
                    style={{ textAlign: "center", display: "block" }}
                    className="hoverLink"
                    to="/login"
                    state={Partnercard.link}
                  >
                    To access
                  </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}