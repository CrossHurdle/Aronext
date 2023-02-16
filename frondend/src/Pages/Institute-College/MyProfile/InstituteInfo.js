import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'antd'
import '../../../Components/Css/Students/Student.scss';
import Api from '../Api'

function PersonalInfo() {
  //=====================API FETCHING================

  const [insitituteDetails, setInsitituteDetails] = useState([])

  useEffect(() => {
    insitituteDataList()
  }, [])

  const insitituteDataList = () => {
    Api.get(`/insititutes/`).then((resp) => {
      setInsitituteDetails(resp.data.data)
      alert(resp.data.message)
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({})

  const onSubmit = async (data) => {
    reset()
    console.log(data)
    return await Api.post(`institutes/create`, data).then((resp) => {
      console.log(resp.data, 'response data')
      if (resp.status.code === 200) {
        insitituteDataList()
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Institute Information</div>

          <Row className="mb-3">
            <Col  sm={24} md={8} className=" p-2">
              <label className="input-title">Institute Name </label>
              <input
                className="input-field"
                {...register('instituteName', { required: true })}
              />

              <br />
              {errors.instituteName && (
                <span className="Stud-personal-error">
                  Institute Name is required
                </span>
              )}
            </Col>
            <Col  sm={24} md={8} className=" p-2">
              <label className="input-title">Address </label>
              <br />
              <input
                className="input-field"
                {...register('address', { required: true })}
              />

              

              <br />
              {errors.address && (
                <span className="Stud-personal-error">Address is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Country</label>
              <br></br>
              <select
                className="input-field"
                {...register('country', { required: true })}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
              </select>
              <br />
              {errors.country && (
                <span className="Stud-personal-error">Country is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">State</label>
              <br />
              <select
                className="input-field"
                {...register('state', { required: true })}
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Kerala">Kerala</option>
              </select>
              <br />
              {errors.state && (
                <span className="Stud-personal-error">State is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">District</label>
              <br />
              <select
                className="input-field"
                {...register('district', { required: true })}
              >
                <option value="">Select District</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Chennai">Chennai</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="vellore">vellore</option>
              </select>
              <br />
              {errors.district && (
                <span className="Stud-personal-error">
                  District is required
                </span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Pincode </label>
              <br />
              <input
                type="number"
                className="input-field"
                {...register('pincode', {
                  required: true,
                  pattern: {
                    value: /^0*?\d{6}$/,
                  },
                })}
              />

              <br />
              {errors.pincode && (
                <span className="Stud-personal-error">Pincode is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={24} className="p-2">
              <p style={{ marginBottom: '7px' }} className="marital-checkbox">
                Institute Type
              </p>
              <div className="status p-1">
                <Row style={{ display: 'flex' }}>
                  <Col className="radioGroup" xs={24} sm={12} md={5}>
                    <input
                      type="radio"
                      value="affiliated"
                      {...register('instituteType', { required: true })}
                      className="radioGroup__input m-2"
                    />
                    Affiliated College
                  </Col>
                  <Col className="radioGroup" xs={24} sm={12} md={5}>
                    <input
                      type="radio"
                      value="university"
                      {...register('instituteType', { required: true })}
                      className="radioGroup__input m-2"
                    />
                    University
                  </Col>
                  <Col className="radioGroup" xs={24} sm={12} md={5}>
                    <input
                      type="radio"
                      value="deemedUniversity"
                      {...register('instituteType', { required: true })}
                      className="radioGroup__input m-2"
                    />
                    Deemed-University
                  </Col>
                  <Col className="radioGroup" xs={24} sm={12} md={5}>
                    <input
                      type="radio"
                      value="others"
                      {...register('instituteType', { required: true })}
                      className="radioGroup__input m-2 m-2"
                    />
                    Others
                  </Col>
                </Row>
              </div>
              {errors.instituteType && (
                <span className="input-error">Institute Type is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Person </label>
              <br />
              <input
                className="input-field"
                {...register('contactPerson', { required: true })}
              />

              <br />
              {errors.contactPerson && (
                <span className="Stud-personal-error">
                  Contact person is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Designation </label>
              <br />
              <input
                className="input-field"
                {...register('designation', { required: true })}
              />

              <br />
              {errors.designation && (
                <span className="Stud-personal-error">
                  Designation is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                className="input-field"
                {...register('contactNumber', { required: true })}
              />

              <br />
              {errors.contactNumber && (
                <span className="Stud-personal-error">
                  Contact number is required
                </span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Website </label>
              <br />
              <input
                className="input-field"
                {...register('websiteUrl', { required: true })}
              />

              <br />
              {errors.websiteUrl && (
                <span className="Stud-personal-error">Website is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">E-mail </label>
              <br />
              <input
                className="input-field"
                {...register('email', { required: true })}
              />

              <br />
              {errors.email && (
                <span className="Stud-personal-error">E-mail is required</span>
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
  )
}

export default PersonalInfo
