import { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../essentials';
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
    background: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
    color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550)};
    transition: color 125ms ease;

    ${p => p.error && errorStyles.label()}
    ${p => p.isDisabled && disabledStyles.label(p)}
    ${p => variantStyles.label(p)}
`;
