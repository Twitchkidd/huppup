import { createGlobalStyle } from 'styled-components';
import { above } from 'utils/breakpoints.js';

const Global = createGlobalStyle`
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

    /* @link https://utopia.fyi/type/calculator?c=320,21,1.414,1140,24,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

    --fs--200: clamp(0.66rem, calc(0.62rem + 0.18vw), 0.75rem);
    --fs--100: clamp(0.93rem, calc(0.88rem + 0.26vw), 1.06rem);
    --fs-000: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem);
    --fs-100: clamp(1.86rem, calc(1.75rem + 0.52vw), 2.12rem);
    --fs-200: clamp(2.62rem, calc(2.48rem + 0.73vw), 3.00rem);
    --fs-300: clamp(3.71rem, calc(3.50rem + 1.03vw), 4.24rem);
    --fs-400: clamp(5.25rem, calc(4.95rem + 1.46vw), 6.00rem);
    --fs-500: clamp(7.42rem, calc(7.01rem + 2.07vw), 8.48rem);
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
  
  html {
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  /* https://csswizardry.com/2012/06/single-direction-margin-declarations/ */
  h1,h2,h3,h4,h5,h6,hgroup,
  ul,ol,dd,
  p,figure,
  pre,table,fieldset,hr {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: var(--fs-500);
  }

  h2 {
    font-size: var(--fs-400);
  }

  h3 {
    font-size: var(--fs-300);
  }

  h4 {
    font-size: var(--fs-200);
  }

  h5 {
    font-size: var(--fs-100);
  }

  h6 {
    font-size: var(--fs-000);
  }

  h1, h2, h3 {
    font-family: var(--serif);
  }
  
  h4, h5, h6 {
    font-family: var(--display);
  }

  p, span, li {
    font-family: var(--sans);
    font-size: var(--fs-000);
    /* https://www.aleksandrhovhannisyan.com/blog/dont-use-a-fixed-line-height/#solution-2-use-the-ex-unit */
    line-height: calc(4px + 3ex);
  }
`;

export default Global;
