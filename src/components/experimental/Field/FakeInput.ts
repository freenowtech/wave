import styled, { css } from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';
import { get } from '../../../utils/experimental/themeGet';
import { flyingLabelStyles, Label } from './Label';
import { InnerWrapper } from './InnerWrapper';

const focusStyles = css`
    color: ${getSemanticValue('interactive')};
    outline: ${getSemanticValue('interactive')} solid 0.125rem;
    outline-offset: -0.125rem;

    ${Label} {
        ${flyingLabelStyles}
    }
`;

export const FakeInput = styled.div<{ $isVisuallyFocused: boolean }>`
    box-sizing: content-box;
    cursor: text;

    color: ${getSemanticValue('on-surface-variant')};
    background-color: ${getSemanticValue('surface')};
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${getSemanticValue('outline-variant')};
    border-radius: ${get('radii.4')};

    padding: ${get('space.2')} ${get('space.3')} ${get('space.2')} ${get('space.4')};
    display: flex;
    align-items: start;
    gap: ${get('space.3')};

    & > :not(${InnerWrapper}) {
        flex-shrink: 0;
        margin-top: ${get('space.2')};
        color: ${getSemanticValue('on-surface-variant')};
    }

    &:hover {
        border-color: ${getSemanticValue('outline')};
        color: ${getSemanticValue('on-surface')};
    }

    &:focus-within {
        ${focusStyles}
    }

    ${props => props.$isVisuallyFocused && focusStyles}
`;
