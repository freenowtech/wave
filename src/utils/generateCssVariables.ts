type TokenObject = {
    [key: string]: string | number | null | undefined | TokenObject;
};

const parseLevel = (tokenObject: TokenObject, path: string[] = []): ReadonlyArray<string> =>
    Object.entries(tokenObject).flatMap(([key, value]) => {
        if (typeof value === 'object') {
            return parseLevel(value, [...path, key]);
        }
        return `--${[...path, key].join('-')}: ${value};`;
    });

export const generateCssVariables = (tokens: TokenObject) => parseLevel(tokens);
