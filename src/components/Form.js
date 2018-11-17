import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function FormComponent({ onSubmit }) {
  return (
    <Form
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
      <FormGroup>
        <Label for="form-username">Username</Label>
        <Input
          type="text"
          name="username"
          id="form-username"
          placeholder="username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="form-password">Password</Label>
        <Input
          type="password"
          name="password"
          id="form-password"
          placeholder="password"
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormComponent;
