import React from "react";

const Experience = () => {
  const ExpRange = [
    { label: "Fresher" },
    { label: "1 Year+" },
    { label: "2 Year+" },
    { label: "3 Year+" },
    { label: "4 Year+" },
    { label: "5 Year+" },
    { label: "6 Year+" },
    { label: "7 Year+" },
  ];
  return (
    <div>
      {ExpRange.map(ele => (
        <div key={ele.label}>
          <input type="checkbox" /> <label htmlFor="">{ele.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Experience;
