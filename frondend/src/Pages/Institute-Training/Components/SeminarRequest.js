import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";
import "../../../Components/seminar/viewSeminar.scss";

export default function SeminarRequest() {
  const [createForm, setcreateForm] = useState([]);

  //   const navigate = useNavigate();
  useEffect(() => {
    getCreateForm();
  }, []);

  const getCreateForm = async () => {
    await Api.get("institute/getSeminar").then((res) => {
      setcreateForm(res.data.data);
      console.log("CreateShow", res.data.data);
    });
  };
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("viewinnerpage", { state: data });
  };

  return (
    <div>
      <div className="viewseminar_container p-4">
        <div className="pages-title mb-3">Seminars</div>
        <Row className="p-3">
          {createForm.map((data, i) => (
            <Col sm={24} md={6} lg={6} className="p-3">
              <div className="seminar_card">
                <div className="flex padcheck">
                  <div>
                    <div className="inner_container_wrap">
                      <div className="seminar_card_date">
                        <span>
                          {data.fromdate} - {data.todate}
                        </span>
                        <span>{data.time}</span>
                      </div>
                      <h4 className="seminar_card_title">
                        {data.seminarTitle}
                      </h4>
                      <div className="inner_container_wrap_flex">
                        <div className="seminar_card_date_wrapper flex">
                          <p className="seminar_card_technlogies">
                            <span>{data.technology}</span>
                            {/* <span>{data.technology}</span> */}
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="seminar_card_details">
                          <p className="seminar_card_access">
                            Access : {data.audience}
                          </p>
                          <p className="seminar_card_mode">
                            Mode : {data.SeminarMode}
                          </p>
                        </div>
                        <div className="seminar_card_contact">
                          <p className="seminar_card_name">
                            Contact person : {data.contactPerson}
                          </p>
                          <p className="seminar_card_number">
                            Contact number : {data.contactNumber}
                          </p>
                        </div>
                      </div>
                      <p className="seminar_card_link">
                        {data.registrationLink}
                      </p>
                      <p className="seminar_card_link">{data.fees}</p>
                      <div className="seminar_card_button_wrapper">
                        <button
                          className="seminar_card_button loginbutton"
                          onClick={() => {
                            onSubmit(data);
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
