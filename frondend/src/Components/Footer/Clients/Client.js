import React, { useState } from "react";
import Layout from "../../Layout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../Css/Footer/Client.scss";
import { useNavigate, Link } from "react-router-dom";

function Client() {
  const [clientCard, setClientCard] = useState([
    {
      id: 1,
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C560BAQFicz38-PZFAQ/company-logo_200_200/0/1556818993608?e=2147483647&v=beta&t=RmDkimcni92Zb9-XWIQlqf-CBCT4lI7sca0nh3Y4bzA",
    },
    {
      id: 2,
      imageUrl:
        "https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1151566978584199168",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/guwlbct7skrki7erqacl",
    },
    {
      id: 4,
      imageUrl:
        "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/27725/a6f16b892e/0/4309939c54b52d12444460070c7f8fd0.jpeg",
    },
    {
      id: 5,
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX///8AAADl5eWqqqp+fn67u7tZWVnd3d2Dg4MaGhpsbGzW1taenp7j4+MuLi6ioqLr6+v39/fu7u63t7fDw8OVlZWpqanNzc08PDx0dHQfHx9ERESxsbEVFRVNTU3JyclkZGSNjY0oKCgMDAw0NDRSUlIlJSWRkZGpr7FhAAAES0lEQVR4nO3Za3uaMByGcfBQPNRWwOPqWqld9/2/4UDMPyGBgMiu7cX9e6UkBHiAkEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhPJcvNabwbi3SzH1lV1vvpaVxxmu7XVqVok9p1lrHaxkiLrbbLpav852rULK8oxVYLqom8EbukXyDZz7DOYSvNL4+1NXLHSNpJ3+urfG+vxZUmqjuuVsx/Nm2nLF43tfAhy9+GiOTVsxfjssrCt6fHss76h6fOMq8wMRdU9/xJDtqXyTwwQ/k0G4gaGu7p2Xe84bSo8stbJXwq6iT+OomVSTjpl0n90euNvwwRych/LMVunlqqhGmgL/8GRzuT60o9Mgn28v+sVo9l0WWQzmRSt3VDftX7boqrT/P0NXC3tLo3k0tZeSMLZrfVX2RJMkQk3j6tsDP7tSZr4w78uZjMlMmTLE7c9H2ZzI8Lx63jCsbSwvP1v75E7WdlP/qyO++N6y7eqEdRZpyXLDKrRJkUbHQvPLXaV+1Ebia6Q3Az8XaVW2mi2Jp+AES+lbqTa35mFajbdhLs9JFbpqpkHLxJdYu6gJaSie4QZJt3ZmLEuw8y4/cwlqpBu3NSXflCjurLXVvdyK/B1+3Xh10lKkeCO33vJHosoS6qezMxro3MaexhKhP3GRbfSCb2lZSbOZl4Ll+VySj4Lcdx62fdTA6jyLYyG3OHB6+PxFChMnlqrqIyeXaLtrI/KpPbYD9Op1XpyMgk0F1vWb3Tc+e7sumDVfp7mDwKd2RScyJ0kZWJ+6yampkEMpl4v1bvlMmhuu2XSqHTjz3gL2XijmqrmejMsqJ6n0yqI6Jh0ij9o0yMB3zRNfbIxNqCZ//v9pf6k7Z7JwgyKRn16U+c0AcMRWVycEpet1eZZJK5a6sDc547yeXlRk0M7Ez0k+PS41msh5ri/EgMFTI+cUouqkBlUnMm1HF5xidqXOdkIhsIf92dSSzrvuk57Pn+o68nPdXJ3qyEJeNY+6WanlN7xrHq9nIz0UezVUOwoFsmMmEo7ic5q/nwchj6Inw2J1DxXp7/RneYVqadSSoFzfOdlV5uZ2I0PHcyefft81xWLEbfelg8VChhi+9H5sXHN1m8dzMJMrsdY39+zB1qwqXfXZRXrj43x5oD7KHt/cmi2/uTVVuddU0mzouolnNUZvIt/9VoX5+QYUJpe8+2GeY92zyoy8ROoEsmn/JXz4NnsmyY8az/fez1GT3A+9hTfSbWGemQiR7Smz2XnicPE4rvvf1XbG2yRpf39sWe1mWiX8FctWfyJX92lYPQs8qa6XsPTd93woM8oB/6vhOer1e5aqL6gnBmVmzNROduz4P1PHmo6WBsfQesfMArdfsO+FH9DnhKN1In0R/7TMaHv5bvgKs4WZlVG9qJBnl3DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBQfwBlPjS2c+LczwAAAABJRU5ErkJggg==",
    },
    {
      id: 6,
      imageUrl:
        "https://play-lh.googleusercontent.com/cllvLnSryJMRplj505fh_i-WwJ_jwXUzeBlYngSZjK1Cjfv5dPw2NtnXkwd5jTwU9rVR",
    },
    // {
    //   id: 7,
    //   imageUrl: "https://thinroot.com/img/clients/1.png",
    // },
    // {
    //   id: 8,
    //   imageUrl: "https://thinroot.com/img/clients/9.png",
    // },
    // {
    //   id: 9,
    //   imageUrl: "https://thinroot.com/img/clients/10.png",
    // },
    // {
    //   id: 10,
    //   imageUrl: "https://thinroot.com/img/clients/11.png",
    // },
    // {
    //   id: 11,
    //   imageUrl: "https://thinroot.com/img/clients/4.png",
    // },
    // {
    //   id: 12,
    //   imageUrl: "https://thinroot.com/img/clients/6.png",
    // },
    // {
    //   id: 13,
    //   imageUrl: "https://thinroot.com/img/clients/3.png",
    // },
    {
      id: 14,
      imageUrl: "https://thinroot.com/img/clients/8.png",
    },
    // {
    //   id: 15,
    //   imageUrl: "https://thinroot.com/img/clients/14.png",
    // },
    {
      id: 16,
      imageUrl: "https://thinroot.com/img/clients/leba_workspace.png",
    },
  ]);
  const navigate = useNavigate();
  return (
    <Layout>
      <Row style={{ marginTop: "10px" }}>
        <Col sm={12} md={12}>
          <img
            className="client-img"
            src="https://media.istockphoto.com/id/1257827596/photo/smart-office-concept.jpg?s=612x612&w=0&k=20&c=XXXTe8AuYWk3Kk8vZc1EIxGzgNk-3ez4Za8GWbEQheY="
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={12} md={12}>
          <h1 className="client-head">Our Clients & Partners</h1>
        </Col>
      </Row>
      <Container className="mt-5 mb-5">
        <Row className="text-center mt-2 mb-5">
          {clientCard.map((clientCard, i) => (
            <Col xs={6} sm={6} md={3} lg={2} className="mt-1 p-0 mb-5">
              <Card className="client-card ">
                <img
                  className="partnerimage p-3"
                  src={clientCard.imageUrl}
                  height={150}
                  width={"100%"}
                />
                <Card.Body>
                  <Card.Title>{clientCard.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className=" alert-second-div1">
        <Row className="mt-1 mb-5">
          <Col sm={12} md={12}>
            <h1 className=" client-discuss">Ready to discuss your Project?</h1>
          </Col>
        </Row>
        <Row className=" mb-5">
          <Col sm={12} md={12} className="d-flex justify-content-sm-center">
            <Button
              className="client-btn"
              onClick={() => navigate("/contactus")}
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default Client;
