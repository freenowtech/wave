import React, { FC, PropsWithChildren } from 'react';
import warning from 'warning';

type WithDeprecatedMessageFunc<T> = (
    deprecatedComponentName: string,
    PassedComponent: React.ComponentType,
    externalProps?: T
) => FC<T>;

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
// eslint-disable-next-line import/no-mutable-exports
let withDeprecatedMessage: WithDeprecatedMessageFunc<Record<string, unknown>> = (
    deprecatedComponentName,
    PassedComponent,
    externalProps = {}
) => props => <PassedComponent {...props} {...externalProps} />;

if (process.env.NODE_ENV !== 'production') {
    withDeprecatedMessage = (
        deprecatedComponentName: string,
        PassedComponent: React.ComponentType,
        externalProps = {}
    ) => (props: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
        const stringifiedProps = Object.entries(externalProps)
            .map(([k, v]) => `${k}={${v.toString()}}`)
            .join(' ');

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        warning(
            false,
            `The component ${deprecatedComponentName} is deprecated. Replace it with <${PassedComponent.name} ${stringifiedProps}/>`
        );

        return <PassedComponent {...props} {...externalProps} />;
    };
}

export { withDeprecatedMessage };
