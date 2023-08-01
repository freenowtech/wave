export const colorsMap = {
    color: {
        primary: {
            text: 'white',
            icon: 'white',
            background: 'black',
            border: 'black'
        }
    }
};

export const CSSVariables = [
    '--color-primary-text: white;',
    '--color-primary-icon: white;',
    '--color-primary-background: black;',
    '--color-primary-border: black;'
];

export const colorsMapNested = {
    color: {
        primary: {
            text: 'white',
            inverted: {
                primary: {
                    nested: 'red'
                },
                secondary: {
                    nested: 'stuff'
                }
            }
        }
    }
};

export const CSSVariablesNested = [
    '--color-primary-text: white;',
    '--color-primary-inverted-primary-nested: red;',
    '--color-primary-inverted-secondary-nested: stuff;'
];
