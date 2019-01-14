import React from "react";
import { Form, Button } from "reactstrap";
import InputGroup from "./input-group";

function InstructorForm({ onSubmit, inputs }) {
  return (
    <Form
      className="form"
      onSubmit={event => {
        event.preventDefault();

        // Get the values from the form elements.
        let { firstname, lastname, company } = event.target.elements;

        // Call the function passed through the `onSubmit` prop.
        onSubmit({
          firstname: firstname.value,
          lastname: lastname.value,
          company: company.value
        });
      }}
    >
      {inputs.map((input, index) => (
        <InputGroup
          key={index}
          label={formatInput(input)}
          labelFor={`form-${input}`}
          name={`${input}`}
          id={`form-${input}`}
          placeholder={formatInput(input)}
        />
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
}

/*
 * Format the given string by capitalizing its first letter 
 * and separating the words if  name is present.
 */
function formatInput(input) {
  let capitalLetter = input.charAt(0).toUpperCase();
  return input.indexOf("name") < 0
    ? `${capitalLetter}${input.slice(1)}`
    : `${capitalLetter}${format(input)}`;
}

/*
 * Separate the first word of the input string from 'name'.
 */
function format(input) {
  return `${input.slice(1, input.indexOf("name"))} ${input.slice(
    input.indexOf("name")
  )}`;
}

export default InstructorForm;
