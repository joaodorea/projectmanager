import React from "react";

import { Layout } from "./components/layout/index.style";
import Header from "./components/header/";
import Sidebar from "./components/sidebar/";
import Router from "./router";

import Theme from "./assets/styled/component";

function App() {
  return (
    <Theme>
      <Layout>
        <Sidebar />
        <Header />
        <Router />
      </Layout>
    </Theme>
  );
}

export default App;
