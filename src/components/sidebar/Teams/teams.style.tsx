import styled from "../../../assets/styled/styled-components";

export const Teams = styled.div``;
export const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px ${props => props.theme.sidebarPadding};
  &:hover {
    background-color: ${props => props.theme.color.darkGray};
  }
`;
export const UserAvatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background: ${props => props.src || props.theme.color.primary};
`;
export const Text = styled.p`
  flex: 1;
`;
