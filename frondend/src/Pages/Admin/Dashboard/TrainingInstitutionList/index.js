import React, { useEffect, useState } from "react";
import DataListTable from "../DataListTable";
import TrainingInstitutionListActions from "./TrainingInstitutionListActions";

const TrainingInstitutionApprovalList = () => {
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
    {
      key: 3,
      name: "aaaaa",
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
      render: (_, record) => <TrainingInstitutionListActions record={record} />,
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="TrainingInstitution List"
    />
  );
};

export default TrainingInstitutionApprovalList;
