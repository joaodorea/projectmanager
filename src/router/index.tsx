import React from "react";
import { Router } from "@reach/router";

import Home from "../modules/home";
import Files from "../modules/files";
import Activity from "../modules/activity";

const RouterComponent = () => {
  return (
    <Router>
      <Home path="/" />
      <Files path="/files" />
      <Activity path="/activity" />
    </Router>
  );
};

export default RouterComponent;
