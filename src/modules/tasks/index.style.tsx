import styled from "../../assets/styled/styled-components";

export const Container = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 2fr;
  margin: 30px;
  grid-column-gap: 30px;
`;
const ContainerItem = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
`;
export const TaskWrapper = styled(ContainerItem)`
  h3 {
    margin-bottom: 20px;
  }
`;
export const Tasklist = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  ${p => p.theme.title};
`;

export const Description = styled(ContainerItem)``;
export const Header = styled.div`
  padding-bottom: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[5]};
  border-bottom: 1px solid ${p => p.theme.color.grays[3]};
`;
export const Top = styled.div`
  margin-bottom: ${p => p.theme.space[5]};
`;
export const Item = styled.div``;

export const Bottom = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
  h4 {
    margin-bottom: ${p => p.theme.space[1]};
  }
`;

export const TitleSecond = styled.h4`
  font-size: ${p => p.theme.fontSize[0]};
  font-weight: ${p => p.theme.fontWeight.bold};
  text-transform: uppercase;
`;

export const Text = styled.p`
  line-height: 1.5;
`;
export const Subtitle = styled.p`
  margin-top: ${p => p.theme.space[1]};
  color: ${p => p.theme.color.grays[9]};
`;
// export const Actions = styled.div``;
export const TaskDesc = styled.div`
  h4 {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;
export const DescTitle = styled.div``;
export const Atachs = styled.div`
  margin-top: ${p => p.theme.space[4]};
`;
export const FileImg = styled.div`
    
`;
export const FileName = styled.div``;
export const FileSize = styled.div``;
export const Discussion = styled.div``;
export const AddComment = styled.div``;
export const Avatar = styled.div``;
export const Input = styled.input``;
export const DisList = styled.div``;
