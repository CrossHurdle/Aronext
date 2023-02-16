import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { Row, Col } from "antd";
import '../../../Components/Css/Students/Student.scss';

function CourseInfo() {

  const [textbox, setTextBox] = useState(null);

  const check = () => {
    return (
      <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Fees Details per annum</label>
              <br />
              <input
                className="input-field"
                {...register("category1")}
              />

              <br />
              {errors.category1 && (
                <span className="input-error">Last Name is required</span>
              )}
            </Col>

    );
  };

  const display = e => {
    e.target.checked === true ? setTextBox(check) : setTextBox(null);
  };

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
              <label className="input-title">Graduate Level </label>
              <br />
              <select
                className="input-field"
                {...register("graduateLevel", { required: true })}
              >
                <option value="">Select Level</option>
                <option value="ug">UG/Bachelor</option>
                <option value="pg">PG/Master's</option>
                <option value="diploma">Diploma</option>
              </select>

              <br />
              {errors.graduateLevel && (
                <span className="input-error">Graduate level is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Category</label>
              <input
                className="input-field"
                {...register("category", { required: true })}
              />

              <br />
              {errors.category && (
                <span className="input-error">Category is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Major</label>
              <br/>
              <input
                className="input-field"
                {...register("major", { required: true })}
              />

              <br />
              {errors.major && (
                <span className="input-error">Major is required</span>
              )}
            </Col>
            </Row>
            <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Description</label>
              <br />
              <textarea
                className="input-field"
                {...register("description", { required: true })}
              />

              <br />
              {errors.description && (
                <span className="input-error">Description is required</span>
              )}
            </Col>

            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Mode of Study</label>
              <br />
              <select
                className="input-field"
                {...register("modeOfStudy", { required: true })}
              >
                <option value="">Select study mode</option>
                <option value='fullTime'>Full Time</option>
                <option value='partTime'>Part Time</option>
                <option value="longDistance">Long-distance</option>
              </select>

              <br />
              {errors.modeOfStudy && (
                <span className="input-error">Mode of Study is required</span>
              )}
            </Col>
            <Col sm={24} md={8} className=" p-2">
              <label className="input-title">Course Duration</label>
              <br />
              <input
                className="input-field"
                type='number'                {...register("courseDuration", { required: true })}
              />

              <br />
              {errors.courseDuration && (
                <span className="input-error">Duration of course is required</span>
              )}
            </Col>
            </Row>
            <Row className="mb-3">
            <Col sm={24} md={8} className=" p-2">
              <input type='checkbox' onClick={display}   {...register("discloseFees")}
              />
              <label className="input-title"> Wish to disclose Fees Details</label>
              <br />


              <br />
              {errors.discloseFees && (
                <span className="input-error">Duration of course is required</span>
              )}
            </Col>


            {textbox}

          </Row>

          <div className="submitbuttons p-2">
            <button className="button1 m-2 p-2" type="submit">
              Submit
            </button>
            <button className="button2 m-2 p-2" type="reset" >
              Reset
            </button>
          </div>
       
        </div>
        
      </form>
    </div>
  );
}

export default CourseInfo;
