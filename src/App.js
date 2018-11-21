import React from "react";
import { Router } from "@reach/router";
import Home from "./components/home";
import Login from "./components/login";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
    </Router>
  );
};

export default App;
