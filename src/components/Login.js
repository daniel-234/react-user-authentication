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

class Login extends Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
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
          <TabContent className="tab-content">
            <TabPane>
              <Form>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
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
