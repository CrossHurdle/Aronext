// import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { RiSuitcaseLine } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';
import { useParams } from 'react-router-dom';
// import Api from '../../../Api';
import Api from '../../../Api'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const EmployerDetails = () => {
    const [employData, setEmployData] = useState();
    const [toggle, setToggle] = useState(false);

    console.log("aasd", employData?.educationVerification?.map((item) => item))
    const data = employData?.educationVerification?.map((item) => item)
    console.log("datata", data?.map((item) => item))

    const { id } = useParams()


    const getEmp = () => {
        Api.get(`/bgvemp/getBgvEmp/${id}`).then((res) => {
            setEmployData(res.data);
        });
    };
    useEffect(() => {
        getEmp()
        console.log(id, "vriid")

    }, [])


    return (
        <div>

            <Container style={{ width: "60%" }}>
                <Card className="mt-3">
                    <div className="review-card-tag">
                        <h5 className=" heading-profile">Name of candidate: &nbsp;</h5>

                        <h4 className="f-bold mt-1">{employData?.name}  {employData?.lastname}</h4>
                        {/* <img src={review} className="review-image-tag"></img> */}
                    </div>
                </Card>
                <br />
                <Card className="review-card1-tag">
                    <div className="review-icon-style">
                        {/* <Link to="/employer/CreateJobForm" className="review-icon">
              Edit
            </Link> */}
                    </div>
                    <div>
                        <h5 className=" heading-profile">Education Details &nbsp;</h5>
                        {/* <p>{employData.educationVerification}</p> */}
                        {/* {employData?.educationVerification?.map((item) => {
                            console.log(item, "iiii")
                            return (
                                <div>
                                    <ul>
                                        <li>
                                            {item?.education?.intitute_Name}
                                        </li>
                                    </ul>
                                </div>
                            )
                        })} */}
                        <ul>
                            <li>
                                <h5> Qualification: </h5>
                                <h6>BE</h6>
                            </li>
                            <li>
                                <h5>
                                    Institute Name:</h5>
                                <h6>International Institute Of Technology</h6>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <h5 className="heading-profile">Employer Details &nbsp;</h5>
                        {/* <p>{locations}</p> */}
                        {/* {employData?.employerVerification?.map((item) => {
                            console.log(item, "iiii")
                            return (
                                <div>
                                    <ul>
                                        <li>
                                            {item?.company_name}
                                        </li>
                                    </ul>
                                </div>
                            )
                        })} */}
                        <ul>
                            <li>
                                <h5> Company Name: </h5>
                                <h6>Cross Hurdle System </h6>
                            </li>
                            <li>
                                <h5>
                                    Job Title:</h5>
                                <h6>Software Developer</h6>
                            </li>
                            <li>
                                <h5>
                                    Experience:</h5>
                                <h6>2 years</h6>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="heading-profile">Police Details &nbsp;</h5>
                        {/* <p>{technology}</p> */}
                    </div>
                    <div>
                        <h5 className="heading-profile">Location: &nbsp;</h5>
                        <h6>   {employData?.country},{employData?.state},{employData?.city},{employData?.address}</h6>
                    </div>
                    <div>
                        <h5 className="heading-profile">Contact Details &nbsp;</h5>

                        <div ><h6><TfiEmail /> {employData?.email} </h6></div>
                        <div ><h6>Cell : 9867835712</h6></div>                    </div>
                    {/* <div>
                        <h5>Salary Range &nbsp;</h5>
                        <p>{salaryRange}</p>
                    </div> */}

                </Card>
            </Container>
        </div >
    );
};

export default EmployerDetails;