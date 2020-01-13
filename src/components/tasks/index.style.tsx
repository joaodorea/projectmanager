import styled from "../../assets/styled/styled-components";

interface IContainer {
  padding?: boolean;
}
interface ICheckBox {
  checked?: boolean;
}
interface IAvatar {
  // size: string;
  circle?: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${p => p.theme.CardContainer}

  & > * {
    flex: 1;
  }
`;

export const Title = styled.h3`
  ${p => p.theme.title};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const NewTask = styled.button`
  ${p => p.theme.BtnMd};
  float: right;
`;

export const TaskItem = styled.div`
  position: relative;
  background-color: ${p => p.theme.color.grays[2]};
  padding: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[7]};
  border-radius: ${p => p.theme.BtnRadius[2]};
  margin-bottom: ${p => p.theme.space[2]};
`;
export const Description = styled.h4`
  font-size: ${p => p.theme.fontSize[1]};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.space[1]};
`;
export const Owner = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img<IAvatar>`
  ${p => p.theme.avatar};
  margin-right: 5px;
  width: 15px;
  height: 15px;
`;
export const Category = styled.span`
  ${p => p.theme.BtnCellSm};
`;
export const CheckBox = styled.div<ICheckBox>`
  position: absolute;
  border-radius: 4px;
  background-color: #fafafa;
  width: 20px;
  height: 20px;
  left: 13px;

  &:before {
    content: ${p => (p.checked ? "'\f00c'" : "")};
    position: relative;
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    font-size: 0.8rem;
    color: ${p => p.theme.color.grays[4]};
    top: 3px;
    left: 4px;
  }
`;
