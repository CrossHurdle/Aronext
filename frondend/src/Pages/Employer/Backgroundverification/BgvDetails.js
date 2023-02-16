import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";
import { BiRupee, BiTimeFive } from "react-icons/bi";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TfiBag, TfiEmail } from "react-icons/tfi";
import Api from "../../../Api"
import { Row, Col, Button, Tabs } from "antd";
import { GoLocation } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Select } from 'antd';
import './Bgv.scss'
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CaretDownOutlined } from "@ant-design/icons";
import Card from 'react-bootstrap/Card';


const BgvDetails = () => {
    const [createForm, setcreateForm] = useState([]);
    // const [BgvData, setBgvData] = useState([{
    //     id: 1,
    //     title: "Cross Hurdle Systems",
    //     location: "Bangalore",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Police Verification', 'Education Verification', 'Experience Verification'
    //     ]
    // },
    // {
    //     id: 2,
    //     title: "Cross Hurdle Systems",
    //     location: "Bangalore",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Police Verification', 'Education Verification', 'Experience Verification'
    //     ]
    // },
    // {
    //     id: 3,
    //     title: "Cross Hurdle Systems",
    //     location: "Chennai",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Police Verification', 'Education Verification', 'Experience Verification'
    //     ]
    // },
    // {
    //     id: 4,
    //     title: "Cross Hurdle Systems",
    //     location: "Chennai",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Police Verification', 'Experience Verification'
    //     ]
    // },
    // {
    //     id: 5,
    //     title: "Cross Hurdle Systems",
    //     location: "Chennai",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Police Verification', 'Education Verification'
    //     ]
    // },
    // {
    //     id: 6,
    //     title: "Cross Hurdle Systems",
    //     location: "Chennai",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Police Verification',
    //     ]
    // },
    // {
    //     id: 7,
    //     title: "Cross Hurdle Systems",
    //     location: "Chennai",
    //     email: "Sincere@april.biz",
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     description: "Get JS remote jobs in telegram for Juniors every day with high salary. Subscribe to best Junior Javascript remote jobs by email and telegram. Search By Job.",
    //     Type_Of_verification: [
    //         'Education Verification'
    //     ]
    // },]);

    const [packaged, setpackage] = useState(false)
    const [packagedAmnt, setPackagedAmnt] = useState('')
    const [emp, setEmp] = useState('')
    const [BgvData, setBgvData] = useState([])
    console.log(BgvData?.services?.subServices?.map((item) => item), "getbgvDetails")

    console.log("emp", emp)

    const { id } = useParams();


    const navigate = useNavigate()

    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChange = (value) => {
        setPackagedAmnt(value)
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const getBgv = () => {
        Api.get(`/bgvProfile/getBgv/${id}`).then((res) => {
            setBgvData(res.data);
        });
    };
    useEffect(() => {
        getBgv();
        console.log(id, "iddddd")
    }, [])

    return (
        <div>
            {/* <Card
                className="profile-cards mt-5 "
            onClick={() => {
                setToggle((prev) => {
                    return !prev;
                });
            }}
            > */}
            {/* {
                BgvData.map((BgvData) => {
                    return ( */}
            <div>


                <div className="card-fields">
                    <div>
                        <div className="card_label">
                            {" "}
                            <h5 className="jobcard_title mt-3">{BgvData.companyName}</h5>
                        </div>
                        {/* <div className="card_label">
                            <p className="card_company"> {BgvData.companyName}</p>
                        </div> */}
                        <div className="card_label">
                            <label>
                                <GoLocation />{" "}
                            </label>
                            <h6>  {BgvData.country},{BgvData.state},{BgvData.city},{BgvData.address}</h6>
                        </div>


                        <div >
                            <label style={{ marginRight: "5px" }}>
                                <RiSuitcaseLine />{" "} Services:
                            </label>
                            <div >
                                {BgvData?.services?.subServices?.map((item) => {
                                    console.log(item, "iiii")
                                    return (
                                        <div>
                                            <ul>
                                                <li>
                                                    {item}
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                    </div>
                </div>
                <div
                    // key={BgvData.id}
                    class="card_content"
                // style={{
                //     height: toggle ? "200px" : "0px",
                // }}
                >
                    <div>
                        <p className="card_company">Description</p>
                        {BgvData.discription}
                    </div>
                    <div className="card_label ">
                        <label>
                            <FiPhoneCall />{" "}
                        </label>
                        <div className="m-2">  Contact Details:</div>

                    </div>
                    <div >
                        <div ><h6><TfiEmail /> {BgvData.email} </h6></div>
                        <div ><h6>Cell : 9867835712</h6></div>
                    </div>

                    <div className="submitbuttons px-4">
                        {/* <Link to='/employer/Bgvform'> */}
                        <button style={{}} className="card_button" type="submit"
                            onClick={() => { navigate(`/employer/Bgvform/${id}`) }
                            }>
                            Click here For Verification
                        </button>
                        {/* </Link> */}

                    </div>
                </div>


            </div>

        </div >
    );
};

export default BgvDetails;