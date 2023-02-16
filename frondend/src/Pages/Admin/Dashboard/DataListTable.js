import React from "react";
import { MdAdd } from "react-icons/md";
import { Table, Button } from "antd";
import "../../../Components/Css/DataListTable.scss";

const DataListTable = ({
  title,
  handleSearch,
  columns,
  dataList,
  showAddNewBtn = true,
  handleAddNewBtn = () => {},
}) => {
  return (
    <>
      <div className="p-5">
        <h2>{title}</h2>
        <div className="Table-top">
          <input
            placeholder="Search..."
            className="ps-2"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="Datalist-Table">
          <Table
            columns={columns}
            dataSource={dataList || []}
            pagination={{
              showSizeChanger: true,
              position: ["bottomCenter"],
            }}
            className="mt-2"
          />
        </div>
      </div>
    </>
  );
};

export default DataListTable;
