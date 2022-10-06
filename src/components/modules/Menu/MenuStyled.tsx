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
export const MenuContainer = styled(ContainerGeneric)<{ active?: boolean }>`
  height: 100%;
  padding: 15px;
  min-width: 300px;
  max-width: 300px;
  box-shadow: 0px 2px 3px ${(props) => props.theme.palette.background.main};
  ${(props) => media.lessThan('medium')`
    z-index: 2;
    left: -100%;
    position: absolute;
    background-color: ${props.theme.palette.background.light};

    ${
      props.active &&
      css`
        left: 0%;
      `
    };
  `}
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
