import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import BgvCompanyData from "./BgvData";
import { Row, Col, Button, Card, Tabs } from "antd";
import { GoLocation } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Select } from 'antd';
import './Bgv.scss'
import { Link, useNavigate } from "react-router-dom";
import Api from "../../../Api";


function BackgroundVarifList() {
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
    const [search, setSearch] = useState(null);
    const [location, setlocation] = useState(null);
    const [TypeOfverification, setTypeOfverification] = useState(null);
    const [salary, setsalary] = useState(null);
    const [BgvData, setBgvData] = useState([]);
    const navigate = useNavigate();
    console.log(BgvData, "getbgv")

    const [toggle, setToggle] = useState(false);
    console.log("bgvdata", BgvData.map((item) => item._id
    ))


    // useEffect(() => {
    //     getBgvDatas(BgvCompanyData);
    // }, []);
    // const getBgvDatas = (BgvCompanyData) => {
    //     setBgvData(BgvCompanyData);
    // };

    const getBgv = () => {
        Api.get("/bgvProfile/getBgv").then((res) => {
            setBgvData(res.data.data);
        });
    };
    useEffect(() => {
        getBgv()
    }, [])

    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const bylocation = (BgvData, city) => {
        if (location) {
            return BgvData.city === city;
        } else return BgvData;
    };
    const ByType_Of_verification = (BgvData, TypeOfverification) => {
        if (TypeOfverification == 'Education Verification') {
            return BgvData.TypeOfverification === TypeOfverification;
        } else return BgvData;
    };

    const bySearch = (BgvData, search) => {
        if (search) {
            return BgvData.services.subServices.toLowerCase().includes(search.toLowerCase());
        } else return BgvData;
    };

    const filteredList = (BgvDatas, location, search) => {
        return BgvDatas
            .filter((BgvData) => bylocation(BgvData, location))
            .filter((BgvData) => bySearch(BgvData, search))
            .filter((BgvData) => ByType_Of_verification(BgvData, TypeOfverification))
    };

    return (
        <div className="">
            <div className="pages-title mb-3 mt-2">
                Search for Background Verification Team
            </div>
            {/* <div> */}
            <div className="pages-title mb-3 mt-2 ms-4 ">Filter</div>
            <Row className="mt-4">
                {/* <Col md={10} lg={8}> */}

                {/* <Col lg={4}>
                        <div className="ms-4">
                            <label className="mt-4">Type of Verification </label>
                            <Select className="filter_input"
                                mode="multiple"

                                placeholder="select type of verification"
                                // onChange={handleChange}
                                optionLabelProp="label"
                                onChange={(e) => { handleChange && setTypeOfverification(e.target.value) }}

                            >
                                <Option value="Police verification" label="Police verification">
                                    <div className="demo-option-label-item">

                                        Police Verification
                                    </div>
                                </Option>
                                <Option value="Education" label="Education">
                                    <div className="demo-option-label-item">

                                        Education Verification
                                    </div>
                                </Option>
                                <Option value="Experience Verification" label="Experience Verification">
                                    <div className="demo-option-label-item">

                                        Experience Verification
                                    </div>
                                </Option>

                            </Select>

                        </div>
                    </Col> */}
                <Col lg={12}>
                    <div className="ms-4">

                        <label className="mt-4">Background Verification</label>
                        <br />
                        <Select className="filter_input"
                            mode="multiple"

                            placeholder="select type of verification"
                            // onChange={handleChange}
                            optionLabelProp="label"
                            onChange={(e) => { handleChange && setTypeOfverification(e.target.value) }}    >

                            <Option value="Education" label="Education">
                                <div className="demo-option-label-item">

                                    Education Verification
                                </div>
                            </Option>
                            <Option value="Employer Verification" label="Employer Verification">
                                <div className="demo-option-label-item">

                                    Employer Verification
                                </div>
                            </Option>
                            <Option value="Police verification" label="Police verification">
                                <div className="demo-option-label-item">

                                    Police Verification
                                </div>
                            </Option>

                        </Select>

                        <br />
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="ms-4">

                        <label className="mt-4">Location</label>
                        <br />
                        <select
                            className="filter_input" onChange={(e) => setlocation(e.target.value)}>
                            <option value="choose location">Choose Location</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Coimbature">Coimbature</option>
                            <option value="other">Other</option>
                        </select>

                        <br />
                    </div>
                </Col>
                {/* </Col> */}
            </Row>

            <Row>
                {filteredList(BgvData, location, TypeOfverification, search).map((BgvData) => (
                    <Col lg={8} className="mt-5">

                        <Card
                            className="profile-cards m-2"
                            onClick={() => {
                                setToggle((prev) => {
                                    return !prev;
                                });
                                navigate(`/employer/BgvDetails/${BgvData._id}`);
                            }}
                        >
                            <div key={BgvData.id} className="card-fields">
                                <div>
                                    <div className="card_label">
                                        {" "}
                                        <h5 className="jobcard_title">{BgvData.companyName}</h5>
                                    </div>
                                    <div className="card_label">
                                        <p className="card_company"> {BgvData.companyname}</p>
                                    </div>
                                    <div className="card_label">
                                        <label>
                                            <GoLocation />{" "}
                                        </label>
                                        {BgvData.country},{BgvData.state},{BgvData.city},{BgvData.address}
                                    </div>

                                    <div className="card_label">
                                        <label>
                                            <TbWorld />{" "}
                                        </label>
                                        {BgvData.name}
                                    </div>
                                    {/* <div className="card_label">
                                        <label>
                                            <RiSuitcaseLine />{" "}
                                        </label>
                                      
                                    </div> */}
                                    <div >
                                        <label style={{ marginRight: "5px" }}>
                                            <RiSuitcaseLine />{" "} Services:
                                        </label>
                                        <div >

                                            {BgvData.services.subServices.map((item) => {
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
                                style={{
                                    height: toggle ? "200px" : "0px",
                                }}
                            >
                                <div className="card-fields mt-2">
                                    <p className="card_company">Description</p>
                                    {BgvData.description}
                                </div>
                                {/* <div className="submitbuttons px-4">
                                            <Link to='/employer/Bgvform'>  <button style={{}} className="card_button" type="submit">
                                                Click here For Verification
                                            </button></Link>
                                            <button className="card_button m-2" type="submit">
                                                ContactUs
                                            </button>
                                        </div> */}
                            </div>
                        </Card>

                    </Col>
                ))}
            </Row>

            {/* </div> */}
        </div >
    );
}
export default BackgroundVarifList;
