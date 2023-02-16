import React from "react";
import Layout from "../../Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../Css/Footer/Career.scss";
import { Tabs, Card } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip, Space } from "antd";
import { Collapse } from "antd";
const { Panel } = Collapse;

function Career() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Layout>
        <Container className="mb-5">
          <Row className="mt-5">
            <Col
              sm={12}
              md={10}
              lg={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <img
                  className="career-img mt-5"
                  src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </Col>
            <Col
              sm={12}
              md={10}
              lg={6}
              className="mt-5 justify-content-sm-center"
            >
              <div className="p-5">
                <h4 className="career-main">Careers</h4>
                <p className="career-main-content">
                  We are always looking for exceptional people to join our
                  growing data preparation and software development team! We
                  value inspried, skilled self-starters who love to work as part
                  of a team and are cool under pressure. Be in the mission
                  without emission. When you work with us, you will enjoy your
                  work because we firmly believe, a work without enjoyment is a
                  punishment and we do not take that lightly.
                </p>
                <Button className="career-btn" variant=" choosebutton">
                  Current Opening
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={12} className="d-flex justify-content-sm-center">
              <h1 style={{ color: "#4f7eb5", fontWeight: "bold" }}>Come,</h1>
              <h1 style={{ color: "#4f7eb5", fontWeight: "bold" }}> join us!</h1>
            </Col>
          </Row>
          <div className="mt-3">
            <Row>
              <Col>
                <Tabs defaultActiveKey="1" centered className="p-3 mb-4">
                  <Tabs.TabPane tab="Software Development" key="1">
                    <Row>
                      <Col
                        sm={12}
                        md={4}
                        style={{ display: "flex", justifyContent: "right" }}
                      >
                        <Button
                          className="ms-5 career-search"
                          icon={<SearchOutlined />}
                        >
                          Search
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mt-3 d-flex justify-content-sm-center">
                      <Col sm={12} md={3}>
                        <Card
                          style={{
                            width: 300,
                          }}
                        >
                          <h5>Php Developer</h5>
                          <h6>Software Engineer</h6>
                          <Collapse defaultActiveKey={['1']} ghost
                          style={{ marginLeft:"-5px" }}
                          >
                            <Panel  showArrow={false} header="More details-->" >
                              <p>Experience:0-1year</p>
                              <p>Key Skills: Php,Laravel,Html, Css,JS, OOPS</p>
                              <p>Job Type:Full Time</p>
                              <p>Location:Bangalore</p>
                              <p>Work from Office</p>
                              <Button
                                style={{ backgroundColor: "green" }}
                                type="success"
                              >
                                Apply Now
                              </Button>
                            </Panel>
                          </Collapse>
                        </Card>
                      </Col>
                      <Col sm={12} md={3}>
                        <Card
                          style={{
                            width: 300,
                          }}
                        >
                          <h5>Frontend Developer</h5>
                          <h6>Software Engineer</h6>
                          <Collapse defaultActiveKey={['1']} ghost
                          style={{ marginLeft:"-5px" }}
                          >
                             <Panel  showArrow={false} header="More details-->" >
                             <p>Experience:0-1year</p>
                                <p>
                                  Key Skills: React, Angular,Html, Css,JS, OOPS
                                </p>
                              <p>Job Type:Full Time</p>
                              <p>Location:Bangalore</p>
                              <p>Work from Office</p>
                              <Button
                                style={{ backgroundColor: "green" }}
                                type="success"
                              >
                                Apply Now
                              </Button>
                            </Panel>
                          </Collapse>
                        </Card>
                      </Col>
                      <Col sm={12} md={3}>
                        <Card
                          style={{
                            width: 300,
                          }}
                        >
                          <h5>Backend Developer</h5>
                          <h6>Software Engineer</h6>
                          <Collapse defaultActiveKey={['1']} ghost
                          style={{ marginLeft:"-5px" }}
                          >
                             <Panel  showArrow={false} header="More details-->" >
                             <p>Experience:0-1year</p>
                                <p>
                                  Key Skills: Node, php ,Html, Css,JS, OOPS
                                </p>
                              <p>Job Type:Full Time</p>
                              <p>Location:Bangalore</p>
                              <p>Work from Office</p>
                              <Button
                                style={{ backgroundColor: "green" }}
                                type="success"
                              >
                                Apply Now
                              </Button>
                            </Panel>
                          </Collapse>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="mt-4 d-flex justify-content-sm-center">
                      <Col sm={12} md={3}>
                        <Card
                          style={{
                            width: 300,
                          }}
                        >
                          <h5>Java Developer</h5>
                          <h6>Software Engineer</h6>
                          <Collapse defaultActiveKey={['1']} ghost
                          style={{ marginLeft:"-5px" }}
                          >
                             <Panel  showArrow={false} header="More details-->" >
                             <p>Experience:0-1year</p>
                                <p>
                                  Key Skills: Java, spring boot,Html, Css,JS, OOPS
                                </p>
                              <p>Job Type:Full Time</p>
                              <p>Location:Bangalore</p>
                              <p>Work from Office</p>
                              <Button
                                style={{ backgroundColor: "green" }}
                                type="success"
                              >
                                Apply Now
                              </Button>
                            </Panel>
                          </Collapse>
                        </Card>
                      </Col>
                      <Col sm={12} md={3}>
                        <Card
                          style={{
                            width: 300,
                          }}
                        >
                          <h5>UI/UX Designer</h5>
                          <h6>Software Engineer</h6>
                          <Collapse defaultActiveKey={['1']} ghost
                          style={{ marginLeft:"-5px" }}
                          >
                             <Panel  showArrow={false} header="More details-->" >
                             <p>Experience:0-1year</p>
                                <p>
                                  Key Skills: UI/UX design,Html, Css,JS, OOPS
                                </p>
                              <p>Job Type:Full Time</p>
                              <p>Location:Bangalore</p>
                              <p>Work from Office</p>
                              <Button
                                style={{ backgroundColor: "green" }}
                                type="success"
                              >
                                Apply Now
                              </Button>
                            </Panel>
                          </Collapse>
                        </Card>
                      </Col>
                      <Col sm={12} md={3}>
                        <Card
                          style={{
                            width: 300,
                          }}
                        >
                          <h5>Wordpress Developer</h5>
                          <h6>Software Engineer</h6>
                          <Collapse defaultActiveKey={['1']} ghost
                          style={{ marginLeft:"-5px" }}
                          >
                             <Panel  showArrow={false} header="More details-->" >
                             <p>Experience:0-1year</p>
                                <p>
                                  Key Skills: Wordpress,shopify,Html, Css,JS, OOPS
                                </p>
                              <p>Job Type:Full Time</p>
                              <p>Location:Bangalore</p>
                              <p>Work from Office</p>
                              <Button
                                style={{ backgroundColor: "green" }}
                                type="success"
                              >
                                Apply Now
                              </Button>
                            </Panel>
                          </Collapse>
                        </Card>
                      </Col>
                    </Row>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Test Engineer" key="2">
                    <p style={{ marginLeft: "30px" }}>Test Engineer</p>
                  </Tabs.TabPane>
                </Tabs>
              </Col>
            </Row>
          </div>
          <div className="mt-3 career-content">
            <Row className="mt-5">
              <Col sm={12} md={12} className="d-flex justify-content-sm-center">
                <h1
                  className="mt-3"
                  style={{ color: "#4f7eb5", fontWeight: "bold" }}
                >
                  {" "}
                  Contact Us
                </h1>
              </Col>
            </Row>
            <Row className="mt-3 justify-content-center">
              <Col sm={12} md={1}></Col>
              <Col sm={12} md={3}>
                <label>Name</label>
                <br />
                <input type="text" className="career-input " />
              </Col>
              <Col sm={12} md={3}>
                <label>Email</label>
                <br />
                <input type="text" className="career-input" />
              </Col>
              <Col sm={12} md={3}>
                <label>Phone</label>
                <br />
                <input type="text" className="career-input" />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={12} md={2}></Col>
              <Col sm={12} md={10}>
                <label>cover letter</label>
                <br />
                <textarea type="text" className="career-text" />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={12} md={2}></Col>
              <Col sm={12} md={5}>
                <label>File uploaded</label>
                <br />
                <input style={{width:"100%"}} type="file" />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col sm={12} md={2}></Col>
              <Col sm={12} md={10}>
                <Button type="primary" className="btn-career">
                  Submit
                </Button>
                <br />
                <br />
                <p>
                  CrossHurdle does not charge any fees at any stage of the
                  recruitment process and has not authorized any third parties
                  to collect any fees for recruitment.
                </p>
              </Col>
            </Row>
          </div>
          <Row className="mt-5">
            <Col sm={12} md={12} className="d-flex justify-content-sm-center">
              <h2>Can’t find what you’re looking for?</h2>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm={12} md={12} className="d-flex justify-content-sm-center">
              <h6>
                Register on our Candidate Portal and get notified when new roles
                that match your skills open up.
              </h6>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm={12} md={12} className="d-flex justify-content-sm-center">
              <Button type="danger">Register Here?</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Career;
