import React from "react";
import { Form, Button } from "reactstrap";
import InputGroup from "./input-group";

function InstructorForm({ onSubmit, inputs }) {
  return (
    <Form
      className="form"
      onSubmit={event => {
        // Get the values from the form elements.
        let { firstname, lastname, email, company } = event.target.elements;

        // Call the function passed through the `onSubmit` prop.
        onSubmit({
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          company: company.value
        });
      }}
    >
      {inputs.map((input, index) => (
        <InputGroup
          key={index}
          label={`${input.charAt(0).toUpperCase()}${input.slice(1)}`}
          labelFor={`form-${input}`}
          name={`${input}`}
          id={`form-${input}`}
          placeholder={input}
        />
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default InstructorForm;
