import styled from 'styled-components';
import { compose, variant, width } from 'styled-system';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { InputProps } from './InputProps';

const ANIMATION_DURATION = 100;

interface InternalInputComponentProps extends Omit<InputProps, 'label'> {
    hasValue?: boolean;
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            fontSize: get('fontSizes.1')
        },
        medium: {
            fontSize: get('fontSizes.2')
        }
    }
});

const inputVariants = variant({
    variants: {
        boxed: {
            borderRadius: get('radii.2'),
            border: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_200}`,
            '&:active, &:focus': {
                borderColor: Colors.ACTION_BLUE_900,
                boxShadow: `inset 0 0 0 0.0625rem ${Colors.ACTION_BLUE_900}`
            }
        },
        'bottom-lined': {
            border: 'none',
            borderTopLeftRadius: get('radii.1'),
            borderTopRightRadius: get('radii.1'),
            borderBottom: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_200}`,

            '&:active, &:focus': {
                borderColor: Colors.ACTION_BLUE_900,
                boxShadow: `inset 0 -0.0625rem 0 0 ${Colors.ACTION_BLUE_900}`
            }
        }
    }
});

const BaseInput = styled.input<InternalInputComponentProps>`
    margin: 0;
    box-sizing: border-box;
    background: ${p => (p.inverted ? 'transparent' : Colors.WHITE)};
    border-radius: 0;
    color: ${p => (p.inverted ? Colors.WHITE : Colors.AUTHENTIC_BLUE_900)};
    font-size: ${get('fontSizes.2')};
    font-family: ${get('fonts.normal')};
    transition: box-shadow ${ANIMATION_DURATION}ms, border ${ANIMATION_DURATION}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_350)};
    }

    ${compose(width, sizeVariant, inputVariants)};

    &:disabled {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
        border-color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p => (p.inverted ? Colors.WHITE : Colors.AUTHENTIC_BLUE_900)};
        transition: background-color 99999999ms ease 99999999ms;
    }
`;

export { BaseInput, InternalInputComponentProps };
