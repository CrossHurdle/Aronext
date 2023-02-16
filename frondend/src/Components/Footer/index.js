import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../../Components/Css/Footer/footer.scss";
import { Row, Col } from "react-bootstrap";
import logoicon from "../../Images/TransparentLogo1.png";
// import Feril from "../../Images/FerilNew1.png";
import Aeronext from "../../Images/Aeronext.png";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center text-lg-start bg-white text-muted">
      <div className="footercontent">
        <Row className="footerrow p-4">
          <Col md={3} lg={3} xl={3} className="mt-5">
            <div class="feril_footer  d-flex justify-content-center align">
              {/* <h6 class="feril_footer text-uppercase fw-bold d-flex justify-content-center ">
                Feril.io
                
              </h6> */}
              <img src={Aeronext} className="logoicon" />
            </div>
          </Col>
          <Col md={3} lg={3} xl={3}>
            <div>
              {/* <a  href="/aboutus">About Us</a> */}
              <div>
                <a
                  href="#"
                  className="link-item "
                  onClick={() => navigate("/aboutus")}
                >
                  About Us
                </a>
              </div>
              <br />
              <div>
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/career")}
                >
                  Career
                </a>
              </div>
              <br />
              <div>
                {/* <Link to="/sitemap" className=" foot-term ">Sitemap </Link> */}
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/sitemap")}
                >
                  Sitemap
                </a>
              </div>
              <br />
              {/* <p  className="  onClick={() => navigate("/employer")}>Employer Home</p> */}
              {/* <a  href="#" className="link-item " onClick={() => navigate("/trustsafety")}>
                Trust & Safety
              </a> */}
            </div>
          </Col>
          <Col md={3} lg={3} xl={3}>
            <div>
              <div>
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/helpcenter")}
                >
                  Help Center
                </a>
              </div>
              <br />
              <div>
                {/* <p>Notices</p> */}
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/feedback")}
                >
                  Feedback
                </a>
              </div>
              <br />
              <div>
                {" "}
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/fraudalert")}
                >
                  Alert
                </a>
              </div>
            </div>
          </Col>
          <Col md={3} lg={3} xl={3}>
            <div>
              <div>
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/privacypolicy")}
                >
                  Privacy Policy
                </a>
              </div>
              <br />
              <div>
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/termsandcondition")}
                >
                  Terms & Conditions
                </a>
              </div>
              <br />
              {/* <p>Issues</p> */}
              {/* <Link to="/client" className=" foot-term ">Clients </Link> */}

              <div>
                {" "}
                <a
                  href="#"
                  className="link-item"
                  onClick={() => navigate("/trustsafety")}
                >
                  Trust & Safety
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="icons d-flex justify-content-center align-items-center p-2  border-bottom ">
          <div className="me-5 d-none d-lg-block ">
            <span style={{ color: "black" }}>
              Get connected with us on social networks:
            </span>
          </div>
          <a href="" className="social me-4" target="_blank">
            <FaFacebookSquare className="FooterIcon" />
          </a>
          <a href="" class="social me-4" target="_blank">
            <FaTwitterSquare className="FooterIcon " />
          </a>
          <a href="" className="social me-4" target="_blank">
            <FaInstagram className="FooterIcon" />
          </a>
          <a href="" className="social me-4" target="_blank">
            <FaLinkedin className="FooterIcon" />
          </a>
        </div>
        <div className="Footertext text-center p-1 text-dark">
          Copyrights ©2020: CrossHurdle.com
        </div>
      </div>
    </div>
  );
};
export default Footer;
