import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

import Activities from "../../components/activities";

import { Container } from "./index.style";

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Container>
      <Activities />
    </Container>
  );
};

export default Home;
