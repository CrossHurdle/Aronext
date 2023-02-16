import React from "react";
import { useState, useEffect } from "react";
import { Button, Row, Col, Card, Popover } from "react-bootstrap";
// import { card } from "antd"
import { Carousel } from "antd";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "../../Components/Css/Homepage.scss";
import { useNavigate } from "react-router-dom";

// icons
import {
  FcMultipleDevices,
  FcLockLandscape,
  FcParallelTasks,
  FcRules,
  FcNext,
} from "react-icons/fc";

import { GrNext } from "react-icons/gr";
// import jobspic from"../../Images/JobSeeeking.jpg";

import { AiOutlineMessage } from "react-icons/ai";
import Layout from "../../Components/Layout";
import "../../Components/Css/Homepage.scss";
import Api from "../../Api";
import college from "../../Images/student.jpg";
import professional from "../../Images/professional.jpg";
import institute from "../../Images/institute.jpg";
import freelancer from "../../Images/freelancer.jpg";
import employer from "../../Images/employer.jpg";
import bvc from "../../Images/bvc.jpg";
import girl from "../../Images/girl_start.jpg";
import work from "../../Images/work.jpg";
import goal from "../../Images/goal1.jpg";
import img1 from "../../Images/download.png";
import banner from "../../Images/banner2.jpg";
import ScrollToTop from "react-scroll-to-top";

const Homepage = () => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    await Api.get("companylist/getCompanyList").then((res) => {
      setCompanyList(res.data.data);
      console.log("Companyshow", companyList);
    });
  };
  const [bot, setBot] = useState(false);
  const [JobName, setJobName] = useState([
    {
      id: 1,
      title: "FRONTEND",
    },
    { id: 1, title: "BACKEND" },
    {
      id: 3,
      title: "TESTING",
    },
    {
      id: 4,
      title: "FULLSTACK",
    },
    {
      id: 5,
      title: "MERN",
    },
    {
      id: 6,
      title: "MEAN",
      path: "/aboutus",
    },
  ]);
  const [Jobcard, setJobcard] = useState([
    // const [companyList, setCompanyList] = useState([
    {
      id: 1,
      title: "Accenture",
      description:
        "Responsible for the design and implementation of user interfaces and UI components",
      imageUrl:
        "https://i0.wp.com/www.otolith.be/wp-content/uploads/2021/08/accenture-logo-xl.jpg?ssl=1",
    },
    {
      id: 2,
      title: "Wipro",
      description:
        "Responsible for developing and designing user interfaces using the AngularJS framework.",
      imageUrl:
        "https://www.margnews.com/wp-content/uploads/2021/12/wipro-primary-logo-color-rbg.png",
    },
    {
      id: 3,
      title: "TCS",
      description:
        "Responsible for managing the interchange of data between the server and the users.",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1348913543983165440/MDrjijV6_400x400.png",
    },
    {
      id: 4,
      title: "HCL",
      description:
        "Flutter developers work on platform mobile app development,With Flutter ",
      imageUrl:
        "https://seekvectorlogo.com/wp-content/uploads/2019/09/hcl-technologies-vector-logo.png",
    },
    {
      id: 5,
      title: "Ibm",
      description:
        "Next Project on MongoDB Atlas, the Cloud-Native Document Database as a Service.",
      imageUrl:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122015/untitled-1_84.png?itok=6yX4oOLu",
    },
    {
      id: 6,
      title: "tech mahendra",
      description:
        "Design, implement and maintain Java-based applications that can be high-volume and low-latency.",
      imageUrl:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-39920,resizemode-1,msid-71924771/tech/ites/tech-mahindra-buys-us-based-media-group-born.jpg",
    },
    {
      id: 7,
      title: "Accenture",
      description:
        "Responsible for the design and implementation of user interfaces and UI components",
      imageUrl:
        "https://i0.wp.com/www.otolith.be/wp-content/uploads/2021/08/accenture-logo-xl.jpg?ssl=1",
    },
    {
      id: 8,
      title: "Wipro",
      description:
        "Responsible for developing and designing user interfaces using the AngularJS framework.",
      imageUrl:
        "https://www.margnews.com/wp-content/uploads/2021/12/wipro-primary-logo-color-rbg.png",
    },
  ]);

  const [jobtitlecard, setjobtitlecard] = useState([
    {
      id: 1,
      name: "MNCs",
      description: "2K+ are actively hiring",
      image: [
        {
          imageUrl:
            "https://cdn.logojoy.com/wp-content/uploads/2018/05/01104836/1751.png",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx91nx-FEFrOjxu1GzygXjv-fdPNhRTcR5sw&usqp=CAU",
        },
        {
          imageUrl:
            "https://brandongaille.com/wp-content/uploads/2014/04/Motorola-Company-Logo.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Banking & Finance",
      description: "789 are actively hiring",
      image: [
        {
          imageUrl:
            "https://cdn.logojoy.com/wp-content/uploads/2018/05/30175141/1550.png",
        },
        {
          imageUrl:
            "https://image.shutterstock.com/image-vector/finance-accounting-logo-design-vector-260nw-1722070894.jpg",
        },
        {
          imageUrl:
            "https://content.jdmagicbox.com/comp/delhi/s7/011pxx11.xx11.170911135338.d9s7/catalogue/kotak-mahindra-finance-customer-care--new-delhi-delhi-e45p9.jpg?clr=491d3a",
        },
      ],
    },
    {
      id: 3,
      name: "BPO",
      description: "3.2k are actively hiring",
      image: [
        {
          imageUrl:
            "https://dynamic.placementindia.com/recruiter_comp_logo/546579.png",
        },
        {
          imageUrl:
            "https://content.jdmagicbox.com/comp/chennai/z6/044pxx44.xx44.100811150409.n6z6/catalogue/tata-business-support-services-ltd-jafferkhanpet-chennai-bpo-1a9sm8v-250.jpg",
        },
        {
          imageUrl:
            "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/7082d2d3b334a71cfe1aced365f9b9b1",
        },
      ],
    },
  ]);

  const [Partnercard, setPartnercard] = useState([
    {
      id: 1,
      title: "Szigony",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C560BAQFicz38-PZFAQ/company-logo_200_200/0/1556818993608?e=2147483647&v=beta&t=RmDkimcni92Zb9-XWIQlqf-CBCT4lI7sca0nh3Y4bzA",
    },
    {
      id: 2,
      title: "Iteron",
      imageUrl:
        "https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1151566978584199168",
    },
    {
      id: 3,
      title: "Hyniva",
      imageUrl:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/guwlbct7skrki7erqacl",
    },
    {
      id: 4,
      title: "Thinroot",
      imageUrl:
        "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/27725/a6f16b892e/0/4309939c54b52d12444460070c7f8fd0.jpeg",
    },
    {
      id: 5,
      title: "Cognex",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX///8AAADl5eWqqqp+fn67u7tZWVnd3d2Dg4MaGhpsbGzW1taenp7j4+MuLi6ioqLr6+v39/fu7u63t7fDw8OVlZWpqanNzc08PDx0dHQfHx9ERESxsbEVFRVNTU3JyclkZGSNjY0oKCgMDAw0NDRSUlIlJSWRkZGpr7FhAAAES0lEQVR4nO3Za3uaMByGcfBQPNRWwOPqWqld9/2/4UDMPyGBgMiu7cX9e6UkBHiAkEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhPJcvNabwbi3SzH1lV1vvpaVxxmu7XVqVok9p1lrHaxkiLrbbLpav852rULK8oxVYLqom8EbukXyDZz7DOYSvNL4+1NXLHSNpJ3+urfG+vxZUmqjuuVsx/Nm2nLF43tfAhy9+GiOTVsxfjssrCt6fHss76h6fOMq8wMRdU9/xJDtqXyTwwQ/k0G4gaGu7p2Xe84bSo8stbJXwq6iT+OomVSTjpl0n90euNvwwRych/LMVunlqqhGmgL/8GRzuT60o9Mgn28v+sVo9l0WWQzmRSt3VDftX7boqrT/P0NXC3tLo3k0tZeSMLZrfVX2RJMkQk3j6tsDP7tSZr4w78uZjMlMmTLE7c9H2ZzI8Lx63jCsbSwvP1v75E7WdlP/qyO++N6y7eqEdRZpyXLDKrRJkUbHQvPLXaV+1Ebia6Q3Az8XaVW2mi2Jp+AES+lbqTa35mFajbdhLs9JFbpqpkHLxJdYu6gJaSie4QZJt3ZmLEuw8y4/cwlqpBu3NSXflCjurLXVvdyK/B1+3Xh10lKkeCO33vJHosoS6qezMxro3MaexhKhP3GRbfSCb2lZSbOZl4Ll+VySj4Lcdx62fdTA6jyLYyG3OHB6+PxFChMnlqrqIyeXaLtrI/KpPbYD9Op1XpyMgk0F1vWb3Tc+e7sumDVfp7mDwKd2RScyJ0kZWJ+6yampkEMpl4v1bvlMmhuu2XSqHTjz3gL2XijmqrmejMsqJ6n0yqI6Jh0ij9o0yMB3zRNfbIxNqCZ//v9pf6k7Z7JwgyKRn16U+c0AcMRWVycEpet1eZZJK5a6sDc547yeXlRk0M7Ez0k+PS41msh5ri/EgMFTI+cUouqkBlUnMm1HF5xidqXOdkIhsIf92dSSzrvuk57Pn+o68nPdXJ3qyEJeNY+6WanlN7xrHq9nIz0UezVUOwoFsmMmEo7ic5q/nwchj6Inw2J1DxXp7/RneYVqadSSoFzfOdlV5uZ2I0PHcyefft81xWLEbfelg8VChhi+9H5sXHN1m8dzMJMrsdY39+zB1qwqXfXZRXrj43x5oD7KHt/cmi2/uTVVuddU0mzouolnNUZvIt/9VoX5+QYUJpe8+2GeY92zyoy8ROoEsmn/JXz4NnsmyY8az/fez1GT3A+9hTfSbWGemQiR7Smz2XnicPE4rvvf1XbG2yRpf39sWe1mWiX8FctWfyJX92lYPQs8qa6XsPTd93woM8oB/6vhOer1e5aqL6gnBmVmzNROduz4P1PHmo6WBsfQesfMArdfsO+FH9DnhKN1In0R/7TMaHv5bvgKs4WZlVG9qJBnl3DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBQfwBlPjS2c+LczwAAAABJRU5ErkJggg==",
    },
    {
      id: 6,
      title: "Maamisa mall",
      imageUrl:
        "https://play-lh.googleusercontent.com/cllvLnSryJMRplj505fh_i-WwJ_jwXUzeBlYngSZjK1Cjfv5dPw2NtnXkwd5jTwU9rVR",
    },
  ]);
  const [services, setservices] = useState([
    {
      id: 1,
      headding: "Professional",
      sub: "Search Career",
      image: professional,
    },
    { id: 2, headding: "Students", sub: "Search job", image: college },
    {
      id: 3,
      headding: "Employer",
      sub: "Search Employee",
      image: employer,
    },
    {
      id: 4,
      headding: "Training Instute",
      sub: "Search Candidate",
      image: institute,
    },
    {
      id: 5,
      headding: "Freelancer",
      sub: "Earn Money",
      image: freelancer,
    },
    {
      id: 6,

      headding: "BGV",
      sub: "Update",
      image: bvc,
    },
  ]);
  const openForm = () => {
    setBot(true);
  };

  const closeForm = () => {
    setBot(false);
  };
  console.log("bot :>> ", bot);

  return (
    <Layout>
      <ScrollToTop color="#1976D2" />
      <div>
        <div className="add_colum">
          <div>
            <img
              className="add"
              // className="partnerimage p-3"
              src={banner}
              height={150}
              width={"100%"}
            />
          </div>
          <div className="container searchtab">
            <div className="row height d-flex justify-content-center align-items-center mt-5">
              {/* <div className="add">
      </div> */}
              {/* <div className="col-md-10">
              <div className="searchtext  d-flex justify-content-center align-items-center mb-4 ">
                Find your Job here 
              </div>
              <div className="searchbox mb-5">
 <input
                  type="text"
                  className="hp-search1"
                  placeholder="Search your job here"
                />
                <input
                  type="text"
                  className="hp-search2"
                  placeholder="location"
                />
                <button className="searchbutton">
                  <span>Search</span>
                </button>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <div>
          {/* <Row className="text-center mt-2 mb-5">
            {Partnercard.map((Partnercard, i) => (
              <Col xs={6} sm={6} md={3} lg={2} className="mt-1 p-0 mb-5">
                <Card className="partnercard ">
                  <img
                    className="partnerimage p-3"
                    src={Partnercard.imageUrl}
                    height={150}
                    width={"100%"}
                  />
                  <Card.Body>
                    <Card.Title>{Partnercard.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}
          <div className="container ">
            <h1 className="companyheading mt-5 ">Popular Search</h1>
            {/* <h1 className="companyheading mt-5 p-2">Popular Search</h1> */}
            <Row className="thirdrow ">
              {JobName.map((JobName, i) => (
                <Col sm={12} md={6} lg={2} className="p-0 mb-3 ">
                  <div className="jobtitle p-3">
                    {JobName.title}

                    <GrNext className="arrowicon" />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="container ">
            <Row className="fourthrow ">
              <Col sm={12} md={6} lg={2} className="p-0 mb-4 ">
                <div className="jobtitle p-3">
                  <div className="jobicon" /> ENGINEERING
                  <FcNext className="arrowicon" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={2} className="p-0">
                <div className="jobtitle p-3">
                  <div className="jobicon" /> SALES
                  <FcNext className="arrowicon" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={2} className="p-0">
                <div className="jobtitle p-3">
                  <div className="jobicon" /> HR
                  <FcNext className="arrowicon" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={2} className="p-0">
                <div className="jobtitle p-3">
                  <div className="jobicon" /> MARKETTING
                  <FcNext className="arrowicon" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={2} className="p-0 mb-4 ">
                <div className="jobtitle p-3">
                  <div className="jobicon" /> SOFTWARE
                  <FcNext className="arrowicon" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={2} className="p-0">
                <div className="jobtitle p-3">
                  <div className="jobicon" /> BANKING
                  <FcNext className="arrowicon " />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <h1 className="companyheading mt-5 ">Find a career you'll love</h1>

          <Row className="service_cards ">
            {services.map((services, i) => (
              <Col sm={12} md={4} className="service_card mt-5">
                {/* <span className="close"></span>
    <span className="arrow"></span> */}
                <article>
                  <h2>{services.headding}</h2>
                  <div className="title">{services.sub}</div>
                  <div className="pic">
                    <img src={services.image} />
                  </div>

                  <div className="desc">
                    Elijah has collected bugs since they were six years old and
                    now has many dozen bugs but none in their pants.
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </div>

        {/* <div className=" p-1">
          <h1 className="companyheading mt-5 p-2">Top Companies</h1>
          <Row className="text-center mb-5">
            {console.log("object :>> ", companyList)}
            {companyList.map((companyList, i) => (
              <Col xs={12} sm={12} md={6} lg={3} className="mt-3  p-0">
                <Card className="jobcard">
                  <img
                    className="cardimage"
                    src={`http://localhost:8080/${companyList.Image}`}
                    alt="image"
                    height={200}
                    width={"50%"}
                  />
                  <Card.Body>
                    <Card.Title>{companyList.Title} </Card.Title>
                    <Card.Text>{companyList.Description}</Card.Text>
                    <button className="button1 m-2 p-2" type="submit">
                      View jobs
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Button variant=" searchcompany p-2">
              <span>View Companies</span>
            </Button>
          </Row>
        </div> */}
        <div>
          <div className="content_section overflow-hidden mt-5">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="img-section">
                    <img src={girl} alt="img1" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="info-section">
                    <span>Career Development</span>
                    <p>
                      Its is developer friendly, too. Built with a REST API,
                      scalable and can integrate with virtually any service.
                      Design a complex store from scratch, extend a store for a
                      client, or simply add a single product to a WordPress
                      site—your store, your way.
                    </p>
                    <button className="info-btn">Read the Documentation</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="info-section">
                    <span>Work Smart</span>
                    <p>
                      WooCommerce is developer friendly, too. Built with a REST
                      API, WooCommerce is scalable and can integrate with
                      virtually any service. Design a complex store from
                      scratch, extend a store for a client, or simply add a
                      single product to a WordPress site—your store, your way.
                    </p>
                    <button className="info-btn">Read the Documentation</button>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img-section">
                    <img src={work} alt="img1" />
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-5">
                  <div className="img-section">
                    <img src={goal} alt="img1" />
                  </div>
                </div>
                <div className="col-md-7 ">
                  <div className="info-section">
                    <span>Achieve Your Goal</span>
                    <p>
                      Its is developer friendly, too. Built with a REST API,
                      scalable and can integrate with virtually any service.
                      Design a complex store from scratch, extend a store for a
                      client, or simply add a single product to a WordPress
                      site—your store, your way.
                    </p>
                    <button className="info-btn">Read the Documentation</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-1">
          <h1 className="companyheading mt-5 p-2">Top Companies</h1>
          {/* <Row className="text-center mb-5">
            {companyList.map((companyList, i) => (
              <Col xs={12} sm={12} md={6} lg={3} className="mt-3  p-0">
                <Card className="jobcard">
                  <img
                    className="cardimage"
                    src={companyList.imageUrl}
                    height={200}
                    width={"50%"}
                  />
                  <Card.Body>
                    <Card.Title>{companyList.title} </Card.Title>
                    <Card.Text>{companyList.description}</Card.Text>
                    <button className="viewJob">View Jobs</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Button variant=" searchcompany p-2">
              <span>View Companies</span>
            </Button>
          </Row> */}
          <Row className="text-center mb-5">
            {console.log("object :>> ", companyList)}
            {companyList.map((companyList, i) => (
              <Col xs={12} sm={12} md={6} lg={3} className="mt-3  p-0">
                <Card className="jobcard">
                  <img
                    className="cardimage"
                    src={`http://localhost:8080/${companyList.Image}`}
                    alt="image"
                    height={200}
                    width={"50%"}
                  />
                  <Card.Body>
                    <Card.Title>{companyList.Title} </Card.Title>
                    <Card.Text>{companyList.Description}</Card.Text>
                    <button className="button1 m-2 p-2" type="submit">
                      View jobs
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {/* <Button variant=" searchcompany p-2">
              <span>View Companies</span>
            </Button> */}
          </Row>
        </div>

        <div>
          <h1 className="companyheading mt-5 p-2">Our Client Companies</h1>
          {/* <Row className="text-center mt-2  ">
            {jobtitlecard.map((jobtitlecard, i) => (
              <Col key={i} xs={12} sm={12} md={6} lg={4} className="mt-1 p-4">
                <Card className="jobcard2 p-3">
                  <Card.Body>
                    <Card.Title>
                      {jobtitlecard.name} <FcNext className="arrowicon2 mx-3" />
                    </Card.Title>
                    <Card.Text>{jobtitlecard.description}</Card.Text>
                  </Card.Body>
                  <Row>
                    {jobtitlecard?.image?.map((list, i) => {
                      return (
                        <Col>
                          <img
                            className="cardimage d-flex justify-content-center align-items-center mt-5"
                            src={list.imageUrl}
                            height={75}
                            width={"80%"}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Card>
              </Col>
            ))}
            <Button variant=" searchcompany p-2 mb-5">
              <span>View Companies</span>
            </Button>
          </Row> */}
          <Row className="text-center mt-2 mb-5">
            {Partnercard.map((Partnercard, i) => (
              <Col xs={6} sm={6} md={3} lg={2} className="mt-1 p-0 mb-5">
                <Card className="partnercard ">
                  <img
                    className="partnerimage p-3"
                    src={Partnercard.imageUrl}
                    height={150}
                    width={"100%"}
                  />
                  <Card.Body>
                    <Card.Title>{Partnercard.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="message_content overflow-hidden">
          <p className="companyheading mt-5">Trusted by Feril Supporters</p>
          <div className="slider-box">
            <div className="box1">
              <svg
                width="234"
                height="168"
                viewBox="0 0 234 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.12084 157.412C12.0181 147.059 19.7946 137.412 25.4501 128.471C31.1057 119.529 33.9335 112.235 33.9335 106.588C33.9335 103.294 32.7553 100.235 30.3988 97.4118C28.5136 94.5882 25.4501 91.5294 21.2085 88.2353C14.6103 83.0588 9.42598 77.6471 5.65559 72C1.8852 66.3529 0 58.8235 0 49.4117C0 34.8235 4.47732 23.0588 13.432 14.1176C22.3867 4.70588 33.6979 0 47.3656 0C61.9758 0 73.7583 4.70588 82.713 14.1176C92.139 23.0588 96.8519 34.8235 96.8519 49.4117C96.8519 67.7647 89.0755 88 73.5226 110.118C58.4411 131.765 38.1752 151.059 12.7251 168L2.12084 157.412ZM139.269 157.412C149.166 147.059 156.943 137.412 162.598 128.471C168.254 119.529 171.082 112.235 171.082 106.588C171.082 103.294 169.903 100.235 167.547 97.4118C165.662 94.5882 162.598 91.5294 158.356 88.2353C151.758 83.0588 146.574 77.6471 142.804 72C139.033 66.3529 137.148 58.8235 137.148 49.4117C137.148 34.8235 141.625 23.0588 150.58 14.1176C159.535 4.70588 170.846 0 184.514 0C199.124 0 210.906 4.70588 219.861 14.1176C229.287 23.0588 234 34.8235 234 49.4117C234 67.7647 226.224 88 210.671 110.118C195.589 131.765 175.323 151.059 149.873 168L139.269 157.412Z"
                  fill="#EDF0FD"
                />
              </svg>
              <p>
                No other eCommerce platform allows people to start for free and
                grow their store as their business grows. More importantly,
                WooCommerce doesn't charge you a portion of your profits as your
                business grows!
              </p>
            </div>
          </div>
          <div className="slider-img-box">
            <img src={img1} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Homepage;
