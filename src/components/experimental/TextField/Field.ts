import { Input as BaseInput, TextArea as BaseTextArea } from 'react-aria-components';
import styled, { css } from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { textStyles } from '../Text/Text';

const fieldStyles = css`
    border: none;
    background-color: unset;
    outline: none;

    display: block;
    width: 100%;
    padding: 0;

    caret-color: ${getSemanticValue('interactive')};
    color: ${getSemanticValue('on-surface')};

    ${textStyles.variants.body1}

    &::placeholder {
        color: ${getSemanticValue('on-surface-variant')};
    }
`;

// TODO: Implement autogrow
export const TextArea = styled(BaseTextArea).attrs({ rows: 1 })`
    ${fieldStyles};

    resize: none;
    min-height: ${textStyles.variants.body1.lineHeight};
`;

export const Input = styled(BaseInput)`
    ${fieldStyles}

    &[type='search'] {
        &::-webkit-search-cancel-button {
            display: none;
        }
    }
`;
