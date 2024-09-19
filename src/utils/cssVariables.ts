// The module is responsible for generating CSS variables from token objects
// and providing a function to get the value of a semantic token.
//
// Example:
// for tokens {
//     foreground: {
//       primary: hsl(0, 100%, 50%),
//       secondary: hsl(240, 100%, 50%)
//     }
// }
//
// the module generates the following CSS variables:
// --wave-b-color-foreground-primary: hsl(0, 100%, 50%);
// --wave-b-color-foreground-secondary: hsl(240, 100%, 50%);
// --wave-b-color-foreground-primary-hsl: 0, 100%, 50%;
// --wave-b-color-foreground-secondary-hsl: 240, 100%, 50%;
//
// The generation consists of four steps:
// 1. Recursively CSS variables entries from the token object. The output is a list of objects { variableName, value }.
// 2. Generate CSS entries for HSL components of colors.
// 3. Apply the design system prefix to the variable names.
// 4. Concatenate entries to a valid CSS variables declaration.

import { ReadCssVariable, SemanticToken } from '../essentials/Colors/types';

export const DS_PREFIX = 'wave';

export type TokenObject = {
    [key: string]: string | number | null | undefined | TokenObject;
};

type CssVariableEntry = {
    variable: string;
    value: string | number;
};

/**
 * Extracts HSL components from an HSL string.
 *
 * @returns HSL components as a string or undefined if the input is not an HSL string.
 */
const extractColorComponents = (color: string): string | undefined => {
    const colorComponentsRegexp = /hsla?\(\s*(\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%.*\)/i;
    const match = colorComponentsRegexp.exec(color);
    if (match === null) return undefined;

    const [, hue, saturation, lightness] = match;
    return `${hue}, ${saturation}%, ${lightness}%`;
};

/**
 * Recursively generates CSS variable entries from a token object.
 * @param tokenObject
 * @param path - used for recursion
 */
export const generateCssVariableEntries = (
    tokenObject: TokenObject,
    path: string[] = []
): ReadonlyArray<CssVariableEntry> =>
    Object.entries(tokenObject).flatMap(([key, value]) => {
        if (typeof value === 'object') {
            return generateCssVariableEntries(value, [...path, key]);
        }

        return { variable: [...path, key].join('-').toLowerCase(), value };
    });

export const generateHslComponentsCssVariableEntries = (
    entries: ReadonlyArray<CssVariableEntry>
): ReadonlyArray<CssVariableEntry> =>
    entries
        .map(({ variable, value }) => {
            if (typeof value !== 'string') return undefined;

            const colorComponents = extractColorComponents(value);

            return colorComponents === undefined ? undefined : { variable: `${variable}-hsl`, value: colorComponents };
        })
        .filter(entry => entry !== undefined);

export const applyPrefix = <T extends string>(
    variableName: T,
    tier: 'b' | 's' | 'l',
    namespace: 'color' = 'color'
): string => `--${DS_PREFIX}-${tier}-${namespace}-${variableName}`;

export const generateCssVariables = (tokens: TokenObject, tier: 'b' | 's'): ReadonlyArray<string> => {
    const entries = generateCssVariableEntries(tokens);
    const hslComponentsEntries = generateHslComponentsCssVariableEntries(entries);

    return [...entries, ...hslComponentsEntries].map(
        ({ variable, value }) => `${applyPrefix(variable, tier)}: ${value};`
    );
};

export const generateBareTierCssVariables = (tokens: TokenObject): ReadonlyArray<string> =>
    generateCssVariables(tokens, 'b');

export const generateSemanticTierCssVariables = (tokens: TokenObject): ReadonlyArray<string> =>
    generateCssVariables(tokens, 's');

export const getSemanticValue = (token: SemanticToken): ReadCssVariable => `var(--${DS_PREFIX}-s-color-${token})`;
