import { FC } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Colors } from '../../essentials';
import { BaseInput, InternalInputComponentProps } from './BaseInput';
import { activeBoxedPosition, BoxedInputLabel } from './BoxedInputLabel';

const errorStyles = css`
    box-shadow: inset 0 0 0 0.0625rem ${Colors.NEGATIVE_ORANGE_900};
    border-color: ${Colors.NEGATIVE_ORANGE_900};

    & ~ ${BoxedInputLabel} {
        color: ${Colors.NEGATIVE_ORANGE_900};
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
        return Colors.AUTHENTIC_BLUE_200;
    }

    if (hasValue) {
        return Colors.AUTHENTIC_BLUE_550;
    }

    return Colors.AUTHENTIC_BLUE_350;
};

const BoxedInput: FC<InternalInputComponentProps> = styled(BaseInput)`
    ${sizeVariant}

    & + ${BoxedInputLabel} {
        ${p => (p.hasValue || p.placeholder ? activeBoxedPosition(p.size) : null)};
        color: ${getLabelColor};
        background: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
    }

    ${p => (p.error ? errorStyles : null)}

    &:disabled {
        & + ${BoxedInputLabel} {
            color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
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
            color: ${p => (p.inverted ? Colors.WHITE : Colors.ACTION_BLUE_900)};
            background: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
        }
    }
`;

export { BoxedInput };
