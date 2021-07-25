import warning from 'warning';

type DeprecatedWarningFunction = (
    componentName: string,
    propValue: string | number | undefined,
    oldProp: string,
    newProp?: string,
    comment?: string
) => void;

// eslint-disable-next-line import/no-mutable-exports
let deprecatedProperty: DeprecatedWarningFunction = function deprecatedFunction() {
};

if (process.env.NODE_ENV !== 'production') {
    const hasWarned = {};

    deprecatedProperty = function deprecatedFunction(componentName: string, propValue: string | number | undefined, oldProp: string, newProp?: string, comment?: string): void {
        const additionalComment = comment ? ` ${comment}` : '';
        const newProperty = newProp ? `Use \`${newProp}\`` : '';
        const newPropertySentence = newProp ? ` ${newProperty} instead.` : '';

        if (!hasWarned[ componentName + oldProp ]) {
            hasWarned[ componentName + oldProp ] = propValue !== undefined;

            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            warning(
                propValue === undefined,
                `[@freenow/wave] \`${oldProp}\` will be removed in the next major version of ${componentName}.${newPropertySentence}${additionalComment}`
            );
        }
    };
}

export { deprecatedProperty };
