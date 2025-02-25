import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';

import {
    generateBareTierCssVariables,
    generateSemanticTierCssVariables,
    getSemanticValue,
    TokenObject
} from '../../utils/cssVariables';
import { SemanticColorsSchema } from './types';

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
    background-color: ${getSemanticValue('background-page-default')}
  }
  
  svg {
      fill: currentColor;
  }
`;
