import React from "react";

// import TableList from "../components/tablelist";
import Activities from "../../components/activities";

// import { Content } from "../../components/layout/index.style";
import { Content, Column, Card, Title } from "./index.style";

export default function home() {
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
}
