import React from 'react';
import styled from 'styled-components';
import { ButtonProps, Button } from 'react-aria-components';
import { IconProps } from '../../../icons';
import { getSemanticValue } from '../../../essentials/experimental';

export interface IconButtonProps extends ButtonProps {
    isActive?: boolean;
    variant?: 'standard' | 'tonal';
    Icon: React.FC<IconProps>;
    onPress: () => void;
}

const StandardIconContainer = styled(Button)<Omit<IconButtonProps, 'Icon'>>`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    background-color: transparent;
    border-color: transparent;

    /* we create a before pseudo element to mess with the opacity (see the hovered state) */
    &::before {
        position: absolute;
        content: '';
        border-radius: inherit;
        opacity: 0;
        height: inherit;
        width: inherit;
    }

    /* we want to change the opacity here but not affect the icon, so we have to use the before pseudo element */
    &[data-hovered]::before {
        opacity: 0.16;
        background-color: ${getSemanticValue('on-surface')};
    }

    display: flex;
    align-items: center;
    justify-content: center;

    &:not([data-disabled]) {
        color: ${props => (props.isActive ? getSemanticValue('interactive') : getSemanticValue('on-surface'))};
    }

    &[data-disabled] {
        opacity: 0.38;
    }
`;

const TonalIconContainer = styled(Button)<Omit<IconButtonProps, 'Icon'>>`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100%;
    border-color: transparent;
    background: none;

    /* we create a before pseudo element to mess with the opacity (see the hovered state) */
    &::before {
        position: absolute;
        content: '';
        border-radius: inherit;
        height: inherit;
        width: inherit;
        background-color: ${props =>
            props.isActive && !props.isDisabled
                ? getSemanticValue('interactive-container')
                : getSemanticValue('surface')};
        z-index: -1;
    }

    /* we want to change the opacity here but not affect the icon, so we have to use the before pseudo element */
    &[data-hovered]::before {
        background-color: color-mix(
            in hsl,
            ${getSemanticValue('on-surface')} 100%,
            ${props => (props.isActive ? getSemanticValue('interactive-container') : getSemanticValue('on-surface'))}
                100%
        );
        opacity: 0.16;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    &:not([data-disabled]) {
        color: ${props =>
            props.isActive ? getSemanticValue('on-interactive-container') : getSemanticValue('on-surface')};
    }

    &[data-disabled] {
        opacity: 0.38;
    }
`;

export const IconButton = ({
    isDisabled = false,
    isActive = false,
    Icon,
    variant = 'standard',
    onPress
}: IconButtonProps) =>
    variant === 'standard' ? (
        <StandardIconContainer
            data-testid="standard-icon-container"
            onPress={onPress}
            isDisabled={isDisabled}
            isActive={isActive}
        >
            <Icon data-testid="iconbutton-icon" />
        </StandardIconContainer>
    ) : (
        <TonalIconContainer
            data-testid="tonal-icon-container"
            onPress={onPress}
            isDisabled={isDisabled}
            isActive={isActive}
        >
            <Icon data-testid="iconbutton-icon" />
        </TonalIconContainer>
    );
