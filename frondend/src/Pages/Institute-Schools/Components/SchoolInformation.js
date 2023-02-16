import React, { useState } from 'react'
import { Typography } from 'antd'
import { Button, Form, Input, Radio, Select, Row, Col } from 'antd'
import { useForm } from 'react-hook-form'

import axios from 'axios'

import '../../../Components/Css/Professional/professionalstyle.scss'

const { Title } = Typography

export default function SchoolInformation() {
  const [form] = Form.useForm()
  // const [value, setValue] = useState(1);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gendercheck: '',
    },
  })

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  const [formLayout, setFormLayout] = useState('vertical')
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout)
  }

  const onReset = () => {
    console.log('reset')
    reset()
  }

  const onFinish = (values) => {
    console.log(values)
  }

  const API_URL = 'http://localhost:8080'

  const Api = axios.create({
    baseURL: API_URL,
    // header,
  })

  const onSubmit = (data) => {
    console.log(data)
    // const check = Api.post(`/students/ourprofiles`, data);
    const check = Api.post(`/institute/school/ourprofile`, data)
    console.log(check, 333333333333)
    check.then((resp) => {
      console.log('resp.data', resp.data)
      if (resp.data.statusCode === 200) {
      }
    })
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">School Information </div>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">School Name </label>
              <input
                className="input-field"
                {...register('schoolName', { required: true })}
              />
              <br />
              {errors.schoolName && (
                <span className="input-error">School Name is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Country</label>
              <br></br>
              <select
                className="input-field"
                {...register('Country', { required: true })}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
              </select>
              <br />
              {errors.Country && (
                <span className="input-error">Country is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">State</label>
              <br />
              <select
                className="input-field"
                {...register('State', { required: true })}
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Kerala">Kerala</option>
              </select>
              <br />
              {errors.State && (
                <span className="input-error">State is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">District</label>
              <br />
              <select
                className="input-field"
                {...register('District', { required: true })}
              >
                <option value="">Select District</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Chennai">Chennai</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="vellore">vellore</option>
              </select>
              <br />
              {errors.District && (
                <span className="input-error">District is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">City </label>
              <br />
              <input
                className="input-field"
                {...register('City', { required: true })}
              />

              <br />
              {errors.City && (
                <span className="input-error">City is required</span>
              )}
            </Col>

            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Pincode</label>
              <input
                className="input-field"
                {...register('Pincode', { required: true })}
              />

              <br />
              {errors.Pincode && (
                <span className="input-error">Pincode is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Person </label>
              <br />
              <input
                className="input-field"
                {...register('ContactPerson', { required: true })}
              />

              <br />
              {errors.ContactPerson && (
                <span className="input-error">
                  Contact Person name is required
                </span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                className="input-field"
                {...register('ContactNumber', { required: true })}
              />

              <br />
              {errors.ContactNumber && (
                <span className="input-error">Contact Number is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Designation </label>
              <br />
              <input
                className="input-field"
                {...register("Designation", { required: true })}
              />

              <br />
              {errors.Designation && (
                <span className="input-error">Designation is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Department</label>
              <br />
              <input
                className="input-field"
                {...register("Department", { required: true })}
              />

              <br />
              {errors.Department && (
                <span className="input-error">Department is required</span>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Email Address </label>
              <br />
              <input
                className="input-field"
                {...register('EmailAddress', { required: true })}
              />

              <br />
              {errors.EmailAddress && (
                <span className="input-error">Email Address is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Website </label>
              <input
                className="input-field"
                {...register('Website', { required: true })}
              />

              {/* <br />
              {errors.Website && (
                <span className="input-error">Address is required</span>
              )} */}
            </Col>
            <Col xs={24} sm={24} md={8} className=" p-2">
              <label className="input-title">Address </label>
              <textarea
                className="input-field"
                {...register('Address', { required: true })}
              />

              <br />
              {errors.Address && (
                <span className="input-error">Address is required</span>
              )}
            </Col>
          </Row>
          <Col xs={24} sm={24} md={16} className="p-2">
            <p style={{ marginBottom: "7px" }} className="marital-checkbox">
              School Board{" "}
            </p>
            <div className="status p-1">
              <Radio.Group
                name="radiogroup"
                {...register("SchoolBoard", { required: true })}>
                <Radio value={1}>State Board </Radio>
                <Radio value={"Matriculation"}>Matriculation</Radio>
                <Radio value={"CBSE"}>CBSE </Radio>
                <Radio value={"ICSE"}>ICSE </Radio>
                <Radio value={"Anglo Indian"}>Anglo Indian</Radio>
              </Radio.Group>
            </div>
            {errors.SchoolBoard && (
              <span className="input-error">School Board is required</span>
            )}
          </Col>
          <div className="submitbuttons p-2">
            <button type="submit" className="button1  m-2 p-2">
              Submit
            </button>
            <button onClick={() => reset()} className="button2  m-2 p-2">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
