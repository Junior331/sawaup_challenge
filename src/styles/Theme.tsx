import { DefaultTheme } from 'styled-components';
const Theme: DefaultTheme = {
  palette: {
    text: {
      light: '#fff',
      dark: '#202020',
      medium: '#6c8ffc',
      default: '#0a44fa'
    },
    title: {
      default: '#202020'
    },

    background: {
      light: '#FFF',
      main: '#0a44fa'
    }
  },
  typography: {
    htmlFontSize: '10px',
    fontFamily: 'Inter',
    fontSize: 1.6,
    fontSizeRegular: 2.2,
    fontSizeBold: 3.5,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
};

export default Theme;
