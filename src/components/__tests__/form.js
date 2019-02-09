/*
 * Written following this testing workshop hosted by Frontend Masters:
 * `https://github.com/kentcdodds/testing-workshop/tree/fem-2018`
 */

import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "react-testing-library";
import Form from "../form";

// Test without using a testing library.
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
      errors={["", ""]}
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

// Test using the testing library `react-testing-library`.
describe("A Signup form", () => {
  // Unmount React trees that were mounted with `render`.
  afterEach(cleanup);

  test("calls onSubmit with username and password when submitted", () => {
    let fakeUser = {
      username: "newguy",
      password: "that-s-new"
    };

    let handleSubmit = jest.fn();

    let { getByLabelText, getByText } = render(
      <Form
        id="signup-form"
        inputs={["username", "password"]}
        errors={["", ""]}
        onSubmit={handleSubmit}
      />
    );

    let usernameNode = getByLabelText("Username");
    let passwordNode = getByLabelText("Password");

    /*
     * Valid alternatives here:

     * let usernameNode = getByPlaceholderText("username"); 
     *                    |-> targets the placeholder attribute value
     * 
     * let passwordNode = getByText("Password");
     *                    |-> targets testNodes having testContent matching the given text
     */

    usernameNode.value = fakeUser.username;
    passwordNode.value = fakeUser.password;

    getByText("Submit").click();

    expect(handleSubmit).toHaveBeenLastCalledWith(fakeUser);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
