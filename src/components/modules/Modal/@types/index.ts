import { ReactElement } from 'react';

export type ShowModalFunction = (
  content: ReactElement | ReactElement[],
  maxWidth: string,
  small: boolean,
  padding?: string
) => void;

export type ModalContextType = {
  open: boolean;
  showModal: ShowModalFunction;
  closeModal: () => void;
  content: ReactElement | ReactElement[] | null;
  maxWidth: string;
  small: boolean;
  padding: string;
};

export type Props = {
  children: ReactElement | ReactElement[];
};
