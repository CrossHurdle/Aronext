import React, { useEffect, useState } from "react";
import "../../../Components/Css/Employer/OurProfile.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Api from "../../../Api";
import { Dropdown } from "primereact/dropdown";
import TabsProfile from "./TabsProfile";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Upload } from "antd";

function OurProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [countryList, setcountryList] = useState([]);
  const [countryValue, setCountryValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [districtValue, setDistrictValue] = useState();
  const [cityList, setcityList] = useState([]);
  const [cityValue, setCityValue] = useState();
  const [domainList, setDomainList] = useState([]);
  const [domainValue, setDomainValue] = useState();
  const [subDomainList, setSubDomainList] = useState([]);
  const [subDomainValue, setSubDomainValue] = useState();
  const [companyType, setCompanyType] = useState([]);

  const handleFormSubmit = async () => {
    const collectDetails = {
      companyName: getValues().companyname,
      companyType: getValues().type,
      gst: getValues().established,
      field: getValues().field,
      domain: getValues().domainValue,
      subDomain: getValues().subDomainValue,
      country: getValues().country,
      state: getValues().state,
      district: getValues().district,
      city: getValues().city,
      pincode: getValues().pincode,
      website: getValues().website,
      Linkedin: getValues().linkedin,
      facebook: getValues().facebook,
      youtube: getValues().youtube,
      address: getValues().address,
    };

    console.log("collectDetails", collectDetails);

    await Api.post(`ourProfile/create`, collectDetails).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };

  useEffect(() => {
    getCountry();
    getDomain();
  }, []);

  const getDomain = async () => {
    await Api.get("domainProfile/getDomain").then((res) => {
      setDomainList(res.data.data);
    });
  };

  const getSubDomain = (domainId) => {
    setDomainValue(domainId);
    Api.get(`subDomainProfile/domainById/${domainId}`).then((res) => {
      setSubDomainList(res.data.data);
    });
  };

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

  const types = [
    { name: "Private Limited", value: "Private Limited" },
    { name: "Coperation", value: "Coperation" },
    { name: "Partnership", value: "Partnership" },
  ];

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="content-profile">
      <Row style={{ marginLeft: "5%" }}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <h4 className="mt-3">Our Profile:</h4>
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
              <label className="input-title">Upload Your Logo</label>
              <br />
              <input type="file" onChange={handleChange} />
              {errors.photo && (
                <span className="input-error">Photo is required</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={11}>
              <h5 className="p-2 heading-profile">General Information:</h5>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="profile-title">Company Name</label>
              <br />
              <input
                {...register("companyname", { required: true })}
                className="profile-input"
              />
              {errors.companyname && (
                <p className="text-danger">Name is required</p>
              )}
            </Col>
            <Col lg={4}>
              <label className="profile-title">Company Type</label>
              <br />
              <Dropdown
                className="profile-input"
                name="companyType"
                value={companyType}
                options={types}
                optionLabel="name"
                placeholder="Select a Company Type"
                {...register("type", {
                  required: true,
                  onChange: (e) => {
                    setCompanyType(e.target.value);
                  },
                })}
              />
              {/* <input
                {...register("type", { required: true })}
                className="profile-input"
              /> */}
              {errors.type && <p className="text-danger">Type is required</p>}
            </Col>
            <Col lg={4}>
              <label className="profile-title">Established Year</label>
              <br />
              <input
                {...register("established", { required: true })}
                className="profile-input"
              />
              {errors.established && (
                <p className="text-danger">Established is required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="profile-title">Domain</label>
              <br />
              <Dropdown
                className="profile-select"
                value={domainValue}
                options={domainList}
                {...register("domainValue", { required: true })}
                optionLabel={"domain"}
                optionValue={"_id"}
                onChange={(e) => getSubDomain(e.value)}
                placeholder="Select a domain"
              />
              {errors.domainValue && (
                <p className="text-danger">Domain is required</p>
              )}
            </Col>
            <Col lg={4}>
              <label className="profile-title">Sub-Domain</label>
              <br />
              <Dropdown
                className="profile-select"
                value={subDomainValue}
                options={subDomainList}
                {...register("subDomainValue", { required: true })}
                optionLabel={"subDomain"}
                onChange={(e) => setSubDomainValue(e.value)}
                placeholder="Select a sub-domain"
              />
              {errors.subDomainValue && (
                <p className="text-danger">Sub-Domain is required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={12} lg={11}>
              <h5 className="p-2 heading-profile">Company Address:</h5>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={4}>
              <label className="profile-title">Country</label>
              <br />
              <Dropdown
                className="profile-select"
                value={countryValue}
                options={countryList}
                {...register("country", { required: true })}
                optionLabel={"countryName"}
                optionValue={"_id"}
                onChange={(e) => getState(e.value)}
                placeholder="Select a country"
              />
              {errors.country && (
                <p className="text-danger">Country is required</p>
              )}
            </Col>
            <Col lg={4}>
              <label>State</label>
              <br />
              <Dropdown
                className="profile-select"
                value={stateValue}
                options={stateList}
                {...register("state", { required: true })}
                optionLabel={"stateName"}
                optionValue={"_id"}
                onChange={(e) => getDistrict(e.value)}
                placeholder="Select a state"
              />

              {errors.state && <p className="text-danger">State is required</p>}
            </Col>
            <Col lg={4}>
              <label>District</label>
              <br />
              <Dropdown
                className="profile-select"
                value={districtValue}
                options={districtList}
                {...register("district", { required: true })}
                optionLabel={"districtName"}
                optionValue={"_id"}
                onChange={(e) => getCity(e.value)}
                placeholder="Select a district"
              />
              {errors.district && (
                <p className="text-danger">District is required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label>City</label>
              <br />
              <Dropdown
                className="profile-select"
                value={cityValue}
                options={cityList}
                {...register("city", { required: true })}
                optionLabel={"cityName"}
                optionValue={"_id"}
                onChange={(e) => setCityValue(e.value)}
                placeholder="Select a city"
              />
              {errors.city && <p className="text-danger">City is required</p>}
            </Col>
            <Col lg={4}>
              <label className="profile-title">Pincode</label>
              <br />
              <input
                {...register("pincode", { required: true })}
                className="profile-input"
              />
              {errors.pincode && (
                <p className="text-danger">Pincode is required</p>
              )}
            </Col>
            <Col lg={4}>
              <label className="profile-title">Address</label>
              <br />
              <input
                {...register("address", { required: true })}
                className="profile-input"
              />
              {errors.address && (
                <p className="text-danger">Address is required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm={12} lg={11}>
              <h5 className="p-2  heading-profile">Social Media:</h5>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={4}>
              <label className="profile-title">Linkedin</label>
              <br />
              <input
                {...register("linkedin", { required: false })}
                className="profile-input"
              />
            </Col>
            <Col lg={4}>
              <label className="profile-title">Facebook</label>
              <br />
              <input
                {...register("facebook", { required: false })}
                className="profile-input"
              />
            </Col>
            <Col lg={4}>
              <label className="profile-title">Youtube</label>
              <br />
              <input
                {...register("youtube", { required: false })}
                className="profile-input"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="profile-title">Website</label>
              <br />
              <input
                {...register("website", { required: false })}
                className="profile-input"
              />
            </Col>
            <Col lg={4}>
              <label className="profile-title">Twitter</label>
              <br />
              <input
                {...register("twitter", { required: false })}
                className="profile-input"
              />
            </Col>
          </Row>
          <div className="submitbuttons p-2">
            <button className="button1 m-2 p-2" type="submit" >
              Submit
            </button>
            <button className="button2 m-2 p-2" type="reset">
              Reset
            </button>
          </div>
        </form>
      </Row>
    </div>
  );
}

export default OurProfile;
