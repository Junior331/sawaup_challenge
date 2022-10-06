import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -0.5px 3px ${(props) => props.theme.palette.background.main};
`;
export const Logo = styled.img`
  width: auto;
`;

export const Menu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  ${media.lessThan('medium')`
    display: flex;
  `}
`;
export const Line = styled.p`
  width: 3rem;
  display: block;
  height: 0.4rem;
  margin: 0.26em 0px;
  transition: all 0.4s ease 0s;
  background-color: ${(props) => props.theme.palette.background.main};
`;
