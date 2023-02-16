import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col } from "antd";
import '../../../Components/Css/Professional/professionalstyle.scss';
import Api from "../../../Api.js";

function PersonalInfo() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [details, setDetails] = useState();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);

    await Api.get(`employeeUser/employee_getone/${userId}`).then((res) => {
      const detail = res.data.data;
      setDetails(res.data.data);
      setValue("firstname", detail.firstName);
      setValue("lastname", detail.LastName);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Personal Info</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">First Name</label>
              <input
                className="input-field"
                {...register("firstname", { required: true })}
              />

              <br />
              {errors.firstname && (
                <span className="input-error">First Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Last Name</label>
              <input
                className="input-field"
                {...register("lastname", { required: true })}
              />

              <br />
              {errors.lastname && (
                <span className="input-error">Last Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Phone Number</label>
              <input
                className="input-field"
                {...register("phonenumber", { required: true })}
              />

              <br />
              {errors.phonenumber && (
                <span className="input-error"> Number required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Date of Birth </label>
              <input
                className="input-field"
                type="date"
                {...register("dob", { required: true })}
              />

              <br />
              {errors.dob && <span className="input-error">DOB required</span>}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Gender </label>
              <select
                className="input-field"
                {...register("Gender", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Male</option>
                <option value="b">Female</option>
                <option value="c">Others</option>
              </select>
              <br />
              {errors.Gender && (
                <span className="input-error">Gender required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Marital status </label>
              <select
                className="input-field"
                {...register("maritalstatus", { required: true })}
              >
                <option value="">select </option>
                <option value="a">Married</option>
                <option value="b">Unmarried</option>
                <option value="c">divorced</option>
              </select>
              <br />
              {errors.maritalstatus && (
                <span className="input-error">status required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Email Id </label>
              <input
                className="input-field"
                {...register("email", { required: true })}
              />

              <br />
              {errors.email && (
                <span className="input-error">Email required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Address</label>
              <textarea
                rows="1"
                className="input-field"
                {...register("address", { required: true })}
              />

              <br />
              {errors.address && (
                <span className="input-error">Address required</span>
              )}
            </Col>

            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Country </label>
              <select
                className="input-field"
                {...register("country", { required: true })}
              >
                <option value="">select country</option>
                <option value="a">India</option>
                <option value="b">USA</option>
                <option value="c">UK</option>
                <option value="d">China</option>
              </select>
              <br />
              {errors.country && (
                <span className="input-error">Country required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">State</label> <br></br>
              <select
                className="input-field"
                {...register("State", { required: true })}
              >
                <option value="">select State</option>
                <option value="a">TamilNadu</option>
                <option value="b">Kerala</option>
                <option value="c">Delhi</option>
                <option value="d">Mumbai</option>
              </select>
              <br />
              {errors.State && (
                <span className="input-error">Nationality required</span>
              )}
            </Col>

            <Col sm={24} md={8} className="p-2">
              <label className="input-title">District</label>
              <select
                className="input-field"
                {...register("nationality", { required: true })}
              >
                <option value="">select District</option>
                <option value="a">Chennai</option>
                <option value="b">Madurai</option>
                <option value="c">Coimbature</option>
                <option value="d">Trichy</option>
              </select>
              <br />
              {errors.nationality && (
                <span className="input-error">Nationality required</span>
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
      </form>
    </div>
  );
}

export default PersonalInfo;
