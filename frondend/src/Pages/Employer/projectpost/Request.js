import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../../../Components/Css/Students/Studintdetails.scss";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";

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

function RequestProject() {
  const [createForm, setcreateForm] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    getCreateForm();
  }, []);
  const getCreateForm = async () => {
    await Api.get(`student/request_getone/${id}`).then((res) => {
      setcreateForm(res.data.data);
    });
  };
  console.log("createForm", createForm);

  const handleSubmit = (data) => {
    // navigate("viewproject", { state: data });
  };

  return (
    <div className="p-4">
      <div className="pages-title">Request</div>
      <Row className="p-3">
        {createForm.map((data, i) => (
          <Col sm={24} md={24} lg={12} className="p-3">
            <Accordion defaultActiveKey="0">
              <Card
                className="Int-card"
                onClick={() => {
                  handleSubmit(data);
                }}
              >
                <Card.Body>
                  <h4>{data.projectTitle}</h4>
                  <p className="Int-para1">{data.duration}</p>
                  <p className="Int-para2">
                    {data.icon1}
                    {data.skills}
                  </p>
                  <p className="Int-para2">
                    {data.icon2}
                    {data.qualification}
                  </p>
                  <p className="Int-para2">
                    {data.icon3}
                    {data.languages}
                  </p>
                  <p className="Int-para2">
                    {data.icon4}
                    {data.mode}
                  </p>
                  <Card.Text>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>{data.description}</p>
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

export default RequestProject;
