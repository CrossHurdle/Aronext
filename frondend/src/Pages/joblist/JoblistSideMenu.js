import React from "react";
import './joblist.scss'
const JoblistSideMenu = ({ sideMenuTopic }) => {
  return (
    <div className="job__joblistsidemenu">
      <h4>{sideMenuTopic}</h4>

      <span class="la la-search form-icon"></span>
      <input
        class="form-control"
        type="text"
        placeholder="Job title, keywords"
      />
    </div>
  );
};

export default JoblistSideMenu;
