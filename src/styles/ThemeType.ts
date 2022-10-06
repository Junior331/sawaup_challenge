import 'styled-components';
import { IColor, IText, ITitle, ITypography } from './interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: IText;
      title: ITitle;
      background: IColor;
    };
    typography: ITypography;
  }
}
