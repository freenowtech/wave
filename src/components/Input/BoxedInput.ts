import { FC } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { BaseInput, InternalInputComponentProps } from './BaseInput';
import { activeBoxedPosition, BoxedInputLabel } from './BoxedInputLabel';
import { getSemanticValue } from '../../utils/cssVariables';

const errorStyles = css`
    box-shadow: inset 0 0 0 0.0625rem ${getSemanticValue('border-danger-default')};
    border-color: ${getSemanticValue('border-danger-default')};

    & ~ ${BoxedInputLabel} {
        color: ${getSemanticValue('foreground-danger-default')};
    }
`;

const sizeVariant = variant({
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
        return getSemanticValue('foreground-neutral-faded');
    }

    if (hasValue) {
        return getSemanticValue('foreground-neutral-emphasized');
    }

    return getSemanticValue('foreground-neutral-default');
};

const BoxedInput: FC<InternalInputComponentProps> = styled(BaseInput)<InternalInputComponentProps>`
    ${sizeVariant}
    & + ${BoxedInputLabel} {
        ${p => (p.hasValue || p.placeholder ? activeBoxedPosition(p.size) : undefined)};
        color: ${getLabelColor};
        background: ${p =>
            getSemanticValue(p.inverted ? 'background-element-primary-default' : 'background-element-neutral-default')};
        background: ${p =>
            `linear-gradient(0deg, ${getSemanticValue(
                p.inverted ? 'background-element-primary-default' : 'background-element-neutral-default'
            )} calc(50% + ${
                (p.size as InternalInputComponentProps['size']) === 'small' ? '0.0825rem' : '0.0625rem'
            }), transparent 50%)`};
    }

    ${p => (p.error ? errorStyles : undefined)}
    &:disabled {
        & + ${BoxedInputLabel} {
            color: ${getSemanticValue('foreground-disabled')};
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
            color: ${p => getSemanticValue(p.inverted ? 'foreground-on-background-primary' : 'foreground-focus')};
            background: ${p =>
                getSemanticValue(
                    p.inverted ? 'background-element-primary-default' : 'background-element-neutral-default'
                )};
            background: ${p =>
                `linear-gradient(0deg, ${getSemanticValue(
                    // inverted doesn't work well for the modern layout
                    p.inverted ? 'background-element-primary-default' : 'background-element-neutral-default'
                )} calc(50% + ${
                    (p.size as InternalInputComponentProps['size']) === 'small' ? '0.0825rem' : '0.0625rem'
                }), transparent 50%)`};
        }
    }
`;

export { BoxedInput };
