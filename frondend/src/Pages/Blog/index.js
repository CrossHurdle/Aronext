import React, { useState, useEffect } from "react";
import "../../Components/Css/Blogspage.scss";
import { AiOutlineMenu } from "react-icons/ai";
// import Sidebar from "../Pages/BlogSidebar";
import HeaderNavbar from "../../Components/HeaderNavbar/index";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Api from "../../Api";

const Blog = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    await Api.get("blog/getBlog").then((res) => {
      setBlogList(res.data.data);
      console.log("blogshow",blogList);
    });
  };

  return (
    <>
      <HeaderNavbar />
      <div className="blogpage">
        <Row>
          <Col lg={3} md={4} sm={6} className="blogsidebar">
            <div className="searchtext m-4">search the Jobs here
            <div className=" mt-3">
              <InputGroup>
                <Form.Control
                  placeholder="Search here"
                />
                <InputGroup.Text>
                  <AiOutlineSearch />
                </InputGroup.Text>
              </InputGroup>
            </div>
            </div>
          </Col>
          <Col>
          {blogList.map((blog, i) => (
            <div className="">
              <div className="menu">
                <div className="rightcontent m-0 ">
                  <Col lg={12} className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://wallpaperaccess.com/full/1385386.jpg"
                      alt="pic"
                      className="image1 "
                    />
                  </Col>
                  <div className="firstcontent mx-4 mt-4 p-3">
                    <Button variant=" choosebutton">
                      choose
                    </Button>
                    <h3 className="title mt-4 ">{blog.Title}</h3>
                    <p className="description">{blog.Description}</p>

                    {/* <h3 className="title mt-4 ">Cross Hurdle Systems</h3>
                    <p className="description">
                      "Software Development,Software Training,Online
                      Training,E-Commerce,Software Testing,Website
                      Development,Web Application
                      Development,PHP,Magento,React,ReactJS, React
                      Native,Angular,Angular JS,Angular 9,Node,Node JS, Full
                      Stack Development, Full Stack Development
                      Training,Software Company,Software Development Company"
                    </p> */}

                  </div>
                </div>
              </div>
            </div>
               ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Blog;
