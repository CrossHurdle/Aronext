import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BiRupee, BiTimeFive } from "react-icons/bi";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../../Api";

function Viewprojects() {
  const [createForm, setcreateForm] = useState();

  const navigate = useNavigate();
  const view = useLocation();
  const data = view.state;
  console.log("view.state", view.state.projectID);

  const userEmail = localStorage.getItem("email");
  const UserId = localStorage.getItem("id");
  const id = data._id;
  const name = view.state.role;
  const title = view.state.projectTitle;
  const email = view.state.email.email;
  const projectID = view.state.projectID;
  const duration = view.state.duration;
  const languages = view.state.languages;
  const mode = view.state.mode;
  const qualification = view.state.qualification;
  const skills = view.state.skills;

  useEffect(() => {
    getCreateForm();
  }, []);

  const getCreateForm = async () => {
    await Api.get(`student/requestgetone/${id}`).then((res) => {
      setcreateForm([res?.data?.data]);
    });
  };

  const onSubmit = (e) => {
    const details = {
      role: name,
      UserID: UserId,
      projectID: projectID,
      projectTitle: title,
      email: email,
      userEmail: userEmail,
      duration: duration,
      languages: languages,
      mode: mode,
      qualification: qualification,
      skills: skills,
    };
    Api.post("student/requestCreate", details).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <div>
      <div className="ms-4">
        <Row className="p-3">
          {createForm &&
            createForm.map((i) => (
              <Col>
                <h3 className="mt-3">{i.projectTitle}</h3>

                <div className="ms-4 p-2">
                  <h6>
                    <CiCalendarDate /> &nbsp;{i.duration}
                  </h6>
                  <h6>
                    <TfiBag /> &nbsp;{i.qualification}
                  </h6>
                  <h6>
                    <AiOutlineUnorderedList />
                    &nbsp;&nbsp;
                    {i.languages}
                  </h6>
                  <h6>
                    <AiOutlineUnorderedList /> &nbsp;{i.skills}
                  </h6>
                  <h6>
                    <BiTimeFive /> &nbsp;{i.mode}
                  </h6>
                  <h6>
                    <AiOutlineUnorderedList />
                    &nbsp; {i.description}
                  </h6>
                </div>
              </Col>
            ))}
        </Row>

        <br />
        <div className="d-flex mt-3 mb-2">
          <Button
            className="login-button"
            variant="secondary"
            onClick={() => navigate("/student/request")}
          >
            Back
          </Button>
          <Button
            className="login-button ms-5"
            variant="primary"
            onClick={(e) => {
              onSubmit();
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Viewprojects;
