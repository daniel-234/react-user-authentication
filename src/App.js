import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";

const App = () => {
  return (
    <div className="container">
      <div className="header">{"React User Authentication"}</div>
      <Article />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
