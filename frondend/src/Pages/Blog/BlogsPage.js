// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
// import Layout from "../../components/Layout";
// import BlogsCard from "./BlogsCard";
import { AiOutlineSearch } from "react-icons/ai";
import "../../Components/Css/Blogspage.scss";
import HeaderNavbar from "../../Components/HeaderNavbar";
import { useNavigate } from "react-router-dom";
// import Blog from "./blog"

  
const BlogsPage = () => {
  const navigate = useNavigate();
  return (
    // <Layout>
    <div className="blogsPage">
      <HeaderNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              <Col sm={8} lg={6} xl={5} className="ms-auto">
                <div className="blogsPage__searchField">
                  <InputGroup>
                    <Form.Control
                      placeholder="Search here"
                    />
                    <InputGroup.Text>
                      <AiOutlineSearch />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </Col>
            </Row>

            <div className="blogsPage__container">
              <div>
                <Row className=" mt-5">
                  <Col className="poster " sm={12} md={10} lg={6}>

                   
                      <img
                        className="firstimage"
                        src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-05/19/full/1558277367-3166.jpg"
                        alt=""
                      />
                   
                  </Col>
                  <Col sm={8} md={12} lg={6} className="mt-3">
                    <div className="firstcontent ">
                      <h3 className="title">Cross Hurdle Systems</h3>
                      <p className="description">
                        "Software Development,Software Training,Online
                        Training,E-Commerce,Software Testing,Website
                        Development,Web Application
                        Development,PHP,Magento,React,ReactJS,React
                        Native,Angular,Angular JS,Angular 9,Node,Node JS, Full
                        Stack Development, Full Stack Development
                        Training,Software Company,Software Development Company"
                      </p>

                    
<Button variant=" choosebutton"  onClick={() => navigate("/blog")}>
                      Read more
                    </Button>
                  
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5 ">
                  <Col sm={8} lg={6} md={12} className="mt-5">
                    <div className="firstcontent">
                      <h3 className="title">Thinroot Software</h3>
                      <p className="description">
                        THINROOT offers a plethora of services ranging from
                        technology to digital marketing. Our prowess in
                        identifying the grey spaces that stretches between
                        brands and potential consumers is our USP. We take pride
                        in providing enriched consumer experience with every
                        step we take forward.
                      </p>
                      <Button variant=" choosebutton"  onClick={() => navigate("/blog")}>
                      Read more
                    </Button>
                    </div>
                  </Col>
                  <Col sm={8} lg={6} className="">
                    <div className="blogspagecard"></div>

                    <div>
                      <img
                        className="firstimage"
                        src="https://developergang.com/wp-content/uploads/2018/12/best-it-companies-in-india.jpeg"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm={8} md={6} lg={6} className="mt-5">
                    <div className="blogspagecard"></div>

                    <div>
                      <img
                        className="firstimage"
                        src="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col sm={8} md={12} lg={6} className="mt-5">
                    <div className="firstcontent">
                      <h3 className="title">Logicbee Technologies</h3>
                      <p className="description">
                      LogicBee is a Software Development, Training & placement Company located in Chennai(Tambaram, Ashok Nagar) & Bangalore(Kudlu Gate). We are specialized in Web Development, Mobile Development, Web Services & software training & Placements
                      </p>

                      <Button variant=" choosebutton"  onClick={() => navigate("/blog")}>
                      Read more
                    </Button>

                      {/* onClick={() => navigate()} */}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    // </Layout>
  );
};

export default BlogsPage;
