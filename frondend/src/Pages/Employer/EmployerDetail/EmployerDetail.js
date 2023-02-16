import React, { useEffect } from "react";
import "../../../Components/Css/Employer/EmployerDetail.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiFillStar, AiOutlineAntDesign } from "react-icons/ai";
import { FaStarHalfAlt, FaMedal, FaFantasyFlightGames } from "react-icons/fa";
import { BsFillBookmarkFill, BsFilter } from "react-icons/bs";
import { RiUserFollowFill, RiArrowDropDownLine } from "react-icons/ri";

function EmployerDetail() {
  const value = [
    {
      id: 1,
      title: "FrontEnd Designer",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png",
      description:
        " A front end developer has one general responsibility to ensure that website visitors can easily interact  page...",
    },
    {
      id: 2,
      title: "Php Developer",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_2.png",
      description:
        " A PHP Developer is a Software Developer who specialises in the design, testing and implementation...",
    },
    {
      id: 3,
      title: "Testing Engineer",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_6.png",
      description:
        " The role of Test Engineers is to thoroughly check materials, procedures of mechanical systems...",
    },
    {
      id: 4,
      title: "Assisant Manager",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_8.png",
      description:
        "Assistant engineers work on a range of engineering projects and report to the senior engineer... ",
    },
    {
      id: 5,
      title: "Technical Leader",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_4.png",
      description:
        " Technical Leads are employed to manage the delivery of technical projects,context of computer... ",
    },
    {
      id: 5,
      title: "WordPress Developer",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_6.png",
      description:
        " A WordPress developer is a type of web developer. They specialize in building websites...",
    },
    {
      id: 5,
      title: "BackEnd Developer",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_2.png",
      description:
        " Back-end developers are the experts who build and maintain the mechanisms that process data... ",
    },
    {
      id: 5,
      title: "Database Developer",
      imageUrl:
        "http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png",
      description:
        " A Database Developer is a Software Developer who specialises in the design and implementation...  ",
    },
  ];
  return (
    <div>
       <div className=" ">
            <h4 className="pages-title mt-5" >
                Company Information
              </h4>
              <h5 className="detail-info-content mt-3 ms-4">
                HeadQuarters: Bangalore
                <br />                
                Industry Type: Softwarw service
                <br />
                Contact Person: zzz
                <br />
                Employees: 1,000+
                <br />
                Founded in: 2005
                <br />
              
                Followers: 12,050+
                <br />
                Viewed: +10k
              </h5>
            </div>
            <div className=" ">
            <h4 className="pages-title mt-5" >
                Account Details
              </h4>
              <h5 className="detail-info-content mt-3 ms-4">
                User Name: feril
                <br />
                Communication: hrllo@feril.com
                <br />
                Mobile Number: 9999999999
                <br />
                Founded in: 2005
                <br />
                Mail: xxx@gmail
                <br />
                phone: +91,9876567856
                <br />
                Followers: 12,050+
                <br />
                Viewed: +10k
              </h5>
            </div>
      {/* <div className="detail-main mb-4">
        <Row>
          <Col sm={12} md={4} className="detail-company p-4 mx-5">
            <h3>Cross Hurdle System</h3>
            <h5>
              <GoLocation /> Chennai, Bangalore ,Delhi
            </h5>{" "}
            <button
              style={{
                border: "none",
                backgroundColor: "yellow",
                borderRadius: "5px",
              }}
            >
              4.5
            </button>
            <AiFillStar style={{ color: "yellow" }} />{" "}
            <AiFillStar style={{ color: "yellow" }} />{" "}
            <AiFillStar style={{ color: "yellow" }} />{" "}
            <AiFillStar style={{ color: "yellow" }} />{" "}
            <FaStarHalfAlt style={{ color: "yellow" }} />
            <h6 className="mt-1">320 Reviews / View Website</h6>
          </Col>
          <Col sm={12} md={4} className="mt-5">
          <button className="btn-book">
              <BsFillBookmarkFill />
              BookMark
            </button>{" "}
            <button className="btn-follow mx-2">
              <RiUserFollowFill />
              Follow
            </button>
            <h6 className="mt-2">Get weekly updates, new jobs, and reviews</h6>
          </Col>
        </Row>
      </div>                                                                                                                                                                                                                                                                      
      <div className="mx-5 mt-5">
        <h3 style={{ fontSize: "bold" }}>
          CrossHurdle System, INC Carrers and Employment
        </h3>
        <Row>
          <Col sm={12} md={8 }lg={6}>
            <h4 style={{ color: "blue" }} className="mt-3">
              About us
            </h4>
            <h6 className="detail-content">
              CrossHurdle company is all about excellence, passion, and flexibility. For
              the last few years, we have offered world-class services in IT
              consulting, nearshore & offshore custom software development
              services, testing, and user interface design. We are located in
              Bangalore. We work on diverse projects ranging from simple
              information systems and websites to complex enterprise type
              architectures, and desktop or web-enabled applications. Our work
              includes large-scale architectures with microservices, mobile
              apps, solutions based on large volumes of data. We follow three
              main rules to get to our goals: do it on-time, do it within scope,
              and offer the best service with a lower cost.Our industry-leading
              software solutions are used by professionals, and organizations of
              every size, for the design, construction, and operations of roads
              and bridges, rail and transit, water and wastewater, public works
              and utilities, buildings and campuses, and industrial facilities.
            </h6>
          </Col>
          <Col sm={12} md={4} lg={4}className=" mt-3 mx-5 ">
            <div className="detail-info ">
            <h4 className=" mt-5" style={{ color: "blue", textAlign: "center", marginTop:"10px"}} >
                Company Information
              </h4>
              <h5 className="detail-info-content mt-3">
                HeadQuarters: Bangalore
                <br />
                Employees: 1,000+
                <br />
                Industry: IT
                <br />
                Founded in: 2005
                <br />
                Mail: xxx@gmail
                <br />
                phone: +91,9876567856
                <br />
                Followers: 12,050+
                <br />
                Viewed: +10k
              </h5>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mx-5 mt-5">
        <h3 style={{ fontSize: "bold" }}>
          What jobs are available at CrossHurdle, Inc?
        </h3>
        <Row
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {value.map((value) => (
            <Col key={value.id} sm={12} md={3}>
              <Card className="detail-card">
                <img
                  className="value hover-zoom mx-5 mt-3"
                  width="30%"
                  src={value.imageUrl}
                ></img>
                <Card.Body>
                  <Card.Title>{value.title} </Card.Title>
                  <Card.Title
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      lineHeight: "20PX",
                      color: "grey",
                    }}
                  >
                    {value.description}
                  </Card.Title>
                  <Button variant="success">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mx-5 mt-5">
        <h3 style={{ fontSize: "bold" }}>CrossHurdle Interview Rounds and Process:</h3>
        <Row className="mt-4">
          <Col sm={12} lg={2}>
            <p>
              <BsFilter size={25} /> Filter Interview by
            </p>
          </Col>
          <Col sm={12} lg={3}>
            <button className="btn-int">
              <AiOutlineAntDesign /> Designation <RiArrowDropDownLine />
            </button>
          </Col>
          <Col sm={12} lg={3}>
            <button className="btn-int">
              <FaMedal /> Experienced <RiArrowDropDownLine />
            </button>
          </Col>
          <Col sm={12} lg={3}>
            <button className="btn-int">
              <FaFantasyFlightGames /> Interview Type <RiArrowDropDownLine />
            </button>
          </Col>
        </Row>
      </div>
      <div className="mx-5 mt-3">
        <h5 style={{ fontSize: "bold" }}>
          CrossHurdle Systems Interview Rounds and Process:
        </h5>
        <Row>
          <Col sm={12} lg={8}>
            <h6>Round 1: Appitude Test</h6>
            <p>
              Those who cleared first coding test were called to the Pune
              office. Twenty Questions in 55mins. {" "}
            </p>
            <h6>Round 2: Technical Round</h6>
            <p>
              Coding test purely on DSA. Platform was Codility. Four programming
              questions in two hours. Difficulty level was a bit above medium.
            </p>
            <h6>Round 3: Group discussion</h6>
            <p>
              The Group Discussion, commonly referred to as GD, is a crucial
              elimination round in an interview process that candidates need to
              be a part of after clearing their aptitude test or the written
              exam.
            </p>
            <h6>Round 4: HR Round</h6>
            <p>
              {" "}
              HR interviewers want to find out general information about your
              previous roles, core qualifications, key strengths and weaknesses,
              and salary expectations.
            </p>
          </Col>
        </Row>
      </div> */}
    </div>
  );
}

export default EmployerDetail;
