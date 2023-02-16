import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "antd";
import '../../../Components/Css/Professional/professionalstyle.scss';

function QualificationDetails() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Qualification Details</div>
          <Row className="mb-3">
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">
                Your Qualification</label>
                <input
                  className="input-field"
                  {...register("Qualification", { required: true })}
                />
              
              <br />
              {errors.Qualification && (
                <span className="input-error"> required</span>
              )}
            </Col>
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">
                Education Type </label>
                <select
                  className="input-field"
                  {...register("Education", { required: true })}
                >
             
              <option value="">select Education</option>
                  <option value="a">B.sc</option>
                  <option value="b">M.sc</option>
                  <option value="c">BE</option>
                  <option value="d">ME</option>
                  <option value="e">P.hd</option>
                  <option value="f">Diplomo</option>
             </select>
              <br />
              {errors.Education && (
                <span className="input-error"> required</span>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">
                University</label>
                <input
                  className="input-field"
                  {...register("University", { required: true })}
                />
              
              <br />
              {errors.University && (
                <span className="input-error">University required</span>
              )}
            </Col>
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">
                University Address</label>
                <input
                  className="input-field"
                  {...register("UniversityAddress", { required: true })}
                />
              
              <br />
              {errors.UniversityAddress && (
                <span className="input-error">Address required</span>
              )}
            </Col>
          </Row>
          <div className="input-subtitle mt-4">Masters (optional*) </div>
          <Row className="mb-3">
          
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">
                University</label>
                <input
                  className="input-field"
                  {...register("University", { required: true })}
                />
              
            
            </Col>
            <Col sm={24} md={12} className="p-2">
              <label className="input-title">
                University Address</label>
                <input
                  className="input-field"
                  {...register("UniversityAddress", { required: true })}
                />
              
          
            </Col>
          </Row>
          <div className="input-subtitle mt-4">Class X :</div>
          <Row className="mb-3">
          
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                school Name</label>
                <input
                  className="input-field"
                  {...register("classXName", { required: true })}
                />
              
              <br />
              {errors.classXName && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Percentage </label>
                <input
                  className="input-field"
                  {...register("classXPercentage", { required: true })}
                />
             
              <br />
              {errors.classXPercentage && (
                <span className="input-error">Percentage required</span>
              )}
              </Col>
              <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Year of Passing </label>
                <input
                  className="input-field"
                  {...register("classXPassing", { required: true })}
                />
             
              <br />
              {errors.classXPassing && (
                <span className="input-error">Year required</span>
              )}
            </Col>
      
          
            
          </Row>
          <div className="input-subtitle mt-4">Class XII :</div>
          <Row className="mb-3">
          
            <Col sm={24} md={8} className="p-2">
              <label className="input-title"> </label>
                school Name
                <input
                  className="input-field"
                  {...register("classXIIschoolName", { required: true })}
                />
             
              <br />
              {errors.classXIIschoolName && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Percentage </label>
                <input
                  className="input-field"
                  {...register("classXIIPercentage", { required: true })}
                />
             
              <br />
              {errors.classXIIPercentage && (
                <span className="input-error">Percentage required</span>
              )}
              </Col>
              <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Year of Passing</label>
                <input
                  className="input-field"
                  {...register("classXIIPassing", { required: true })}
                />
              
              <br />
              {errors.classXIIPassing && (
                <span className="input-error">Year required</span>
              )}
            </Col>
      
          
            
          </Row>
          <div className="input-subtitle mt-4">Bachelore Degree :</div>
          <Row className="mb-3">
          
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                College Name </label>
                <input
                  className="input-field"
                  {...register("Bcollegename", { required: true })}
                />
             
              <br />
              {errors.Bcollegename && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Percentage </label>
                <input
                  className="input-field"
                  {...register("BPercentage", { required: true })}
                />
             
              <br />
              {errors.BPercentage && (
                <span className="input-error">Percentage required</span>
              )}
              </Col>
              <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Year of Passing </label>
                <input
                  className="input-field"
                  {...register("BPassing", { required: true })}
                />
             
              <br />
              {errors.BPassing && (
                <span className="input-error">Year required</span>
              )}
            </Col>
      
          
            
          </Row>
          <div className="input-subtitle mt-4">Master Degree (optional*) :</div>
          <Row className="mb-3">
          
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                College Name</label>
                <input
                  className="input-field"
                  {...register("Mcollegename", { required: true })}
                />
              
              <br />
              {errors.Mcollegename && (
                <span className="input-error">Name required</span>
              )}
            </Col>
            <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Percentage </label>
                <input
                  className="input-field"
                  {...register("MPercentage", { required: true })}
                />
             
              <br />
              {errors.MPercentage && (
                <span className="input-error">Percentage required</span>
              )}
              </Col>
              <Col sm={24} md={8} className="p-2">
              <label className="input-title">
                Year of Passing</label>
                <input
                  className="input-field"
                  {...register("MPassing", { required: true })}
                />
              
              <br />
              {errors.MPassing && (
                <span className="input-error">Year required</span>
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

export default QualificationDetails;

