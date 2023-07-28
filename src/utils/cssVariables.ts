import { ReadCssVariable, SemanticToken } from '../essentials/Colors/types';

export const DS_PREFIX = 'wave';

type TokenObject = {
    [key: string]: string | number | null | undefined | TokenObject;
};

const extractColorComponents = (color: string): string | undefined => {
    const colorComponentsRegexp = /hsla?\(\s*(\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%.*\)/i;
    const match = colorComponentsRegexp.exec(color);
    if (match === null) return undefined;

    const [, hue, saturation, lightness] = match;
    return `${hue}, ${saturation}%, ${lightness}%`;
};

const parseLevel = (tokenObject: TokenObject, path: string[] = [], tier?: string): ReadonlyArray<string> =>
    Object.entries(tokenObject).flatMap(([key, value]) => {
        if (typeof value === 'object') {
            return parseLevel(value, [...path, key], tier);
        }

        const cssVariables = [`--wave-${tier}-${[...path, key].join('-')}: ${value};`];

        const colorComponents = typeof value === 'string' ? extractColorComponents(value) : undefined;
        if (colorComponents !== undefined) {
            cssVariables.push(`--${DS_PREFIX}-${tier}-${[...path, key].join('-')}-hsl: ${colorComponents};`);
        }

        return cssVariables;
    });

export const generateGlobalTierCssVariables = (tokens: TokenObject): ReadonlyArray<string> => parseLevel(tokens, ['color'], 'g');
export const generateSemanticTierCssVariables = (tokens: TokenObject): ReadonlyArray<string> => parseLevel(tokens, ['color'], 's');

export const getSemanticValue = (token: SemanticToken): ReadCssVariable => `var(--${DS_PREFIX}-s-color-${token})`;
