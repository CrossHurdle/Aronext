import React from "react";
import "./relatedJobs.scss";
import jp from "../../assets/jp.jpeg";

const RelatedJobs = ({ image }) => {
  return (
    <div className="job__related p-2 me-2">
      <div className="job__related-content">
      <div className="job__related-content__logo">
        {image}
        {/* <img src={jp} alt='jplogo' width="100px" /> */}
      </div>
      <div className="job__related-content__middle">
        <h4>Front-End</h4>
        <h5>CrossHurdles systems</h5>
        <div className="job__related-content__middle-bottom">
          <p>experience:2+ years</p>
          <p>City</p>
          <p>Country</p>
          <p>01-Nov-2022</p>
        </div>
      </div>
      </div>
      <div className="job__related-end">
        <button className="button1 m-2 p-2">View Details</button>
      </div>
    </div>
  );
};

export default RelatedJobs;
