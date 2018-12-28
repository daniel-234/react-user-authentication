import React, { Component } from "react";
import Article from "./article";
import Header from "./header";
import authService from "../utils/auth-service";

class Home extends Component {
  state = {
    authenticated: false,
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
        onClickProp: () => authService().logout()
      }
    ]
  };

  componentDidMount() {
    this.setState({
      authenticated: authService().isAuthenticated()
    });
  }

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
