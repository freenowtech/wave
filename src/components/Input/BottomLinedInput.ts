import { FC } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Colors } from '../../essentials';
import { BaseInput, InternalInputComponentProps } from './BaseInput';
import { activeBottomLinedPosition, BottomLinedInputLabel } from './BottomLinedInputLabel';

const errorStyles = css`
    box-shadow: inset 0 -0.0625rem 0 0 ${Colors.NEGATIVE_ORANGE_900};
    border-color: ${Colors.NEGATIVE_ORANGE_900};

    & ~ ${BottomLinedInputLabel} {
        color: ${Colors.NEGATIVE_ORANGE_900};
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

const getLabelColor = ({ hasValue, inverted }: InternalInputComponentProps) => {
    if (inverted) {
        return Colors.AUTHENTIC_BLUE_200;
    }

    if (hasValue) {
        return Colors.AUTHENTIC_BLUE_550;
    }

    return Colors.AUTHENTIC_BLUE_350;
};

const BottomLinedInput: FC<InternalInputComponentProps> = styled(BaseInput)<InternalInputComponentProps>`
    ${sizeVariant}
    & ~ ${BottomLinedInputLabel} {
        ${p => (p.hasValue || p.placeholder ? activeBottomLinedPosition(p.size as Pick<InternalInputComponentProps, 'size'>) : '')};
        color: ${getLabelColor};
        background: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
    }

    ${p => (p.error ? errorStyles : undefined)}
    &:disabled {
        & ~ ${BottomLinedInputLabel} {
            color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${BottomLinedInputLabel} {
            ${p => activeBottomLinedPosition(p.size as Pick<InternalInputComponentProps, 'size'>)};
        }
    }

    &:focus:not(:disabled) {
        & ~ ${BottomLinedInputLabel} {
            ${p => activeBottomLinedPosition(p.size as Pick<InternalInputComponentProps, 'size'>)};
            color: ${p => (p.inverted ? Colors.WHITE : Colors.ACTION_BLUE_900)};
            background: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
        }
    }
`;

export { BottomLinedInput };
