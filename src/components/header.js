import React, { Component } from "react";
import { Link } from "@reach/router";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar color="light" light>
          <NavbarBrand>React User Authentication</NavbarBrand>
          <Nav>
            {this.props.links
              .filter(link => link.authentication === this.props.authenticated)
              .map((link, index) => (
                <NavItem key={index}>
                  <Link
                    className="link-reach-router navbar-link-text"
                    to={link.navigationLink}
                    onClick={link.onClickProp}
                  >
                    {`${link.text}`}
                  </Link>
                </NavItem>
              ))}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
