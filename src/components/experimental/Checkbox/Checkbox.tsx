import React, { FC, ReactNode } from 'react';
import { Checkbox as CheckboxComponent, CheckboxProps as ReactAriaCheckboxProps } from 'react-aria-components';
import styled from 'styled-components';

import { Text } from '../Text/Text';
import { LabelWrapper } from './components/LabelWrapper';

import { getSemanticValue, themeGet } from '../../../experimental';

type TextVariant = 'display' | 'headline' | 'title1' | 'title2' | 'body1' | 'body2' | 'label1' | 'label2';

interface CheckboxProps extends Omit<ReactAriaCheckboxProps, 'children'> {
    /**
     * Provide a label for the input which will be shown next to the checkbox
     */
    label?: ReactNode;
    /**
     * Text variant for the label
     */
    variant?: TextVariant;
}

const StyledCheckbox = styled(CheckboxComponent)`
    --selected-color: ${getSemanticValue('accent')};
    --selected-color-pressed: ${getSemanticValue('interactive')};
    --checkmark-color: ${getSemanticValue('surface')};

    position: relative;
    display: inline-flex;
    align-items: center;
    forced-color-adjust: none;
    cursor: pointer;

    .checkbox {
        width: ${themeGet('space.5')};
        height: ${themeGet('space.5')};
        border: 2px solid ${getSemanticValue('divider')};
        border-radius: ${themeGet('radii.2')};
        transition: all 200ms;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &:hover {
            border-color: ${getSemanticValue('interactive')};
        }
    }

    svg {
        position: absolute;
        width: 65%;
        height: 62%;
        top: 45%;
        left: 54%;
        transform: translate(-45%, -40%);
        fill: none;
        stroke: ${getSemanticValue('surface')};
        stroke-width: 3px;
        stroke-dasharray: 22px;
        stroke-dashoffset: 66;
        transition: all 200ms;
    }

    &[data-pressed] .checkbox {
        border-color: ${getSemanticValue('surface-variant')};
    }

    &[data-focus-visible] .checkbox {
        outline: 2px solid ${getSemanticValue('surface-variant')};
        outline-offset: 2px;
    }

    &[data-disabled] {
        color: transparent;
        cursor: not-allowed;

        .checkbox {
            background-color: ${getSemanticValue('surface')};
            border-color: ${getSemanticValue('surface-variant')};
        }
    }

    &[data-invalid] .checkbox {
        border-color: ${getSemanticValue('negative-variant')};
    }

    &[data-selected] .checkbox,
    &[data-indeterminate] .checkbox {
        border-color: ${getSemanticValue('accent')};
        background: ${getSemanticValue('accent')};
    }

    &[data-selected] svg,
    &[data-indeterminate] svg {
        stroke-dashoffset: 44;
    }

    &[data-indeterminate] svg {
        stroke: none;
        fill: ${getSemanticValue('surface')};
        left: 52%;
    }

    &[data-invalid] .checkbox:hover {
        border-color: ${getSemanticValue('negative')};
    }

    &[data-selected] .checkbox:hover,
    &[data-indeterminate] .checkbox:hover {
        border-color: ${getSemanticValue('on-interactive-container')};
        background: ${getSemanticValue('on-interactive-container')};
    }

    &[data-selected][data-pressed] .checkbox,
    &[data-indeterminate][data-pressed] .checkbox {
        border-color: ${getSemanticValue('interactive')};
        background: ${getSemanticValue('interactive')};
    }

    &[data-selected][data-disabled],
    &[data-indeterminate][data-disabled] {
        color: transparent;
        cursor: not-allowed;

        .checkbox {
            background-color: ${getSemanticValue('surface')};
            border-color: ${getSemanticValue('surface-variant')};
        }

        svg {
            stroke: ${getSemanticValue('outline-variant')};
        }
    }

    &[data-indeterminate][data-disabled] svg {
        stroke: none;
        fill: ${getSemanticValue('outline-variant')};
        left: 52%;
    }

    &[data-invalid][data-selected] .checkbox,
    &[data-invalid][data-indeterminate] .checkbox {
        background-color: ${getSemanticValue('negative-variant')};
        border-color: ${getSemanticValue('negative-variant')};
    }

    &[data-invalid][data-selected] .checkbox:hover,
    &[data-invalid][data-indeterminate] .checkbox:hover {
        background-color: ${getSemanticValue('negative')};
        border-color: ${getSemanticValue('negative')};
    }
`;

const Checkbox: FC<CheckboxProps> = props => {
    const { isDisabled, isInvalid, isIndeterminate, label, variant = 'body1', ...rest } = props;

    let dynamicLabel: ReactNode = label;
    if (typeof label === 'string') {
        dynamicLabel = (
            <Text onClick={e => e.stopPropagation()} variant={variant}>
                {label}
            </Text>
        );
    }

    return (
        <LabelWrapper isDisabled={isDisabled} isInvalid={isInvalid}>
            <StyledCheckbox isDisabled={isDisabled} isIndeterminate={isIndeterminate} isInvalid={isInvalid} {...rest}>
                <div className="checkbox">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                        {isIndeterminate ? (
                            <rect x={1} y={7.5} width={15} height={3} rx={1.5} ry={1.5} />
                        ) : (
                            <polyline points="1 9 7 14 15 4" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                    </svg>
                </div>
            </StyledCheckbox>
            {dynamicLabel}
        </LabelWrapper>
    );
};

export { Checkbox, CheckboxProps };
