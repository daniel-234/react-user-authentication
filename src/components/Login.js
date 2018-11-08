// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Header from "./Header";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content content-login">
          <Nav tabs>
            <NavItem>
              <NavLink>Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Sign Up</NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane>
              <Row>
                <Col>
                  <h4>Log In content</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Login;
