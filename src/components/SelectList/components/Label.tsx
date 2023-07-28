import { ReactNode } from 'react';
import styled from 'styled-components';

import { getSemanticValue } from '../../../utils/cssVariables';
import { get } from '../../../utils/themeGet';
import { variantStyles, errorStyles, disabledStyles } from '../styles';
import { Variant, Size } from '../types';

interface LabelProps {
    inverted?: boolean;
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
    background: ${p => getSemanticValue(p.inverted ? 'background-element-primary-default' : 'background-element-neutral-default')};
    color: ${p => getSemanticValue(p.inverted ? 'foreground-neutral-faded' : 'foreground-neutral-emphasized')};
    transition: color 125ms ease;

    ${p => p.error && errorStyles.label()}
    ${({ isDisabled }) => isDisabled && disabledStyles.label}
    ${({ variant, size }) => variantStyles.label({ variant, size })}
`;
