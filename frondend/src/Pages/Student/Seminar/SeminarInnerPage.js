import React from "react";
import { Container } from "react-bootstrap";
import { BiRupee, BiTimeFive } from "react-icons/bi";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

function SeminarsInnerPage() {
  const location = useLocation();

  const viewSeminar = location.state;

  console.log("viewSeminar", viewSeminar);
  return (
    <Container>
      <div className="ms-4">
        <h3 className="mt-3">{viewSeminar.seminarTitle}</h3>
        <h5 style={{ color: "blue" }}>{viewSeminar.technology}</h5>
        <div className="ms-4">
          <h6>
            <CiLocationOn />
            {viewSeminar.SeminarMode}
          </h6>
          <h6>
            <CiCalendarDate /> {viewSeminar.fromdate} - {viewSeminar.todate}
          </h6>
          <h6>
            <BiTimeFive /> {viewSeminar.time}
          </h6>
          <h6>
            <TfiBag /> {viewSeminar.contactPerson}
          </h6>
          <h6>
            <TfiBag /> {viewSeminar.contactNumber}
          </h6>
          <h6>
            <BiRupee /> {viewSeminar.fees}
          </h6>
          <h6>
            <AiOutlineUnorderedList /> {viewSeminar.audience}
          </h6>
          <h6>
            <AiOutlineUnorderedList /> {viewSeminar.about}
          </h6>
          <h6>
            <AiOutlineUnorderedList /> {viewSeminar.registrationLink}
          </h6>
        </div>
        <br />
      </div>
    </Container>
  );
}

export default SeminarsInnerPage;
