import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ Name, keyName, onChange, register, required = true, errors, index, nameValue, others }) => {

  return (
    <div>
      <Form.Group className="mb-3" controlId={nameValue ? nameValue : keyName}>
        <Form.Label>{Name}</Form.Label>
        <Form.Control
          type="text"
          {...register(nameValue ? nameValue : keyName, {
            required,
            onChange:(e)=>{
              onChange(index, keyName , e.target.value)
            }
          })} {...others}
        />
        {errors[keyName] && (
          <Form.Text className="text-danger">{Name} required</Form.Text>
        )}
      </Form.Group>
    </div>
  );
};

export default TextInput;
