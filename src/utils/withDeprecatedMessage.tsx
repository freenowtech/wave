import React from 'react';
import warning from 'warning';

/**
 * Use this HOC to replace deprecated component with an alternative
 *
 * Example (replacing deprecated Gear icon with new Cog icon):
 * ```
 * export const GearIcon: React.FC<Props> = withDeprecatedMessage(CogIcon, {} 'GearIcon');
 * ```
 *
 * @param deprecatedComponentName The component to be replaced by the PassedComponent
 * @param PassedComponent Alternative component to use
 * @param externalProps Alternative component props
 */
let withDeprecatedMessage = (deprecatedComponentName, PassedComponent, externalProps = {}) => {
    return props => <PassedComponent {...props} {...externalProps} />;
};

if (process.env.NODE_ENV !== 'production') {
    withDeprecatedMessage = (deprecatedComponentName, PassedComponent, externalProps = {}) => {
        return props => {
            const stringifiedProps = Object.entries(externalProps)
                .map(([k, v]) => `${k}={${v}}`)
                .join(' ');

            warning(
                false,
                `The component ${deprecatedComponentName} is deprecated. Replace it with <${PassedComponent.name} ${stringifiedProps}/>`
            );

            return <PassedComponent {...props} {...externalProps} />;
        };
    };
}

export { withDeprecatedMessage };
