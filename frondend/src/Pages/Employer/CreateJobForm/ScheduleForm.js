import { React, useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useForm, form } from "react-hook-form";
import Api from "../../../Api";
import { Tabs } from "antd";
import "../../../Components/Css/Employer/CreateJobForm.scss";
import interview from "./../../../assets/interview.png";
import { AiOutlineSearch } from "react-icons/ai";

function ScheduleForm() {
  const [Interview, setInterview] = useState("");
  const [InterviewList, setInterviewList] = useState([]);
  // const [show,setShow]=useState(true);
  // const[value,setValue]=useState("");
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
    form,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    getInterview();
  }, []);

  const getInterview = async () => {
    await Api.get("scheduleinterview/getAllinterview").then((res) => {
      setInterviewList(res.data.data);
    });
  };
  const handleCreateFormSubmit = async () => {
    const createFormDetails = {
      scheduleInterview: getValues().interview,
    };
    await Api.post(`scheduleinterview/createinterview`, createFormDetails).then(
      (resp) => {
        console.log("resp.data", resp.data);
      }
    );
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(handleCreateFormSubmit)} form={form}>
        <br />
        <div className="interivew-head">
          <div className="pages-title ">Schedule Interview:</div>
          <div>
            <AiOutlineSearch className="icon-tag" />
            <Button>Post a Job</Button>
          </div>
        </div>
        <Row className="mt-4">
          <Col sm={12} mg={5} lg={5}>
            <Card className="interview-card">
              <h5>Interview</h5>
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Upcoming 0" key="1"></Tabs.TabPane>
                &nbsp;
                <Tabs.TabPane tab="Past 0" key="2"></Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col sm={12} mg={6} lg={7}>
            <Card className="interviews-card">
              <div className="second-card-details">
                <h2
                  className=" d-flex justify-content-center"
                  style={{ color: "gray" }}
                >
                  You Dont have upcoming Interviews
                </h2>
                <br />
                <h6 className="d-flex justify-content-center">
                  All Schuduled Interviews will show up here.
                </h6>
                <img src={interview} className="image-tag"></img>
              </div>
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default ScheduleForm
