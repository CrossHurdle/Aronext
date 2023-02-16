import React from 'react'

const Date = () => {
    const datefilter=[{label:'All'},{label:'Last 24Hrs'},{label:'Last 1Week'},{label:'Last Month'},{label:'Last 3Months'},]
  return (
    <div>
      {datefilter.map(ele => (
        <div key={ele.label}>
          <input type="radio" /> <label htmlFor="">{ele.label}</label>
        </div>
      ))}
    </div>
  )
}

export default Date
