import React from "react";
import { Router } from "@reach/router";

import Home from "../modules/home";
import Files from "../modules/files";
import Activity from "../modules/activity";
import Kanban from "../modules/kanban";
import Tasks from "../modules/tasks";

const RouterComponent = () => {
  return (
    <Router>
      <Home path="/" />
      <Files path="/files" />
      <Activity path="/activity" />
      <Kanban path="/kanban" />
      <Tasks path="/tasks" />
    </Router>
  );
};

export default RouterComponent;
