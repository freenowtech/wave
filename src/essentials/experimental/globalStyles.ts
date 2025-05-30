import { createGlobalStyle, css, CSSObject, GlobalStyleComponent, DefaultTheme } from 'styled-components';

import { TokenObject } from '../../utils/cssVariables';
import { generateBareCssVariables, generateCssVariables, generateSemanticCssVariables } from './cssVariables';
import { SemanticColorsSchema } from './types';

export const DARK_THEME_CLASS = 'dark-scheme';
export const LIGHT_THEME_CLASS = 'light-scheme';

export const darkTheme: typeof css = (first: CSSObject | TemplateStringsArray, ...interpolations: never[]) => {
    const styles = css(first, ...interpolations);

    return css`
        .${DARK_THEME_CLASS} & {
            ${styles};
        }

        @media (prefers-color-scheme: dark) {
            ${styles}
        }
    `;
};

export const createThemeGlobalStyle = (
    bareVariables: TokenObject,
    lightScheme: SemanticColorsSchema,
    darkScheme: SemanticColorsSchema
): GlobalStyleComponent<Record<string, unknown>, DefaultTheme> => {
    const bareCssVariables = generateBareCssVariables(bareVariables);
    const semanticCssVariablesForLightTheme = generateSemanticCssVariables(lightScheme);
    const semanticCssVariablesForDarkTheme = generateSemanticCssVariables(darkScheme);

    return createGlobalStyle`
  :root {
    color-scheme: light;
    ${bareCssVariables}
    ${semanticCssVariablesForLightTheme}
    ${generateCssVariables(
        {
            'title-2-size': '1rem',
            'title-2-weight': 500,
            'title-2-line-height': '1.5rem',
            'body-1-size': '1rem',
            'body-1-weight': 400,
            'body-1-line-height': '1.5rem',
            'label-2-size': '0.875rem',
            'label-2-weight': 400,
            'label-2-line-height': '1.25rem'
        },
        'typescale'
    )}
  }

  .${DARK_THEME_CLASS} {
    color-scheme: dark;
    ${semanticCssVariablesForDarkTheme}
  }
  
  .${LIGHT_THEME_CLASS} {
    color-scheme: light;
    ${semanticCssVariablesForLightTheme}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      ${semanticCssVariablesForDarkTheme}
    }
  }

  svg {
    fill: currentColor;
  }
`;
};
