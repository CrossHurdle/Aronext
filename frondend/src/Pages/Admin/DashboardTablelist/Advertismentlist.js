import React from "react";
import { Table, Input, Button, Popconfirm } from "antd";
import "./Studentlist.scss";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    title: "Ad Name",
    dataIndex: "adname",
  },
  {
    title: "Ad Place",
    dataIndex: "adplace",
  },
  {
    title: "Redirect Url",
    dataIndex: "redirecturl",
  },
  {
    title: "Publisher Number",
    dataIndex: "publishernumber",
  },
  {
    title: "Create Date",
    dataIndex: "createdate",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: () => (
        <div>
          {/*Data Edit function */}
          <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} />

          {/*Data Delete function */}
          <Popconfirm title="Sure to delete?">
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ paddingLeft: "10px", cursor: "pointer" }}
            />
          </Popconfirm>
        </div>
    ),
  },
];

const rowdata = [
  {
    key: "1",
    adname: "dwdwd",
    adplace: "Chennai",
    redirecturl: "https//djdn.com",
    publishernumber: "89292282928",
    createdate: "21/10/1993",
  },

  {
    key: "2",
    adname: "dwdwd",
    adplace: "Chennai",
    redirecturl: "https//djdn.com",
    publishernumber: "89292282928",
    createdate: "21/10/1993",
  },
  {
    key: "3",
    adname: "dwdwd",
    adplace: "Chennai",
    redirecturl: "https//djdn.com",
    publishernumber: "89292282928",
    createdate: "21/10/1993",
  },
];

const { Search } = Input;

const onSearch = "";

function Advertisementlist() {
  return (
    <div className="data-list-main">
      <h4 className="data-list-header">Advertisement List</h4>
      <div className="data-list-top mt-4 py-4 px-3">
        <Input
          className="data-list-search ps-2"
          placeholder="search"
          onSearch={onSearch}
          enterButton
        />

        <Button className="data-list-button">
          <BsFillPersonPlusFill />
          &nbsp;Add New
        </Button>
      </div>
      <div className="data-list-table">
        <Table
          columns={columns}
          dataSource={rowdata}
          pagination={false}
          className="mt-2"
        />
      </div>
    </div>
  );
}

export default Advertisementlist;
