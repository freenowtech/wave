import { createGlobalStyle } from 'styled-components';

import { TokenObject } from '../../utils/cssVariables';
import { generateBareCssVariables, generateSemanticCssVariables, getSemanticValue } from './cssVariables';
import { SemanticColorsSchema } from './types';

export const createThemeGlobalStyle = (
    bareVariables: TokenObject,
    lightScheme: SemanticColorsSchema,
    darkScheme: SemanticColorsSchema
) => {
    const bareCssVariables = generateBareCssVariables(bareVariables);
    const semanticCssVariablesForLightTheme = generateSemanticCssVariables(lightScheme);
    const semanticCssVariablesForDarkTheme = generateSemanticCssVariables(darkScheme);

    return createGlobalStyle`
  :root {
    color-scheme: light;
    ${bareCssVariables}
    ${semanticCssVariablesForLightTheme}
  }

  .dark-scheme {
    color-scheme: dark;
    ${semanticCssVariablesForDarkTheme}
  }
  
  .light-scheme {
    color-scheme: light;
    ${semanticCssVariablesForLightTheme}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      ${semanticCssVariablesForDarkTheme}
    }
  }
  
  body, .wave {
    color: ${getSemanticValue('on-surface')};
    background-color: ${getSemanticValue('surface')}
  }
  
  svg {
    fill: currentColor;
  }
`;
};
