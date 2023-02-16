import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Radio } from "antd";
import { Dropdown } from "primereact/dropdown";
import Api from "../../../Api.js";
import '../../../Components/Css/Students/Student.scss';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

function QualificationInfo() {
  const [countryList, setcountryList] = useState([]);
  const [countryValue, setCountryValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [districtValue, setDistrictValue] = useState();
  const [cityList, setcityList] = useState([]);
  const [cityValue, setCityValue] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    await Api.get("country/getallcountry").then((res) => {
      setcountryList(res.data.data);
    });
  };

  const getState = (countryId) => {
    setCountryValue(countryId);
    Api.get(`state/stateById/${countryId}`).then((res) => {
      setstateList(res.data.data);
    });
  };

  const getDistrict = (stateId) => {
    setStateValue(stateId);
    Api.get(`district/districtById/${stateId}`).then((res) => {
      setdistrictList(res.data.data);
    });
  };

  const getCity = (districtId) => {
    setDistrictValue(districtId);
    Api.get(`city/cityById/${districtId}`).then((res) => {
      setcityList(res.data.data);
    });
  };

  const handleFormSubmit = async () => {
    const Details = {
      firstName: getValues().firstname,
      lastName: getValues().lastname,
      dob: getValues().dob,
      emailId: getValues().email,
      gender: getValues().gender,
      phoneNumber: getValues().phono,
      address: getValues().address,
      country: getValues().countryValue,
      state: getValues().stateValue,
      district: getValues().districtValue,
      city: getValues().cityValue,
      pin: getValues().pincode,
      course: getValues().course,
      xboard: getValues().xboard,
      xper: getValues().xper,
      xyop: getValues().xyop,
      xiiboard: getValues().xiiboard,
      xiiper: getValues().xiiper,
      xiiyop: getValues().xiiyop,
      gboard: getValues().gboard,
      gper: getValues().gper,
      gyop: getValues().gyop,
      pgboard: getValues().pgboard,
      pgper: getValues().pgper,
      pgyop: getValues().pgyop,
    };
    console.log("collectDetails", Details);

    await Api.post(`Student/createqualification`, Details).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };

  return (
    <div>
      <div className="personal-informations p-4">
        <div className="pages-title mb-3">Qualification Details </div>
        <form onSubmit={handleSubmit()}>
          <div className="">
            <Row className="mb-3">
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label >First Name </label>
                <input
                  className="input-field"
                  {...register("firstname", { required: true })}
                />

                <br />
                {errors.firstname && (
                  <span className="Stud-qual-error">
                    First Name is required
                  </span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Last Name</label>
                <input
                  className="input-field"
                  {...register("lastname", { required: true })}
                />

                <br />
                {errors.lastname && (
                  <span className="Stud-qual-error">Last Name is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Date of Birth</label>
                <input
                  className="input-field"
                  type="date"
                  {...register("dob", { required: true })}
                />

                <br />
                {errors.dob && (
                  <span className="Stud-qual-error">
                    Date of Birth is required
                  </span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Email Id</label>
                <br />
                <input
                  type="email"
                  className="input-field"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="Stud-qual-error">Email Id is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="p-2">
                <p style={{ marginBottom: "7px" }} className="gender-checkbox">
                  Gender
                </p>
                <div className="status p-1">
                  <Radio.Group
                    name="radiogroup"
                    {...register("gender", { required: true })}
                  >
                    <Radio value={1}>Male </Radio>
                    <Radio value={2}>Female</Radio>
                  </Radio.Group>
                </div>
                {errors.gender && (
                  <span className="input-error">Gender is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="input-field"
                  {...register("phone", { required: true })}
                />
                <br />
                {errors.phone && (
                  <span className="Stud-qual-error">
                    Phone Numberis required
                  </span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Address</label>
                <br />
                <textarea
                  rows="1"
                  className="input-field"
                  {...register("address", { required: true })}
                />
                <br />
                {errors.address && (
                  <span className="Stud-qual-error">Address is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-personal-col p-2">
                <label>Country</label>
                <Dropdown
                  className="input-field p-0"
                  value={countryValue}
                  options={countryList}
                  {...register("countryValue", { required: true })}
                  optionLabel={"countryName"}
                  optionValue={"_id"}
                  onChange={(e) => getState(e.value)}
                  placeholder="Select a Country"
                />
                <br />
                {errors.countryValue && (
                  <span className="Stud-qual-error">Country is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-personal-col p-2">
                <label>State</label><br/>
                <Dropdown
                  className="input-field p-0"
                  value={stateValue}
                  options={stateList}
                  {...register("stateValue", { required: true })}
                  optionLabel={"stateName"}
                  optionValue={"_id"}
                  onChange={(e) => getDistrict(e.value)}
                  placeholder="Select a State"
                />
                <br />
                {errors.stateValue && (
                  <span className="Stud-qual-error">State is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-personal-col p-2">
                <label>District</label>
                <Dropdown
                  className="input-field p-0"
                  value={districtValue}
                  options={districtList}
                  {...register("districtValue", { required: true })}
                  optionLabel={"districtName"}
                  optionValue={"_id"}
                  onChange={(e) => getCity(e.value)}
                  placeholder="Select a District"
                />
                <br />
                {errors.districtValue && (
                  <span className="Stud-qual-error">District is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-personal-col p-2">
                <label>City</label><br/>
                <Dropdown
                  className="input-field p-0"
                  value={cityValue}
                  options={cityList}
                  {...register("cityValue", { required: true })}
                  optionLabel={"cityName"}
                  optionValue={"_id"}
                  onChange={(e) => setCityValue(e.value)}
                  placeholder="Select a City"
                />
                <br />
                {errors.cityValue && (
                  <span className="Stud-qual-error">City is required</span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>
                  Pin Code </label>
                  <input
                    className="input-field"
                    {...register("pincode", { required: true })}
                  />
                <br />
                {errors.pincode && (
                  <span className="Stud-qual-error">Pin Code is required</span>
                )}
              </Col>
            </Row>
            <div className="Stud-qual-table">
              <tr>
                <div>
                  <label className="mb-2">Qualification</label>
                </div>
                <td>
                  <div>
                    <table>
                      <tr>
                        <td align="center">
                          <b>Sl.No.</b>
                        </td>
                        <td align="center">
                          <b>Examination</b>
                        </td>
                        <td align="center">
                          <b>Board</b>
                        </td>
                        <td align="center">
                          <b>Percentage</b>
                        </td>
                        <td align="center">
                          <b>Year of Passing</b>
                        </td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Class X</td>
                        <td>
                          <input
                            type="text"
                            name="ClassX_Board"
                            className="input-field"
                            {...register("xboard", { required: true })}
                            maxlength="30"
                          />
                          <br />
                          {errors.xboard && (
                            <span className="Stud-qual-error">
                              ClassX_Board is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="ClassX_Percentage"
                            maxlength="30"
                            className="input-field"
                            {...register("xper", { required: true })}
                          />
                          <br />
                          {errors.xper && (
                            <span className="Stud-qual-error">
                              ClassX_Percentage is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="ClassX_YrOfPassing"
                            maxlength="30"
                            className="input-field"
                            {...register("xyop", { required: true })}
                          />
                          <br />
                          {errors.xyop && (
                            <span className="Stud-qual-error">
                              ClassX_YrOfPassing is required
                            </span>
                          )}
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Class XII</td>
                        <td>
                          <input
                            type="text"
                            name="ClassXII_Board"
                            maxlength="30"
                            className="input-field"
                            {...register("xiiboard", { required: true })}
                          />
                          <br />
                          {errors.xiiboard && (
                            <span className="Stud-qual-error">
                              ClassXII_Board is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="ClassXII_Percentage"
                            maxlength="30"
                            className="input-field"
                            {...register("xiiper", { required: true })}
                          />
                          <br />
                          {errors.xiiper && (
                            <span className="Stud-qual-error">
                              ClassXII_Percentage is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="ClassXII_YrOfPassing"
                            maxlength="30"
                            className="input-field"
                            {...register("xiiyop", { required: true })}
                          />
                          <br />
                          {errors.xiiyop && (
                            <span className="Stud-qual-error">
                              ClassXII_YrOfPassing is required
                            </span>
                          )}
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Graduation</td>
                        <td>
                          <input
                            type="text"
                            name="Graduation_Board"
                            {...register("gboard", { required: true })}
                            maxlength="30"
                            className="input-field"
                          />
                          <br />
                          {errors.gboard && (
                            <span className="Stud-qual-error">
                              Graduation_Board is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="Graduation_Percentage"
                            maxlength="30"
                            className="input-field"
                            {...register("gper", { required: true })}
                          />
                          <br />
                          {errors.gper && (
                            <span className="Stud-qual-error">
                              Graduation_Percentage is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="Graduation_YrOfPassing"
                            maxlength="30"
                            className="input-field"
                            {...register("gyop", { required: true })}
                          />
                          <br />
                          {errors.gyop && (
                            <span className="Stud-qual-error">
                              Graduation_YrOfPassing is required
                            </span>
                          )}
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Masters</td>
                        <td>
                          <input
                            type="text"
                            name="Masters_Board"
                            {...register("pgboard", { required: true })}
                            maxlength="30"
                            className="input-field"
                          />
                          <br />
                          {errors.pgboard && (
                            <span className="Stud-qual-error">
                              Masters_Board is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="Masters_Percentage"
                            maxlength="30"
                            className="input-field"
                            {...register("pgper", { required: true })}
                          />
                          <br />
                          {errors.pgper && (
                            <span className="Stud-qual-error">
                              Masters_Percentage is required
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="Masters_YrOfPassing"
                            maxlength="30"
                            className="input-field"
                            {...register("pgyop", { required: true })}
                          />
                          <br />
                          {errors.pgyop && (
                            <span className="Stud-qual-error">
                              Masters_YrOfPassing is required
                            </span>
                          )}
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <br />
            </div>
            <Col sm={24} md={8} className="p-2">
              <p style={{ marginBottom: "7px" }} className="course-checkbox">
                Course Applied
              </p>
              <div className="status p-1">
                <Radio.Group
                  name="radiogroup"
                  {...register("course", { required: true })}
                >
                  <Radio value={1}>BCA</Radio>
                  <Radio value={2}>MCA</Radio>
                  <Radio value={3}>B.Sc</Radio>
                  <Radio value={4}>B.Com</Radio>
                </Radio.Group>
              </div>
              {errors.course && (
                <span className="input-error">Course is required</span>
              )}
            </Col>
            <div className="submitbuttons p-2">
              <button
                className="button1 m-2 p-2"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              <button className="button2 m-2 p-2" type="reset">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QualificationInfo;
