import React, { Component } from "react";
import Header from "./header";
import authService from "../utils/auth-service";

class Instructor extends Component {
  state = {
    instructors: [],
    authenticated: false,
    links: []
  };

  componentDidMount() {
    this.setState({
      authenticated: authService().isAuthenticated(),
      links: [
        {
          text: "Home",
          navigationLink: "/",
          authentication: true,
          onClickProp: undefined
        },
        {
          text: "Profile",
          navigationLink: "/profile",
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

    return (
      <div className="container">
        <Header
          links={this.state.links}
          authenticated={this.state.authenticated}
        />
        {token ? (
          <div className="content content-light-background">
            <h2>Instructors</h2>
          </div>
        ) : (
          <div className="content">
            <p
            >{`You don't have permissions to access the instructors page.`}</p>
            <p>
              {`Please, check with the administrator to get an "admin" priviledge access.`}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Instructor;
