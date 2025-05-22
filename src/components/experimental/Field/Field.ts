import styled, { css } from 'styled-components';
import { DateInput as BaseDateInput, Input as BaseInput, TextArea as BaseTextArea } from 'react-aria-components';
import { getSemanticValue } from '../../../essentials/experimental';

export const fieldTextStyles = css`
    font-family: inherit;
    font-size: var(--wave-exp-typescale-body-1-size);
    font-weight: var(--wave-exp-typescale-body-1-weight);
    line-height: var(--wave-exp-typescale-body-1-line-height);
`;

export const fieldStyles = css`
    border: none;
    background-color: unset;
    outline: none;

    display: block;
    width: 100%;
    padding: 0;

    caret-color: ${getSemanticValue('interactive')};
    color: ${getSemanticValue('on-surface')};

    ${fieldTextStyles}

    [data-placeholder] {
        color: ${getSemanticValue('on-surface-variant')};
    }
`;

export const Input = styled(BaseInput)`
    ${fieldStyles}

    &[type='search'] {
        &::-webkit-search-cancel-button {
            display: none;
        }
    }
`;

export const TextArea = styled(BaseTextArea).attrs({ rows: 1 })`
    ${fieldStyles};

    resize: none;
    min-height: var(--wave-exp-typescale-body-1-line-height);
`;

export const DateInput = styled(BaseDateInput)`
    display: flex;
    ${fieldTextStyles}
`;
