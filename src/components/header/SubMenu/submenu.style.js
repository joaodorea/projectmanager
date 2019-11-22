import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${p => p.theme.PS};
  margin-left: -15px;
`;

export const Item = styled.span`
  position: relative;
  bottom: -2px;
  padding: 15px;
  color: ${p => (p.active ? p.theme.color.grays[9] : p.theme.color.grays[7])};
  font-size: ${p => p.theme.fontSize.sm};
  cursor: pointer;
  font-weight: 600;
  border-bottom: ${p => (p.active ? "2px solid " + p.theme.primary : "")};
`;
