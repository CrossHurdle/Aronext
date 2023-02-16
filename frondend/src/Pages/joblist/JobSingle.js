import React from "react";
import { Row, Col, Button } from "antd";
import "./jobsingle.scss";
import { AiOutlineCalendar, AiOutlineFieldTime } from "react-icons/ai";
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
  HiOutlineMail,
} from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import JobOverview from "./JobOverview";
import RelatedJobs from "./RelatedJobs";
import jp from "../../assets/jp.jpeg";

const JobSingle = () => {
  return (
    <div className="job__details">
      <div className="job__details-header" >
        Job Title
        <p>CrossHurdle Systems</p>
      </div>
      <div className="job__details-container p-5">
        <div className="job__details-container__left" >
          <div className="job__details-container__left-description">
            <h3>Job Description</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit magnam sapiente dolor
              quos expedita quis, ad perspiciatis hic nihil laboriosam at eius.
            </p>
          </div>
          <div className="job__details-container__left-ul">
            <h3>Required Knowledge, Skills, and Abilities</h3>
            <ul>
              <li> Minimum of 3 Years relevant experience</li>

              <li> Hand On experience with Wordpress</li>
              <li>
                Better knowledge of front-end technologies, including HTML5,
                CSS3, JavaScript, jQuery
              </li>
              <li> Belief – believing in yourself and those around you</li>
              <li>
                Experience designing and developing responsive design websites
              </li>
              <li>
                {" "}
                Ability to convert comprehensive layout and wireframes into
                working HTML pages
              </li>
              <li>Ready to relocate anywhere in India</li>
            </ul>
          </div>
          <div className="job__details-container__left-ul">
            <h3>Education Qualification</h3>
            <ul>
              <li> Any Graduattion Degree(Preferred)</li>
              <li>
                {" "}
                Advanced degree or equivalent experience in graphic and web
                design
              </li>
              <li> 2 or more years of professional design experience</li>
              <li>Direct response email experience</li>
              <li>Ecommerce website design experience</li>
            </ul>
          </div>
          <div className="job__details-container__left-button">
            <button className="button1 m-2 p-2" type="submit">
              Apply Now
            </button>
          </div>
          <div className="job__details-container__left-bottom">
            <h3>Related job</h3>
            <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
            <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
            <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
          </div>
        </div>
        <div className="job__details-container__side" >

            <div className="job__details-side_first">
              <h3>Job Overview</h3>
              <div className="job__details-side_first-content">
                <JobOverview
                  text="12 Nov 2022"
                  title="Posted Date"
                  icons={<AiOutlineCalendar className="icons" />}
                />
                <JobOverview
                  text="24 Nov 2022"
                  title="Last Date"
                  icons={<AiOutlineCalendar className="icons" />}
                />
                <JobOverview
                  text="Bengaluru,India"
                  title="Location"
                  icons={<HiOutlineLocationMarker className="icons" />}
                />
                <JobOverview
                  text="Developer"
                  title="Job Title"
                  icons={<AiOutlineCalendar className="icons" />}
                />
                <JobOverview
                  text="5LPA"
                  title="Salary"
                  icons={<HiOutlineCurrencyDollar className="icons" />}
                />
              </div>
            </div>
            <div className="job__details-side_first">
              <h3>Contact Info</h3>
              <div className="job__details-side_first-content">
                <JobOverview
                  text="test@gmail.com"
                  title="Email"
                  icons={<HiOutlineMail className="icons" />}
                />
                <JobOverview
                  text="9876543210"
                  title="Contact Number"
                  icons={<FiPhoneCall className="icons" />}
                />
                <JobOverview
                  text="10.00AM to 6 PM"
                  title="Office Time"
                  icons={<AiOutlineFieldTime className="icons" />}
                />
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default JobSingle;
