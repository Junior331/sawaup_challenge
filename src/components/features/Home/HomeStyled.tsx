import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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
export const Title = styled.h1`
  text-align: center;
  margin: 15px 0 30px;
  color: ${(props) => props.theme.palette.title.default};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular + 100};
  font-size: ${(props) => props.theme.typography.fontSizeBold - 0.3}rem;
`;
export const ContainerCourses = styled(ContainerGeneric)`
  width: 100%;
  padding: 15px;
  overflow: hidden;
  max-height: 100vh;

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

  ${media.lessThan('medium')`
    &:hover {
     overflow: initial;
    }
  `}
`;
export const Courses = styled(ContainerGeneric)``;
export const Course = styled(ContainerGeneric)`
  width: 270px;
  height: 185px;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 3px;
  background-color: transparent;
  box-shadow: 1.1px 1.1px 4px ${(props) => props.theme.palette.background.main};
`;
export const ContentCourses = styled(ContainerGeneric)<{ small?: boolean }>`
  .swiper {
    margin: 0;
    width: 100%;
    height: 540px;
    padding: 10px 0;
    max-width: calc(100vw - 370px);
    .swiper-slide {
      width: 100%;
      height: 100%;
      display: flex;
      min-width: 310px;
      text-align: center;
      background: #fff;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  ${media.lessThan('medium')`
    &:hover {
     overflow: initial;
    }
    .swiper {
      max-width: 100vw;
    }
  `}

  ${(props) =>
    props.small &&
    css`
      max-width: 310px;
    `};
`;
