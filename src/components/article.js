import React from "react";
import { Button } from "reactstrap";

const Article = () => {
  return (
    <div className="content">
      <h2>{"Welcome!"}</h2>
      <p>
        {
          "This app is an exercise to demonstrate how to add authentication to a React app."
        }
      </p>
      <div>
        <Button className="log-button" color="primary" size="lg">
          Log In
        </Button>
        <Button className="log-button" color="primary" size="lg">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Article;
