import styled, { css } from 'styled-components';

import { getSemanticValue } from '../../../utils/cssVariables';
import { get } from '../../../utils/themeGet';

const getColor = ({ isSelected, isSelectedStartOrEnd, isWithinHoverRange, disabledDate }: DayButtonProps) => {
    if (isSelectedStartOrEnd) {
        return css`
            color: ${getSemanticValue('foreground-on-background-accent')};
            background: ${getSemanticValue('background-element-accent-emphasized')};
            box-shadow: 0 0 0 0.0625rem ${getSemanticValue('border-accent-default')};
            z-index: 2;
        `;
    }

    if (isSelected || isWithinHoverRange) {
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

    if (disabledDate) {
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
            color: ${getSemanticValue('foreground-on-background-neutral')};
            background: ${getSemanticValue('background-element-neutral-emphasized')};
        }
    `;
};

interface DayButtonProps {
    isSelected: boolean;
    isSelectedStartOrEnd: boolean;
    isWithinHoverRange: boolean;
    disabledDate: boolean;
}

const DayButton = styled.button.attrs({ type: 'button' })<DayButtonProps>`
    width: 2.4375rem;
    height: 2.4375rem;

    font-family: ${get('fonts.normal')};
    font-weight: ${get('fontWeights.normal')};
    font-size: ${get('fontSizes.0')};
    border: 0;

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

export { DayButton };
