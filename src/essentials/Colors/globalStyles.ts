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
    color-scheme: light dark;
    ${generateBareTierCssVariables(ClassicBrandColors)}
    ${generateSemanticTierCssVariables(ClassicSemanticColors)}

  }

  .dark-theme {
    ${generateSemanticTierCssVariables(ClassicSemanticColorsDark)}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${generateSemanticTierCssVariables(ClassicSemanticColorsDark)}
    }

    .light-theme {
      ${generateBareTierCssVariables(ClassicBrandColors)}
      ${generateSemanticTierCssVariables(ClassicSemanticColors)}
    }
  }
`;

export const ModernColors = createGlobalStyle`
  :root {
    color-scheme: light dark;
    ${generateBareTierCssVariables(ModernBrandColors)}
    ${generateSemanticTierCssVariables(ModernSemanticColors)}
  }

  .dark-theme {
    ${generateSemanticTierCssVariables(ModernSemanticColorsDark)}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${generateSemanticTierCssVariables(ModernSemanticColorsDark)}
    }

    .light-theme {
      ${generateBareTierCssVariables(ModernBrandColors)}
      ${generateSemanticTierCssVariables(ModernSemanticColors)}
    }
  }
`;
