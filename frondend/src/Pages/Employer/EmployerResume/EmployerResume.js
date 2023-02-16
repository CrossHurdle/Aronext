// import { useState, React } from 'react';
// import { Chart } from 'primereact/chart';

// function EmployerResume() {

//   const [basicData] = useState({
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             fill: false,
//             borderColor: '#42A5F5',
//             tension: .4
//         },
//         {
//             label: 'Second Dataset',
//             data: [28, 48, 40, 19, 86, 27, 90],
//             fill: false,
//             borderColor: '#FFA726',
//             tension: .4
//         }
//     ]
// });
// const getLightTheme = () => {
//   let basicOptions = {
//       maintainAspectRatio: false,
//       aspectRatio: .6,
//       plugins: {
//           legend: {
//               labels: {
//                   color: '#495057'
//               }
//           }
//       },
//       scales: {
//           x: {
//               ticks: {
//                   color: '#495057'
//               },
//               grid: {
//                   color: '#ebedef'
//               }
//           },
//           y: {
//               ticks: {
//                   color: '#495057'
//               },
//               grid: {
//                   color: '#ebedef'
//               }
//           }
//       }
//   };
// }

//   const basicOptions = getLightTheme();

//   return (
//     <div>

// <div className="card mx-5">
//                 <h5>EmployerResume</h5>
//                 <Chart width={500} type="line" data={basicData} options={basicOptions} />
//             </div>

//     </div>
//   )
// }

// export default EmployerResume

import {React, useState} from "react";
import { Space, Table, Tag } from "antd";
import "../../../Components/Css/Employer/EmployerResume.scss";
import { Button, Modal } from 'antd';
import { NavLink } from "react-router-dom";

function EmployerResume() {
 
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Posted",
      dataIndex: "post",
      key: "post",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>View {record.name}</a> */}
          <NavLink to="/employer/resumeDetail" ><Button type="primary">View</Button></NavLink>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Manju",
      title: "Front End",
      location: "Mahindracity",
      email: "manju@gmail.com",
      post: "05 Jan 2021",
    },
    {
      key: "2",
      name: "Bharathi",
      title: "Web Developer",
      location: "Kalpakkam",
      email: "Bharu@gmail.com",
      post: "08 Jan 2021",
    },
    {
      key: "3",
      name: "Sakthi",
      title: "Designer",
      location: "Mahindracity",
      email: "sakthi@gmail.com",
      post: "15 Jan 2021",
    },
    {
      key: "4",
      name: "Kannan",
      title: "Php Developer",
      location: "Tambaram",
      email: "kannan@gmail.com",
      post: "25 Jan 2021",
    },
    {
      key: "5",
      name: "Priya",
      title: "Testing Department",
      location: "Chennai",
      email: "priya@gmail.com",
      post: "28 Jan 2021",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} className="mx-5 mt-5" style={{ width: "80%" }} />;
    </div>
  );
}

export default EmployerResume;
