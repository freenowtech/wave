import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';

import {
    generateBareTierCssVariables,
    generateSemanticTierCssVariables,
    getSemanticValue,
    TokenObject
} from '../../utils/cssVariables';
import { SemanticColorsSchema } from './types';

if (process.env.NODE_ENV !== 'test') {
    import('../fonts/fonts');
}

export const createThemeGlobalStyle = (
    bareVariables: TokenObject,
    lightScheme: SemanticColorsSchema,
    darkScheme: SemanticColorsSchema
): GlobalStyleComponent<Record<string, unknown>, DefaultTheme> => createGlobalStyle`
  :root {
    color-scheme: light;
    ${generateBareTierCssVariables(bareVariables)}
    ${generateSemanticTierCssVariables(lightScheme)}
  }

  .dark-scheme {
    color-scheme: dark;
    ${generateSemanticTierCssVariables(darkScheme)}
  }

  .light-scheme {
    color-scheme: light;
    ${generateSemanticTierCssVariables(lightScheme)}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      ${generateSemanticTierCssVariables(darkScheme)}
    }
  }

  body, .wave {
    color: ${getSemanticValue('foreground-primary')};
    background-color: ${getSemanticValue('background-page-default')};
    font-family: "Roboto Flex Variable", system-ui, sans-serif;
    font-style: normal;
    font-variation-settings:
      "GRAD" 0,
      "XOPQ" 100,
      "XTRA" 506,
      "YOPQ" 85,
      "YTAS" 730,
      "YTDE" -203,
      "YTFI" 738,
      "YTLC" 550,
      "YTUC" 712;

      /* roboto-flex-latin-wght-normal */
    @font-face {
      font-family: "Roboto Flex Variable";
      font-style: oblique 0deg 10deg;
      font-display: swap;
      font-weight: 100 1000;
      font-stretch: 25% 151%;
      src: url(@fontsource-variable/roboto-flex/files/roboto-flex-latin-full-normal.woff2)
        format("woff2-variations");
      unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }

    /* roboto-flex-cyrillic-wght-normal */
    @font-face {
      font-family: "Roboto Flex Variable";
      font-style: oblique 0deg 10deg;
      font-display: swap;
      font-weight: 100 1000;
      font-stretch: 25% 151%;
      src: url(@fontsource-variable/roboto-flex/files/roboto-flex-cyrillic-full-normal.woff2)
        format("woff2-variations");
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* roboto-flex-cyrillic-ext-wght-normal */
    @font-face {
      font-family: "Roboto Flex Variable";
      font-style: oblique 0deg 10deg;
      font-display: swap;
      font-weight: 100 1000;
      font-stretch: 25% 151%;
      src: url(@fontsource-variable/roboto-flex/files/roboto-flex-cyrillic-ext-full-normal.woff2)
        format("woff2-variations");
      unicode-range:
        U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    /* roboto-flex-greek-wght-normal */
    @font-face {
      font-family: "Roboto Flex Variable";
      font-style: oblique 0deg 10deg;
      font-display: swap;
      font-weight: 100 1000;
      font-stretch: 25% 151%;
      src: url(@fontsource-variable/roboto-flex/files/roboto-flex-greek-full-normal.woff2)
        format("woff2-variations");
      unicode-range:
        U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }

    /* roboto-flex-latin-ext-wght-normal */
    @font-face {
      font-family: "Roboto Flex Variable";
      font-style: oblique 0deg 10deg;
      font-display: swap;
      font-weight: 100 1000;
      font-stretch: 25% 151%;
      src: url(@fontsource-variable/roboto-flex/files/roboto-flex-latin-ext-full-normal.woff2)
        format("woff2-variations");
      unicode-range:
        U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304,
        U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
  }

  svg {
      fill: currentColor;
  }
`;
