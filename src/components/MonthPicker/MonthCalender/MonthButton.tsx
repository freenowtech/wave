import styled, { css } from 'styled-components';

import { getSemanticValue } from '../../../utils/cssVariables';
import { get } from '../../../utils/themeGet';

interface MonthButtonProps {
    isSelectedStartOrEnd: boolean;
    disabled: boolean;
    isInRange: boolean;
}

const getColor = ({ isSelectedStartOrEnd, isInRange, disabled }: MonthButtonProps) => {
    if (isSelectedStartOrEnd) {
        return css`
            color: ${getSemanticValue('foreground-on-background-accent')};
            background: ${getSemanticValue('background-element-accent-emphasized')};
            box-shadow: 0 0 0 0.0625rem ${getSemanticValue('border-accent-default')};
            z-index: 2;
        `;
    }

    if (isInRange) {
        return css`
            color: ${getSemanticValue('foreground-accent-default')};
            background: ${getSemanticValue('background-element-accent-faded')};
            box-shadow: 0 0 0 0.0625rem ${getSemanticValue('border-accent-faded')};
            z-index: 1;

            &:hover {
                cursor: pointer;
                background: ${getSemanticValue('background-element-accent-default')};
                color: ${getSemanticValue('foreground-accent-emphasized')};
            }
        `;
    }

    if (disabled) {
        return css`
            color: ${getSemanticValue('foreground-disabled')};
            box-shadow: 0 0 0 0.0625rem ${getSemanticValue('border-disabled')};
            background: ${getSemanticValue('transparent')};

            &:hover {
                cursor: not-allowed;
            }
        `;
    }

    return css`
        color: ${getSemanticValue('foreground-primary')};
        background: ${getSemanticValue('transparent')};

        &:hover {
            cursor: pointer;
            background: ${getSemanticValue('background-element-accent-default')};
            color: ${getSemanticValue('foreground-accent-emphasized')};
        }
    `;
};

const MonthButton = styled.button.attrs({ type: 'button' })<MonthButtonProps>`
    font-family: ${get('fonts.normal')};
    font-weight: ${get('fontWeights.normal')};
    font-size: ${get('fontSizes.0')};
    border: 0;
    padding: 0.5rem;
    box-shadow: 0 0 0 0.0625rem ${getSemanticValue('border-neutral-default')};
    outline: none;

    transition-property: background, box-shadow, color;
    transition-duration: 200ms;
    transition-timing-function: ease;

    &:hover {
        cursor: pointer;
    }

    ${getColor}
`;

export { MonthButton };
