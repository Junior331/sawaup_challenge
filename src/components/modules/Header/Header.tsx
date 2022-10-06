import images from '../../../assets/imgs';
import * as S from './HeaderStyled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={images.Logo} alt="Logo SawaUp" />
    </S.HeaderContainer>
  );
};

export default Header;
