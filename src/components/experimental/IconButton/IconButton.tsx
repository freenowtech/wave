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
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    background-color: transparent;
    border-color: transparent;

    // we create a before pseudo element to mess with the opacity (see the hovered state)
    &::before {
        position: absolute;
        content: '';
        border-radius: inherit;
        opacity: 0;
        height: 5rem;
        width: 5rem;
    }

    // we want to change the opacity here but not affect the icon, so we have to use the before pseudo element
    &[data-hovered]::before {
        opacity: 0.16;
        background-color: ${getSemanticValue('on-surface')};
    }

    // this is to position the svg relative to the before pseudo element
    > svg {
        padding: 1rem;
        min-width: 3rem;
        min-height: 3rem;
    }

    &:not([data-disabled]) {
        color: ${props => (props.isActive ? getSemanticValue('interactive') : getSemanticValue('on-surface'))};
    }

    &[data-disabled] {
        opacity: 0.38;
    }
`;

const TonalIconContainer = styled(Button)<Omit<IconButtonProps, 'Icon'>>`
    height: 7rem;
    width: 7rem;
    border-radius: 100%;
    border-color: transparent;
    background: none;

    // we create a before pseudo element to mess with the opacity (see the hovered state)
    &::before {
        position: absolute;
        content: '';
        border-radius: inherit;
        height: 7rem;
        width: 7rem;
        background-color: ${props =>
            props.isActive && !props.isDisabled
                ? getSemanticValue('interactive-container')
                : getSemanticValue('surface')};
        z-index: -1;
    }

    // we want to change the opacity here but not affect the icon, so we have to use the before pseudo element
    &[data-hovered]::before {
        background-color: color-mix(
            in hsl,
            ${getSemanticValue('on-surface')} 100%,
            ${props => (props.isActive ? getSemanticValue('interactive-container') : getSemanticValue('on-surface'))}
                100%
        );
        opacity: 0.16;
    }

    // this is to position the svg relative to the before pseudo element
    > svg {
        padding: 2rem;
        min-width: 3rem;
        min-height: 3rem;
    }

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
