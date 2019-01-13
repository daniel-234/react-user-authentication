import React from "react";
import { Router } from "@reach/router";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
import Instructor from "./components/instructor";
import NewInstructor from "./components/new-instructor";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Profile path="/profile" />
      <Instructor path="/instructor" />
      <NewInstructor path="/instructor/new" />
    </Router>
  );
};

export default App;
