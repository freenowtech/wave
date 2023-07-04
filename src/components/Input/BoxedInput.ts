import { FC } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { BaseInput, InternalInputComponentProps } from './BaseInput';
import { activeBoxedPosition, BoxedInputLabel } from './BoxedInputLabel';
import { getSemanticValue } from '../../utils/cssVariables';
import { InputProps } from './InputProps';

const errorStyles = css`
    box-shadow: inset 0 0 0 0.0625rem ${getSemanticValue('border-danger-emphasized')};
    border-color: ${getSemanticValue('border-danger-emphasized')};

    & ~ ${BoxedInputLabel} {
        color: ${getSemanticValue('text-dangerInverted')};
    }
`;

const sizeVariant = variant<Record<string, unknown>, InputProps['size']>({
    prop: 'size',
    variants: {
        small: {
            height: '2rem',
            padding: '0 0.5rem'
        },
        medium: {
            height: '3rem',
            padding: '0 0.75rem'
        }
    }
});

const getLabelColor = ({ hasValue, inverted }: InternalInputComponentProps) => {
    if (inverted) {
        return getSemanticValue('text-secondaryInverted');
    }

    if (hasValue) {
        return getSemanticValue('text-secondary');
    }

    return getSemanticValue('text-tertiary');
};

const BoxedInput: FC<InternalInputComponentProps> = styled(BaseInput)<InternalInputComponentProps>`
    ${sizeVariant}
    & + ${BoxedInputLabel} {
        ${p => (p.hasValue || p.placeholder ? activeBoxedPosition(p.size) : undefined)};
        color: ${getLabelColor};
        background: ${p => getSemanticValue(p.inverted ? 'background-primary-inverted' : 'background-primary-default')};
        background: ${p =>
            `linear-gradient(0deg, ${getSemanticValue(
                p.inverted ? 'background-primary-inverted' : 'background-primary-default'
            )} calc(50% + ${p.size === 'small' ? '0.0825rem' : '0.0625rem'}), transparent 50%)`};
    }

    ${p => (p.error ? errorStyles : undefined)}
    &:disabled {
        & + ${BoxedInputLabel} {
            color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${BoxedInputLabel} {
            ${p => activeBoxedPosition(p.size)};
        }
    }

    &:focus:not(:disabled) {
        & + ${BoxedInputLabel} {
            ${p => activeBoxedPosition(p.size)};
            color: ${p => getSemanticValue(p.inverted ? 'text-primaryInverted' : 'text-info')};
            background: ${p =>
                getSemanticValue(p.inverted ? 'background-primary-inverted' : 'background-primary-default')};
            background: ${p =>
                `linear-gradient(0deg, ${getSemanticValue(
                    p.inverted ? 'background-primary-inverted' : 'background-primary-default'
                )} calc(50% + ${p.size === 'small' ? '0.0825rem' : '0.0625rem'}), transparent 50%)`};
        }
    }
`;

export { BoxedInput };
