import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function InputGroup(props) {
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
    </FormGroup>
  );
}

export default InputGroup;
