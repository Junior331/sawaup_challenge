import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const StyledModalBody = styled.div``;
const StyledModal = styled.div<{
  maxWidth?: string;
  padding?: string;
  small?: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: 17px;
  border-radius: 0;
  position: sticky;
  border: 5px solid #ddd;
  color: ${({ theme }) => theme.palette.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizeBold}rem;
  background-color: ${({ theme }) => theme.palette.background.light};
  svg {
    top: -16px;
    right: -15px;
    cursor: pointer;
    position: absolute;
    border-radius: 100%;
    background: ${({ theme }) => theme.palette.text.medium};
  }
  ${(props) => media.greaterThan('medium')`
    width: 100%;
    height: initial;
    border-radius: 10px;
    max-width: ${props.maxWidth};
    padding: ${props.padding ? props.padding : '44px 50px'};
  `}
  ${(props) =>
    props.small &&
    css`
      height: auto;
      display: flex;
      max-height: 98vh;
      border-radius: 12px;
      flex-direction: column;
      background-color: ${({ theme }) => theme.palette.background.light};
    `};
`;

const StyledModalOverlay = styled.div<{ isOpen?: boolean }>`
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  transition: all 1s cubic-bezier(0.7, 0, 0.27, 1);
  top: 100%;
  ${(props) =>
    props.isOpen &&
    css`
      top: 0%;
    `}
`;
const Close = styled.div`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 13px;
`;

const Shadow = styled.div<{ isOpen?: boolean }>`
  top: 100%;
  opacity: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  display: flex;
  position: fixed;
  transition: top 0s linear 0.5s, opacity 0.5s linear;
  ${(props) =>
    props.isOpen &&
    css`
      top: 0%;
      opacity: 1;
      transition: top 0s linear, opacity 0.5s linear;
    `};
`;

export { StyledModalBody, StyledModal, StyledModalOverlay, Close, Shadow };
