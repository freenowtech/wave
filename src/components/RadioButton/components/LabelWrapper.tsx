import styled, { css } from 'styled-components';
import { compose, margin, MarginProps, variant } from 'styled-system';

import { getSemanticValue } from '../../../utils/cssVariables';
import { theme } from '../../../essentials/theme';
import { get } from '../../../utils/themeGet';
import { RadioButtonProps } from '../RadioButtonProps';
import { Checkmark } from './Checkmark';
import { TapArea } from './TapArea';

interface LabelWrapperProps extends MarginProps, Pick<RadioButtonProps, 'textVerticalAlign'> {
    disabled?: boolean;
    error?: boolean;
}

const textVerticalAlignVariant = variant({
    prop: 'textVerticalAlign',
    variants: {
        top: {
            alignItems: 'flex-start'
        },
        center: {
            alignItems: 'center'
        }
    }
});

const hoverStyle = ({ disabled, error }: LabelWrapperProps) => {
    if (disabled) {
        return css`
            cursor: not-allowed;

            & ${/* sc-selector */ TapArea}:active {
                background-color: transparent;
            }
        `;
    }
    return css`
        cursor: pointer;

        & ${/* sc-selector */ TapArea}:not(:active) {
            background-color: ${getSemanticValue(error ? 'background-danger-default' : 'background-info-default')};
        }

        & ${/* sc-selector */ Checkmark}:not(:checked) {
            box-shadow: inset 0 0 0 0.125rem ${getSemanticValue(error ? 'border-danger-emphasized' : 'border-info-emphasized')};
            background-color: ${getSemanticValue('background-primary-default')};
        }
    `;
};

const LabelWrapper = styled.label.attrs({ theme })<LabelWrapperProps>`
    display: inline-flex;
    align-items: center;
    position: relative;
    user-select: none;

    color: ${props => getSemanticValue(props.disabled ? 'text-disabled' : 'text-primary')};

    font-family: ${get('fonts.normal')};
    line-height: 1;

    &:hover {
        ${hoverStyle}
    }

    ${compose(margin, textVerticalAlignVariant)}
`;

export { LabelWrapper };
