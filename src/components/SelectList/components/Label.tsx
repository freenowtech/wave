import { ReactNode } from 'react';
import styled from 'styled-components';

import { getSemanticValue } from '../../../utils/cssVariables';
import { get } from '../../../utils/themeGet';
import { disabledStyles, errorStyles, variantStyles } from '../styles';
import { Size, Variant } from '../types';

interface LabelProps {
    error?: boolean;
    isDisabled?: boolean;
    size: Size;
    variant: Variant;
    children: ReactNode;
}

export const Label = styled.label<LabelProps>`
    position: absolute;
    pointer-events: none;
    line-height: 1;
    font-weight: ${get('fontWeights.semibold')};
    background: ${getSemanticValue('background-element-neutral-default')};
    color: ${getSemanticValue('foreground-neutral-emphasized')};
    transition: color 125ms ease;

    ${p => p.error && errorStyles.label()}
    ${({ isDisabled }) => isDisabled && disabledStyles.label}
    ${({ variant, size }) => variantStyles.label({ variant, size })}
`;
