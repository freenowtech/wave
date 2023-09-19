import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { BaseInput, InternalInputComponentProps } from './BaseInput';
import { activeBottomLinedPosition, BottomLinedInputLabel } from './BottomLinedInputLabel';
import { getSemanticValue } from '../../utils/cssVariables';

const errorStyles = css`
    box-shadow: inset 0 -0.0625rem 0 0 ${getSemanticValue('border-danger-default')};
    border-color: ${getSemanticValue('border-danger-default')};

    & ~ ${BottomLinedInputLabel} {
        color: ${getSemanticValue('foreground-danger-default')};
    }
`;

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            height: '2.5rem',
            padding: '1rem 0.125rem 0.375rem'
        },
        medium: {
            height: '3.5rem',
            padding: '1.625rem 0.25rem 0.625rem'
        }
    }
});

const getLabelColor = ({ hasValue }: InternalInputComponentProps) => {
    if (hasValue) {
        return getSemanticValue('foreground-neutral-emphasized');
    }

    return getSemanticValue('foreground-neutral-default');
};

const BottomLinedInput = styled(BaseInput)<InternalInputComponentProps>`
    ${sizeVariant}
    & ~ ${BottomLinedInputLabel} {
        ${p => (p.hasValue || p.placeholder ? activeBottomLinedPosition(p.size) : '')};
        color: ${getLabelColor};
        background: ${getSemanticValue('background-page-default')};
    }

    ${p => (p.error ? errorStyles : undefined)}
    &:disabled {
        & ~ ${BottomLinedInputLabel} {
            color: ${getSemanticValue('foreground-disabled')};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${BottomLinedInputLabel} {
            ${p => activeBottomLinedPosition(p.size)};
        }
    }

    &:focus:not(:disabled) {
        & ~ ${BottomLinedInputLabel} {
            ${p => activeBottomLinedPosition(p.size)};
            color: ${getSemanticValue('foreground-focus')};
            background: ${getSemanticValue('background-page-default')};
        }
    }
`;

export { BottomLinedInput };
