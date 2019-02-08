import React from "react";
import { Form, Button } from "reactstrap";
import InputGroup from "./input-group";

function FormComponent({ onSubmit, inputs, errors }) {
  return (
    <Form
      className="form"
      onSubmit={event => {
        event.preventDefault();

        // Get the values from the form elements.
        let { username, password } = event.target.elements;

        // Call the function passed through the `onSubmit` prop.
        onSubmit({
          username: username.value,
          password: password.value
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
          errorMessage={errors[index]}
        />
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormComponent;
