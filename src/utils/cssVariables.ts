import { ReadCssVariable, SemanticCssToken } from '../essentials/Colors/types';

type TokenObject = {
    [key: string]: string | number | null | undefined | TokenObject;
};

const parseLevel = (tokenObject: TokenObject, path: string[] = [], tier?: string): ReadonlyArray<string> =>
    Object.entries(tokenObject).flatMap(([key, value]) => {
        if (typeof value === 'object') {
            return parseLevel(value, [...path, key], tier);
        }
        return `--wave-${tier}-${[...path, key].join('-')}: ${value};`;
    });

export const generateGlobalTierCssVariables = (tokens: TokenObject): ReadonlyArray<string> => parseLevel(tokens, ['color'], 'g');
export const generateSemanticTierCssVariables = (tokens: TokenObject): ReadonlyArray<string> => parseLevel(tokens, ['color'], 's');

export const getSemanticValue = (token: SemanticCssToken): ReadCssVariable => `var(--wave-s-color-${token})`
