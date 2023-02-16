import React, { useState, useEffect } from "react";
import "../../../Components/Css/Employer/CreateJobForm.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Api from "../../../Api";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

function CreateJobForm() {
  const [Experience, setExperience] = useState();
  const [technology, setTechnology] = useState();
  const [selectSalary, setSelectSalary] = useState();
  const [skillist, setskilList] = useState([]);
  const [Qualification, setQualification] = useState([]);
  const [QualificationList, setQualificationList] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [jobMode, setJobMode] = useState([]);
  const [skill, setSkill] = useState([]);
  const [notice, setNotice] = useState();
  const [noticeList, setNoticeList] = useState([]);
  const [logo, setLogo] = useState();
  const { Option } = Select;
  const navigate = useNavigate();

  const jobID = localStorage.getItem("id");
  const UserName = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  console.log("pwrerw", jobID, UserName, email);
  const [review, setReview] = useState({
    jobTitle: "",
    location: "",
    area: "",
    technology: "",
    experience: "",
    qualification: "",
    salaryRange: "",
    languagePreference: "",
    skill: "",
    companyDescription: "",
    jobDescription: "",
    companyWebsite: "",
    companyMailId: "",
    carrerlevel: "",
    jobRole: "",
    jobType: "",
    jobMode: "",
    noticePeriod: "2 month",
  });
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: review,
  });

  const handleCreateFormSubmit = async () => {
    const createFormDetails = {
      role: UserName,
      email: email,
      jobId: jobID,
      jobTitle: review.jobTitle,
      locations: getValues().locations,
      area: getValues().area,
      technology: getValues().technology,
      experience: getValues().experience,
      qualification: getValues().qualification,
      salaryRange: getValues().salaryRange,
      languagePreference: getValues().languagePreference,
      skill: getValues().skill,
      companyDescription: getValues().companyDescription,
      jobDescription: getValues().jobDescription,
      companyWebsite: getValues().companyWebsite,
      companyMailId: getValues().companyMailId,
      jobRole: getValues().jobRole,
      jobType: getValues().jobType,
      jobMode: getValues().jobMode,
      carrerlevel: getValues().carrerlevel,
      noticePeriod: getValues().noticePeriod,
      companyLogo: getValues().logo,
    };
    await Api.post(`createForm/createForm`, createFormDetails).then((resp) => {
      navigate("/employer/reviewpage", { state: createFormDetails });
    });
  };

  useEffect(() => {
    getSkill();
    getQualification();
    getNoticePeriod();
  }, []);

  const getQualification = async () => {
    await Api.get("qualificationForm/getAllqualification").then((res) => {
      setQualificationList(res.data.data);
    });
  };

  const getSkill = async () => {
    await Api.get("skills/getSkill").then((res) => {
      setskilList(res.data.data);
    });
  };

  const getNoticePeriod = async () => {
    await Api.get("noticeperiod/getForm").then((res) => {
      setNoticeList(res.data.data);
    });
  };

  const noticeOptions =
    noticeList &&
    noticeList.map((list) => {
      return { label: list?.noticePeriod, value: list?.noticePeriod };
    });

  const technologys = [
    { name: "Web Developer", value: "Web Developer" },
    { name: "App Development", value: "App Development" },
    { name: "Mobile Development", value: "Mobile Development" },
    { name: "operating System", value: "operating System" },
    { name: "cloud computing", value: "cloud computing" },
  ];
  const jobtype = [
    { name: "Full Time", value: "Full Time" },
    { name: "Part Time", value: "Part Time" },
  ];

  const jobmode = [
    { name: "online mode", value: "online mode" },
    { name: "offline mode", value: "offline mode" },
  ];
  console.log("firsadasst", skill);
  return (
    <div>
      <Container className=" content-style ">
        <Row style={{ marginLeft: "5%" }}>
          <form onSubmit={handleSubmit(handleCreateFormSubmit)}>
            <br />
            <div className="pages-title mt-3">Create Job:</div>
            <Row className="mt-4">
              <Col lg={4}>
                <label className="create-title">Job title</label>
                <br />
                <input
                  {...register("jobTitle", {
                    required: true,
                    onChange: (e) => {
                      setReview((prev) => ({
                        ...prev,
                        jobTitle: e.target.value,
                      }));
                    },
                  })}
                  className="Create-input"
                />
                {errors.jobTitle && (
                  <p className="text-danger">Job title is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Job Role </label>
                <br />
                <input
                  {...register("jobRole", { required: true })}
                  className="Create-input"
                />
                {errors.jobRole && (
                  <p className="text-danger">Job Role is required</p>
                )}
              </Col>

              {/* <Col lg={4}>
                <label>Area</label>
                <br />
                <Dropdown
                  filter
                  name="area"
                  className="create-select"
                  value={selectedArea}
                  options={areas}
                  placeholder="Select a Area"
                  {...register("area", {
                    required: true,
                    onChange: (e) => {
                      setSelectedArea(e.target.value);
                    },
                  })}
                />
                {errors.area && <p className="text-danger">Area is required</p>}
              </Col> */}
              <Col lg={4}>
                <label>Technology</label>
                <br />
                <Dropdown
                  filter
                  className="create-select"
                  name="technology"
                  value={technology}
                  options={technologys}
                  optionLabel="name"
                  placeholder="Select a Technology"
                  {...register("technology", {
                    required: true,
                    onChange: (e) => {
                      setTechnology(e.target.value);
                    },
                  })}
                />
                {errors.technology && (
                  <p className="text-danger">Technology is required</p>
                )}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Experience</label>
                <br />
                <input
                  {...register("experience", {
                    required: true,
                    onChange: (e) => {
                      setExperience(e.target.value);
                    },
                  })}
                  className="Create-input"
                />
                {errors.experience && (
                  <p className="text-danger">Experience is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Qualification</label>
                <br />
                <Select
                  mode="multiple"
                  allowClear
                  name="qualification"
                  className="create-select"
                  {...register("qualification", { required: true })}
                  style={{ width: "100%" }}
                  placeholder="Please select a Qualification"
                  onChange={(e) => {
                    setQualification(e);
                    setValue("qualification", e);
                  }}
                >
                  {QualificationList?.map((list, i) => {
                    return (
                      <Option value={list?._id} key={i}>
                        {list?.qualification}
                      </Option>
                    );
                  })}
                </Select>
                {Qualification.length > 0
                  ? null
                  : errors.qualification && (
                      <p className="text-danger">Qualification is required</p>
                    )}
              </Col>
              <Col lg={4}>
                <label>Salary Range</label>
                <br />
                <input
                  {...register("salaryRange", {
                    required: true,
                    onChange: (e) => {
                      setSelectSalary(e.target.value);
                    },
                  })}
                  className="Create-input"
                />
                {errors.salaryRange && (
                  <p className="text-danger">Salary is required</p>
                )}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Location</label>
                <br />
                <input
                  {...register("locations", { required: true })}
                  className="Create-input"
                />
                {errors.locations && (
                  <p className="text-danger">Location is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Carrer Level</label>
                <br />
                <input
                  {...register("carrerlevel", { required: true })}
                  className="Create-input"
                />
                {errors.carrerlevel && (
                  <p className="text-danger">Carrer Level is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>Language Preference</label>
                <br />
                <input
                  {...register("languagePreference", { required: true })}
                  className="Create-input"
                />
                {errors.languagePreference && (
                  <p className="text-danger">language is required</p>
                )}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Skills </label>
                <br />
                <Select
                  mode="multiple"
                  allowClear
                  name="skill"
                  className="create-select"
                  {...register("skill", { required: true })}
                  style={{ width: "100%" }}
                  placeholder="Please select a Qualification"
                  onChange={(e) => {
                    setSkill(e.target);
                    // setValue("skill", e);
                  }}
                >
                  {skillist?.map((list, i) => {
                    return (
                      <Option value={list?._id} key={i}>
                        {list?.skill}
                      </Option>
                    );
                  })}
                </Select>
                {/* {skill.length > 0
                  ? null
                  : errors.skill && (
                      <p className="text-danger">Skill is required</p>
                    )} */}
              </Col>
              <Col lg={4}>
                <label>Company Mail-ID </label>
                <br />
                <input
                  {...register("companyMailId", { required: true })}
                  className="Create-input"
                />
                {errors.companyMailId && (
                  <p className="text-danger">Mail is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label>company Website</label>
                <br />
                <input
                  {...register("companyWebsite", { required: true })}
                  className="Create-input"
                />
                {errors.companyWebsite && (
                  <p className="text-danger">website is required</p>
                )}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Job Type</label>
                <br />
                <Dropdown
                  className="create-select"
                  name="jobType"
                  value={jobType}
                  options={jobtype}
                  optionLabel="name"
                  placeholder="Select a jobType"
                  {...register("jobType", {
                    required: true,
                    onChange: (e) => {
                      setJobType(e.target.value);
                    },
                  })}
                />
                {jobType.length > 0
                  ? null
                  : errors.jobType && (
                      <p className="text-danger">jobtype is required</p>
                    )}
              </Col>

              <Col lg={4}>
                <label>Job Mode</label>
                <br />
                <Dropdown
                  className="create-select"
                  name="jobMode"
                  value={jobMode}
                  options={jobmode}
                  optionLabel="name"
                  placeholder="Select a jobMode"
                  {...register("jobMode", {
                    required: true,
                    onChange: (e) => {
                      setJobMode(e.target.value);
                    },
                  })}
                />
                {jobMode.length > 0
                  ? null
                  : errors.jobMode && (
                      <p className="text-danger">jobMode is required</p>
                    )}
              </Col>
              <Col lg={4}>
                <label>Notice Period</label>
                <br />
                <Dropdown
                  name="noticePeriod"
                  className="create-select"
                  value={notice}
                  options={noticeOptions}
                  placeholder="Select a Notice Period"
                  {...register("noticePeriod", {
                    required: true,
                    onChange: (e) => {
                      setNotice(e.target.value);
                    },
                  })}
                />
                <br />
                {errors.noticePeriod && (
                  <p className="text-danger">Notice Period is required</p>
                )}
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label className="create-title">Company Description</label>
                <br />
                <input
                  {...register("companyDescription", { required: true })}
                  rows={5}
                  cols={5}
                  style={{ height: 80 }}
                  className="profile-input"
                />
                {errors.companyDescription && (
                  <p className="text-danger">Description is required</p>
                )}
              </Col>
              <Col lg={4}>
                <label className="create-title">Job Description</label>
                <br />
                <input
                  {...register("jobDescription", { required: true })}
                  rows={5}
                  cols={5}
                  style={{ height: 80 }}
                  className="profile-input"
                />
                {errors.jobDescription && (
                  <p className="text-danger">Description is required</p>
                )}
              </Col>
            </Row>
            <div className="submitbuttons p-2">
              <button
                className="button1 m-2 p-2"
                type="submit"
                onClick={handleCreateFormSubmit}
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

export default CreateJobForm;
