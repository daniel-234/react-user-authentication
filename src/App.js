import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
    </Router>
  );
};

export default App;
