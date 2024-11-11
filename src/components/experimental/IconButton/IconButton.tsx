import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ButtonProps, Button } from 'react-aria-components';
import { IconProps } from '../../../icons';
import { getSemanticValue } from '../../../essentials/experimental';
import { InlineSpinner } from '../../InlineSpinner/InlineSpinner';

export interface IconButtonProps extends ButtonProps {
    isActive?: boolean;
    isLoading?: boolean;
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

    cursor: pointer;

    &[data-disabled],
    &[data-pending] {
        cursor: not-allowed;
        opacity: 0.38;
    }

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
`;

const TonalIconContainer = styled(Button)<Omit<IconButtonProps, 'Icon'>>`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100%;
    border-color: transparent;
    background: none;

    cursor: pointer;

    &[data-disabled],
    &[data-pending] {
        cursor: not-allowed;
        opacity: 0.38;
    }

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
`;

export const IconButton = ({
    isDisabled = false,
    isActive = false,
    isLoading = false,
    Icon,
    variant = 'standard',
    onPress
}: IconButtonProps): ReactElement => {
    const Container = variant === 'standard' ? StandardIconContainer : TonalIconContainer;

    return (
        <Container
            data-testid={variant === 'standard' ? 'standard-icon-container' : 'tonal-icon-container'}
            onPress={onPress}
            isDisabled={isDisabled}
            isActive={isActive}
            isPending={isLoading}
        >
            {isLoading ? (
                <InlineSpinner data-testid="iconbutton-spinner" color={getSemanticValue('on-surface')} />
            ) : (
                <Icon data-testid="iconbutton-icon" />
            )}
        </Container>
    );
};
