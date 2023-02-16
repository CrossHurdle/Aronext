import React ,{useState, useEffect} from "react";
import { Table, Button, Input, Popconfirm } from "antd";
import "./Studentlist.scss";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

const columns = [
  {
    title: "Blog Title",
    dataIndex: "Title",
  },
  {
    title: "Blog Description",
    dataIndex: "Description",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: () => (
      <div>
        <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} />
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

const datasource = [
 
  {
    key: 1,
    blogtitle: "freelancer",
    Blogdescription: "Have some idea!!!",
  },
  {
    key: 2,
    blogtitle: "freelancer",
    Blogdescription: "Have some idea!!!",
  },
 
];

const { Search } = Input;

const onSearch = "";

function Blogslist() {

  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    await Api.get("blog/getBlog").then((res) => {
      setBlogList(res.data.data);
      console.log("blogshow",blogList);
    });
  };

  const navigate = useNavigate();
  return (
    <div className="data-list-main">
      <h4 className="data-list-header">Blog List</h4>
      <div className="data-list-top mt-4 py-4 px-3">
        <Input
          className="data-list-search ps-2"
          placeholder="search"
          onSearch={onSearch}
          enterButton
        />

        <Button
          className="data-list-button"
          onClick={() => navigate("Blogform")}
        >
          <BsFillPersonPlusFill />
          &nbsp;Add New
        </Button>
      </div>
      <div className="data-list-table">
      {/* {blogList.map((blog, i) => ( */}
      <Table
          columns={columns}
          dataSource={blogList}
          pagination={false}
          className="mt-2"
        />
        
         {/* ))} */}
      </div>
    </div>
  );
}

export default Blogslist;
