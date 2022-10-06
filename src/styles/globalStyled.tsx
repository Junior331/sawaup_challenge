import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body{
    min-height: 100vh;
    scroll-behavior: smooth;
    font-size:${(props) => props.theme.typography.htmlFontSize};
  }

  body {
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily},sans-serif;
  }

  #chat-widget-container{
    display: none !important;
  }

  .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

`;
