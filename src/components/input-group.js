import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function InputGroup(props) {
  console.log("Inside input group: " + props.errorMessage);
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
      {props.errorMessage.length ? (
        <div className="form-error-color">{props.errorMessage}</div>
      ) : null}
    </FormGroup>
  );
}

export default InputGroup;
