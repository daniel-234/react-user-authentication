import React, { Component } from "react";
import { navigate } from "@reach/router";
import Header from "./header";
import InstructorForm from "./instructor-form";
import authService from "../utils/auth-service";

class NewInstructor extends Component {
  state = {
    authenticated: false,
    links: [],
    firstname: "",
    lastname: "",
    company: ""
  };

  componentDidMount() {
    this.setState({
      authenticated: authService().isAuthenticated(),
      links: [
        {
          text: "Instructors",
          navigationLink: "/instructors",
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

  /*
   * Update state with the instructor informations and
   * call the API, passing them as input. 
   * Navigate back to the Instructor page. 
   */
  onAddSubmit = instructor => {
    this.setState({ ...instructor });

    let { firstname, lastname, company } = instructor;
    if (firstname && lastname && company) {
      authService().newInstructorSubmit(firstname, lastname, company);
      navigate("../instructors");
    }
    return undefined;
  };

  render() {
    return (
      <div className="container">
        <Header
          links={this.state.links}
          authenticated={this.state.authenticated}
        />
        {this.state.authenticated ? (
          <div className="content content-light-background">
            <h2>Add new instructor</h2>
            <hr />
            <InstructorForm
              id="instructor-form"
              inputs={["firstname", "lastname", "company"]}
              onSubmit={this.onAddSubmit}
            />
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

export default NewInstructor;
