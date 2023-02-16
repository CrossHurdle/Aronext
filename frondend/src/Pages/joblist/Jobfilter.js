import React from "react";

const Jobfilter = ({ filterTitle, content }) => {
  return (
    <div className="job__jobfilter p-4">
      <div className="job__jobfilter-header">
        <h3>{filterTitle}</h3>

        {/* Below div container for border */}
        <div className="job__jobfilter-header__border" />
        {/* above div container for border */}
      </div>
      <div className="job__jobfilter-content">{content}</div>
    </div>
  );
};

export default Jobfilter;
