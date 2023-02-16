import React, { useState } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import "../../../Components/Css/Students/learning.scss";

function ProfessionalLearing() {
  const [Popular, setPopular] = useState([
    {
      id: 1,
      title: "Web Development",
      description: "4.3",
      learners: "23,567 learners",
      imageUrl:
        "https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496200.jpg",
    },
    {
      id: 2,
      title: " Python",
      description: "4.6",
      learners: "23,567 learners",
      imageUrl:
        "https://png.pngtree.com/png-vector/20200429/ourmid/pngtree-web-development-concept-flat-design-png-image_2197063.jpg",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "4.2",
      learners: "23,567 learners",
      imageUrl:
        "https://png.pngtree.com/png-vector/20200312/ourmid/pngtree-modern-flat-design-concept-of-web-development-with-characters-on-screen-png-image_2157892.jpg",
    },
    {
      id: 4,
      title: "Machine Learing",
      description: "4.6",
      learners: "23,567 learners",
      imageUrl:
        "https://png.pngtree.com/png-vector/20190611/ourlarge/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg",
    },
  ]);
  const [program, setProgram] = useState([
    {
      id: 1,
      title: "React",
      description: "4.3",
      learners: "23,567 learners",
      imageUrl:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      id: 2,
      title: " Python",
      description: "4.6",
      learners: "23,567 learners",
      imageUrl:
        "https://cdn3d.iconscout.com/3d/premium/thumb/python-6815592-5602757.png",
    },
    {
      id: 3,
      title: "Java",
      description: "4.2",
      learners: "23,567 learners",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/152/152760.png",
    },
    {
      id: 4,
      title: "App Development",
      description: "4.6",
      learners: "23,567 learners",
      imageUrl:
        "https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?w=2000",
    },
  ]);
  const [science, setScience] = useState([
    {
      id: 1,
      title: "Machine Leanring",
      description: "4.3",
      learners: "23,567 learners",
      imageUrl:
        "https://img.freepik.com/free-vector/artificial-intelligence-financing-abstract-concept-illustration_335657-1904.jpg?w=2000",
    },
    {
      id: 2,
      title: "Data Science",
      description: "4.6",
      learners: "23,567 learners",
      imageUrl:
        "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?w=2000",
    },
    {
      id: 3,
      title: "Business Analytics",
      description: "4.2",
      learners: "23,567 learners",
      imageUrl:
        "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=2000",
    },
    {
      id: 4,
      title: "Power BI",
      description: "4.6",
      learners: "23,567 learners",
      imageUrl:
        "https://img.freepik.com/premium-vector/data-visualization-computer-concept-vector-illustration_402975-25.jpg?w=2000",
    },
  ]);

  return (
    <div>
      <div className="searchboxs ">
        <input
          type="text"
          className="homepage-searchs"
          placeholder="Search your training here"
        />
        <button className="searchbuttons">
          <span>Search</span>
        </button>
      </div>
      <div className=" p-1">
        <h1 className="companyheadings mt-3 p-2">Most Popular</h1>
        <Row className="text-center mb-5">
          {Popular.map((popular, i) => (
            <Col xs={12} sm={12} md={6} lg={3} className="mt-3  p-0">
              <Card className="popular">
                <img
                  className="cardimages"
                  src={popular.imageUrl}
                  height={200}
                  width={"60%"}
                />
                <Card.Body>
                  <Card.Title>{popular.title} </Card.Title>
                  <Card.Text>
                    {popular.description} | {popular.learners}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <span style={{ color: "#3675fd" }}>
                    Know More <AiOutlineRight size={13} />
                  </span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          <Button variant=" p-2" className="searchcompanys">
            <span>View More</span>
          </Button>
        </Row>
      </div>
      <div>
        <h1 className="companyheadings mt-0 p-2">Programming</h1>
        <Row className="text-center mb-5">
          {program.map((program, i) => (
            <Col xs={12} sm={12} md={6} lg={3} className="mt-3  p-0">
              <Card className="popular">
                <img
                  className="cardimages"
                  src={program.imageUrl}
                  height={200}
                  width={"60%"}
                />
                <Card.Body>
                  <Card.Title>{program.title} </Card.Title>
                  <Card.Text>
                    {program.description} | {program.learners}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <span style={{ color: "#3675fd" }}>
                    Know More <AiOutlineRight size={13} />
                  </span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          <Button variant=" p-2" className="searchcompanys mb-4">
            <span>View More</span>
          </Button>
        </Row>
      </div>
      <div>
        <h1 className="companyheadings mt-0 p-2">Data Science</h1>
        <Row className="text-center mb-5">
          {science.map((science, i) => (
            <Col xs={12} sm={12} md={6} lg={3} className="mt-3  p-0">
              <Card className="popular">
                <img
                  className="cardimages"
                  src={science.imageUrl}
                  height={200}
                  width={"60%"}
                />
                <Card.Body>
                  <Card.Title>{science.title} </Card.Title>
                  <Card.Text>
                    {science.description} | {science.learners}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <span style={{ color: "#3675fd" }}>
                    Know More <AiOutlineRight size={13} />
                  </span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          <Button variant=" p-2" className="searchcompanys mb-4">
            <span>View More</span>
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default ProfessionalLearing;
