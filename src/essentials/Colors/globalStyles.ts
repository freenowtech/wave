import { createGlobalStyle } from 'styled-components';
import {
    Colors as ClassicBrandColors,
    SemanticColors as ClassicSemanticColors,
    SemanticColorsDarkSchema as ClassicDarkSemanticColors
} from './Colors';
import { Colors as ModernBrandColors, SemanticColors as ModernSemanticColors } from './RedesignedColors';
import { generateBareTierCssVariables, generateSemanticTierCssVariables } from '../../utils/cssVariables';

export const ClassicColors = createGlobalStyle`
  :root {
    color-scheme: dark light;
    ${generateBareTierCssVariables(ClassicBrandColors)}
    ${generateSemanticTierCssVariables(ClassicSemanticColors)}
    
    :root .dark-theme {
      ${generateSemanticTierCssVariables(ClassicDarkSemanticColors)}
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${generateSemanticTierCssVariables(ClassicDarkSemanticColors)}
    }

    :root .light-theme {
      ${generateBareTierCssVariables(ClassicBrandColors)}
      ${generateSemanticTierCssVariables(ClassicSemanticColors)}
    }
  }
`;

export const ModernColors = createGlobalStyle`
  :root {
    ${generateBareTierCssVariables(ModernBrandColors)}
    ${generateSemanticTierCssVariables(ModernSemanticColors)}
  }
`;
