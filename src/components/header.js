import React, { Component } from "react";
import { Link } from "@reach/router";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import authService from "../utils/auth-service";

class Header extends Component {
  logout = () => {
    authService().logout();
  };

  render() {
    return (
      <div className="header">
        <Navbar color="light" light>
          <NavbarBrand>React User Authentication</NavbarBrand>
          <Nav>
            {!authService().isAuthenticated() && (
              <NavItem>
                <Link
                  className="link-reach-router navbar-link-text"
                  to="/login"
                >
                  Log In
                </Link>
              </NavItem>
            )}
            {authService().isAuthenticated() && (
              <>
                <NavItem>
                  <Link
                    className="link-reach-router navbar-link-text"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="link-reach-router navbar-link-text"
                    to="/"
                    onClick={this.logout}
                  >
                    Log Out
                  </Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
