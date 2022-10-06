import Logo from './logo.svg';

interface IImage<TValue> {
  [id: string]: TValue;
}

const images: IImage<string> = {
  Logo
};

export const getImage = (id: string) => images[id];

export default images;
