import React, { useEffect, useState } from "react";
import { Table, Button, Input, Popconfirm, Modal } from "antd";
import "./Studentlist.scss";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Api from "../../../Api";

function Intershiprequest() {
  const [internList, setInterList] = useState([]);
  const [dailogVal, setDailogVal] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getIntern();
  }, []);

  const getIntern = async () => {
    await Api.get("Student/getintership").then((res) => {
      setInterList(res.data.data);
    });
  };

  const deleteIntershipRequest = (id) => {
    console.log(id, "asdf");
    Api.delete(`student/deleteintership/${id}`).then((resp) => {
      getIntern();
    });
  };

  const handleModalprops = (id) => {
    const filterdVal = internList.filter((ele) => {
      return ele._id === id;
    });
    setDailogVal(filterdVal[0]);
    return;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Duration",
      dataIndex: "intershipDuration",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ cursor: "pointer" }}
            onClick={() => {
              showModal();
              handleModalprops(record._id);
            }}
          />
          <Modal
            title="View"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>{dailogVal.name}</p>
            <p>{dailogVal.expectedField}</p>
            <p>{dailogVal.intershipDuration}</p>
            <p>{dailogVal.describtion}</p>
            <p>{dailogVal.ModeOfIntern}</p>
            <p>{dailogVal.CourseDuration}</p>
          </Modal>

          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              deleteIntershipRequest(record._id);
            }}
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

  const datasource = [
    {
      key: 1,
      name: "nahhs",
      duration: "3-6months",
    },
    {
      key: 2,
      name: "nahbdhbwh",
      duration: "3-6months",
    },
  ];

  //   const { Search } = Input;

  const onSearch = "";

  return (
    <div>
      <div className="data-list-main">
        <h4 className="data-list-header">Intership Request</h4>
        <div className="data-list-top mt-4 py-4 px-3">
          <Input
            className="data-list-search ps-2"
            placeholder="search"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="data-list-table">
          <Table
            columns={columns}
            dataSource={internList}
            pagination={false}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Intershiprequest;
