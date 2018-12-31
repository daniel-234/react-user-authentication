import React from "react";
import { Link } from "@reach/router";
import { Button } from "reactstrap";

const Article = props => {
  let { authenticated, logout } = props;
  return (
    <div className="content">
      <h2>{"Welcome!"}</h2>
      <p>
        {
          "This app is an exercise to demonstrate how to add authentication to a React app."
        }
      </p>
      <div>
        {!authenticated && (
          <Button className="log-button" color="primary" size="lg">
            <Link className="link-reach-router" to="/login">
              Log In
            </Link>
          </Button>
        )}
        {authenticated && (
          <Button className="log-button" color="primary" size="lg">
            <Link className="link-reach-router" to="/" onClick={logout}>
              Log Out
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Article;
