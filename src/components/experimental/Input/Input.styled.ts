import { Input as BaseInput } from 'react-aria-components';
import styled from 'styled-components';

import { getSemanticValue } from '../../../essentials/experimental';
import { get } from '../../../utils/experimental/themeGet';
import { textStyles } from '../Text/Text';

export const Wrapper = styled.span`
    position: relative;

    display: flex;
    align-items: center;
    gap: ${get('space.1')};
    padding: ${get('space.2')} ${get('space.4')};

    background: ${getSemanticValue('surface-variant')};
    color: ${getSemanticValue('on-surface-variant')};
    border-radius: ${get('radii.4')};

    cursor: text;

    & > * {
        flex-shrink: 0;
    }

    &::after {
        position: absolute;
        pointer-events: none;
        inset: 0;
        content: '';
        border-radius: inherit;
        opacity: 0;
        transition: opacity ease 200ms;
    }

    &:hover::after {
        opacity: 0.16;
        background: ${getSemanticValue('on-surface')};
    }

    &:has([data-focused]) {
        background: ${getSemanticValue('surface')};
        color: ${getSemanticValue('interactive')};
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: -0.125rem;

        &::after {
            opacity: 0;
        }
    }

    &:has([data-disabled]) {
        opacity: 0.38;
        pointer-events: none;
    }
`;

export const Input = styled(BaseInput)`
    border: 0;
    outline: 0;
    padding: 0;

    flex-grow: 1;

    background-color: unset;
    color: ${getSemanticValue('on-surface')};
    caret-color: ${getSemanticValue('interactive')};

    ${textStyles.variants.label1}

    &::placeholder {
        color: ${getSemanticValue('on-surface-variant')};
    }

    &::-webkit-search-cancel-button {
        display: none;
    }
`;
