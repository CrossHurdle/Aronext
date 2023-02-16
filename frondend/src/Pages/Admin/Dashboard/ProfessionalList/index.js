import React, { useState, useEffect } from 'react';
import Api from "../../../../Api.js";
import DataListTable from "../DataListTable";
import ProfessionalListActions from "./ProfessionalListActions";

const ProfessionalApprovalList = () => {
  const[getData , setGetData]=useState();
 
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    Api.get("employee/Employee_get")
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
      render: (_, record) => <ProfessionalListActions record={record} />,
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={getData}
      handleSearch={handleSearch}
      title="Professional List"
    />
  );
};

export default ProfessionalApprovalList;
