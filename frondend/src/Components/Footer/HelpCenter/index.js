import React from "react";
import Layout from "../../Layout.js";
import "../../Css/Footer/HelpCenter.scss";
import { Input, Row, Col } from "antd";
import {
  MdPeopleOutline,
  MdOutlineTouchApp,
  MdOutlineSettings,
} from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { BsArrowRepeat, BsShieldCheck } from "react-icons/bs";

const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function HelpCenter() {
  return (
    <Layout>
      <div className="HelpCenter-main">
        <div className="HelpCenter-First HelpCenter-Search">
          <h1 className="HelpCenter-Header">Hi, How can we help you?</h1>
          <Search
            placeholder="Search by keyword"
            onSearch={onSearch}
            enterButton
            style={{
              width: "60%",
            }}
          />
        </div>
        <div className="HelpCenter-Second">
          <div className="HelpCenter-Sec-one">
            <h1 className="HelpCenter-Header">QUICK SOLUTION</h1>
            <h5 className="HelpCenter-Header">
              as per the recent search trend
            </h5>
          </div>
          <div className="HelpCenter-Cols">
            <div className="HelpCenter-Col">
              <p className="HelpCenter-Q">Q.</p>
              <p className="HelpCenter-Para">How can I delete my account?</p>
            </div>
            <div className="HelpCenter-Col">
              <p className="HelpCenter-Q">Q.</p>
              <p className="HelpCenter-Para">
                I do not want my current employer to have access to my profile.
                How can I block a recruiter?
              </p>
            </div>{" "}
            <div className="HelpCenter-Col">
              <p className="HelpCenter-Q">Q.</p>
              <p className="HelpCenter-Para">
                How can I update/edit my Profile?
              </p>
            </div>{" "}
            <div className="HelpCenter-Col">
              <p className="HelpCenter-Q">Q.</p>
              <p className="HelpCenter-Para">
                Do I need to pay to apply to a job or get an interview call? /
                Recruiter are asking me to pay to schedule interview for job?
              </p>
            </div>{" "}
            <div className="HelpCenter-Col">
              <p className="HelpCenter-Q">Q.</p>
              <p className="HelpCenter-Para">
                How do I search for jobs on Portal?
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <h1 style={{ color: "#006cb7" }}>Browse By Topic</h1>
        </div>
        <Row className="HelpCenter-Card-Row">
          <Col sm={24} md={8} lg={4} className="p-2">
            <div className="HelpCenter-Card hvr-rectangle-out">
              <MdPeopleOutline style={{ fontSize: "50px" }} />
              <p className="Icon-para">Create Profile</p>
            </div>
          </Col>
          <Col sm={24} md={8} lg={4} className="p-2">
            <div className="HelpCenter-Card hvr-rectangle-out">
              <ImSearch style={{ fontSize: "50px" }} />
              <p className="Icon-para">Search</p>
            </div>
          </Col>
          <Col sm={24} md={8} lg={4} className="p-2">
            <div className="HelpCenter-Card hvr-rectangle-out">
              <MdOutlineTouchApp style={{ fontSize: "50px" }} />
              <p className="Icon-para">Apply</p>
            </div>
          </Col>
          <Col sm={24} md={8} lg={4} className="p-2">
            <div className="HelpCenter-Card hvr-rectangle-out">
              <BsArrowRepeat style={{ fontSize: "50px" }} />
              <p className="Icon-para">Getting around</p>
            </div>
          </Col>
          <Col sm={24} md={8} lg={4} className="p-2">
            <div className="HelpCenter-Card hvr-rectangle-out">
              <MdOutlineSettings style={{ fontSize: "50px" }} />
              <p className="Icon-para">Settings</p>
            </div>
          </Col>
          <Col sm={24} md={8} lg={4} className="p-2">
            <div className="HelpCenter-Card hvr-rectangle-out">
              <BsShieldCheck style={{ fontSize: "50px" }} />
              <p className="Icon-para">Security Advice</p>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
