import React from "react";
import Sidebar from "../src/components/sidebar";

import Theme from "../src/assets/styled/theme";
import Global from "../src/assets/styled/global";

export default {
  title: "Sidebar"
};

export const sidebar = () => (
  <div style={{ width: "350px" }}>
    <Theme>
      <Global />
      <Sidebar />
    </Theme>
  </div>
);
