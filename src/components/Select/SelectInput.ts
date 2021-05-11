import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { compose, ResponsiveValue, variant } from 'styled-system';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { SelectLabel } from './SelectLabel';
import { bottomLinedSizeVariants, boxedSizeVariants } from './selectVariantSizes';

interface BaseSelectProps
    extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'size'> {
    /**
     * Define the display variant with boxed as the default
     */
    variant?: ResponsiveValue<'boxed' | 'bottom-lined'>;
    /**
     * Adjust colors for display on a dark background
     */
    inverted?: boolean;
    /**
     * Indicate that the input contains an error
     */
    error?: boolean;
    /**
     * Set the size of the input with medium as the default
     */
    size?: ResponsiveValue<'small' | 'medium'>;
}

const ANIMATION_DURATION = 100;

const inputVariants = variant({
    variants: {
        boxed: {
            borderRadius: get('radii.2'),
            border: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_200}`,
            '&:active:not(:disabled), &:focus:not(:disabled)': {
                borderColor: Colors.ACTION_BLUE_900,
                boxShadow: `inset 0 0 0 0.0625rem ${Colors.ACTION_BLUE_900}`
            }
        },
        'bottom-lined': {
            border: 'none',
            borderTopLeftRadius: get('radii.1'),
            borderTopRightRadius: get('radii.1'),
            borderBottom: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_200}`,

            '&:active:not(:disabled), &:focus:not(:disabled)': {
                borderColor: Colors.ACTION_BLUE_900,
                boxShadow: `inset 0 -0.0625rem 0 0 ${Colors.ACTION_BLUE_900}`
            }
        }
    }
});

const getErrorStyles = ({ error, variant: variantProp }: BaseSelectProps) => {
    if (error) {
        return css`
            border-color: ${Colors.NEGATIVE_ORANGE_900};
            box-shadow: ${variantProp == 'boxed'
                ? `inset 0 0 0 0.0625rem ${Colors.NEGATIVE_ORANGE_900}`
                : `inset 0 -0.0625rem 0 0 ${Colors.NEGATIVE_ORANGE_900}`};

            & ~ ${SelectLabel} {
                color: ${Colors.NEGATIVE_ORANGE_900};
            }
        `;
    }
};

const disabledStyles = css<BaseSelectProps>`
    color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
    cursor: not-allowed;
    border-color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};

    & ~ ${SelectLabel} {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
    }

    & ~ .svg-icon svg > * {
        fill: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
    }
`;

const SelectInput: FC<BaseSelectProps> = styled.select.attrs({ theme })<BaseSelectProps>`
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
    padding-right: 2rem;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;

    & ~ .svg-icon svg > * {
        fill: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550)};
    }

    ${p => {
        if (p.variant == 'boxed') {
            return compose(boxedSizeVariants, inputVariants)(p);
        }

        if (p.variant == 'bottom-lined') {
            return compose(bottomLinedSizeVariants, inputVariants)(p);
        }
    }}

    ${getErrorStyles}
    ${p => (p.disabled ? disabledStyles : null)}

    &:-moz-focusring {
        outline: none;
        text-shadow: 0 0 0 ${Colors.AUTHENTIC_BLUE_900};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p => (p.inverted ? Colors.WHITE : Colors.AUTHENTIC_BLUE_900)};
        transition: background-color 99999999ms ease 99999999ms;
    }

    &:active:not(:disabled), &:focus:not(:disabled) {
        & ~ ${SelectLabel} {
            color: ${p => (p.inverted ? Colors.WHITE : Colors.ACTION_BLUE_900)};
        }
        
        & ~ .svg-icon svg > * {
            fill: ${p => (p.inverted ? Colors.WHITE : Colors.AUTHENTIC_BLUE_900)};
        }
    }
`;

export { SelectInput, BaseSelectProps };
