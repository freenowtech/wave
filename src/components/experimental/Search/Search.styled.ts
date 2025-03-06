import { Input as BaseInput, Button as BaseButton, SearchField as BaseSearchField } from 'react-aria-components';
import styled from 'styled-components';

import { getSemanticValue } from '../../../essentials/experimental';
import SearchIcon from '../../../icons/experimental/SearchIcon';
import { get } from '../../../utils/experimental/themeGet';
import { textStyles } from '../Text/Text';

export const Icon = styled(SearchIcon)`
    position: absolute;
    left: ${get('space.3')};
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;

export const SearchField = styled(BaseSearchField)`
    position: relative;
    border-radius: ${get('radii.4')};
    background: ${getSemanticValue('surface-variant')};
    color: ${getSemanticValue('on-surface-variant')};

    &::before {
        position: absolute;
        pointer-events: none;
        inset: 0;
        content: '';
        border-radius: inherit;
        opacity: 0;
        transition: opacity ease 200ms;
    }

    &:has([data-hovered])::before {
        opacity: 0.16;
        background-color: ${getSemanticValue('on-surface-variant')};
    }

    &:has([data-focused]) {
        background: ${getSemanticValue('surface')};
        color: ${getSemanticValue('interactive')};
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: -0.125rem;

        &::before {
            opacity: 0;
        }
    }

    &:has([data-disabled]) {
        opacity: 0.38;
    }
`;

export const Button = styled(BaseButton)`
    appearance: none;
    background: none;
    display: flex;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    position: absolute;
    right: ${get('space.3')};
    top: 50%;
    transform: translateY(-50%);
`;

export const Input = styled(BaseInput)`
    background-color: unset;
    display: block;
    padding: ${get('space.2')} ${get('space.9')};
    border: 0;
    outline: 0;
    caret-color: ${getSemanticValue('interactive')};
    color: ${getSemanticValue('on-surface')};

    ${textStyles.variants.label1}

    &[data-placeholder] {
        color: ${getSemanticValue('on-surface-variant')};
    }

    &::-webkit-search-cancel-button {
        display: none;
    }
`;
