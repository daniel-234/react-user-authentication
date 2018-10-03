import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";

const App = () => {
  return React.createElement("div", { className: "container" }, [
    React.createElement(
      "div",
      { className: "header" },
      "React User Authentication"
    ),
    React.createElement(Article)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
