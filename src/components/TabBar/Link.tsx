import React, { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import { Spaces } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
    /**
     * Indicates that the link is currently selected
     * @default false
     */
    selected?: boolean;

    /**
     * Override the default active class name (see react-router)
     */
    activeClassName?: string;

    /**
     * Replace the rendered component with an HTML tag or another component
     * @default 'a'
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const DEFAULT_ACTIVE_CLASS_NAME = 'active';

const UnderLine = styled.div`
    background-color: transparent;
    height: 0.1875rem;
    margin-top: ${Spaces[1]};
`;

const InnerLink = styled.a.attrs({ theme })<LinkProps>`
    color: ${getSemanticValue('foreground-neutral-emphasized')};
    cursor: pointer;
    font-size: ${get('fontSizes.1')};
    font-weight: ${get('fontWeights.semibold')};
    font-family: ${get('fonts.normal')};
    margin-right: ${Spaces[3]};
    text-decoration: none;

    &:last-child {
        margin-right: 0;
    }

    &.${props => (props.activeClassName ? props.activeClassName : DEFAULT_ACTIVE_CLASS_NAME)} {
        color: ${getSemanticValue('foreground-accent-default')};

        ${UnderLine} {
            background-color: ${getSemanticValue('foreground-accent-default')};
        }
    }
`;

const Link: React.FC<LinkProps> = ({ children, selected, ...rest }: LinkProps) => {
    const combinedClassNames = [rest.className];

    if (selected) {
        combinedClassNames.push(rest.activeClassName ? rest.activeClassName : DEFAULT_ACTIVE_CLASS_NAME);
    }

    return (
        <InnerLink {...rest} className={combinedClassNames.join(' ')}>
            {children}
            <UnderLine />
        </InnerLink>
    );
};

export { Link, LinkProps };
