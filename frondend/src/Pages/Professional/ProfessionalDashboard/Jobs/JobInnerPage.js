import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiRupee, BiTimeFive } from "react-icons/bi";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../../../Api";

function JobInnerPage() {
  const db = useLocation();
  const [createForm, setcreateForm] = useState();
  const navigate = useNavigate();

  const jobPost = db.state;

  const userEmail = localStorage.getItem("email");
  const UserId = localStorage.getItem("id");
  const name = localStorage.getItem("name");

  const id = jobPost._id;
  const jobTitle = jobPost.jobTitle;
  const carrerlevel = jobPost.carrerlevel;
  const companyWebsite = jobPost.companyWebsite;
  const email = jobPost.email;
  const experience = jobPost.experience;
  const jobId = jobPost.jobId;
  const noticePeriod = jobPost.noticePeriod;
  const locations = jobPost.locations;
  const jobDescription = jobPost.jobDescription;
  const qualification = jobPost.qualification;
  const role = jobPost.role;
  const salaryRange = jobPost.salaryRange;
  const skill = jobPost.skill;
  const technology = jobPost.technology;

  useEffect(() => {
    getCreateForm();
  }, []);

  const getCreateForm = async () => {
    await Api.get(`createForm/getForm/${id}`).then((res) => {
      setcreateForm([res?.data?.data]);
    });
  };
  const onSubmit = (e) => {
    const details = {
      role: name,
      UserID: UserId,
      userEmail: userEmail,
      jobTitle: jobTitle,
      carrerlevel: carrerlevel,
      companyWebsite: companyWebsite,
      email: email,
      experience: experience,
      jobId: jobId,
      noticePeriod: noticePeriod,
      locations: locations,
      jobDescription: jobDescription,
      qualification: qualification,
      role: role,
      salaryRange: salaryRange,
      skill: skill,
      technology: technology,
    };
    Api.post("professional/createJobs", details).then((res) => {
      console.log("res", res);
    });
  };
  return (
    <Container>
      <div>
        <div className="ms-4">
          <Row className="p-3">
            {createForm &&
              createForm.map((i) => (
                <Col>
                  <h3 className="mt-3">{i.jobTitle}</h3>

                  <div className="ms-4 p-2">
                    <h6>
                      <CiCalendarDate /> &nbsp;{i.location}
                    </h6>
                    <h6>
                      <TfiBag /> &nbsp;{i.languagePreference}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp;&nbsp;
                      {i.salaryRange}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList /> &nbsp;{i.technology}
                    </h6>
                    <h6>
                      <BiTimeFive /> &nbsp;{i.technology}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.companyDescription}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.carrerlevel}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.jobDescription}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.companyWebsite}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.companyMailId}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.jobRole}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.jobType}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.jobMode}
                    </h6>
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.noticePeriod}
                    </h6>
                    qualification
                    <h6>
                      <AiOutlineUnorderedList />
                      &nbsp; {i.qualification}
                    </h6>
                  </div>
                </Col>
              ))}
          </Row>

          <br />
          <div className="d-flex mt-3 mb-2">
            <Button
              className="login-button"
              variant="secondary"
              onClick={() => navigate("/professional/jobs")}
            >
              Back
            </Button>
            <Button
              className="login-button ms-5"
              variant="primary"
              onClick={(e) => {
                onSubmit();
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default JobInnerPage;
