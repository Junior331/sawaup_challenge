import images from '../../../assets/imgs';
import { useContentUser } from '../../features/Home/userContent';
import * as S from './HeaderStyled';

const Header = () => {
  const { setUserContent, userContent } = useContentUser();

  return (
    <S.HeaderContainer>
      <S.Logo src={images.Logo} alt="Logo SawaUp" />
      <S.Menu
        onClick={() =>
          setUserContent({
            ...userContent,
            showMenu: !userContent.showMenu
          })
        }
      >
        <S.Line />
        <S.Line />
        <S.Line />
      </S.Menu>
    </S.HeaderContainer>
  );
};

export default Header;
