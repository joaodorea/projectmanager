import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

import Activities from "../../components/activities";
import TaskList from "../../components/tasks";
// import Notification from "../../components/notification";
import statGraphic from "../../assets/imgs/home_stat.png";

// import { Content } from "../../components/layout/index.style";
import { Content, Column, Card, Title, HighlightedNumber } from "./index.style";

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Content>
      <Column>
        {/* <Notification /> */}
        <Card padding>
          <Title>Completed Tasks</Title>
          <HighlightedNumber>372</HighlightedNumber>
          <img src={statGraphic} alt="Completed tasks" />
        </Card>
        <Card half="left" padding>
          <Title>Working Rate</Title>
        </Card>
        <Card half="right" padding>
          <Title>Performance</Title>
        </Card>
        <TaskList title="Today Tasks" />
      </Column>
      <Column>
        <Activities />
      </Column>
    </Content>
  );
};

export default Home;
