import React from "react";
import { Card, CardText, Navbar, NavbarBrand, Row, Col } from "reactstrap";
import jwtDecode from "jwt-decode";

const Profile = () => {
  let token = localStorage.getItem("token");
  let payload = jwtDecode(token);

  return (
    <div className="container">
      <div className="header">
        <Navbar color="light" light>
          <NavbarBrand>React User Authentication</NavbarBrand>
        </Navbar>
      </div>
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
    </div>
  );
};

export default Profile;
