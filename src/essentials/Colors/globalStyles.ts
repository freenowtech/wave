import { createGlobalStyle } from 'styled-components';

import '@fontsource-variable/roboto-flex/index.css';

import {
    generateBareTierCssVariables,
    generateSemanticTierCssVariables,
    getSemanticValue,
    type TokenObject
} from '../../utils/cssVariables';
import { type SemanticColorsSchema } from './types';

export const createThemeGlobalStyle = (
    bareVariables: TokenObject,
    lightScheme: SemanticColorsSchema,
    darkScheme: SemanticColorsSchema
) => createGlobalStyle`
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
  }

  svg {
      fill: currentColor;
  }
`;
