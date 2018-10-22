import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Article />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
