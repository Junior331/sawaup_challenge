import { ReactNode } from 'react';
import { GlobalStyles } from '../../../styles/globalStyled';
import { Header } from '../Header';
import * as S from './LayoutStyled';
interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <Header />
      <S.LayoutContent>{children}</S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
