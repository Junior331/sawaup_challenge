import styled from 'styled-components';

const ContainerGeneric = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
`;
export const CourseContainer = styled(ContainerGeneric)`
  width: 100%;
  height: auto;
  border-radius: 3px;
  flex-direction: column;
  background-color: transparent;
  box-shadow: 1.1px 1.1px 4px #0a44fa80;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Title = styled.h2`
  margin: 5px;
  color: ${(props) => props.theme.palette.text.dark};
  font-size: ${(props) => props.theme.typography.fontSizeRegular}rem;
`;
export const Skills = styled.ul`
  display: flex;
  overflow: hidden;
  max-width: 270px;
  align-items: start;
  justify-content: start;
`;
export const Skill = styled.li`
  margin: 0 5px;
  list-style: none;
  color: ${(props) => props.theme.palette.text.medium};
  font-size: ${(props) => props.theme.typography.fontSize - 0.4}rem;
`;
export const Text = styled.p`
  margin: 5px;
  text-align: start;
  color: ${(props) => props.theme.palette.text.dark};
  font-size: ${(props) => props.theme.typography.fontSize - 0.4}rem;
`;
