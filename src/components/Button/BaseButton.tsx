import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant, width, WidthProps } from 'styled-system';

import { theme } from '../../essentials/theme';
import { deprecatedProperty } from '../../utils/deprecatedProperty';
import { get } from '../../utils/themeGet';

interface BaseButtonProps extends ComponentPropsWithoutRef<'button'>, MarginProps, WidthProps {
    /**
     * Adjusts the size of the button
     */
    size?: ResponsiveValue<'small' | 'medium'>;
    /**
     * Sets the button width to 100% of the parent
     * @deprecated
     */
    block?: boolean;
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            fontSize: get('fontSizes.1'),
            height: '2rem',
            minWidth: '5rem',
            padding: '0 0.75rem'
        },
        medium: {
            fontSize: get('fontSizes.2'),
            height: '3rem',
            minWidth: '6.25rem',
            padding: '0 1rem'
        }
    }
});

/**
 * @deprecated
 */
function handleBlockProp({ block }: BaseButtonProps): string {
    if (block !== undefined) {
        deprecatedProperty('Button', block, 'block', 'width');
    }

    if (block) {
        return 'width: 100%';
    }

    return '';
}

// "svg path" fill set to "inherit" to being able to transition using button variants
const BaseButton = styled.button.attrs({ theme })<BaseButtonProps>`
    align-items: center;
    background: transparent;
    border-radius: ${get('radii.2')};
    border: 0.0625rem solid transparent;
    cursor: pointer;
    display: inline-flex;
    font-family: ${get('fonts.normal')};
    font-weight: ${get('fontWeights.semibold')};
    justify-content: center;
    text-align: center;
    text-decoration: none;
    ${handleBlockProp};

    &:disabled {
        cursor: not-allowed;
    }

    svg path {
        fill: inherit;
    }

    ${compose(margin, sizeVariant, width)}
`;

export { BaseButton, BaseButtonProps };
