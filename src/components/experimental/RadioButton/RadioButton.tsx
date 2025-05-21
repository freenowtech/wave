import React, { FC } from 'react';
import styled from 'styled-components';
import { Radio as BaseRadio, RadioProps } from 'react-aria-components';

import { getSemanticValue } from '../../../essentials/experimental';
import { themeGet } from '../../../utils/experimental';

const Indicator = styled.span<{ $selected: boolean }>`
    position: relative;
    flex-shrink: 0;

    top: calc((var(--wave-exp-typescale-body-1-line-height) - 1rem) / 2);
    width: 1rem;
    height: 1rem;

    box-sizing: border-box;
    border-style: solid;
    border-color: currentColor;
    border-width: ${props => (props.$selected ? '5px' : '2px')};
    border-radius: 50%;
    background-color: ${getSemanticValue('surface')};
    transition: border-color 200ms ease, border-width 50ms ease;
`;

const Radio = styled(BaseRadio)`
    display: flex;
    gap: ${themeGet('space.2')};
    cursor: pointer;

    font-family: inherit;
    font-size: var(--wave-exp-typescale-body-1-size);
    font-weight: var(--wave-exp-typescale-body-1-weight);
    line-height: var(--wave-exp-typescale-body-1-line-height);

    color: ${getSemanticValue('on-surface')};

    ${Indicator} {
        color: ${getSemanticValue('divider')};
    }

    &[data-hovered] ${Indicator} {
        color: ${getSemanticValue('interactive')};
    }

    &[data-pressed] ${Indicator} {
        color: ${getSemanticValue('surface-variant')};
    }

    &[data-focus-visible] {
        outline: 2px solid ${getSemanticValue('surface-variant')};
        outline-offset: 2px;
    }

    &[data-disabled] {
        cursor: not-allowed;
        opacity: 0.38;
    }

    &[data-invalid] {
        color: ${getSemanticValue('negative-variant')};
    }

    &[data-hovered][data-invalid] ${Indicator} {
        color: ${getSemanticValue('negative')};
    }

    &[data-selected] ${Indicator} {
        color: ${getSemanticValue('accent')};
    }

    &[data-selected][data-hovered] ${Indicator} {
        color: ${getSemanticValue('on-interactive-container')};
    }

    &[data-selected][data-pressed] ${Indicator} {
        color: ${getSemanticValue('interactive')};
    }

    &[data-selected][data-disabled] ${Indicator} {
        color: ${getSemanticValue('surface-variant')};
    }
`;

export const RadioButton: FC<RadioProps> = ({ children, ...rest }) => (
    <Radio {...rest}>
        {({ isSelected }) => (
            <>
                <Indicator $selected={isSelected} />
                {children}
            </>
        )}
    </Radio>
);
