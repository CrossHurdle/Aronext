import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";
import { TbWorld } from "react-icons/tb";
import "../../../Components/Css/Students/Studintdetails.scss";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Api from "../../../Api";

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

function Pending() {
  const data = [
    {
      title: "Web Page Developement",
      para1: "Cross Hurdle Stystem",
      icon1: <AiOutlineClockCircle />,
      para2: "4-month",
      icon2: <BiRupee />,
      para3: "5000 per month",
      icon3: <TfiBag />,
      para4: "React.js",
      icon4: <TbWorld />,
      para5: "Tamil, English",
    },
    {
      title: "FrontEnd Development",
      para1: "Green Data",
      icon1: <AiOutlineClockCircle />,
      para2: "6-month",
      icon2: <BiRupee />,
      para3: "6000 per month",
      icon3: <TfiBag />,
      para4: "React.js",
      icon4: <TbWorld />,
      para5: " English",
    },
    {
      title: "BackEnd Development",
      para1: "Thinroot",
      icon1: <AiOutlineClockCircle />,
      para2: "3-month",
      icon2: <BiRupee />,
      para3: "Free",
      icon3: <TfiBag />,
      para4: "Node.js",
      icon4: <TbWorld />,
      para5: " English",
    },
    {
      title: "FrontEnd Development",
      para1: "LimitScale",
      icon1: <AiOutlineClockCircle />,
      para2: "3-month",
      icon2: <BiRupee />,
      para3: "4000 per month",
      icon3: <TfiBag />,
      para4: "Angular",
      icon4: <TbWorld />,
      para5: "Tamil, English",
    },
  ];
  return (
    <div className="Project-main">
      <div className="pages-title">
        Pending
      </div>
    
      <Row className="Project-row">
        {data.map((data, i) => (
          <Col sm={24} md={24} lg={24} className="Project-col">
            <Accordion defaultActiveKey="0">
              <Card className="Int-card">
                <Card.Body>
                  <div className="Project-body">
                    <div>
                      <h4>{data.para1}</h4>
                      <p className="Int-para1">{data.title}</p>
                      <div className="Project-para-content">
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
                        <p className="Int-para2">
                          {data.icon4}
                          {data.para5}
                        </p>
                      </div>
                    </div>
                    <div className="Project-btns">
                      <button className="button1 me-3 mb-3 p-2">View</button>
                      <button className="button2 mb-3 p-2">Delete</button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Accordion>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Pending;
