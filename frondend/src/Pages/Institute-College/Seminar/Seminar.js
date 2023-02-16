import React from 'react'
import {Row,Col} from 'antd'
import { useForm } from "react-hook-form";

const Seminar = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    //API
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Course Information</div>

          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Seminar Topic</label>
              <br />
              <input
                className="input-field"
                {...register('seminarTopic', { required: true })}
              />

              <br />
              {errors.description && (
                <span className="input-error">Email Id is required</span>
              )}
            </Col>

            {/* <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Mode of Study</label>
              <br />
              <select
                className="input-field"
                {...register('modeOfStudy', { required: true })}
              >
                <option value="">Select study mode</option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="longDistance">Long-distance</option>
              </select>

              <br />
              {errors.modeOfStudy && (
                <span className="input-error">Phone Numberis required</span>
              )}
            </Col> */}
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Category</label>
              <br />
              <input
                className="input-field"
                type="number"
                {...register('category', { required: true })}
              />

              <br />
              {errors.courseDuration && (
                <span className="input-error">
                  Duration of course is required
                </span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <input type="checkbox" {...register('courseDuration')} />
              <label className="input-title">
                {' '}
                Wish to disclose Fees Details
              </label>
              <br />

              <br />
              {errors.courseDuration && (
                <span className="input-error">
                  Duration of course is required
                </span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Fees Details per annum</label>
              <br />
              <input {...register('feesAmount')} />

              <br />
              {errors.courseDuration && (
                <span className="input-error">
                  Duration of course is required
                </span>
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

export default Seminar
