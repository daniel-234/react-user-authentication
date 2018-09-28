const Article = () => {
  return React.createElement("div", {className: "content"}, [
    React.createElement("h1", {}, "Welcome!"),
    React.createElement("p", {}, "This app is an exercise to demonstrate how to add authentication to a React app.")
  ]);
};

const App = () => {
  return React.createElement(
    "div", {className: "container"},
    [
      React.createElement("div", {className: "header"}, "React User Authentication"),
      React.createElement(Article)
    ]    
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));