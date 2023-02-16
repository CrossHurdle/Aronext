import React from "react";
import RelatedJobs from "./RelatedJobs";
import jp from "../../assets/jp.jpeg";
import "./joblist.scss";
import { TfiEmail } from "react-icons/fi";
import JoblistSideMenu from "./JoblistSideMenu";
import Jobfilter from "./Jobfilter";
import {
  DateFilter,
  CareerLevel,
  Experience,
  Qualification,
  Salary,
  JobType,
} from "./filterComponent";

const Joblist = () => {
  return (
    <div className="job__list">
      <div className="job__list-header">
        <h3>Job List</h3>
      </div>
      <div className="job__list-sort">
        <h4>Showing 1 to 16 of 128 results</h4>
        <div className="job__list-sort_end">
          {/* <TfiEmail className="icon" /> */}
        </div>
      </div>
      <div className="job__list-container">
        <div className="job__list-container__left">
          <JoblistSideMenu sideMenuTopic="Keywords" />
          <JoblistSideMenu sideMenuTopic="Category" />
          <JoblistSideMenu sideMenuTopic="Location" />
          {/* <JoblistSideMenu sideMenuTopic='Keywords' /> */}
          <Jobfilter filterTitle="Filter By Salary" content={<Salary />} />
          <Jobfilter filterTitle="Date Posted" content={<DateFilter />} />

          <Jobfilter filterTitle="Job Type" content={<JobType />} />
          <Jobfilter filterTitle="Career Level" content={<CareerLevel />} />
          <Jobfilter filterTitle="Experience" content={<Experience />} />
          {/* <Jobfilter filterTitle='Gender' />
          <Jobfilter filterTitle='Industry' /> */}
          <Jobfilter filterTitle="Qualification" content={<Qualification />} />
        </div>
        <div className="job__list-container__right">
          <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
          <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
          <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
          <RelatedJobs image={<img src={jp} alt="alt" width="100px" />} />
        </div>
      </div>
    </div>
  );
};

export default Joblist;
