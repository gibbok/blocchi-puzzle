import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px simplification 62.5% of 16px = 10px */
    font-family: 'Oleo Script', cursive;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -o-font-feature-settings: 'salt' 1;
    -ms-font-feature-settings: 'salt' 1;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'salt' 1;
    -webkit-font-feature-settings: 'salt' 1;
    font-feature-settings: 'salt' 1;
    text-rendering: optimizeLegibility;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
  }
`;

export default GlobalStyle;
