// import React, { useContext, useState, useEffect } from "react";
// import { Row, Col, Checkbox } from "antd";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { BiRupee } from "react-icons/bi";
// import { AiOutlineUnorderedList } from "react-icons/ai";
// import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
// import { GrTechnology } from "react-icons/gr";
// import { TfiBag } from "react-icons/tfi";
// import "../../../Components/Css/Students/Studintdetails.scss";
// import Accordion from "react-bootstrap/Accordion";
// import AccordionContext from "react-bootstrap/AccordionContext";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
// import Card from "react-bootstrap/Card";
// import { Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import Api from "../../../Api";

// const { Search } = Input;
// const onSearch = (value) => console.log(value);

// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey)
//   );
//   const isCurrentEventKey = eventKey === activeEventKey;

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         backgroundColor: "#EBE6FF",
//         paddingTop: "12px",
//       }}
//     >
//       <p onClick={decoratedOnClick}>
//         {children}
//         {isCurrentEventKey ? <FiChevronUp /> : <FiChevronDown />}
//       </p>
//     </div>
//   );
// }

// function ViewJob() {
//   const navigate = useNavigate();

//   const [createForm, setcreateForm] = useState([]);
//   const [deleteForm, setDeleteForm] = useState([]);

//   useEffect(() => {
//     getCreateForm();
//     deletePost();
//   }, []);

//   const getCreateForm = async () => {
//     await Api.get("createForm/getForm").then((res) => {
//       setcreateForm(res.data.data);
//     });
//   };

//   const deletePost = (id) => {
//     Api.delete(`createForm/deleteForm/${id}`).then((res) => {
//       setDeleteForm(res.data.data);
//     });
//   };

//   const onSubmit = (data) => {
//     navigate("innerpage", { state: data });
//   };

//   return (
//     <div className="Project-main">
//       <Search
//         placeholder="input search text"
//         onSearch={onSearch}
//         className="ms-5"
//         style={{
//           width: 200,
//         }}
//       />

//       <Row className="Project-row">
//         {createForm.map((createForm, i) => (
//           <div>
//             <Col sm={24} md={24} lg={24} className="Project-col">
//               <Accordion defaultActiveKey="0">
//                 <Card className="Int-card">
//                   <Card.Body>
//                     <div className="Project-body">
//                       <div>
//                         <Checkbox>
//                           <h5>{createForm.jobTitle}</h5>
//                         </Checkbox>

//                         <p className="Int-para2">
//                           <CiLocationOn /> {createForm.location}
//                           /Bangalore
//                         </p>
//                         <br />
//                         <div className="Project-para-content">
//                           <p className="Int-para2">{createForm.para2}</p>
//                           <p className="Int-para2">
//                             <AiOutlineUnorderedList />
//                             {createForm.technology}
//                           </p>
//                           <p className="Int-para2">
//                             <TfiBag />
//                             {createForm.experience}
//                             years
//                           </p>
//                           <p className="Int-para2">
//                             <BiRupee />
//                             {createForm.salaryRange}
//                             lakhs
//                           </p>
//                         </div>
//                       </div>

//                       <div className="Project-btns">
//                         <button
//                           onClick={() => {
//                             onSubmit(createForm);
//                           }}
//                           className="button1 me-3 mb-3 p-2"
//                         >
//                           View
//                         </button>
//                         <button
//                           className="button2 mb-3 p-2"
//                           onClick={() => deletePost(createForm._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Accordion>
//             </Col>
//           </div>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default ViewJob;

import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../../../Components/Css/Students/Studintdetails.scss";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { Input, Space } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../../Api";
// import { useNavigate } from "react-router-dom";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = eventKey === activeEventKey;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EBE6FF",
        paddingTop: "12px",
      }}
    >
      <p onClick={decoratedOnClick}>
        {children}
        {isCurrentEventKey ? <FiChevronUp /> : <FiChevronDown />}
      </p>
    </div>
  );
}

function ViewJob() {
  const [createForm, setcreateForm] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    getCreateForm();
  }, []);
  const getCreateForm = async () => {
    await Api.get(`createForm/getForm/${id}`).then((res) => {
      setcreateForm(res.data.data);
    });
  };
  console.log("createForm", createForm);

  const handleSubmit = (data) => {
    navigate("innerpage", { state: data });
  };


  // const location = useLocation();
  // console.log("location", location.state);
  // const dailogValues = location.state;
  
  // const onSubmit = (data) => {
  //   navigate("viewproject", { state: data });
  // };

  // const deletePost = (id) => {
  //   Api.delete(`createForm/deleteForm/${id}`).then((res) => {
  //     setDeleteForm(res.data.data);
  //   });
  // };

  return (
    <div className="p-4">
      <div className="pages-title">Request</div>
      <Row className="p-3">
        {createForm.map((data, i) => (
          <Col sm={24} md={24} lg={12} className="p-3">
            <Accordion defaultActiveKey="0">
              <Card
                className="Int-card"
                onClick={() => {
                  handleSubmit(data);
                }}
              >
                <Card.Body>
                  <h4>{data.projectTitle}</h4>
                  <p className="Int-para1">{data.jobTitle}</p>
                  <p className="Int-para2">
                    {data.icon1}
                    {data.locations}
                  </p>
                  <p className="Int-para2">
                    {data.icon2}
                    {data.salaryRange}
                  </p>
                  <p className="Int-para2">
                    {data.icon3}
                    {data.languages}
                  </p>
                  <p className="Int-para2">
                    {data.icon4}
                    {data.role}
                  </p>
                  <p className="Int-para2">
                    {data.icon4}
                    {data.userEmail}
                  </p>
                  <Card.Text>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>{data.description}</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                  <ContextAwareToggle eventKey="1">More</ContextAwareToggle>
                </Card.Body>
              </Card>
            </Accordion>
          </Col>
        
        ))}
      </Row>
    </div>
  );
}

export default ViewJob;
