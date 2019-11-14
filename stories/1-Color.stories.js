import React from "react";
import styled from "styled-components";

import Theme from "../src/assets/styled/theme";
import Global from "../src/assets/styled/global";

export default {
  title: "Colors"
};

const Color = styled.div`
  margin: 15px;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  box-shadow: 1px 2px 2px #cccccc;
  background-color: ${props => props.theme["color_" + props.color] || "white"};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const list = () => (
  <Theme>
    <Global />
    <Wrapper>
      <Color color="yellow" />
      <Color color="gray" />
      <Color color="darkGray" />
    </Wrapper>
  </Theme>
);
