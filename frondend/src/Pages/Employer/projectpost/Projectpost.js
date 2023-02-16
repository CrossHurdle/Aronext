import React, { useState, useEffect } from "react";
import "../../../Components/Css/Employer/projectpost.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "primereact/multiselect";

function Projectpost() {
  const [duration, setTechnology] = useState();
  const [skillist, setskilList] = useState([]);
  const [qualificationValue, setQualificationValue] = useState([]);
  const [QualificationList, setQualificationList] = useState([]);
  const [mode, setMode] = useState();
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  const projectID = localStorage.getItem("id");
  const UserName = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const handleCreateFormSubmit = async () => {
    const userDetails = {
      role: UserName,
      email: email,
      projectID: projectID,
      projectTitle: getValues().projectTitle,
      duration: getValues().duration,
      qualification: getValues().qualification,
      languages: getValues().languages,
      skills: getValues().skills,
      mode: getValues().mode,
      description: getValues().description,
    };
    await Api.post(`projectpost/create_project_post`, userDetails).then(
      (resp) => {
        console.log("resp.data", resp.data);
      }
    );
    navigate("/employer");
  };

  useEffect(() => {
    getSkill();
    getQualification();
  }, []);

  const getQualification = async () => {
    await Api.get("technologyForm/getAlltechnology").then((res) => {
      setQualificationList(res.data.data);
      console.log("qualificationList", QualificationList);
    });
  };

  const getSkill = async () => {
    await Api.get("skills/getSkill").then((res) => {
      setskilList(res.data.data);
    });
  };

  const durations = [
    { name: "5 months", value: "5 months" },
    { name: "6 months", value: "6 months" },
    { name: "7 months", value: "7 months" },
    { name: "8 months", value: "8 months" },
  ];

  const modes = [
    { names: "work form office", value: "work form office" },
    { names: "Remote", value: "Remote" },
  ];
  const data =
    QualificationList &&
    QualificationList.map((i) => {
      return { label: i?.technology, value: i?.technology };
    });

  const datas =
    skillist &&
    skillist.map((list) => {
      return { label: list?.skill, value: list?.skill };
    });
  return (
    <div>
      <Container className=" content-style ">
        <Row style={{ marginLeft: "5%" }}>
          <form onSubmit={handleSubmit(handleCreateFormSubmit)}>
            <br />
            <div className="pages-title mt-3">Create Project:</div>
            <Row className="mt-4">
              <Col lg={4}>
                <label className="create-title">Project title</label>
                <br />
                <input
                  {...register("projectTitle", { required: true })}
                  className="Create-input"
                />
                {errors.projectTitle && (
                  <p className="text-danger">Project title is required</p>
                )}
              </Col>

              <Col lg={4}>
                <label>Project Duration</label>
                <br />
                <Dropdown
                  className="create-select"
                  name="duration"
                  value={duration}
                  options={durations}
                  optionLabel="name"
                  placeholder="Select a Duration"
                  {...register("duration", {
                    required: true,
                    onChange: (e) => {
                      setTechnology(e.target.value);
                    },
                  })}
                />
                {errors.duration && (
                  <p className="text-danger">duration is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Technology</label>
                <br />
                <MultiSelect
                  className="create-select"
                  value={qualificationValue}
                  options={data}
                  {...register("qualification", {
                    required: true,
                    onChange: (e) => {
                      setQualificationValue(e.value);
                    },
                  })}
                />
                {errors.qualification && (
                  <p className="text-danger">technology is required</p>
                )}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Language Preference</label>
                <br />
                <input
                  {...register("languages", { required: true })}
                  className="Create-input"
                />
                {errors.languages && (
                  <p className="text-danger">language is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Additional Skills </label>
                <br />
                <MultiSelect
                  className="create-select"
                  value={skills}
                  options={datas}
                  {...register("skills", {
                    required: true,
                    onChange: (e) => {
                      setSkills(e.value);
                    },
                  })}
                />
                {errors.skills && (
                  <p className="text-danger">skills is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Mode</label>
                <br />
                <Dropdown
                  className="create-select"
                  name="mode"
                  value={mode}
                  options={modes}
                  optionLabel="names"
                  placeholder="Select a mode"
                  {...register("mode", {
                    required: true,
                    onChange: (e) => {
                      setMode(e.target.value);
                    },
                  })}
                />
                {errors.mode && <p className="text-danger">mode is required</p>}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label className="create-title">Project Description</label>
                <br />
                <input
                  {...register("description", { required: true })}
                  rows={5}
                  cols={5}
                  style={{ height: 80 }}
                  className="profile-input"
                />
                {errors.description && (
                  <p className="text-danger">Description is required</p>
                )}
              </Col>
            </Row>
            <div className="submitbuttons p-2">
              <button
                className="button1 m-2 p-2"
                type="submit"
                // onClick={handleCreateFormSubmit}
              >
                Submit
              </button>
              <button className="button2 m-2 p-2" type="reset">
                Reset
              </button>
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
}

export default Projectpost;
