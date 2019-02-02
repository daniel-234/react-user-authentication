import React, { Component } from "react";
import { Card, CardText, Row, Col } from "reactstrap";
import Header from "./header";
import jwtDecode from "jwt-decode";
import authService from "../utils/auth-service";

class Profile extends Component {
  state = {
    authenticated: false,
    links: []
  };

  componentDidMount() {
    this.setState({
      authenticated: authService().isAuthenticated(),
      links: [
        {
          text: "Log In",
          navigationLink: "/login",
          authentication: false,
          onClickProp: undefined
        },
        {
          text: "Home",
          navigationLink: "/",
          authentication: true,
          onClickProp: undefined
        },
        {
          text: "Instructors",
          navigationLink: "/instructors",
          authentication: true,
          onClickProp: undefined
        },
        {
          text: "Log Out",
          navigationLink: "/",
          authentication: true,
          onClickProp: this.logout
        }
      ]
    });
  }

  /* 
   * Log out the user, by removing the stored token, and 
   * check if the user is authenticated. 
   */
  logout = () => {
    authService().logout();
    this.setState({
      authenticated: authService().isAuthenticated()
    });
  };

  render() {
    let token = localStorage.getItem("token");
    let payload;
    if (token) {
      payload = jwtDecode(token);
    }

    return (
      <div className="container">
        <Header
          links={this.state.links}
          authenticated={this.state.authenticated}
        />
        {token ? (
          <div className="content content-light-background">
            <h2>Profile</h2>
            <Row>
              <Col sm="3">
                <Card>
                  <CardText>Profile image</CardText>
                </Card>
              </Col>
              <Col sm="9">
                <Card>
                  <h3>{payload.username}</h3>
                  <hr />
                  <h4>Payload</h4>
                  <pre>{JSON.stringify(payload, null, 2)}</pre>
                </Card>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="content">
            <p>{`You don't have permissions to access a profile page.`}</p>
            <p>
              {`Please, head to the Login page to log in or register as a user.`}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
