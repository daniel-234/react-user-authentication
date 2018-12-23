import React from "react";
import { Router } from "@reach/router";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Profile path="/profile" />
    </Router>
  );
};

export default App;
