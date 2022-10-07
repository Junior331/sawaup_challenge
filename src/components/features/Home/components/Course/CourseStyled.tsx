import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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
  box-shadow: 1.1px 1.1px 4px ${(props) => props.theme.palette.background.main};
`;
export const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;
export const Title = styled.h2`
  color: ${(props) => props.theme.palette.text.dark};
  font-size: ${(props) => props.theme.typography.fontSizeRegular}rem;
`;
export const Skills = styled.ul`
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-width: 270px;
  padding: 5px 15px;
  align-items: start;
  justify-content: start;
`;
export const Skill = styled.li`
  padding: 5px;
  margin: 0 5px;
  list-style: none;
  border-radius: 3px;
  color: ${(props) => props.theme.palette.text.light};
  background-color: ${(props) => props.theme.palette.text.medium};
  font-size: ${(props) => props.theme.typography.fontSize - 0.4}rem;
`;
export const Text = styled.p`
  margin: 5px 15px;
  text-align: start;
  color: ${(props) => props.theme.palette.text.dark};
  font-size: ${(props) => props.theme.typography.fontSize - 0.4}rem;
`;
export const Iframe = styled.iframe`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 425px;
  line-height: 20px;
  border-radius: 5px;
  ${media.lessThan('medium')`
    width: 95%;
    min-height: 0px;
    max-height: 225px;
  `}
`;
export const Content = styled(ContainerGeneric)`
  width: 100%;
  padding: 5px 15px;
  align-items: center;
  justify-content: space-between;
`;
export const Like = styled(ContainerGeneric)<{ acitve?: boolean }>`
  padding: 0 5px;
  min-width: 70px;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.text.default};
  border: 2px solid ${(props) => props.theme.palette.text.medium};
  font-size: ${(props) => props.theme.typography.fontSize - 0.4}rem;

  p {
    color: ${(props) => props.theme.palette.text.default};
  }

  svg {
    overflow: visible;
  }

  ${(props) =>
    props.acitve &&
    css`
      color: ${props.theme.palette.text.light};
      background-color: ${props.theme.palette.text.medium};
      p {
        color: ${props.theme.palette.text.light};
      }
    `};
`;
