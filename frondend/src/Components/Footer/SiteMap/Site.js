import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../Css/Footer/Site.scss';
import Layout from "../../Layout";

function Site() {
  return (
    <div>
      <Layout>
      <Container className="mb-5">
        <Row className='mt-5'>
          <Col sm={12} md={6}>
            <h3 className="site-main mx-4 mt-5">Sitemap</h3>
          </Col>
        </Row>
        <Row className="ms-5 mt-4">
          <Col sm={12} md={3}>
           <h5 className="site-heading">Information</h5>
           <Link to="/" className="site-content">Home </Link>
           <br/>
           <Link to="/">About </Link>
           <br/>
           <Link to="/">Carrers </Link>
           <br/>
           <Link to="/">Contact Us </Link>
           <br/>
           <Link to="/">Blog </Link>
           <br/>
           <Link to="/">Term & Conditions </Link>
           <br/>
           <Link to="/">Privacy Policy </Link>
           <br/>
           <Link to="/">Feedback </Link>
          </Col>
          <Col sm={12} md={3}>
           <h5 className="site-heading">Job Seeker Section</h5>
           <Link to="/">Register </Link>
           <br/>
           <Link to="/">Login </Link>
           <br/>
           <Link to="/">Advanced Search </Link>
           <br/>
           <Link to="/">Create Job Alert </Link>
           <br/>
           <Link to="/">Jobseekers FAQs </Link>
           <br/>
           <br/>
           <h5 className="site-heading">Browse Job</h5>
           <Link to="/">IIM Jobs </Link>
           <br/>
           <Link to="/">IIT Jobs </Link>
           <br/>
           <Link to="/">Internation Jobs </Link>
           <br/>
           <Link to="/">Browse Jobs </Link>
           <br/>
           <Link to="/">Jobs by Designation </Link>
           <br/>
           <Link to="/">Jobs by Skills</Link>
           <br/>
           <Link to="/">Jons by FA/Industry </Link>
           <br/>
           <Link to="/">Jobs by Loaction </Link>
           <br/>
           <Link to="/">Jobs by Company</Link>
          </Col>
          <Col sm={12} md={3}>
           <h5 className="site-heading">Resume FastForward</h5>
           <Link to="/">Resume Writing </Link>
           <br/>
           <Link to="/">Resume Samples </Link>
           <br/>
           <Link to="/">Resume sample for Freshers</Link>
           <br/>
           <Link to="/">Cover letter samples </Link>
           <br/>
           <Link to="/">Job letter samples </Link>
           <br/>
           <Link to="/">Resume quality score </Link>
           <br/>
           <Link to="/">Recruiter Connection</Link>
           <br/>
           <Link to="/">Carrer Advice </Link>
           <br/>
           <Link to="/">FAQs </Link>
           <br/>
           <Link to="/">Contact Us </Link>
           <br/>
           <br/>
           <h5 className="site-heading">Course Learning</h5>
           <Link to="/">Online Courses& Certification </Link>
           <br/>
           <Link to="/">Online Aptitude Test </Link>
           <br/>
           <Link to="/">Carrer Advise </Link>
           <br/>
           <br/>
           <h5 className="site-heading">Carrer Navigator</h5>
           <Link to="/">Carrer Navigator</Link>
          </Col>
          <Col sm={12} md={3}>
           <h5 className="site-heading">Recruiters</h5>
           <Link to="/">Register/Login </Link>
           <br/>
           <br/>
           <h5 className="site-heading">Recruiters Section</h5>
           <Link to="/">Register </Link>
           <br/>
           <Link to="/">Login </Link>
           <br/>
           <Link to="/">Recruiters FAQs</Link>
           <br/>
           <br/>
           <h5 className="site-heading">Recruiters Products</h5>
           <Link to="/">Buy Online </Link>
           <br/>
           <Link to="/">Post Jobs </Link>
           <br/>
           <Link to="/">Job Advertisement </Link>
           <br/>
           <Link to="/">Insta hire </Link>
           <br/>
           <Link to="/">Carrer site Manager </Link>
          </Col>
        </Row>
      </Container>
      </Layout>
    </div>
  )
}

export default Site