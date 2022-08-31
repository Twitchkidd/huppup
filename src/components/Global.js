import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { above } from 'utils/breakpoints.js';

const Global = createGlobalStyle`
  ${normalize};
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  :root {
    --purple-100: #E1E5FB;
    --purple-300: #B2BBEE;
    --purple-500: #8794DB;
    --purple-700: #6170C2;
    --purple-900: #4252A7;
    --purple: var(--purple-500);

    --blue-100: #DEF2FA;
    --blue-300: #ABD9EA;
    --blue-500: #7BBBD4;
    --blue-700: #539BB6;
    --blue-900: #347D99;
    --blue: var(--blue-500);

    --green-100: #DDFBE9;
    --green-300: #ABF0C5;
    --green-500: #7EDFA2;
    --green-700: #56CA81;
    --green-900: #36B164;
    --green: var(--green-500);

    --pink-100: #FDDFEC;
    --pink-300: #F7B1CE;
    --pink-500: #EE86B2;
    --pink-700: #E26197;
    --pink-900: #D0407D;
    --pink: var(--pink-500);

    --brown-500: #D4BAA3;
    --brown-600: #AB8D73;
    --brown-700: #856950;
    --brown-800: #67492F;
    --brown-900: #543419;
    --brown: var(--brown-500);

    --gray-100: #FEFEFE;
    --gray-200: #E6E7EB;
    --gray-300: #CCCED3;
    --gray-500: #A1A0A0;
    --gray-700: #625A5D;
    --gray-800: #28282F;
    --gray-900: #14141D;
    --gray: var(--gray-500);

    --serif: 'Nanum Pen', serif;
    --sans: 'Arvo', sans-serif;
    --display: 'Assisstant', serif;

    --fs-x-large: 5rem;
    --fs-large: 2rem;
    --fs-medium: 1.25rem;
    --fs-small: 1rem;

    ${above.med`
      --fs-x-large: 7rem;
      --fs-large: 3rem;
      --fs-medium: 1.5rem;
      --fs-small: 1.25rem;
    `}
  }

  @font-face {
    font-family: 'Nanum Pen';
    src: url('/fonts/NanumPenScript-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Arvo';
    src: url('/fonts/Arvo-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Assisstant';
    src: url('/fonts/Assistant-VariableFont_wght.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

export default Global;
