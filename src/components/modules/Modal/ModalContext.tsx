import { createContext, ReactElement, useMemo, useState } from 'react';
import { ModalContextType, Props } from './@types';
import Modal from './Modal';

const ModalContext = createContext<ModalContextType>({
  open: false,
  small: false,
  showModal: () => {},
  closeModal: () => {},
  content: null,
  maxWidth: '',
  padding: ''
});

const ModalProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactElement | ReactElement[] | null>(
    null
  );
  const [maxWidth, setMaxWidth] = useState('');
  const [small, setSmall] = useState(false);
  const [padding, setPadding] = useState('');

  const showModal = (
    _content: ReactElement | ReactElement[] | null,
    _maxWidth: string,
    _small: boolean,
    _padding?: string
  ) => {
    setContent(_content);
    setMaxWidth(_maxWidth);
    setSmall(_small);
    setPadding(_padding ?? '');
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setContent(content);
  };

  const value = useMemo(
    () => ({
      open,
      content,
      maxWidth,
      small,
      padding,
      showModal,
      closeModal
    }),
    [open, content, maxWidth, small, padding, showModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
