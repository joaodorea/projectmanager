import React from "react";

import Activity from "./modules/activity/index";
// import Files from "./modules/files/index";
// import Home from "./modules/home/index";

import { Layout } from "./components/layout/index.style";
import Header from "./components/header/";
import Sidebar from "./components/sidebar/";

import Theme from "./assets/styled/component";

function App() {
  return (
    <Theme>
      <Layout>
        <Sidebar />
        <Header />
        <Activity />
      </Layout>
    </Theme>
  );
}

export default App;
