import { CSSObject } from 'styled-components';
import { CSSObjectWithLabel } from 'react-select';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { SelectListProps } from './types';

export const disabledStyles = {
    control: ({ inverted }: SelectListProps): CSSObjectWithLabel => ({
        color: getSemanticValue(inverted ? 'text-disabledInverted' : 'text-disabled'),
        borderColor: getSemanticValue(inverted ? 'border-disabled-inverted' : 'border-disabled-default'),
        boxShadow: 'none'
    }),
    placeholder: ({ inverted }: SelectListProps): CSSObjectWithLabel => ({
        color: getSemanticValue(inverted ? 'text-disabledInverted' : 'text-disabled')
    }),
    label: ({ inverted }: Pick<SelectListProps, 'inverted'>): CSSObject => ({
        color: getSemanticValue(inverted ? 'text-disabledInverted' : 'text-disabled')
    }),
    icons: ({ inverted }: SelectListProps): CSSObjectWithLabel => ({
        color: getSemanticValue(inverted ? 'text-disabledInverted' : 'text-disabled')
    })
};

export const errorStyles = {
    control: ({ variant }: SelectListProps): CSSObjectWithLabel => ({
        borderColor: getSemanticValue('border-danger-emphasized'),
        boxShadow:
            variant === 'boxed'
                ? `inset 0 0 0 0.0625rem ${getSemanticValue('border-danger-emphasized')}`
                : variant === 'bottom-lined' && `inset 0 -0.0625rem 0 0 ${getSemanticValue('border-danger-emphasized')}`
    }),
    label: (): CSSObject => ({
        color: getSemanticValue('text-danger')
    })
};

export const variantStyles = {
    control: (props: { isFocused: boolean } & SelectListProps): CSSObjectWithLabel => {
        switch (props.variant) {
            case 'boxed': {
                const bSize = {
                    small: {
                        fontSize: get('fontSizes.1')(props),
                        minHeight: '2rem'
                    },
                    medium: {
                        fontSize: get('fontSizes.2')(props),
                        minHeight: '3rem'
                    }
                };

                const isBFocused = props.isFocused && {
                    borderColor: getSemanticValue('border-focus-default'),
                    boxShadow: `inset 0 0 0 0.0625rem ${getSemanticValue('border-focus-default')}`
                };

                return {
                    borderRadius: get('radii.2')(props),
                    border: `0.0625rem solid ${getSemanticValue('border-primary-default')}`,
                    ...isBFocused,
                    ...bSize[props.size]
                };
            }
            case 'bottom-lined': {
                const btSize = {
                    small: {
                        fontSize: get('fontSizes.1')(props),
                        minHeight: '2.5rem'
                    },
                    medium: {
                        fontSize: get('fontSizes.2')(props),
                        minHeight: '3.5rem'
                    }
                };
                const isBLFocused = props.isFocused && {
                    borderColor: getSemanticValue('border-focus-default'),
                    boxShadow: `inset 0 -0.0625rem 0 0 ${getSemanticValue('border-focus-default')}`
                };

                return {
                    border: 'none',
                    borderTopLeftRadius: get('radii.1')(props),
                    borderTopRightRadius: get('radii.1')(props),
                    borderBottom: `0.0625rem solid ${getSemanticValue('border-primary-default')}`,
                    ...isBLFocused,
                    ...btSize[props.size]
                };
            }
            default:
                return {};
        }
    },
    label: (props: Pick<SelectListProps, 'variant' | 'size'>): CSSObject => {
        switch (props.variant) {
            case 'boxed': {
                const bSize = {
                    small: {
                        top: '-0.3125rem',
                        left: '0.4375rem',
                        padding: '0 0.125rem',
                        fontSize: '0.625rem'
                    },
                    medium: {
                        top: '-0.3125rem',
                        left: '0.5625rem',
                        padding: '0 0.25rem',
                        fontSize: get('fontSizes.0')(props)
                    }
                };

                return bSize[props.size];
            }
            case 'bottom-lined': {
                const btSize = {
                    small: {
                        top: '0.125rem',
                        left: '0',
                        padding: '0 0.125rem',
                        fontSize: '0.625rem'
                    },
                    medium: {
                        top: '0.375rem',
                        left: '0',
                        padding: '0 0.25rem',
                        fontSize: get('fontSizes.0')(props)
                    }
                };

                return btSize[props.size];
            }
            default:
                return {};
        }
    }
};
