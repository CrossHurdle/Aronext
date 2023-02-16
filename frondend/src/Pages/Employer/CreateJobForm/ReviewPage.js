import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import review from "../../../assets/interview.png";
import { Link, useLocation } from "react-router-dom";

function ReviewPage() {
  const location = useLocation();
  console.log("location", location);
  const {
    jobTitle,
    locations,
    technology,
    experience,
    qualification,
    salaryRange,
    languagePreference,
    skill,
    companyDescription,
    jobDescription,
    companyWebsite,
    companyMailId,
    carrerlevel,
    jobRole,
    jobType,
    jobMode,
    noticePeriod,
  } = location.state;

  return (
    <div>
      <Container style={{ width: "60%" }}>
        <Card className="mt-3">
          <div className="review-card-tag">
            <h4 className="f-bold">Review the Job Post</h4>
            <img src={review} className="review-image-tag"></img>
          </div>
        </Card>
        <br />
        <Card className="review-card1-tag">
          <div className="review-icon-style">
            <Link to="/employer/CreateJobForm" className="review-icon">
              Edit
            </Link>
          </div>
          <div>
            <h5>Job title &nbsp;</h5>
            <p>{jobTitle}</p>
          </div>
          <div>
            <h5>Location &nbsp;</h5>
            <p>{locations}</p>
          </div>
          <div>
            <h5>Technology &nbsp;</h5>
            <p>{technology}</p>
          </div>
          <div>
            <h5>Experience &nbsp;</h5>
            <p>{experience}</p>
          </div>
          <div>
            <h5>Qualification &nbsp;</h5>
            <p>{qualification}</p>
          </div>
          <div>
            <h5>Salary Range &nbsp;</h5>
            <p>{salaryRange}</p>
          </div>
          <div>
            <h5>Job Role &nbsp;</h5>
            <p>{jobRole}</p>
          </div>
          <div>
            <h5>Carrer Level &nbsp;</h5>
            <p>{carrerlevel}</p>
          </div>
          <div>
            <h5>Language Preference &nbsp;</h5>
            <p>{languagePreference}</p>
          </div>
          <div>
            <h5>Skills &nbsp;</h5>
            <p>{skill}</p>
          </div>
          <div>
            <h5>Company Mail-ID &nbsp;</h5>
            <p>{companyMailId}</p>
          </div>
          <div>
            <h5>Company Website &nbsp;</h5>
            <p>{companyWebsite}</p>
          </div>
          <div>
            <h5>Job Type &nbsp;</h5>
            <p>{jobType}</p>
          </div>
          <div>
            <h5>Job Mode &nbsp;</h5>
            <p>{jobMode} </p>
          </div>
          <div>
            <h5>Notice Period &nbsp;</h5>
            <p>{noticePeriod}</p>
          </div>
          <div>
            <h5>Company Description &nbsp;</h5>
            <p>{companyDescription}</p>
          </div>
          <div>
            <h5>Job Description &nbsp;</h5>
            <p>{jobDescription}</p>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ReviewPage;
