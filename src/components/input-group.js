import React from "react";
import { FormGroup, Input } from "reactstrap";
import Label from "./label";

function InputGroup(props) {
  console.log("Inside input group: " + props.errorMessage);
  let errorMessage = props.errorMessage;
  return (
    <FormGroup>
      <Label htmlFor={props.labelFor} className="label">
        {props.label}
      </Label>
      <Input
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
      {errorMessage.length ? (
        <div className="form-error-color">{props.errorMessage}</div>
      ) : null}
    </FormGroup>
  );
}

export default InputGroup;
