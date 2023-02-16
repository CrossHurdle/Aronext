import React, { useState, useEffect } from "react";
import { Table, Input, Button, Popconfirm } from "antd";
import "./Studentlist.scss";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

function Companylist() {
  const navigate = useNavigate();

  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    getCompany();
    deleteCompany();
  }, []);

  const getCompany = async () => {
    await Api.get("companylist/getCompanyList").then((res) => {
      setCompanyList(res.data.data);
      console.log("Companyshow", companyList);
    });
  };
  const deleteCompany = async (id) => {
    await Api.get(`companylist/deleteCompanyList/${id}`).then(() => {
      getCompany();
    });
  };

  const { Search } = Input;

  const onSearch = "";

  const columns = [
    {
      title: "Name",
      dataIndex: "Title",
    },
    {
      title: "Description",
      dataIndex: "Description",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div>
          <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} />
          <Popconfirm
            title="Sure to delete?"
            // onClick={(id) => {
            //   deleteCompany(id);
            // }}
            onConfirm={() => deleteCompany(record.id)}
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ paddingLeft: "10px", cursor: "pointer" }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="data-list-main">
      <h4 className="data-list-header">Company List</h4>
      <div className="data-list-top mt-4 py-4 px-3">
        <Input
          className="data-list-search ps-2"
          placeholder="search"
          onSearch={onSearch}
          enterButton
        />

        <Button
          className="data-list-button"
          onClick={() => navigate("Companyform")}
        >
          <BsFillPersonPlusFill />
          &nbsp;Add New
        </Button>
      </div>
      <div className="data-list-table">
        <Table
          columns={columns}
          dataSource={companyList}
          pagination={false}
          className="mt-2"
        />
      </div>
    </div>
  );
}

export default Companylist;
