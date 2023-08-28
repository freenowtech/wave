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
import { generateBareTierCssVariables, generateSemanticTierCssVariables } from '../../utils/cssVariables';

export const ClassicColors = createGlobalStyle`
  :root {
    color-scheme: light;
    ${generateBareTierCssVariables(ClassicBrandColors)}
    ${generateSemanticTierCssVariables(ClassicSemanticColors)}

  }

  .dark-theme {
    color-scheme: dark;
    ${generateSemanticTierCssVariables(ClassicSemanticColorsDark)}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      ${generateSemanticTierCssVariables(ClassicSemanticColorsDark)}
    }

    .light-theme {
      color-scheme: light;
      ${generateBareTierCssVariables(ClassicBrandColors)}
      ${generateSemanticTierCssVariables(ClassicSemanticColors)}
    }
  }
`;

export const ModernColors = createGlobalStyle`
  :root {
    color-scheme: light;
    ${generateBareTierCssVariables(ModernBrandColors)}
    ${generateSemanticTierCssVariables(ModernSemanticColors)}
  }

  .dark-theme {
    color-scheme: dark;
    ${generateSemanticTierCssVariables(ModernSemanticColorsDark)}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      ${generateSemanticTierCssVariables(ModernSemanticColorsDark)}
    }

    .light-theme {
      color-scheme: light;
      ${generateBareTierCssVariables(ModernBrandColors)}
      ${generateSemanticTierCssVariables(ModernSemanticColors)}
    }
  }
`;
