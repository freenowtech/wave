import React, { FC } from 'react';
import {
    components as ReactSelectComponents,
    DropdownIndicatorProps,
    ClearIndicatorProps,
    ControlProps,
    Props,
    StylesConfig
} from 'react-select';
import WindowedSelect from 'react-windowed-select';

import { Colors, Elevation } from '../../essentials';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '../../icons';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { get } from '../../utils/themeGet';
import { Label } from './components/Label';
import { Wrapper } from './components/Wrapper';
import { disabledStyles, errorStyles, variantStyles } from './styles';
import { SelectListProps } from './types';

type WithSelectProps<T> = T & { selectProps: SelectListProps };

const getOptionError = (option: unknown): boolean =>
    typeof option === 'object' && 'error' in option && Boolean(option.error);

const getOptionVariant = (selectProps: Props, option: unknown): 'default' | 'disabled' | 'error' => {
    if (selectProps.isDisabled) {
        return 'disabled';
    }

    return !getOptionError(option) ? 'default' : 'error';
};

const getColor = (key: string, props: Props) => String(get(key)(props));

const customStyles: StylesConfig = {
    container: (provided, { selectProps }: WithSelectProps<Props>) => {
        const bSize = {
            small: {
                fontSize: get('fontSizes.1')(selectProps)
            },
            medium: {
                fontSize: get('fontSizes.2')(selectProps)
            }
        };

        return {
            ...provided,
            ...bSize[selectProps.size]
        };
    },
    control: (_, state: WithSelectProps<ControlProps>) => {
        const disabled = state.isDisabled && disabledStyles.control(state.selectProps);
        const error = state.selectProps.error && errorStyles.control(state.selectProps);
        const variant = variantStyles.control({ isFocused: state.isFocused, ...state.selectProps });

        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 0,
            background: state.selectProps.inverted ? 'transparent' : Colors.WHITE,
            color: state.selectProps.inverted ? Colors.WHITE : Colors.AUTHENTIC_BLUE_900,
            ...variant,
            ...error,
            ...disabled
        };
    },
    menuPortal: provided => ({
        ...provided,
        zIndex: Elevation.SELECT_LIST
    }),
    menu: provided => ({
        ...provided,
        boxShadow: `0 0.125rem 0.5rem 0.0625rem ${Colors.AUTHENTIC_BLUE_200}`
    }),
    valueContainer: (provided, { selectProps: { size, variant } }: WithSelectProps<Props>) => {
        let margin;

        if (variant === 'boxed') {
            if (size === 'medium') {
                margin = '0.375rem 0.75rem';
            } else if (size === 'small') {
                margin = '0 0.5rem';
            }
        }

        if (variant === 'bottom-lined') {
            if (size === 'medium') {
                margin = '1.25rem 0.25rem 0.25rem';
            } else if (size === 'small') {
                margin = '0.625rem 0.125rem 0.125rem';
            }
        }

        return {
            ...provided,
            padding: '0',
            margin
        };
    },
    singleValue: provided => ({
        ...provided,
        margin: '0',
        color: 'inherit'
    }),
    input: provided => ({
        ...provided,
        margin: '0',
        color: 'inherit'
    }),
    noOptionsMessage: provided => ({
        ...provided,
        color: 'inherit'
    }),
    dropdownIndicator: (provided, state: WithSelectProps<Props>) => {
        const disabled = state.isDisabled && disabledStyles.icons(state.selectProps);

        return {
            ...provided,
            padding: '0',
            marginRight: '0.5rem',
            cursor: 'pointer',
            color: state.selectProps.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550,
            ...disabled
        };
    },
    clearIndicator: (provided, state: WithSelectProps<Props>) => {
        const disabled = state.isDisabled && disabledStyles.icons(state.selectProps);

        return {
            ...provided,
            color: state.selectProps.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550,
            cursor: 'pointer',
            padding: 0,
            ...disabled
        };
    },
    placeholder: (provided, state: WithSelectProps<Props>) => {
        const disabled = state.isDisabled && disabledStyles.placeholder(state.selectProps);

        return {
            ...provided,
            color: Colors.AUTHENTIC_BLUE_550,
            ...disabled
        };
    },
    option: (provided, state: WithSelectProps<Props>) => {
        const colorsByState = {
            isDisabled: {
                color: Colors.AUTHENTIC_BLUE_350
            },
            isFocused: {
                backgroundColor: Colors.ACTION_BLUE_50
            },
            isSelected: {
                backgroundColor: Colors.ACTION_BLUE_900,
                color: Colors.WHITE
            }
        };

        const defaultColors = {
            color: Colors.AUTHENTIC_BLUE_900,
            backgroundColor: Colors.WHITE
        };

        const colors = Object.keys(colorsByState)
            .filter(key => state[key])
            // eslint-disable-next-line unicorn/no-array-reduce
            .reduce((acc, style) => ({ ...acc, ...colorsByState[style] }), defaultColors);

        return {
            ...provided,
            ...colors,
            '&:active': {
                ...colors
            },
            padding: `${state.selectProps.size === 'medium' ? '0.5rem' : '0.375rem'} 0.75rem`,
            fontSize: 'inherit',
            wordWrap: 'break-word',
            cursor: state.isDisabled ? 'not-allowed' : 'default'
        };
    },
    multiValue: (provided, { selectProps, data }) => {
        const optionVariant = getOptionVariant(selectProps, data);

        const styles = {
            ...provided,
            border: `0.0625rem solid`,
            borderRadius: '1rem',
            marginRight: '0.375rem',
            marginTop: '0.125rem',
            marginLeft: 0,
            marginBottom: '0.125rem',
            maxWidth: 'calc(100% - 0.5rem)',
            transition: 'color 125ms ease, background-color 125ms ease'
        };

        switch (optionVariant) {
            case 'disabled':
                return {
                    ...styles,

                    color: getColor('semanticColors.text.disabled', selectProps),
                    backgroundColor: 'transparent',
                    borderColor: getColor('semanticColors.border.primary', selectProps),

                    '> [role="button"]': {
                        color: getColor('semanticColors.icon.disabled', selectProps)
                    }
                };
            case 'error':
                return {
                    ...styles,
                    color: getColor('semanticColors.text.dangerInverted', selectProps),
                    backgroundColor: 'transparent',
                    borderColor: getColor('semanticColors.border.dangerEmphasized', selectProps),

                    '> [role="button"]': {
                        color: getColor('semanticColors.icon.danger', selectProps)
                    },

                    '&:hover': {
                        color: getColor('semanticColors.text.primaryInverted', selectProps),
                        backgroundColor: getColor('semanticColors.background.dangerEmphasized', selectProps),
                        borderColor: getColor('semanticColors.border.dangerEmphasized', selectProps),

                        '> [role="button"]': {
                            color: getColor('semanticColors.icon.primaryInverted', selectProps)
                        }
                    }
                };
            case 'default':
            default:
                return {
                    ...styles,

                    color: getColor('semanticColors.text.link', selectProps),
                    backgroundColor: getColor('semanticColors.background.info', selectProps),
                    borderColor: getColor('semanticColors.border.infoEmphasized', selectProps),

                    '> [role="button"]': {
                        color: getColor('semanticColors.icon.action', selectProps)
                    },

                    '&:hover': {
                        color: getColor('semanticColors.text.primaryInverted', selectProps),
                        backgroundColor: getColor('semanticColors.background.infoEmphasized', selectProps),
                        borderColor: getColor('semanticColors.border.infoEmphasized', selectProps),

                        '> [role="button"]': {
                            color: getColor('semanticColors.icon.primaryInverted', selectProps)
                        }
                    }
                };
        }
    },
    multiValueLabel: (provided, { selectProps }) => ({
        ...provided,
        cursor: 'default',
        color: 'inherit',
        padding: '0.1875rem',
        paddingLeft: '0.5rem',
        fontWeight: get('fontWeights.semibold')(selectProps) as number,
        fontSize: '0.625rem'
    }),
    multiValueRemove: provided => ({
        ...provided,
        cursor: 'pointer',
        paddingLeft: '0',
        paddingRight: '0.25rem',
        paddingTop: '0',
        transition: 'color 125ms ease',
        '&:hover': {
            color: 'inherit',
            background: 'transparent'
        }
    })
};

const getIconSize = sizeAsString => (sizeAsString === 'medium' ? 24 : 18);

const DropdownIndicator = (props: WithSelectProps<DropdownIndicatorProps>) => (
    <ReactSelectComponents.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
            <ChevronUpIcon data-testid="close-icon" color="inherit" size={getIconSize(props.selectProps.size)} />
        ) : (
            <ChevronDownIcon data-testid="open-icon" color="inherit" size={getIconSize(props.selectProps.size)} />
        )}
    </ReactSelectComponents.DropdownIndicator>
);

const ClearIndicator = (props: WithSelectProps<ClearIndicatorProps>) => (
    <ReactSelectComponents.ClearIndicator {...props}>
        <CloseIcon color="inherit" size={getIconSize(props.selectProps.size)} />
    </ReactSelectComponents.ClearIndicator>
);

// Remove Separator component
// eslint-disable-next-line unicorn/no-null
const IndicatorSeparator = () => null;

const MultiValueRemove = props => (
    <ReactSelectComponents.MultiValueRemove {...props}>
        <CloseIcon size={14} color="inherit" />
    </ReactSelectComponents.MultiValueRemove>
);

const SelectList: FC<SelectListProps> = (props: SelectListProps) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps } = extractWidthProps(withoutMargin);
    const { components, isDisabled, variant, inverted, size, error, label, inputId } = restProps;

    const id = useGeneratedId(inputId);

    return (
        <Wrapper {...classNameProps} {...marginProps} {...widthProps}>
            <WindowedSelect
                inputId={id}
                styles={customStyles}
                windowThreshold={100}
                components={{
                    DropdownIndicator,
                    IndicatorSeparator,
                    ClearIndicator,
                    MultiValueRemove,
                    ...components
                }}
                {...restProps}
            />
            {label && (
                <Label
                    htmlFor={id}
                    isDisabled={isDisabled}
                    variant={variant}
                    inverted={inverted}
                    size={size}
                    error={error}
                >
                    {label}
                </Label>
            )}
        </Wrapper>
    );
};

SelectList.defaultProps = {
    variant: 'boxed',
    size: 'medium'
};

export { SelectList };
