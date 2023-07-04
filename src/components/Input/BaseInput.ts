import styled from 'styled-components';
import { compose, variant, width } from 'styled-system';
import { get } from '../../utils/themeGet';
import { InputProps } from './InputProps';
import { getSemanticValue } from '../../utils/cssVariables';

const ANIMATION_DURATION = 100;

interface InternalInputComponentProps extends Omit<InputProps, 'label'> {
    hasValue?: boolean;
}

const sizeVariant = variant<Record<string, unknown>, InputProps['size']>({
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

const inputVariants = variant<Record<string, unknown>, InputProps['variant']>({
    variants: {
        boxed: {
            borderRadius: get('radii.2'),
            border: `0.0625rem solid ${getSemanticValue('border-primary-default')}`,
            '&:active, &:focus': {
                borderColor: getSemanticValue('border-info-emphasized'),
                boxShadow: `inset 0 0 0 0.0625rem ${getSemanticValue('border-info-emphasized')}`
            }
        },
        'bottom-lined': {
            border: 'none',
            borderTopLeftRadius: get('radii.1'),
            borderTopRightRadius: get('radii.1'),
            borderBottom: `0.0625rem solid ${getSemanticValue('border-primary-default')}`,

            '&:active, &:focus': {
                borderColor: getSemanticValue('border-info-emphasized'),
                boxShadow: `inset 0 -0.0625rem 0 0 ${getSemanticValue('border-info-emphasized')}`
            }
        }
    }
});

const BaseInput = styled.input<InternalInputComponentProps>`
    margin: 0;
    box-sizing: border-box;
    background: ${p => getSemanticValue(p.inverted ? 'background-transparent' : 'background-primary-default')};
    border-radius: 0;
    color: ${p => getSemanticValue(p.inverted ? 'text-primaryInverted' : 'text-primary')};
    font-size: ${get('fontSizes.2')};
    font-family: ${get('fonts.normal')};
    transition: box-shadow ${ANIMATION_DURATION}ms, border ${ANIMATION_DURATION}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${p => getSemanticValue(p.inverted ? 'text-secondaryInverted' : 'text-tertiary')};
    }

    ${compose(width, sizeVariant, inputVariants)};

    &:disabled {
        color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
        border-color: ${p => getSemanticValue(p.inverted ? 'border-disabled-inverted' : 'border-disabled-default')};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${p => getSemanticValue(p.inverted ? 'text-disabledInverted' : 'text-disabled')};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p => getSemanticValue(p.inverted ? 'text-primaryInverted' : 'text-primary')};
        transition: background-color 99999999ms ease 99999999ms;
    }
`;

export { BaseInput, InternalInputComponentProps };
