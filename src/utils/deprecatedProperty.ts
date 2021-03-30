import warning from 'warning';

type DeprecatedWarningFunction = (
    componentName: string,
    propValue: any,
    oldProp: string,
    newProp?: string,
    comment?: string
) => void;

// tslint:disable-next-line:no-empty
let deprecatedProperty: DeprecatedWarningFunction = function deprecatedFunction() {};

if (process.env.NODE_ENV !== 'production') {
    const hasWarned = {};

    deprecatedProperty = function deprecatedFunction(componentName, propValue, oldProp, newProp, comment) {
        const additionalComment = comment ? ` ${comment}` : '';
        const newProperty = newProp ? `Use \`${newProp}\`` : '';
        const newPropertySentence = newProp ? ` ${newProperty} instead.` : '';

        if (!hasWarned[componentName + oldProp]) {
            hasWarned[componentName + oldProp] = propValue !== undefined;

            warning(
                propValue === undefined,
                `[@freenow/wave] \`${oldProp}\` will be removed in the next major version of ${componentName}.${newPropertySentence}${additionalComment}`
            );
        }
    };
}

export { deprecatedProperty };
