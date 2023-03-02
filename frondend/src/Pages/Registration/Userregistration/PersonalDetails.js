import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "antd";
// import "../../../Components/Css/professionalstyle.scss";
import "../../../Components/Css/Professional/professionalstyle.scss";
import { Dropdown } from "primereact/dropdown";
import Api from "../../../Api.js";

function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({});

  // const onSubmit = data => console.log(data);

  const [details, setDetails] = useState();
  const [countryList, setcountryList] = useState([]);
  const [countryValue, setCountryValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [districtValue, setDistrictValue] = useState();

  useEffect(() => {
    getDetails();
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

  const getDetails = async () => {
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);

    await Api.get(`employeeUser/employee_getone/${userId}`).then((res) => {
      setValue("firstname", res.data.data?.firstName);
      setValue("lastname", res.data.data?.LastName);
      setValue("phoneNumber", res.data.data?.phone);
    });
  };

  const handleFormSubmit = async () => {
    const Details = {
      photo: getValues().photo,
      firstName: getValues().firstname,
      lastName: getValues().lastname,
      dateofBirth: getValues().dateofBirth,
      phoneNumber: getValues().phoneNumber,
      gender: getValues().gender,
      email: getValues().email,
      address: getValues().address,
      country: getValues().countryValue,
      state: getValues().stateValue,
      district: getValues().districtValue,
      maritalstatus: getValues().maritalstatus,
      resume: getValues().resume,
    };

    await Api.post(`Professional/createpersonal`, Details).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };
  //////////
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    // setFile(URL.createObjectURL(e.target.files[0]));
  }
  ////////

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Personal Info</div>
          <Row className="mb-4">
            <Col sm={24} md={24} xs={8} className="px-4">
              <div>
                <img
                  src={file}
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              </div>
            </Col>
            <Col sm={24} md={8} xs={24} className="px-4">
              <br />
              <label className="input-title">Upload Photo</label>
              <br />
              <input type="file" onChange={handleChange} />
              {errors.photo && (
                <span className="input-error">Photo is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">First Name</label>
              <br />
              <input
                className="Professional__UpdateProfile__Input"
                {...register("firstname", { required: true })}
              />

              {errors.firstname && (
                <span className="input-error">First Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Last Name</label> <br />
              <input
                className="Professional__UpdateProfile__Input"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <span className="input-error">Last Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Phone Number</label> <br />
              <input
                className="Professional__UpdateProfile__Input"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span className="input-error"> Number required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Date of Birth </label>
              <input
                className="Professional__UpdateProfile__Input"
                type="date"
                {...register("dateofBirth", { required: true })}
              />
              {errors.dateofBirth && (
                <span className="input-error">DOB required</span>
              )}
            </Col>

            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Gender </label>
              <select
                className="Professional__UpdateProfile__Input"
                {...register("gender", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Male</option>
                <option value="b">Female</option>
                <option value="c">Others</option>
              </select>
              {errors.gender && (
                <span className="input-error">Gender required</span>
              )}
            </Col>

            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Marital status </label>
              <select
                className="Professional__UpdateProfile__Input"
                {...register("maritalstatus", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Married</option>
                <option value="b">Unmarried</option>
                <option value="c">divorced</option>
              </select>
              {errors.maritalstatus && (
                <span className="input-error">status required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Email Id </label>
              <input
                className="Professional__UpdateProfile__Input"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <span className="input-error">Email required</span>
              )}
            </Col>
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Address</label>
              <textarea
                rows="1"
                className="Professional__UpdateProfile__Input"
                {...register("address", { required: true })}
              />

              {errors.address && (
                <span className="input-error">Address required</span>
              )}
            </Col>

            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Country </label>
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
              {errors.countryValue && (
                <span className="input-error">Country required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">State</label> <br></br>
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
              {errors.stateValue && (
                <span className="input-error">State is required</span>
              )}
            </Col>

            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">District</label>

              <Dropdown
                className="input-field p-0"
                value={districtValue}
                options={districtList}
                {...register("districtValue", { required: true })}
                optionLabel={"districtName"}
                optionValue={"_id"}
                onChange={(e) => setDistrictValue(e.value)}
                placeholder="Select a District"
              />
              <br />
              {errors.districtValue && (
                <span className="input-error">District is required</span>
              )}
            </Col>
            <Col sm={24} md={8} xs={24} className="px-4">
              <label className="input-title">Upload Resume</label>
              <br />
              <input
                type="file"
                className="Professional__UpdateProfile__Input"
                onChange={handleChange}
                {...register("resume", { required: true })}
              />

              {errors.resume && (
                <span className="input-error">Resume is required</span>
              )}
            </Col>
          </Row>

          <div className="submitbuttons px-4">
            <button className="button1 m-2 p-2" type="submit">
              Submit
            </button>
            <button className="button2 m-2 p-2" type="reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default PersonalInfo;
