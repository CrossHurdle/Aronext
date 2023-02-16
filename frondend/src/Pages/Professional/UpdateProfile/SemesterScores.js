import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "antd";
import '../../../Components/Css/Professional/professionalstyle.scss';

function SemesterScores() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const semestervalue = {
    semester: "",
  };
  const [semester, setsemester] = useState([semestervalue]);

  const handleAddSemester = () => {
    setsemester((prev) => [...prev, semestervalue]);
  };
  const handleoption = useCallback((index, key, value) => {
    setsemester(prev => {
      const newValue = [...prev];
      newValue[index][key] = value;
      return newValue;
    });
  }, []);

  //REMOVE OPTION
  const handleRemove = useCallback((idx, setValue) => {
    setsemester(prev => {
      const newOne = prev.filter((item, index) => index !== idx);
      setValue("semester", newOne);
      return newOne;
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-4">
          <div className="pages-title mb-3">Semester Scores </div>
          <div className="input-subtitle mt-4 mb-3">Percentages :</div>
          <Row className="mb-3">
              <Col sm={24} md={12} className="Stud-sem-col p-2">
          {/* {semester.length >= 1 && "Add Semester List"} */}
          {semester.map((item, index) => {
                return (
                  <div>
                    <label className="input-title">
                     Semester </label>
                     <br/>
                      <input
                        rows="3"
                        value={semester[index].question}
                        className="input-field"
                        Name="Question"
                        {...register(`semester[${index}].question`, {
                          required: true,
                          onChange: e => {
                            handleoption(index, "question", e.target.value);
                          },
                        })}
                      />
                   
                    {semester.length > 1 && (
                      <div className="remove-buttontag">
                        <Button
                          // variant="danger"
                          className="remove-button mt-2 "
                          disabled={semester.length <= 1}
                          onClick={() => {
                            handleRemove(index, setValue);
                          }}>
                          Remove
                        </Button>
                      </div>
                      
                    )}
                        <div>
             
            </div>
                  </div>
                );
              })}
              <br></br>
              {errors.question && (
                <span className="input-error">Create it</span>
              )}
              </Col>
            </Row>
            <button
                type="button"
                className="addbutton p-2 "
                onClick={handleAddSemester}
              >
                Add semester
              </button>
          <div className="input-subtitle mt-4 mb-2">Over all CGPA :</div>
          <Row className="mb-3">
            <Col sm={24} md={5} className="p-2">
              <label className="input-title">
                CGPA   </label>
                <input className="input-field" />
            
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

export default SemesterScores;
