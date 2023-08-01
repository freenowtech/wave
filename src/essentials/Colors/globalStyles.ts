import { createGlobalStyle } from 'styled-components';
import { Colors as ClassicBrandColors, SemanticColors as ClassicSemanticColors } from './Colors';
import { Colors as ModernBrandColors, SemanticColors as ModernSemanticColors } from './RedesignedColors';
import { generateBareTierCssVariables, generateSemanticTierCssVariables } from '../../utils/cssVariables';

export const ClassicColors = createGlobalStyle`
  :root {
    ${generateBareTierCssVariables(ClassicBrandColors)}
    ${generateSemanticTierCssVariables(ClassicSemanticColors)}
  }
`;

export const ModernColors = createGlobalStyle`
  :root {
    ${generateBareTierCssVariables(ModernBrandColors)}
    ${generateSemanticTierCssVariables(ModernSemanticColors)}
  }
`;
