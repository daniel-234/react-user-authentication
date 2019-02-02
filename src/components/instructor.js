import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import Header from "./header";
import authService from "../utils/auth-service";

function getInstructorListItem(instructor) {
  return (
    <li key={instructor._id}>
      <p className="list-text">{`${instructor.firstname} ${
        instructor.lastname
      }`}</p>
      <p>{`COMPANY:  ${instructor.company}`}</p>
      <br />
    </li>
  );
}

class Instructor extends Component {
  state = {
    instructors: [],
    authenticated: false,
    isAdmin: false,
    links: []
  };

  componentDidMount() {
    this.setState({
      authenticated: authService().isAuthenticated(),
      isAdmin: authService().getUserScope() === "admin",
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
    authService()
      .getResources("instructors")
      .then(data => this.setState({ instructors: data }));
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

  onAddInstructor = () => {
    /*
     * Navigate programmatically to a new page with a special form
     * to add an instructor.
     */
    navigate("/instructors/new");
  };

  render() {
    let instructorList;
    if (this.state.instructors) {
      instructorList = this.state.instructors.map(function(instructor) {
        return getInstructorListItem(instructor);
      });
    }

    return (
      <div className="container">
        <Header
          links={this.state.links}
          authenticated={this.state.authenticated}
        />
        {this.state.authenticated ? (
          <div className="content content-light-background">
            <h2>Instructors</h2>
            <hr />
            {this.state.isAdmin && (
              <Button color="primary" size="sm" onClick={this.onAddInstructor}>
                Add Instructor
              </Button>
            )}
            {this.state.instructors.length ? (
              <ul className="instructor-list">{instructorList}</ul>
            ) : (
              <>
                <hr />
                <p>No instructors in the database yet!</p>
              </>
            )}
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
