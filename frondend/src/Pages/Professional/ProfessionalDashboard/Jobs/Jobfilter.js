import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import userList from "./Joblist";
import { Row, Col, Button, Card, Tabs } from "antd";
import { GoLocation } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { CiSaveDown2 } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";

function JobSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [location, setlocation] = useState(null);
  const [experience, setexperience] = useState(null);
  const [salary, setsalary] = useState(null);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getUsers(userList);
  }, []);

  const getUsers = (userList) => {
    setUsers(userList);
  };

  const bylocation = (user, location) => {
    if (location) {
      return user.location === location;
    } else return user;
  };
  const byexperience = (user, experience) => {
    if (experience) {
      return user.experience === experience;
    } else return user;
  };
  const bysalary = (user, salary) => {
    if (salary) {
      return user.salary === salary;
    } else return user;
  };
  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users, location, experience, search) => {
    return users
      .filter((user) => bylocation(user, location))
      .filter((user) => bySearch(user, search))
      .filter((user) => byexperience(user, experience))
      .filter((user) => bysalary(user, salary));
  };

  return (
    <div className="">
      <Row>
        <Col md={8} lg={8}>
          <div className="pages-title mb-3 mt-2 ms-4 ">Filter</div>
          <div className="ms-4">
            <label className="mt-4">Technology</label>
            <br />
            <input
              className="filter_input"
              type="search"
              placeholder="search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <br />

            <label className="mt-4">Location</label>
            <br />
            <select
              className="filter_input"
              onChange={(e) => setlocation(e.target.value)}
            >
              <option value="">Choose Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Coimbature">Coimbature</option>
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
            </select>

            <br />
            <label className="mt-4">Salary</label>
            <br />
            <select
              className="filter_input"
              onChange={(e) => setsalary(e.target.value)}
            >
              <option value="">Choose Salary</option>
              <option value="10000-20000">10000-20000</option>
              <option value="20000-30000">20000-30000</option>
            </select>
          </div>
        </Col>

        {/* .....................................Job Card........................ */}
        <Col md={10}>
          <div className="pages-title mb-3 mt-2">
            choose your matching profile
          </div>
          {filteredList(users, location, experience, search).map((user) => (
            <Card
              className="profile-cards mt-5"
              onClick={() => {
                setToggle((prev) => {
                  return !prev;
                });
              }}
            >
              <div key={user.id} className="card-fields">
                <div>
                  <div className="card_label">
                    {" "}
                    <h5 className="jobcard_title">{user.title}</h5>
                  </div>
                  <div className="card_label">
                    <p className="card_company"> {user.companyname}</p>
                  </div>
                  <div className="card_label">
                    <label>
                      <GoLocation />{" "}
                    </label>
                    {user.location}
                  </div>
                  <div className="card_label">
                    <label>
                      <TbWorld />{" "}
                    </label>
                    {user.name}
                  </div>
                  <div className="card_label">
                    <label>
                      <RiSuitcaseLine />{" "}
                    </label>
                    {user.experience} year
                  </div>
                </div>
              </div>
              <div
                //  key={user.id}
                class="card_content"
                style={{
                  height: toggle ? "200px" : "0px",
                }}
              >
                <div className="card-fields mt-2">
                  <p className="card_company">Description</p>
                  {user.description}
                </div>
                <div className="submitbuttons px-4">
                  <button className="card_button" type="submit">
                    Apply
                  </button>
                  <button className="card_button m-2" type="submit">
                    ContactUs
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}
export default JobSearch;
