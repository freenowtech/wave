import { createGlobalStyle } from 'styled-components';
import { Colors as ClassicBrandColors, SemanticColors as ClassicSemanticColors } from './Colors';
import { Colors as RedesignedBrandColors, SemanticColors as RedesignedSemanticColors } from './RedesignedColors';
import { generateGlobalTierCssVariables, generateSemanticTierCssVariables } from '../../utils/generateCssVariables';

export const ClassicColors = createGlobalStyle`
  :root {
    ${generateGlobalTierCssVariables(ClassicBrandColors)}
    ${generateSemanticTierCssVariables(ClassicSemanticColors)}
  }
`;

export const ModernColors = createGlobalStyle`
  :root {
    ${generateGlobalTierCssVariables(RedesignedBrandColors)}
    ${generateSemanticTierCssVariables(RedesignedSemanticColors)}
  }
`;
