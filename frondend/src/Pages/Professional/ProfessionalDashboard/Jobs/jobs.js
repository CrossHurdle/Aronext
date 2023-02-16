import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { BiBuildings, BiBuilding, BiTimer, BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { CiSaveDown2 } from "react-icons/ci";
import { Tabs } from "antd";
import "./Jobs.scss";
import Api from "../../../../Api";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const [createForm, setcreateForm] = useState([]);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [location, setlocation] = useState(null);
  const [experience, setexperience] = useState(null);
  const [salary, setsalary] = useState(null);

  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    getCreateForm();
  }, []);
  useEffect(() => {
    getUsers(createForm);
  }, []);
  const getUsers = (createForm) => {
    setUsers(createForm);
  };
  const bylocation = (createForm, location) => {
    if (location) {
      return createForm.location === location;
    } else return createForm;
  };
  const byexperience = (createForm, experience) => {
    if (experience) {
      return createForm.experience === experience;
    } else return createForm;
  };
  const bysalary = (createForm, salary) => {
    if (salary) {
      return createForm.salaryRange === salary;
    } else return createForm;
  };
  const bySearch = (createForm, search) => {
    if (search) {
      return createForm.jobTitle.toLowerCase().includes(search.toLowerCase());
    } else return createForm;
  };
  const filteredList = (users, location, experience, search) => {
    return users
      .filter((createForm) => bylocation(createForm, location))
      .filter((createForm) => bySearch(createForm, search))
      .filter((createForm) => byexperience(createForm, experience))
      .filter((createForm) => bysalary(createForm, salary));
  };

  const getCreateForm = async () => {
    await Api.get("createForm/getForm").then((res) => {
      setcreateForm(res.data.data);
      console.log("CreateShow", createForm);
    });
  };
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/professional/innerpage", { state: data });
  };
  // const onSubmit = (data) => {
  //   navigate("/professional/innerpage", { state: data });
  // }
  return (
   
    <div>
      { console.log(createForm,"ffff")}
      <div className=" mx-5 mt-5">
        <p className="ThirdCardPara">JOBS</p>
        <h2 style={{ textAlign: "center" }}>choose your matching profile</h2>
        {/* <div className="jobsearchbox mt-5">
          <input
            type="text"
            className="job-search1"
            placeholder="Search your job here"
          />

          <input type="text" className="job-search2" placeholder="location" />

          <button className="button1 jobsearchbutton">
            <span>Search</span>
          </button>
        </div> */}
        <Row>
          <Col md={5} lg={5}>
            <div className="pages-title mb-3 mt-2 ms-4 ">Filter</div>
            <div className="ms-4">
              <label className="mt-4">Jobtitle</label>
              <br />
              <input
                className="filter_input"
                type="search"
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
              />
             
                    
                      {/* <input
                        className="jobscard"
                        onClick={() => {
                          onSubmit((prev) => {
                            return !prev;
                          });
                        }}
                       
                      > */}
                        
                        {/* {filteredList(createForm,  search).map(
                  (createForm) => (
                    
                       <option value="" >{createForm.jobTitle}</option> 
                       )
                       )} */}
                      {/* </input> */}
                   
                
              <br />

              <label className="mt-4">Location</label>
              <br />
              <select
                className="filter_input"
                onChange={(e) => setlocation(e.target.value)}
              >
                <option value="">Choose Location</option>
                <option value="chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="coimbatore">coimbatore</option>
                <option value="other">Other</option>
              </select>

              <br />

              <label className="mt-4">Experience</label>
              <br />
              <select
                className="filter_input"
                onChange={(e) => setexperience(e.target.value)}
              >
                <option value="">Choose Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <br />
              <label className="mt-4">Salary</label>
              <br />
              <select
                className="filter_input"
                onChange={(e) => setsalary(e.target.value)}
              >
                <option value="">Choose Salary</option>
                <option value="20000">20000</option>
                <option value="33">20000-30000</option>
                <option value="2 ">2</option>
              </select>
            </div>
          </Col>
          <Col md={6}>
            {/* .........................................Job Card.................................................. */}
            <div>
              <Row className="p-2 ">
                {filteredList(createForm, location, experience, search).map(
                  (createForm) => (
                    <Col xs={12} sm={12} md={6} lg={6} className="mt-3  p-2">
                      <Card
                        className="jobscard"
                        // onClick={() => {
                        //   onSubmit((prev) => {
                        //     return !prev;
                        //   });
                        // }}
                        onClick={() => {
                    onSubmit(createForm);
                  }}
                      >
                        <h5 className="">{createForm.jobTitle}</h5>
                        <h5 className="mt-1" style={{ color: "blue" }}>
                          {createForm.compName}
                        </h5>
                        <div className="mt-1">
                          <GoLocation /> {createForm.location}
                        </div>
                        <div className="mt-1">
                          <RiSuitcaseLine /> {createForm.experience} years
                        </div>
                        <div className="mt-1">
                          <CgNotes /> {createForm.technology}
                        </div>
                        <div className="mt-1">
                          <CgNotes /> {createForm.salaryRange}
                        </div>
                        <div className="save-icon">
                          <CiSaveDown2 />{" "}
                        </div>
                        {/* </div> */}
                      </Card>
                    </Col>
                  )
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Jobs;
