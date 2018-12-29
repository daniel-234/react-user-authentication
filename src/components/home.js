import React, { Component } from "react";
import Article from "./article";
import Header from "./header";
import authService from "../utils/auth-service";

class Home extends Component {
  state = {
    authenticated: false,
    links: []
  };

  componentDidMount() {
    /*
     * Check if the user is authenticated (i.e. there is a valid token)
     * and fill the array after the component has been mounted.
     */
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
    return (
      <div className="container">
        <Header
          links={this.state.links}
          authenticated={this.state.authenticated}
        />
        <Article />
      </div>
    );
  }
}

export default Home;
