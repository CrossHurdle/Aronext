import React, { useState, useEffect } from "react";
import Api from "../../../../Api.js";
import DataListTable from "../DataListTable";
import StudentListActions from "./StudentListActions";

const StudentApprovalList = () => {
 const[getData , setGetData]=useState();

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    Api.get("signup/getall")
      .then((res) => {
         setGetData(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    const firstName = e.target.value;
    const newData = getData.filter((list) =>
      list.firstName.toLowerCase().includes(firstName.toLowerCase())
    );
    setGetData(newData);
    if (firstName === "") {
      setGetData();
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => <StudentListActions record={record} />,
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={getData}
      handleSearch={handleSearch}
      title={`Student List`}
    />
  );
};

export default StudentApprovalList;
