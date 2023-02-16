import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../../Components/Css/institute/advertisment.scss";

function Advertisment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
      <h4 className="ad-head-tag"> Post the Advertisment</h4>
      <Row className="ad-row-tag mb-4">
        <Col sm={24} md={24} xs={8} className="px-4">
          <div>
            <img
              src={file}
              style={{
                width: "800px",
                height: "400px",
              }}
            />
          </div>
        </Col>
        <Col sm={24} md={8} xs={24} className="px-4">
          <br />
          <label className="input-title">Upload Your Logo</label>
          <br />
          <input
            type="file"
            onChange={handleChange}
            style={{
              width: "800px",
            }}
          />
          {errors.photo && (
            <span className="input-error">Photo is required</span>
          )}
        </Col>
      </Row>
      <div className="submitbuttons p-2">
        <button className="button1 m-2 p-2" type="submit">
          Submit
        </button>
        <button className="button2 m-2 p-2" type="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Advertisment;
