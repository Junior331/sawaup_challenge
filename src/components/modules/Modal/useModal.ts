import { useContext } from 'react';
import { ModalContext } from './ModalContext';

function useModal() {
  const { open, small, closeModal, showModal, content, maxWidth, padding } =
    useContext(ModalContext);

  return {
    open,
    small,
    closeModal,
    showModal,
    content,
    maxWidth,
    padding
  };
}

export { useModal };
