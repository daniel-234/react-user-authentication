import React, { Component } from "react";
import Header from "./header";
import InstructorForm from "./instructor-form";
import authService from "../utils/auth-service";

class NewInstructor extends Component {
  state = {
    authenticated: false,
    links: []
  };

  componentDidMount() {
    this.setState({
      authenticated: authService().isAuthenticated(),
      links: [
        {
          text: "Instructors",
          navigationLink: "/instructor",
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

  onAddSubmit = () => {
    return undefined;
  };

  render() {
    return (
      <div className="container">
        <Header
          links={this.state.links}
          authenticated={this.state.authenticated}
        />
        <div className="content content-light-background">
          <h2>Add new instructor</h2>
          <hr />
          <InstructorForm
            id="signin-form"
            inputs={["first name", "last name", "email", "password"]}
            onSubmit={this.onAddSubmit}
          />
        </div>
      </div>
    );
  }
}

export default NewInstructor;
