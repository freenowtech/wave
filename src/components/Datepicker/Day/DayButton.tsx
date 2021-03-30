import styled, { css } from 'styled-components';

import { Colors } from '../../../essentials';
import { get } from '../../../utils/themeGet';

const getColor = ({ isSelected, isSelectedStartOrEnd, isWithinHoverRange, disabledDate }: DayButtonProps) => {
    if (isSelectedStartOrEnd) {
        return css`
            color: ${Colors.WHITE};
            background: ${Colors.ACTION_BLUE_900};
            box-shadow: 0 0 0 0.0625rem ${Colors.ACTION_BLUE_1000};
            z-index: 2;
        `;
    } else if (isSelected || isWithinHoverRange) {
        return css`
            color: ${Colors.ACTION_BLUE_900};
            background: ${Colors.ACTION_BLUE_50};
            box-shadow: 0 0 0 0.0625rem ${Colors.ACTION_BLUE_350};
            z-index: 1;

            &:hover {
                cursor: pointer;
                box-shadow: 0 0 0 0.0625rem ${Colors.ACTION_BLUE_350};
                background: ${Colors.ACTION_BLUE_350};
                color: ${Colors.ACTION_BLUE_1000};
            }
        `;
    } else if (disabledDate) {
        return css`
            color: ${Colors.AUTHENTIC_BLUE_200};
            box-shadow: 0 0 0 0.0625rem ${Colors.AUTHENTIC_BLUE_50};
            background: ${Colors.WHITE};
        `;
    } else {
        return css`
            color: ${Colors.AUTHENTIC_BLUE_900};
            background: ${Colors.WHITE};

            &:hover {
                cursor: pointer;
                background: ${Colors.AUTHENTIC_BLUE_50};
            }
        `;
    }
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

    box-shadow: 0 0 0 0.0625rem ${Colors.AUTHENTIC_BLUE_200};
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
