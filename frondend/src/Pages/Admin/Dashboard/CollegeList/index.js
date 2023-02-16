import React, { useState } from "react";
import DataListTable from "../DataListTable";
import CollegeListActions from "./CollegeListActions";

const CollegeApprovalList = () => {
  const [filteredData, setFilteredData] = useState([
    {
      key: 1,
      name: "nahhs",
      phno: 854365346476,
    },
    {
      key: 2,
      name: "nahbdhbwh",
      phno: 854365346476,
    },
  ]);

  const handleSearch = (e) => {
    const name = e.target.value;
    const newData = filteredData.filter((list) =>
      list.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(newData);
    if (name === "") {
      setFilteredData(filteredData);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phno",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => <CollegeListActions record={record} />,
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="College List"
    />
  );
};

export default CollegeApprovalList;
