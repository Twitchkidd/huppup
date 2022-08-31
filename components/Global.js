import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Global = createGlobalStyle`
  ${normalize};
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    background: gray;
  }
`;

export default Global;
