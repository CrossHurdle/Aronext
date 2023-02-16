import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "antd";
import '../../../Components/Css/Professional/professionalstyle.scss';
import { Select } from "antd";

const { Option } = Select;


function ProfessionalBlog() {
  const questionsvalue = {
    question: "",
  };
  const [questions, setquestions] = useState([questionsvalue]);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      questions: questions,
    },
  });
  const onSubmit = data => console.log(data);

  const handleAddQuestion = () => {
    setquestions(prev => [...prev, questionsvalue]);
  };

  const handleoption = useCallback((index, key, value) => {
    setquestions(prev => {
      const newValue = [...prev];
      newValue[index][key] = value;
      return newValue;
    });
  }, []);

  //REMOVE OPTION
  const handleRemove = useCallback((idx, setValue) => {
    setquestions(prev => {
      const newOne = prev.filter((item, index) => index !== idx);
      setValue("questions", newOne);
      return newOne;
    });
  }, []);

 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-informations p-5">
          <div className="pages-title mb-3">Blog</div>
          <Row className="mb-3 mt-4">
            <Col sm={24} xs={24} md={8} className="p-2">
              <label className="input-title">Domain</label>

              <Select
                className="domaindropdown"
                style={{ width: "90%" }}
                placeholder="Select Domain"
                {...register("Domain", { required: true })}>
                <Option value="InformationTechnology">
                  Information Technology
                </Option>
                <Option value="Finance">Finance</Option>

                <Option value="Civil">Civil</Option>
              </Select>

              {errors.Domain && <span className="input-error">select</span>}
            </Col>
            <Col sm={24} xs={24} md={8} className="p-2">
              <div>
                <label className="input-title">Sub-Domain</label>

                <Select
                  mode="multiple"
                  style={{ width: "90%" }}
                  placeholder="select sub-domain"
                  // onChange={handleChange}
                  optionLabelProp="label"
                  {...register("Subdomain", { required: true })}>
                  <Option value="Software" label="Software">
                    Software
                  </Option>
                  <Option value="Hardware" label="Hardware">
                    Hardware
                  </Option>
                  <Option value="Database" label="Database">
                    Database
                  </Option>
                  <Option value="Tech-support" label="Tech-support">
                    Tech-support
                  </Option>
                  <Option value="HR" label="HR">
                    HR
                  </Option>
                </Select>

                {errors.Subdomain && (
                  <span className="input-error">select</span>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={12} className="p-2">
              <field className="input-title">
                Blog Description
                <textarea
                  rows="3"
                  className="input-field"
                  {...register("description", { required: true })}
                />
              </field>
              <br />
              {errors.description && (
                <span className="input-error">Describe</span>
              )}
            </Col>
          </Row>
         
<Row className="mb-3 mt-4">
<Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Image</label>
                <input
                  type="file"
                  className="input-field"
                  {...register("image", { required: true })}
                />

                <br />
                {errors.image && (
                  <span className="Stud-qual-error">
                    image required
                  </span>
                )}
              </Col>
              <Col sm={24} md={8} className="Stud-qual-col p-2">
                <label>Tag</label>
                <br/>
                <input
                  type="text"
                  className="input-field"
                  {...register("tag", { required: true })}
                />
                <br />
                {errors.tag && (
                  <span className="Stud-qual-error">
                    image required
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
  );
}

export default ProfessionalBlog;
