import React, { Component } from "react";
import { navigate } from "@reach/router";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";
import authService from "../utils/auth-service";
import FormComponent from "./form";

class Login extends Component {
  initialState = {
    username: "",
    password: "",
    usernameLoginErrorMessage: "",
    passwordLoginErrorMessage: "",
    activeTab: "1"
  };

  state = this.initialState;

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  /*
   * Update the state with the given error message in the login tab, depending
   * on which string value it has assigned (the server can either return an error 
   * for a wrong password, if the username is registered in the database, or for
   * a username not yet saved).
   */
  updateLoginErrorMessage = message => {
    message === "Wrong password"
      ? this.setState({
          passwordLoginErrorMessage: message
        })
      : this.setState({
          usernameLoginErrorMessage: message
        });
  };

  /*
   * Take a user object with `username` and `password` fields, update 
   * the state of the component and call the API to register the user.
   */
  onSignupSubmit = user => {
    let newState = { ...this.initialState, ...user };
    this.setState(newState);

    let { username, password } = user;
    if (username && password) {
      authService()
        // To sign up a user with admin scope, you will need a little hack here.
        //
        // Uncomment `signupAdmin` and comment `signup`.
        // .signupAdmin(username, password)
        .signup(username, password)
        .then(result => {
          // Call the authorization service utility to finish authentication.
          authService().finishAuthentication(result.token);
          // Navigate programmatically to the Home page.
          navigate("/");
        });
    }
  };

  /*
   * Take a user object with `username` and `password` fields, update
   * the state of the component and call the API to authenticate the user.
   */
  onSigninSubmit = user => {
    // Merge user with initial state. Reset state fields that are not part
    // of user back to their initial state (used to reset error messages).
    let newState = { ...this.initialState, ...user };
    this.setState(newState);

    let { username, password } = user;
    if (username && password) {
      authService()
        .signin(username, password)
        // The signin was successful, so we get back a fulfilled Promise.
        .then(result => {
          // Call the authorization service utility to finish authentication.
          authService().finishAuthentication(result.token);
          // Navigate programmatically to the Home page.
          navigate("/");
        })
        // The signin wasn't successful, so we get back a rejected Promise, with a reason.
        .catch(reason => {
          // Return a (fresh) fulfilled Promise.
          return (
            reason
              // Get the value from the resolution of the new Promise.
              // .then(message => this.receiveUsernameErrorMessage(message))
              .then(message => {
                // Pass message to update the state and show the error message.
                return this.updateLoginErrorMessage(message);
              })
          );
        });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <Navbar color="light" light>
            <NavbarBrand>React User Authentication</NavbarBrand>
          </Navbar>
        </div>
        <div className="content content-light-background">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="tab-content">
            <TabPane tabId="1">
              <FormComponent
                id="signin-form"
                inputs={["username", "password"]}
                errors={[
                  this.state.usernameLoginErrorMessage,
                  this.state.passwordLoginErrorMessage
                ]}
                onSubmit={this.onSigninSubmit}
              />
            </TabPane>
            <TabPane tabId="2">
              <FormComponent
                id="signup-form"
                inputs={["username", "password"]}
                errors={["", ""]}
                onSubmit={this.onSignupSubmit}
              />
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Login;
