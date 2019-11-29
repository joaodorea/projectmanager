import React from "react";

import { Content } from "./modules/home/index.style";

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
        <Content />
      </Layout>
    </Theme>
  );
}

export default App;
