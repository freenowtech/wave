import React from 'react';
import styled, { css } from 'styled-components';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';

import { TapArea } from './TapArea';
import { Checkmark } from './Checkmark';
import { getSemanticValue, theme, themeGet } from '../../../../experimental';

interface LabelWrapperProps {
    disabled?: boolean;
    error?: boolean;
    indeterminate?: boolean;
    textVerticalAlign?: 'top' | 'center';
}

interface StyledLabelProps extends LabelWrapperProps {
    isHovered?: boolean;
}

const hoverStyle = ({ disabled, error, indeterminate, isHovered }: StyledLabelProps) => {
    if (!isHovered) return '';

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
                background-color: ${getSemanticValue(error ? 'negative' : 'surface')};
            }

            & ${/* sc-selector */ Checkmark}:not(:checked) {
                box-shadow: inset 0 0 0 0.125rem ${getSemanticValue(error ? 'negative' : 'surface')};
            }
        `;
    }
    return css`
        cursor: pointer;

        & ${/* sc-selector */ TapArea}:not(:active) {
            background-color: ${getSemanticValue(error ? 'negative-container' : 'divider')};
        }

        & ${/* sc-selector */ Checkmark}:not(:checked) {
            box-shadow: inset 0 0 0 0.125rem ${getSemanticValue(error ? 'negative' : 'outline')};
            background-color: ${getSemanticValue('on-interactive')};
        }
    `;
};

const StyledLabel = styled.label.attrs({ theme })<StyledLabelProps>`
    display: inline-flex;
    position: relative;
    user-select: none;

    color: ${props => getSemanticValue(props.disabled ? 'inverse-surface' : 'on-surface')};

    font-family: ${themeGet('fonts.normal')};
    line-height: 1;

    gap: 0.5rem;

    align-items: ${props => (props.textVerticalAlign === 'top' ? 'flex-start' : 'center')};

    ${hoverStyle}
`;

function LabelWrapper(props: LabelWrapperProps & React.LabelHTMLAttributes<HTMLLabelElement>): JSX.Element {
    const {
        disabled = false,
        error = false,
        indeterminate = false,
        textVerticalAlign = 'center',
        ...otherProps
    } = props;

    const { hoverProps, isHovered } = useHover({ isDisabled: disabled });

    return (
        <StyledLabel
            disabled={disabled}
            error={error}
            indeterminate={indeterminate}
            textVerticalAlign={textVerticalAlign}
            isHovered={isHovered}
            {...mergeProps(hoverProps, otherProps)}
        />
    );
}

export { LabelWrapper };
