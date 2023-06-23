type TokenObject = {
    [key: string]: string | number | null | undefined | TokenObject;
};

const parseLevel = (tokenObject: TokenObject, path: string[] = [], tier?: string): ReadonlyArray<string> =>
    Object.entries(tokenObject).flatMap(([key, value]) => {
        if (typeof value === 'object') {
            return parseLevel(value, [...path, key], tier);
        }
        // eslint-disable-next-line no-console
        console.log(`--wave-${tier}-${[...path, key].join('-')}: ${value};`)
        return `--wave-${tier}-${[...path, key].join('-')}: ${value};`;
    });

// export const generateCssVariables = (tokens: TokenObject) => parseLevel(tokens, [], 'global');
export const generateGlobalTierCssVariables = (tokens: TokenObject) => parseLevel(tokens, ['color'], 'g');
export const generateSemanticTierCssVariables = (tokens: TokenObject) => parseLevel(tokens, ['color'], 's');
export const generateComponentTierCssVariables = (tokens: TokenObject) => parseLevel(tokens, ['color'], 'c');
