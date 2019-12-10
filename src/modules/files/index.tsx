import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

import TableList from "../../components/tablelist";

import { Content } from "../../components/layout/index.style";

const Files: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Content>
      <TableList />
    </Content>
  );
};

export default Files;
