import React from 'react'
import { Row, Col } from 'antd'
import { useForm } from 'react-hook-form'

const InternshipCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
    //API
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Internship Program</div>
          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Internship Category</label>
              <br />
              <input
                className="seminarInput px-4"
                {...register('internshipCategory', { required: true })}
              />

              <br />
              {errors.internshipCategory && (
                <span className="input-error">Category is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Nature of Internship work</label>
              <br />
              <input
                className="seminarInput px-4"
                {...register('internshipWork', { required: true })}
              />

              <br />
              {errors.internshipWork && (
                <span className="input-error">
                  internship Duration is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Internship Field</label>
              <br />
              <input
                className="seminarInput px-4"
                {...register('internField', { required: true })}
              />

              <br />
              {errors.internField && (
                <span className="input-error">Intern is required</span>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Mode of Internship </label>
              <br />
              <select
                className="seminarInput px-4"
                {...register('modeOfInternship', { required: true })}
              >
                <option value="">Select internship mode</option>
                <option value="remote">Online Mode</option>
                <option value="direct">Direct</option>
              </select>

              <br />
              {errors.modeOfInternship && (
                <span className="input-error">Internship mode is required</span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Internship Duration</label>
              <br />
              <input
                className="seminarInput px-4"
                type="number"
                {...register('internshipDuration', { required: true })}
              />

              <br />
              {errors.internshipDuration && (
                <span className="input-error">
                  Duration of course is required
                </span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Address& Location</label>
              <br />
              <input
                className="seminarInput px-4"
                type="number"
                {...register('address', { required: true })}
              />

              <br />
              {errors.address && (
                <span className="input-error">
                  Duration of course is required
                </span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Start Date</label>
              <br />
              <input
                className="seminarInput px-4"
                type="date"
                {...register('startDate', { required: true })}
              />

              <br />
              {errors.startDate && (
                <span className="input-error">Starting Date is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">Last Date to Apply</label>
              <br />
              <input
                type="date"
                className="seminarInput px-4"
                {...register('deadline', { required: true })}
              />

              <br />
              {errors.deadline && (
                <span className="input-error">
                  Duration of course is required
                </span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Type of Internship </label>
              <br />
              <select
                className="seminarInput px-4"
                {...register('internshipType', { required: true })}
              >
                <option value="">Internship Type</option>
                <option value="free">Free</option>
                <option value="pay">Have to pay</option>
              </select>

              <br />
              {errors.internshipType && (
                <span className="input-error">Internship mode is required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Who can participate </label>
              <br />
              <input
                className="seminarInput px-4"
                {...register('toWhom', { required: true })}
              />
              <br />
              {errors.toWhom && (
                <span className="input-error">Internship mode is required</span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Contact Number </label>
              <br />
              <input
                className="seminarInput px-4"
                {...register('contactNumber', { required: true })}
              />
              <br />
              {errors.contactNumber && (
                <span className="input-error">Contact Number is required</span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Alloted No of Seats. </label>
              <br />
              <input
                className="seminarInput px-4"
                {...register('noOfSeats', { required: true })}
              />
              <br />
              {errors.noOfSeats && (
                <span className="input-error">Alloted Number is required</span>
              )}
            </Col>
          </Row>
          <Col sm={24} className=" p-2">
            <label className="input-title">Description</label>
            <br />
            <textarea
              className="seminarInput px-4"
              {...register('description', { required: true })}
            />

            <br />
            {errors.description && (
              <span className="input-error">Description is required</span>
            )}
          </Col>
          <Col sm={24} md={8} className=" p-2">
            <label className="input-title">Brochure</label>
            <br />
            <input
              type="file"
              className="seminarInput px-4"
              {...register('brochure', { required: true })}
            />

            <br />
            {errors.brochure && (
              <span className="input-error">Description is required</span>
            )}
          </Col>
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

export default InternshipCreate
