import styled, { css } from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant } from 'styled-system';

import { getSemanticValue } from '../../../utils/cssVariables';
import { get } from '../../../utils/themeGet';
import { TapArea } from './TapArea';
import { Checkmark } from './Checkmark';
import { theme } from '../../../essentials/theme';

type LabelWrapperProps = MarginProps & {
    disabled?: boolean;
    error?: boolean;
    indeterminate?: boolean;
    textVerticalAlign?: ResponsiveValue<'top' | 'center'>;
};

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

const hoverStyle = ({ disabled, error, indeterminate }: LabelWrapperProps) => {
    if (disabled) {
        return css`
            cursor: not-allowed;

            & > ${/* sc-selector */ TapArea}:active {
                background-color: transparent;
            }
        `;
    }
    if (indeterminate) {
        return css`
            cursor: pointer;

            & ${/* sc-selector */ TapArea}:not(:active) {
                background-color: ${getSemanticValue(error ? 'background-danger-default' : 'background-secondary-default')};
            }

            & ${/* sc-selector */ Checkmark}:not(:checked) {
                box-shadow: inset 0 0 0 0.125rem ${getSemanticValue(error ? 'border-danger-emphasized' : 'border-info-emphasized')};
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
    position: relative;
    user-select: none;

    color: ${props => (getSemanticValue(props.disabled ? 'text-disabled' : 'text-primary'))};

    font-family: ${get('fonts.normal')};
    line-height: 1;

    &:hover {
        ${hoverStyle}
    }

    ${compose(margin, textVerticalAlignVariant)}
`;

export { LabelWrapper };
