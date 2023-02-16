import React from "react";
import { Form } from "react-bootstrap";

export default function PrimeDropdown({ Name, keyName, register, required = true,errors, onChange,option }) {
  return (
    <div>
      <Form.Group className="mb-3 mt-3" controlId={keyName}>
        <Form.Label>{Name}</Form.Label>
        <Form.Select
          placeholder={`Enter ${keyName}`}
          {...register(keyName, { required })}
          type="text"
          onChange={onChange}
        >
          {option.map((item, index)=>(
             <option value={item.value}>{item.label}</option>
          ))}
         
        </Form.Select>
        {errors[keyName] && (
          <Form.Text className="text-danger">{Name} required</Form.Text>
        )}
      </Form.Group>
    </div>
  );
}
