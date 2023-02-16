import React from "react";
import "./Home.scss";
import { Carousel } from "antd";
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
import learn from "../../../Images/learn11.jpg";
import learn1 from "../../../Images/learn22.jpg";
import learn2 from "../../../Images/learn33.jpg";
import learn3 from "../../../Images/learn44.jpg";
import card1 from "../../../Images/card1.jpg";
import card2 from "../../../Images/card2.jpg";
import card3 from "../../../Images/card3.jpg";
import logo from "../../../Images/logo2.jpg";
import star from "../../../Images/star.png";

import { Space, Typography } from "antd";
import { Card } from "antd";
const { Meta } = Card;
const { Text, Link } = Typography;
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
const Home = () => (
  <div className="p-4">
    <Carousel autoplay style={{ height: "252px", background: "#364d79" }}>
      <div>
        <div>
          <img className="image" src={learn} />
        </div>
      </div>
      <div>
        <div>
          <img className="image" src={learn1} />
        </div>
      </div>
      <div>
        <div>
          <img className="image" src={learn2} />
        </div>
      </div>
      <div>
        <div>
          <img className="image" src={learn3} />
        </div>
      </div>
    </Carousel>
    {/* Popular Search */}
    <div className="Int-popular-head">
      <h2>Popular Searches</h2>
    </div>
    <Row>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Hacking</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Finance</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Accounts</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Web-Designing</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">App-Development</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Management</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Data Analyst</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Banking</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Java</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Business Analyst</button>
        </div>
      </Col>
      <Col sm={24} md={12} lg={4} xs={12} className="Int-col">
        <div>
          <button class="button">Sales</button>
        </div>
      </Col>
    </Row>
    {/* Card */}
    <div className="Int-popular-head">
      <h2>Advantage</h2>
    </div>
    <Row style={{ padding: "50px" }}>
      <Col sm={24} md={12} lg={8}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img src={card1} />}
        >
          <Meta title="One on one Sessions" />
        </Card>
      </Col>
      <Col sm={24} md={12} lg={8}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img src={card2} />}
        >
          <Meta title="Doubts clearing sessions" />
        </Card>
      </Col>
      <Col sm={24} md={12} lg={8}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img src={card3} style={{ height: "160px", width: "240px" }} />
          }
        >
          <Meta title="Clear explanations" />
        </Card>
      </Col>
    </Row>
    {/* Star */}
    <div className="Int-popular-head">
      <h2>Sponsered Companies</h2>
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          width: "240px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Row className="cardrow">
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>
              <img className="logo" src={logo} />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Company Name</div>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img className="star" src={star}></img>
            </div>
            <div>4.2</div>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <div></div>
          </Col> */}
          <Col sm={24} md={24} lg={24} xs={24}>
            <div>Course Name</div>
          </Col>
        </Row>
      </Card>
    </div>
  </div>
);
export default Home;
