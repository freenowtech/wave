import styled from 'styled-components';
import { compose, variant, width } from 'styled-system';
import { get } from '../../utils/themeGet';
import { InputProps } from './InputProps';
import { getSemanticValue } from '../../utils/cssVariables';

const ANIMATION_DURATION = 100;

const sizeVariant = variant<Record<string, unknown>, 'small' | 'medium'>({
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
            border: `0.0625rem solid ${getSemanticValue('border-neutral-default')}`,
            '&:active, &:focus': {
                borderColor: getSemanticValue('border-focus'),
                boxShadow: `inset 0 0 0 0.0625rem ${getSemanticValue('border-focus')}`
            }
        },
        'bottom-lined': {
            border: 'none',
            borderTopLeftRadius: get('radii.1'),
            borderTopRightRadius: get('radii.1'),
            borderBottom: `0.0625rem solid ${getSemanticValue('border-neutral-default')}`,

            '&:active, &:focus': {
                borderColor: getSemanticValue('border-focus'),
                boxShadow: `inset 0 -0.0625rem 0 0 ${getSemanticValue('border-focus')}`
            }
        }
    }
});

const BaseInput = styled.input<InputProps>`
    margin: 0;
    box-sizing: border-box;
    background: ${getSemanticValue('background-page-default')};
    border-radius: 0;
    color: ${getSemanticValue('foreground-primary')};
    font-size: ${get('fontSizes.2')};
    font-family: ${get('fonts.normal')};
    transition: box-shadow ${ANIMATION_DURATION}ms, border ${ANIMATION_DURATION}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${getSemanticValue('foreground-neutral-default')};
    }

    ${compose(width, sizeVariant, inputVariants)};

    &:disabled {
        color: ${getSemanticValue('foreground-disabled')};
        border-color: ${getSemanticValue('border-disabled')};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${getSemanticValue('foreground-disabled')};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${getSemanticValue('foreground-primary')};
        transition: background-color 99999999ms ease 99999999ms;
    }
`;

export { BaseInput };
