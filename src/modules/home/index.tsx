import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

import Activities from "../../components/activities";

// import { Content } from "../../components/layout/index.style";
import { Content, Column, Card, Title } from "./index.style";

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Content>
      <Column>
        <Card padding>
          <Title>Completed Tasks</Title>
        </Card>
      </Column>
      <Column>
        <Activities />
      </Column>
    </Content>
  );
};

export default Home;
