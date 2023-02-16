import React from "react";

const Qualification = () => {
  const qualificationList = [
    { label: "Certificate" },
    { label: "Diploma" },
    { label: "Associate Degree" },
    { label: "Bachelor Degree" },
    { label: "Master Degree" },
    { label: "Doctorate" },
  ];
  return (
    <div>
      {qualificationList.map(ele => (
        <div key={ele.label}>
          <input type="checkbox" /> <label htmlFor="">{ele.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Qualification;
