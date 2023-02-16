import React from "react";
import { Container } from "react-bootstrap";
import { BiRupee, BiTimeFive } from "react-icons/bi";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

function ViewInnerPage() {
  const location = useLocation();


  const jobPost = location.state;


  return (
    <Container>
      <div className="ms-4">
        <h3 className="mt-3">{jobPost.jobTitle}</h3>
        <h5 style={{ color: "blue" }}>{jobPost.jobRole}</h5>
        <div className="ms-4">
          <h6>
            <CiLocationOn /> chennai, Bangalore
          </h6>
          <h6>
            <CiCalendarDate /> october,11
          </h6>
          <h6>
            <BiTimeFive /> {jobPost.jobType}
          </h6>
          <h6>
            <TfiBag /> {jobPost.experience} years
          </h6>
          <h6>
            <BiRupee /> {jobPost.salaryRange} lakh PA
          </h6>
          <h6>
            <AiOutlineUnorderedList /> {jobPost.technology}
          </h6>
        </div>
        <br />
        <h5>Roles & Responsibility</h5>
        <ul className="ms-5">
          <li>
            <h6>
              Designing user interfaces and navigation menus.Builds, designs,
              and maintains all websites and software applications.{" "}
            </h6>
          </li>
          <li>
            <h6>
              Executes assignments with the use of web applications, scripts,
              and programming languages such as HTML, CSS, JavaScript, and APIs.
            </h6>
          </li>
          <li>
            <h6>
              Understands UI, cross-browser compatibility, and general web
              functions and standards.
            </h6>
          </li>
          <li>
            <h6>
              Testing web applications and Maintains a professional
              understanding of web development by tracking trends and
              participating in study groups
            </h6>
          </li>
          <li>
            <h6>
              Troubleshooting problems with performance or user
              experience.Creates solutions for identified problems or bugs
            </h6>
          </li>
          <li>
            <h6>Collaborating with designers, developers, and stakeholders</h6>
          </li>
        </ul>
        <h5>Good to have</h5>
        <ul className="ms-5">
          <li>
            <h6>Ability to write and edit technical documentation</h6>
          </li>
          <li>
            <h6>Knowledge of modern HTML/CSS</h6>
          </li>
          <li>
            <h6>Creative problem-solving skills</h6>
          </li>
          <li>
            <h6>Any programming language certification</h6>
          </li>
        </ul>
        <h5>Education and Experience</h5>
        <ul className="ms-5">
          <li>
            <h6>Bachelor’s degree in computer science</h6>
          </li>
          <li>
            <h6>Minimum of two years experience as a web developer</h6>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default ViewInnerPage;
