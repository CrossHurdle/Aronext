import React from 'react'
import Joblist from '../Pages/joblist/Joblist'
import JobSingle from '../Pages/joblist/JobSingle'

const JobRoutes =[
    {
        path: "/job/list",
        name: "Joblist",
        element: <Joblist />,
      },
      {
        path: "/job/details",
        name: "JobSingle",
        element: <JobSingle />,
      },

     ]

export default JobRoutes
