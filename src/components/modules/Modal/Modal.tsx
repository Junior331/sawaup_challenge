import * as S from './ModalStyled';
import { useModal } from './useModal';

const Modal = () => {
  const { open, closeModal, content, maxWidth, small, padding } = useModal();
  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      <S.Shadow isOpen={open} />
      <S.StyledModalOverlay isOpen={open} onClick={() => handleClose()}>
        <S.StyledModal
          small={small}
          padding={padding}
          maxWidth={maxWidth}
          onClick={(e) => e.stopPropagation()}
        >
          <S.Close onClick={handleClose} />
          <S.StyledModalBody>{content}</S.StyledModalBody>
        </S.StyledModal>
      </S.StyledModalOverlay>
    </>
  );
};

export default Modal;
