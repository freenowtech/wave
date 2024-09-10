// The module is responsible for generating CSS variables from token objects
// and providing a function to get the value of a semantic token.
//
// Example:
// for tokens {
//     neutral: {
//       10: hsl(0, 6%, 11%),
//     }
//     accent: hsl(350, 53%, 36%)
// }
//
// the module generates the following CSS variables:
// --wave-exp-palette-neutral-10: hsl(0, 6%, 11%);
// --wave-exp-palette-neutral-10-hsl: 0, 6%, 11%;
// --wave-exp-color-accent: hsl(350, 53%, 36%);
// --wave-exp-color-accent-hsl: 350, 53%, 36%;
//
// The generation consists of four steps:
// 1. Recursively CSS variables entries from the token object. The output is a list of objects { variableName, value }.
// 2. Generate CSS entries for HSL components of colors.
// 3. Apply the design system prefix to the variable names.
// 4. Concatenate entries to a valid CSS variables declaration.

import {
    generateHslComponentsCssVariableEntries,
    generateCssVariableEntries,
    TokenObject
} from '../../utils/cssVariables';
import { Join, Leaves } from '../../utils/types';
import { ColorPaletteSchema, SemanticColorsSchema } from './types';

const DS_PREFIX = 'wave-exp';
type NameSpace = 'color' | 'palette';

type BareColorToken = Join<Leaves<ColorPaletteSchema>, '-'>;
type SemanticColorToken = Join<Leaves<SemanticColorsSchema>, '-'>;

type BareColorTokenCssVariable = `--${typeof DS_PREFIX}-palette-${BareColorToken}`;
type BareColorHslTokenCssVariable = `--${typeof DS_PREFIX}-palette-${BareColorToken}-hsl`;
type SemanticColorTokenCssVariable = `--${typeof DS_PREFIX}-color-${SemanticColorToken}`;
type SemanticColorHslTokenCssVariable = `--${typeof DS_PREFIX}-color-${SemanticColorToken}-hsl`;

type ColorCssVariable =
    | BareColorTokenCssVariable
    | BareColorHslTokenCssVariable
    | SemanticColorTokenCssVariable
    | SemanticColorHslTokenCssVariable;
type ReadCssVariable<T extends ColorCssVariable> = `var(${T})` | `var(${T}, ${string})`;

export const getSemanticValue = (token: SemanticColorToken): ReadCssVariable<SemanticColorTokenCssVariable> =>
    `var(--${DS_PREFIX}-color-${token})`;

export const getSemanticHslValue = (token: SemanticColorToken): ReadCssVariable<SemanticColorHslTokenCssVariable> =>
    `var(--${DS_PREFIX}-color-${token}-hsl)`;

export const generateCssVariables = (tokens: TokenObject, namespace: NameSpace): ReadonlyArray<string> => {
    const entries = generateCssVariableEntries(tokens);
    const hslComponentsEntries = generateHslComponentsCssVariableEntries(entries);

    return [...entries, ...hslComponentsEntries].map(
        ({ variable, value }) => `--${DS_PREFIX}-${namespace}-${variable}: ${value};`
    );
};

export const generateBareCssVariables = (tokens: TokenObject): ReadonlyArray<string> =>
    generateCssVariables(tokens, 'palette');

export const generateSemanticCssVariables = (tokens: TokenObject): ReadonlyArray<string> =>
    generateCssVariables(tokens, 'color');
