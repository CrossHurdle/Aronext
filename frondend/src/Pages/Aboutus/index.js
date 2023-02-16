import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Button, Container } from "react-bootstrap";
import ".//Aboutus.scss";
import Layout from "../../Components/Layout";
import Api from "../../Api";

const Aboutus = () => {
  const [aboutList, setAboutList] = useState([]);

  useEffect(() => {
    getAboutus();
  }, []);

  const getAboutus = async () => {
    await Api.get("aboutus/aboutus").then((res) => {
      setAboutList(res.data.data);
      console.log("sfasasf",aboutList);
    });
  };


  return (
    <Layout>
      <div>
       
        <Row>
          <Col sm={12} md={12}>
            <img
              className="about-main-img"
              src="https://img.freepik.com/premium-photo/about-us-word-written-wooden-cubes_352439-243.jpg?size=626&ext=jpg&ga=GA1.2.1755127796.1668750682&semt=sph"
              alt=""
            />
            {/* <p className="about-header">About us</p> */}
          </Col>
        </Row>
      </div>
      <Container>
      {aboutList.map((aboutList, i) => (
        <Row className="mt-5">
          <Col sm={12} lg={6}>
            <img
              className="about-img1"
              src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </Col>
          <Col sm={12} lg={6}>
            <h2 className="about-main">{aboutList.title}</h2>
            <p className="about-content">{aboutList.description}</p>
          

            {/* <Button
              className="about-btn"
              variant=" choosebutton"
              onClick={() => navigate("/blog")}
            >
              Read more
            </Button> */}
          </Col>
        </Row>
        ))}
        {/* <Row>
              <Col lg={10}>
                <h1 className="aboutUsPage__title">{aboutDetails?.title}</h1>
                <div
                  className="aboutUsPage__content"
                  dangerouslySetInnerHTML={sanitizedData()}
                ></div>
              </Col>
            </Row> */}
        {/* <Row
          className="mt-5 mb-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col sm={12} md={3}>
            <Button className="about-start-btn">Get Started</Button>
          </Col>
          <Col sm={12} md={2}>
            <Button className="project-btn ">
              <FaBookReader />  Projects <p>25+</p>
            </Button>
          </Col>
          <Col sm={12} md={2}>
            <Button className="project-btn">
              <FaUserGraduate />
              Employee <p>50+</p>
            </Button>
          </Col>
          <Col sm={12} md={2}>
            <Button className="project-btn">
              <GiDiscGolfBag />
              Experience <p>10+</p>
            </Button>
          </Col>
          <Col sm={12} md={2}>
            <Button className="project-btn">
              <HiUsers />
                Clients <p>15+</p>
            </Button>
          </Col>
        </Row>
        <div>
          <Row>
            <Col sm={12} lg={6} className="mt-5">
              <h3 className="about-main">Our Motive</h3>
              <p className="about-content">
                <h5 className="side-content">Recognition:</h5>Like a famous saying, “opportunity doesn’t come twice”. When you
                are within the Cross Hurdle family, many opportunities help you
                grow within the company. Excellence matters here and you will be
                recognized by the company in various ways including promotions,
                increments, surprise gifts and much more.<br/>
                <h5 className="side-content">Self Growth:</h5>We give opportunities
                to develop your skills when being at Cross Hurdle system. The
                growth of a member is growth for the company. We also have many
                non-paid courses that help in developing your skills outside the
                working hours. <br />
                <h5 className="side-content">Fun:</h5>Work is essential; at the same time, it is important to be
                entertained as well. Life at Cross Hurdle System is a
                collaboration of work with enjoyment. Here we often go out for
                picnics and trips for the benefit of the employees. We also have
                tasks to keep all the employees connected with various fun
                activities.
              </p>
            </Col>
            <Col sm={12} lg={5} className="mt-5 ms-2 mb-2">
              <img
                className="about-img3"
                src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?size=626&ext=jpg&ga=GA1.2.1755127796.1668750682&semt=sph"
              />
            </Col>
          </Row>
        </div> */}
      </Container>
    </Layout>
  );
};

export default Aboutus;
