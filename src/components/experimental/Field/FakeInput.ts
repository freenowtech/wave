import styled, { css } from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';
import { get } from '../../../utils/experimental/themeGet';
import { flyingLabelStyles, Label } from './Label';
import { InnerWrapper } from './InnerWrapper';

const focusStyles = css`
    outline: ${getSemanticValue('interactive')} solid 0.125rem;
    outline-offset: -0.125rem;

    ${Label} {
        color: ${getSemanticValue('interactive')};
        ${flyingLabelStyles}
    }
`;

export const FakeInput = styled.div<{ $isVisuallyFocused: boolean }>`
    box-sizing: border-box;
    cursor: text;

    color: ${getSemanticValue('on-surface-variant')};
    background-color: ${getSemanticValue('surface')};
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${getSemanticValue('outline-variant')};
    border-radius: ${get('radii.4')};

    min-height: 3.5rem;
    padding: 0 ${get('space.3')} 0 ${get('space.4')};
    display: flex;
    align-items: center;
    gap: ${get('space.3')};

    /* stylelint-disable selector-type-case, selector-type-no-unknown */
    & > :not(${InnerWrapper}) {
        flex-shrink: 0;
        color: ${getSemanticValue('on-surface-variant')};
    }

    &:hover {
        border-color: ${getSemanticValue('outline')};
        color: ${getSemanticValue('on-surface')};
    }

    &:focus-within {
        ${focusStyles}
    }

    [data-invalid] & {
        border-color: ${getSemanticValue('negative')};
    }

    [data-disabled] & {
        opacity: 0.38;
        pointer-events: none;
    }

    ${props => props.$isVisuallyFocused && focusStyles}
`;
