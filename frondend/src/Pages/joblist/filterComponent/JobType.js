import React from "react";

const JobType = () => {
  const jobTypeList = [
    { labels: "Fulltime" },
    { labels: "PartTime" },
    { labels: "Freelancer" },
    { labels: "Remote" },
    { labels: "Contract" },
  ];

  return (
    <div className="job__listfilter-jobtype">
      {jobTypeList.map(ele => (
        <div key={ele.labels}>
          <input type="checkbox" /> <label htmlFor="">{ele.labels}</label>
        </div>
      ))}
    </div>
  );
};

export default JobType;
