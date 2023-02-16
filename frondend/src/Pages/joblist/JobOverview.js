import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import './jobOverview.scss'

const JobOverview = ({ text, title,icons }) => {
  return (
    <>
      <div className="job__details-side_first-content">
        <div className="job__details-side_first-content_list">
          {/* <div className="job__details-side_first-content_list-icon"> */}
          {/* <AiOutlineCalendar className="icons" /> */}
          {icons}
          {/* </div> */}
          <div className="job__details-side_first-content_list-data">
            <h6>{title}</h6>
            <p> {text}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default JobOverview
