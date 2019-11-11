import React from "react";

import { Layout } from "./components/layout/index.style";
import Header from "./modules/shared/Header.jsx";
import Sidebar from "./modules/shared/Sidebar.jsx";

import "./assets/scss/index.scss";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Header />
      <h3>Content</h3>
    </Layout>
  );
}

export default App;
