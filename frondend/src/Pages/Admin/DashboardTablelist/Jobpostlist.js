import React from 'react';
import { Table, Input, Button, Popconfirm } from 'antd';
import "./Studentlist.scss"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
        title:'Action',
        dataIndex: 'action',
        render: () => (
            <div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ cursor: "pointer" }}
              />
              <Popconfirm
                title="Sure to delete?"
                >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ paddingLeft: "10px", cursor: "pointer" }}
                />
              </Popconfirm>
            </div>
        ),
    }
];

const datasource = [
  {
    key: 1,
    name: "nahhs",
  },
  {
    key: 2,
    name: "nahbdhbwh",
  },
];
const { Search } = Input;

const onSearch = ("");

function Jobpostlist() {
  return (
    <div className="data-list-main">
    <h4 className="data-list-header">Jobpost List</h4>
    <div className="data-list-top mt-4 py-4 px-3">
      <Input className="data-list-search ps-2" placeholder="search" onSearch={onSearch} enterButton />
      
      <Button
        className="data-list-button"
      >
        <BsFillPersonPlusFill/>
        &nbsp;Add New
      </Button>
    </div>
    <div className="data-list-table">
      <Table
        columns={columns}
        dataSource={datasource}
        pagination={false}
        className="mt-2"
      />
    </div>
  </div>
  )
}

export default Jobpostlist