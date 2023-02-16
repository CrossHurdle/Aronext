import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { Tabs } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";
import "../../../../Components/Css/Students/intern.scss";

export default function intern() {
  const onChange = (key) => {
    console.log(key);
  };
  const data = [
    {
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
    <div>
      <div className=" mx-5 mt-5">
        <h2 style={{ textAlign: "center", color: "#295bac" }}>
          Choose your matching Internship
        </h2>
        <div className="jobsearchbox mt-5">
          <input
            type="text"
            className="job-search1"
            placeholder="Search your job here"
          />
          <input type="text" className="job-search2" placeholder="location" />
          <button className="button1 jobsearchbutton">
            <span>Search</span>
          </button>
        </div>
        <div className="wrapper">
          <Row className="p-3">
            {data.map((data, i) => (
              <Col sm={24} md={24} lg={12} className="p-3">
                <Card className="jobscard p-3">
                  <h5>{data.title}</h5>
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
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="DescriptionBox mt-5">
            <Row>
              <Col>
                <h5 style={{ color: "#295bac" }}> Data Science Course </h5>
                <h6>
                  <GoLocation /> India-chennai
                </h6>
                <h6>
                  <RiSuitcaseLine /> 4-month course
                </h6>
              </Col>
              <Col className="descriptionTab">
                <button className="button1 applyButton" type="submit">
                  Apply Now
                </button>
              </Col>
            </Row>
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              items={[
                {
                  label: `Description`,
                  key: "1",
                },

                {
                  label: `Info`,
                  key: "3",
                },
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
