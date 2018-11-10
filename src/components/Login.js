import React, { Component } from "react";
import Header from "./Header";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import classnames from "classnames";
import authService from "../utils/AuthService";

class Login extends Component {
  state = {
    username: "",
    password: "",
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSignupSubmit = event => {
    // let msg;
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state.username);
    // eslint-disable-next-line no-console
    console.log(this.state.password);
    let { username, password } = this.state;
    if (username && password) {
      // msg = `username: ${username}, password: ${password}`;
      authService()
        .signup(username, password)
        .then(result => {
          // eslint-disable-next-line no-console
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
              <Form onSubmit={this.onSignupSubmit}>
                <FormGroup>
                  <Label for="signin-username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="signin-username"
                    placeholder="username"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="signin-password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="signin-password"
                    placeholder="password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </TabPane>
            <TabPane tabId="2">
              <Form onSubmit={this.onSignupSubmit}>
                <FormGroup>
                  <Label for="signup-username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="signup-username"
                    placeholder="username"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="signup-password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="signup-password"
                    placeholder="password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Login;
