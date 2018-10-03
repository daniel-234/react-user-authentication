import React from "react";

const Article = () => {
  return React.createElement("div", { className: "content" }, [
    React.createElement("h1", {}, "Welcome!"),
    React.createElement(
      "p",
      {},
      "This app is an exercise to demonstrate how to add authentication to a React app."
    )
  ]);
};

export default Article;
