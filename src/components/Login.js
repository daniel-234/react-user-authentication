import React, { Component } from "react";
import Header from "./header";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import authService from "../utils/authService";
import FormComponent from "./form";

class Login extends Component {
  initialState = {
    username: "",
    password: "",
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
   * Take a user object with `username` and `password` fields,
   * update the state of the component and call the API to register
   * the user.
   */
  onSignupSubmit = user => {
    let newState = { ...this.initialState, ...user };
    this.setState(newState);

    let { username, password } = user;
    if (username && password) {
      authService()
        .signup(username, password)
        .then(result => {
          // TODO
          // Delete console log later.
          console.log(result.token);
          authService().finishAuthentication(result.token);
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="content content-login">
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
                onSubmit={this.onSignupSubmit}
              />
            </TabPane>
            <TabPane tabId="2">
              <FormComponent
                id="signup-form"
                inputs={["username", "password"]}
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
