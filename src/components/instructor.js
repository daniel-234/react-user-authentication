import React, { Component } from "react";
import Header from "./header";
import authService from "../utils/auth-service";

function getInstructorListItem(instructor) {
  return (
    <li key={instructor._id}>
      <p>{instructor.username}</p>
    </li>
  );
}

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
    authService()
      .getResources("user")
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
            {this.state.instructors.length ? (
              <ul>{instructorList}</ul>
            ) : (
              <p>No instructors in the database yet!</p>
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
