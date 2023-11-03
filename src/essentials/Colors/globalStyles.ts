import { createGlobalStyle } from 'styled-components';
import {
    Colors as ClassicBrandColors,
    SemanticColors as ClassicSemanticColors,
    SemanticColorsDarkSchema as ClassicSemanticColorsDark
} from './Colors';
import {
    Colors as ModernBrandColors,
    SemanticColors as ModernSemanticColors,
    SemanticColorsDarkSchema as ModernSemanticColorsDark
} from './RedesignedColors';
import {
    generateBareTierCssVariables,
    generateSemanticTierCssVariables,
    getSemanticValue,
    TokenObject
} from '../../utils/cssVariables';
import { SemanticColorsSchema } from './types';

const createThemeGlobalStyle = (
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
    ${generateSemanticTierCssVariables(darkScheme)}
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

export const ClassicColors = createThemeGlobalStyle(
    ClassicBrandColors,
    ClassicSemanticColors,
    ClassicSemanticColorsDark
);

export const ModernColors = createThemeGlobalStyle(ModernBrandColors, ModernSemanticColors, ModernSemanticColorsDark);
