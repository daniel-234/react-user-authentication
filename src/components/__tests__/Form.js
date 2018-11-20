/*
 * Written following this testing workshop hosted by Frontend Masters:
 * `https://github.com/kentcdodds/testing-workshop/tree/fem-2018`
 */

import React from "react";
import ReactDOM from "react-dom";
import Form from "../Form";

test("calls onSubmit with username and password when submitted", () => {
  // Create a fake user.
  let fakeUser = { username: "hulk", password: "big-green-guy" };
  // Mock the implementation of `handleSubmit` by passing a Jest mock function
  // (with an empty implementation).
  let handleSubmit = jest.fn();
  // Create a `div` container.
  let container = document.createElement("div");
  // Render the Form component inside it.
  ReactDOM.render(
    <Form
      id="signin-form"
      inputs={["username", "password"]}
      onSubmit={handleSubmit}
    />,
    container
  );

  // Select all the inputs inside the form.
  let inputs = container.querySelectorAll("input");
  // Get the node elements we will be working with.
  let usernameNode = inputs[0];
  let passwordNode = inputs[1];
  // Select the form and the button.
  let formNode = container.querySelector("form");
  let submitButtonNode = container.querySelector("button");

  // Assign values to the input fields.
  usernameNode.value = fakeUser.username;
  passwordNode.value = fakeUser.password;

  // Create an event.
  let event = new window.Event("submit");
  // Dispatches the previously created event at the form.
  formNode.dispatchEvent(event);

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
  expect(submitButtonNode.type).toBe("submit");
});
