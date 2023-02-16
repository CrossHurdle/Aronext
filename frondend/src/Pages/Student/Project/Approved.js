import React, { useContext } from "react";
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

function Request() {
  const data = [
 
    {
      title: "BackEnd Develpoement",
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
   
  ];
  return (
    <div className="p-4">
     <div className="pages-title" styles={{color:'green'}}>
       Approved
      </div>
      <Row className="p-3">
        {data.map((data, i) => (
          <Col sm={24} md={24} lg={12} className="p-3">
            <Accordion defaultActiveKey="0">
              <Card className="Int-card">
                <Card.Body>
                  <h4>{data.para1}</h4>
                  <p className="Int-para1">{data.title}</p>
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
                  <Card.Text>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam id turpis eget purus aliquam hendrerit.
                          In eleifend erat quis erat auctor ultrices.
                        </p>
                        <p>
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

export default Request;
