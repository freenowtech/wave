import React from 'react';
import styled from 'styled-components';
import { IconProps } from '../../../icons';
import { getSemanticValue } from '../../../essentials/experimental';

export interface IconButtonProps {
    disabled?: boolean;
    active?: boolean;
    variant?: 'standard' | 'tonal';
    Icon: React.FC<IconProps>;
    onClick: () => void;
}

const StandardIconContainer = styled.button<Omit<IconButtonProps, 'Icon' | 'onClick'>>`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    padding: 0.25rem;
    background-color: transparent;
    border-color: transparent;
    &:not([disabled]) {
        color: ${props => (props.active ? getSemanticValue('interactive') : getSemanticValue('on-surface'))};
    }
    &:hover:not([disabled]) {
        background-color: ${getSemanticValue('surface-variant')};
    }
`;

const TonalIconContainer = styled.button<Omit<IconButtonProps, 'Icon' | 'onClick'>>`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100%;
    padding: 0.25rem;
    background-color: ${props =>
        props.active ? getSemanticValue('interactive-container') : getSemanticValue('surface-variant')};
    border-color: transparent;
    color: ${getSemanticValue('on-surface')};
    &:hover:not([disabled]) {
        background-color: color-mix(
            in hsl,
            ${getSemanticValue('outline-variant')} 100%,
            ${props => (props.active ? getSemanticValue('interactive-container') : getSemanticValue('outline-variant'))}
                100%
        );
    }
    &:disabled {
        background-color: ${getSemanticValue('surface')};
    }
`;

export const IconButton = ({
    disabled = false,
    active = false,
    Icon,
    variant = 'standard',
    onClick
}: IconButtonProps) =>
    variant === 'standard' ? (
        <StandardIconContainer data-testid="icon-container" onClick={onClick} disabled={disabled} active={active}>
            <Icon />
        </StandardIconContainer>
    ) : (
        <TonalIconContainer data-testid="icon-container" onClick={onClick} disabled={disabled} active={active}>
            <Icon />
        </TonalIconContainer>
    );
