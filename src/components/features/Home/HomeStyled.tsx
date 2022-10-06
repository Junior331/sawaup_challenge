import styled, { css } from 'styled-components';

export const ContainerGeneric = styled.div<{ column?: boolean }>`
  display: flex;
  align-items: start;
  justify-content: start;

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;
export const HomeContainer = styled(ContainerGeneric)`
  width: 100%;
  height: 100vh;
`;
export const ContainerSkills = styled(ContainerGeneric)`
  height: 100%;
  padding: 15px;
  min-width: 300px;
  max-width: 300px;
  box-shadow: 0px 2px 3px #0a44fa;
`;
export const Title = styled.h1`
  text-align: center;
  margin: 15px 0 30px;
  color: ${(props) => props.theme.palette.title.default};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular + 100};
  font-size: ${(props) => props.theme.typography.fontSizeBold - 0.3}rem;
`;
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;
export const CheckBox = styled.input`
  display: none;
`;
export const Text = styled.p<{ color?: string; link?: boolean }>`
  color: ${(props) =>
    props.color ? props.color : props.theme.palette.text.light};

  ${(props) =>
    props.link &&
    css`
      width: 76%;
      border: none;
      display: flex;
      overflow: hidden;
      position: relative;
      align-items: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      justify-content: space-between;
    `};
`;

export const ContainerCourses = styled(ContainerGeneric)`
  width: 100%;
  padding: 15px;
  overflow-y: hidden;
  max-height: 100vh;
  .swiper {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    max-width: calc(100vw - 370px);
  }
  .swiper-slide {
    display: flex;
    text-align: center;
    background: #fff;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #dedede;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #c4c4c4;
  }

  &:hover {
    overflow-y: auto;
  }
`;
export const Courses = styled(ContainerGeneric)``;
export const Course = styled(ContainerGeneric)`
  width: 270px;
  height: 185px;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 3px;
  background-color: transparent;
  box-shadow: 1.1px 1.1px 4px #0a44fa80;
`;
export const Label = styled.label<{ selected?: boolean }>`
  border: none;
  width: 110px;
  cursor: pointer;
  padding: 10px 0;
  border: 1px solid;
  text-align: center;
  border-radius: 10px;
  margin: 0 5px 5px 0;
  text-transform: capitalize;
  background-color: transparent;
  color: ${(props) => props.theme.palette.text.default};
  font-size: ${(props) => props.theme.typography.fontSize - 0.1}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular + 100};
  ${(props) =>
    props.selected &&
    css`
      transition: opacity 0.2s ease-out;
      color: ${props.theme.palette.text.light};
      background-color: ${props.theme.palette.background.main};
    `};
`;

export const Item = styled(ContainerGeneric)``;
export const ContentCourses = styled(ContainerGeneric)``;
