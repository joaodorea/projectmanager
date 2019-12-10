import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

import Activities from "../../components/activities";

import { Content } from "./index.style";

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Content>
      <Activities />
    </Content>
  );
};

export default Home;
