import React, { forwardRef, type ReactElement } from 'react';
import styled from 'styled-components';
import { Button as BaseButton, ButtonProps as ButtonBaseProps } from 'react-aria-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';

import { textStyles } from '../Text/Text';

interface ChipProps extends ButtonBaseProps {
    /**
     * Toggle active state
     */
    isActive?: boolean;
}

const Button = styled(BaseButton)<{ isActive: boolean }>`
    position: relative;

    border: none;
    outline: none;
    border-radius: ${get('radii.4')};
    padding: ${get('space.2')} ${get('space.3')};
    color: ${props => (props.isActive ? getSemanticValue('on-interactive-container') : getSemanticValue('on-surface'))};
    background-color: ${props =>
        props.isActive ? getSemanticValue('interactive-container') : getSemanticValue('surface-variant')};

    display: inline-flex;
    align-items: center;
    gap: ${get('space.1')};

    cursor: pointer;

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        border-radius: inherit;
        opacity: 0;
        transition: opacity ease 200ms;
    }

    &[data-hovered]::before {
        opacity: 0.16;
        background-color: currentColor;
    }

    &[data-focused] {
        outline: ${getSemanticValue('accent')} solid 0.125rem;
    }

    &[data-disabled] {
        opacity: 0.38;
    }

    ${textStyles.variants.label1}
`;

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
    ({ children, isActive = false, ...props }, ref): ReactElement => (
        <Button isActive={isActive} ref={ref} {...props}>
            {/* Button expects a single child */}
            <>{children}</>
        </Button>
    )
);

export { Chip, ChipProps };
