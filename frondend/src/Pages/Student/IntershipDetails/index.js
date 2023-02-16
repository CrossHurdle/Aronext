import React, { useContext } from "react";
import { Row, Col } from "antd";
import {
  FcParallelTasks,
  FcCamcorderPro,
  FcBullish,
  FcDepartment,
  FcOvertime,
  FcEngineering,
  FcNext,
} from "react-icons/fc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";
import web from "../../../assets/web.jpg";
import python from "../../../assets/python.png";
import marketing from "../../../assets/marketing.png";
import machine from "../../../assets/machine.png";
import excel from "../../../assets/excel.jpg";
import autocad from "../../../assets/autocad.jpg";
import dev from "../../../assets/dev.png";
import dev1 from "../../../assets/dev1.png";
import '../../../Components/Css/Students/Student.scss';
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = eventKey === activeEventKey;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EBE6FF",
        paddingTop: "12px",
      }}
    >
      <p onClick={decoratedOnClick}>
        {children}
        {isCurrentEventKey ? <FiChevronUp /> : <FiChevronDown />}
      </p>
    </div>
  );
}


function IntershipDetails() {
  const list = [
    {
      image: web,
      icon: <FcParallelTasks />,
      content: "Web Development",
    },
    {
      image: python,
      icon: <FcParallelTasks />,
      content: "Programming with Python",
    },
    {
      image: marketing,
      icon: <FcParallelTasks />,
      content: "Digital Marketing",
    },
    {
      image: machine,
      icon: <FcParallelTasks />,
      content: "Machine Learning",
    },
    {
      image: excel,
      icon: <FcParallelTasks />,
      content: "Advance Excel",
    },
    {
      image: autocad,
      icon: <FcParallelTasks />,
      content: "Autocad",
    },
  ];
  const data = [
    {
      image: dev,
      title: "Data Science Course",
      para1: "with guaranteed internship",
      icon1: <AiOutlineClockCircle />,
      para2: "4-month course",
      icon2: <BiRupee />,
      para3: "Highest stipend offered ₹1.1 Lac/-month",
      icon3: <TfiBag />,
      para4: "45,500+ job/internship opportunities",
    },
    {
      image: dev1,
      title: "Human Resource Management Course",
      para1: "with guaranteed job",
      icon1: <AiOutlineClockCircle />,
      para2: "6-month course",
      icon2: <BiRupee />,
      para3: "Highest stipend offered ₹50,000/-month",
      icon3: <TfiBag />,
      para4: "1.08 Lac+ job/internship opportunities",
    },
  ];
  return (
    <div className="p-4">
      <div className="Int-popular-head">
        <h2>Popular Categories</h2>
      </div>
      <Row>
        <Col sm={24} md={12} lg={6} className="Int-col">
          <div className="Inttitle p-3">
            <FcOvertime size={30} /> Part-Time
            <FcNext className="ms-2" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} className="Int-col">
          <div className="Inttitle p-3">
            <FcEngineering size={30} /> Engineering
            <FcNext className="ms-1" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} className="Int-col">
          <div className="Inttitle p-3">
            <FcParallelTasks size={30} /> Science
            <FcNext className="ms-1" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} className="Int-col">
          <div className="Inttitle p-3">
            <FcDepartment size={30} /> Design
            <FcNext className="ms-1" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} className="Int-col">
          <div className="Inttitle p-3">
            <FcBullish size={30} />
            Bussiness
            <FcNext className="ms-1" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} className="Int-col">
          <div className="Inttitle p-3">
            <FcCamcorderPro size={30} />
            Media
            <FcNext className="ms-1" />
          </div>
        </Col>
      </Row>
      <div className="Int-popular-head mt-4">
        <h2>Trainings</h2>
      </div>
      <Row className="p-3">
        {list.map((list, i) => (
          <Col sm={24} md={12} lg={6} className="p-3">
            <Card className="Int-card">
              <div style={{ textAlign: "center" }}>
                <img src={list.image} alt="aaaaaa" className="Int-card-image" />
                <p className="mt-3 mb-0">{list.content}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="p-3">
        {data.map((data, i) => (
          <Col sm={24} md={24} lg={12} className="p-3">
            <Accordion defaultActiveKey="0">
              <Card className="Int-card">
                <Card.Img
                  variant="top"
                  src={data.image}
                  alt="aaaaaa"
                  className="Int-card-image2"
                />
                <Card.Body>
                  <h4>{data.title}</h4>
                  <p className="Int-para1">{data.para1}</p>
                  <p className="Int-para2">
                    {data.icon1}
                    {data.para2}
                  </p>
                  <p className="Int-para2">
                    {data.icon2}
                    {data.para3}
                  </p>
                  <p className="Int-para2">
                    {data.icon3}
                    {data.para4}
                  </p>
                  <Card.Text>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam id turpis eget purus aliquam hendrerit.
                          In eleifend erat quis erat auctor ultrices.
                        </p>
                        <p>
                          {" "}
                          Curabitur eget lacus id erat auctor sollicitudin eget
                          fermentum turpis. Aenean dui ipsum, maximus eleifend
                          erat nec, suscipit accumsan odio.
                        </p>
                        <p>
                          Ut molestie tristique tempor. Pellentesque facilisis
                          dictum hendrerit. Phasellus lacinia velit ligula, a
                          tempor eros placerat ac. Etiam elementum erat quis
                          ullamcorper tincidunt.
                        </p>
                        <p>
                          Maecenas erat lacus, suscipit sed egestas at, vehicula
                          eget augue. Nam quis augue sit amet metus blandit
                          sodales. Donec libero sapien, dignissim at justo in,
                          rutrum ultrices arcu.
                        </p>
                        <p>
                          Suspendisse potenti. Morbi cursus sem ipsum, non
                          ornare dolor convallis in. Ut sollicitudin augue at
                          urna tincidunt interdum.
                        </p>
                        <p>
                          Sed blandit, sem vitae pretium efficitur, justo ante
                          egestas elit, a interdum elit elit ut ipsum. Nulla
                          scelerisque condimentum magna, nec feugiat diam
                          finibus auctor.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                  <ContextAwareToggle eventKey="1">More</ContextAwareToggle>
                </Card.Body>
              </Card>
            </Accordion>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default IntershipDetails;
