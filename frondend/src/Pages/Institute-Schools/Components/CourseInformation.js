import React, { useState } from 'react'
import { Form, Radio, Row, Col } from 'antd'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../../../Components/Css/Professional/professionalstyle.scss'

export default function CourseInformation() {

  const [textbox, setTextBox] = useState(null)

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gendercheck: '',
    },
  })

  const check = () => {
    return (
      <Col sm={24} md={8} className=" p-2">
        <label>Fees Structure </label>
        <input
          className="input-field"
          {...register('feestructure', { required: true })}
        />

        <br />
        {errors.feestructure && (
          <span className="input-error">Fees Structure is required</span>
        )}
      </Col>
    )
  }

  const display = (e) => {
    e.target.checked === true ? setTextBox(check) : setTextBox(null)
  }

  const API_URL = 'http://localhost:8080'

  const Api = axios.create({
    baseURL: API_URL,
    // header,
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Course Information</div>

          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Class </label>
              <br></br>
              <select
                className="input-field"
                {...register('class', { required: true })}
              >
                <option value="">Select class </option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
              </select>
              <br />
              {errors.class && (
                <span className="input-error">Class is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Group</label>
              <br></br>
              <select
                className="input-field"
                {...register('group', { required: true })}
              >
                <option value="">Select group</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Biology">Biology</option>
                <option value="Accountancy">Accountancy</option>
                <option value="Commerce">Commerce</option>
              </select>
              <br />
              {errors.group && (
                <span className="input-error">Group is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <p style={{ marginBottom: '7px' }} className="marital-checkbox">
                Mode of Study{' '}
              </p>
              <div className="status p-1">
                <Radio.Group
                  name="radiogroup"
                  {...register('modeOfStudy', { required: true })}
                >
                  <Radio value={1}>Part Time</Radio>
                  <Radio value={2}>Full Time</Radio>
                </Radio.Group>
              </div>
              {errors.modeOfStudy && (
                <span className="input-error">Mode of Study is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Course Duration </label>
              <input
                className="input-field"
                {...register('CourseDuration', { required: true })}
              />

              <br />
              {errors.CourseDuration && (
                <span className="input-error">Course Duration is required</span>
              )}
            </Col>

            {/* {errors.nationality && (
              <span className="input-error">
                Fees Structure is required
              </span>
            )} */}
          </Row>
          <div
            className="sample"
            style={{
              display: 'block',
              // textAlign: "center",
              // flexDirection: "column",
              // justifyContent: "center",
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Col sm={24} md={8} className=" p-2">
              <p>Do you want to disclose your fees structure</p>
              <input
                onClick={display}
                // className="input-field"
                type={'checkbox'}
                // {...register("nationality", { required: true })}
              />
              <br />
            </Col>
            {textbox}
          </div>
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
