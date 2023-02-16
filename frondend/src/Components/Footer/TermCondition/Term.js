import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../Layout";
import "../../Css/Footer/Term.scss";

function Term() {
  return (
    <Layout>
      <div className=" mb-5">
        <Container>
          <Row className="mt-5">
            <Col sm={12} lg={6}>
              <h2 className=" term-condition">Terms And Condition</h2>
              <p className="term-content">
                PLEASE READ THIS TERMS OF USE AGREEMENT (THE “TERMS OF USE”)
                CAREFULLY. <br />
                THESE TERMS OF SERVICE SET FORTH THE LEGALLY BINDING TERMS AND
                CONDITIONS THAT GOVERN YOUR USE OF THE WEBSITE AND SERVICES. BY
                COMPLETING THE REGISTRATION PROCESS, BROWSING THE WEBSITE AND/OR
                BY USING OUR WEBSITE OR SERVICES, YOU (“USER” OR “YOU”) ARE
                ACCEPTING THE PRACTICES DESCRIBED IN THESE TERMS OF SERVICE (ON
                BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT). YOU MAY
                NOT ACCESS OR USE THE WEBSITE OR SERVICES OR ACCEPT THE TERMS IF
                YOU ARE NOT AT LEAST 18 YEARS OLD. IF YOU DO NOT AGREE TO THESE
                TERMS OF SERVICE, PLEASE DO NOT USE THE WEBSITE OR SERVICES, AND
                EXIT IMMEDIATELY. WE RESERVE THE RIGHT TO MODIFY OR AMEND THESE
                TERMS OF SERVICE FROM TIME TO TIME WITHOUT NOTICE. YOUR
                CONTINUED USE OF OUR WEBSITE FOLLOWING THE POSTING OF CHANGES TO
                THESE TERMS WILL MEAN YOU ACCEPT THOSE CHANGES. UNLESS WE
                PROVIDE YOU WITH SPECIFIC NOTICE, NO CHANGES TO OUR TERMS OF
                SERVICE WILL APPLY RETROACTIVELY. For certain of our Services,
                you will also be required to execute our subscription agreement,
                which will have its own terms and conditions that specifically
                apply to any subscription that you purchase. <br />
                PLEASE BE AWARE THAT SECTION 21.1 OF THESE TERMS, BELOW,
                CONTAINS PROVISIONS GOVERNING HOW CLAIMS THAT YOU AND WE HAVE
                AGAINST EACH OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION,
                ANY CLAIMS THAT AROSE OR WERE ASSERTED BEFORE THE EFFECTIVE DATE
                OF THESE TERMS. IN PARTICULAR, IT CONTAINS AN ARBITRATION
                AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRES DISPUTES
                BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL ARBITRATION.
                UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU WILL
                ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF AGAINST US ON
                AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
                CLASS OR REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE
                WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE
                A JURY TRIAL ON YOUR CLAIMS. <br />
              </p>
            </Col>
            <Col sm={12} lg={6}>
              <img
                className="term-img"
                src="https://img.freepik.com/premium-vector/terms-conditions-abstract-concept-vector-illustration_107173-23778.jpg?size=338&ext=jpg&ga=GA1.2.1755127796.1668750682&semt=sph"
                alt="term-img"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Term;
