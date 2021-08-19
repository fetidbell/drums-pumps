import { createGlobalStyle } from 'styled-components';

export const CommonStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    position: relative;
    margin: 0;
    min-width: 320px;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
`;
