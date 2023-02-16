
import { React, useEffect, useState } from "react";
import { Form, Input, Space, Table, Tag } from "antd";
// import "../../../Components/Css/Employer/EmployerResume.scss";
import { Button, Modal } from 'antd';
import { NavLink, useNavigate } from "react-router-dom";
import { Checkbox } from 'antd';
import "../../../Components/Css/Bgv/BgvEnquiry.scss"
import { BiCloudDownload } from "react-icons/bi";
import { MdFileDownload } from "react-icons/md";
import { useForm } from "react-hook-form";
import Api from "../../../Api";


function EmployEnquiry() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employData, setEmployData] = useState();
    const navigate = useNavigate()
    console.log("empData", employData?.map((item) => item))
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm()
    const handleFormSubmit = () => {
        const collectDetail = {
            education: getValues().education,
            employer: getValues().employer,
            police: getValues().police,
        }
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <h6>{text}</h6>,
        },
        // {
        //     title: "Title",
        //     dataIndex: "title",
        //     key: "title",
        //     render: (text) => <a>{text}</a>,
        // },
        {
            title: "Location",
            dataIndex: "city",
            key: "location",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        // {
        //     title: "Posted",
        //     dataIndex: "createdAt",
        //     key: "post",
        //     render: (_, record) => { <DateField record={record} format="LL" /> }
        // },
        {
            title: "Details",
            key: "details",
            render: (_, record) => (
                <Space size="middle">
                    {/* <a>View {record.name}</a> */}
                    {console.log(record._id, "did")}
                    <Button className="table_button" onClick={() => { navigate(`/BgvHome/detail/${record._id}`) }} style={{ backgroundColor: "#2b2b2c", color: "white", border: " 2px solid", borderRadius: "7px" }} >Details </Button>
                </Space>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    {console.log(record._id, "record")}
                    {/* <a>View {record.name}</a> */}
                    <Button onClick={() => { navigate(`/BgvHome/Verify/${record._id}`) }} className="table_button" style={{ backgroundColor: "#2b2b2c", color: "white", border: " 2px solid", borderRadius: "7px" }} >Click to Verify</Button>

                </Space>
            ),
        },
    ];

    const data = employData?.map((item) => item)
   

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const educationCheckbox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const employerCheckbox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const policeCheckbox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    function onSuccess() {
        Modal.success({
            content: "Data Posted"
        })
    }

    const getEmp = () => {
        Api.get("/bgvemp/getBgvEmp").then((res) => {
            setEmployData(res.data.data);
        });
    };
    useEffect(() => {
        getEmp()
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} className="mx-5 mt-5" style={{ width: "80%" }} />
            <Modal title="Verification" okText="Post" bodyStyle={{ height: '200px', color: "#2b2b2c" }} open={isModalOpen} onOk={() => {
                handleSubmit(handleFormSubmit)
                onSuccess()
                handleOk()
            }} onCancel={handleCancel}>


            </Modal>
        </div>
    )
}

export default EmployEnquiry;
