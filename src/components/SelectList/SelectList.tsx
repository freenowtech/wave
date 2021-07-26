import React, { CSSProperties, FC } from 'react';
import ReactSelect, { components as ReactSelectComponents, IndicatorProps, Props, StylesConfig } from 'react-select';

import { Colors, Elevation } from '../../essentials';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '../../icons';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { get } from '../../utils/themeGet';
import { Label } from './components/Label';
import { Wrapper } from './components/Wrapper';
import { disabledStyles, errorStyles, variantStyles } from './styles';
import { SelectListProps } from './types';

const customStyles: StylesConfig = {
    container: (provided, { selectProps }: Props & { selectProps: SelectListProps }) => {
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
    control: (_, state: Props & { selectProps: SelectListProps }) => {
        const disabled =
            state.isDisabled && disabledStyles.control({ isFocused: state.isFocused, ...state.selectProps });
        const error =
            state.selectProps.error && errorStyles.control({ isFocused: state.isFocused, ...state.selectProps });
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
    valueContainer: (provided, { selectProps: { size, variant } }: Props & { selectProps: SelectListProps }) => {
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
    dropdownIndicator: (provided, state: Props & { selectProps: SelectListProps }) => {
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
    clearIndicator: (provided, state: Props & { selectProps: SelectListProps }) => {
        const disabled = state.isDisabled && disabledStyles.icons(state.selectProps);

        return {
            ...provided,
            color: state.selectProps.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550,
            cursor: 'pointer',
            padding: 0,
            ...disabled
        };
    },
    placeholder: (provided: CSSProperties, state: Props & { selectProps: SelectListProps }) => {
        const disabled = state.isDisabled && disabledStyles.placeholder(state.selectProps);

        return {
            ...provided,
            color: Colors.AUTHENTIC_BLUE_550,
            ...disabled
        };
    },
    option: (provided, state: Props & { selectProps: SelectListProps }) => {
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
    multiValue: (provided: CSSProperties, { selectProps }: { selectProps: Props }) => {
        const styles = {
            ...provided,
            color: Colors.ACTION_BLUE_900,
            border: `0.0625rem solid ${Colors.ACTION_BLUE_900}`,
            borderRadius: '1rem',
            backgroundColor: Colors.ACTION_BLUE_50,
            marginRight: '0.375rem',
            marginTop: '0.125rem',
            marginLeft: 0,
            marginBottom: '0.125rem',
            maxWidth: 'calc(100% - 0.5rem)',
            transition: 'color 125ms ease, background-color 125ms ease',
            '&:hover': {
                backgroundColor: Colors.ACTION_BLUE_900,
                color: Colors.WHITE
            }
        };

        if (selectProps.isDisabled) {
            return {
                ...styles,
                color: Colors.AUTHENTIC_BLUE_200,
                backgroundColor: 'transparent',
                borderColor: Colors.AUTHENTIC_BLUE_200
            };
        }

        return styles;
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
        '&:hover': {
            color: 'inherit',
            background: 'transparent'
        }
    })
};

const getIconSize = sizeAsString => (sizeAsString === 'medium' ? 24 : 18);

const DropdownIndicator = (props: IndicatorProps<unknown> & { selectProps: Props }) => (
    <ReactSelectComponents.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
            <ChevronUpIcon data-testid="close-icon" color="inherit" size={getIconSize(props.selectProps.size)} />
        ) : (
            <ChevronDownIcon data-testid="open-icon" color="inherit" size={getIconSize(props.selectProps.size)} />
        )}
    </ReactSelectComponents.DropdownIndicator>
);

const ClearIndicator = (props: IndicatorProps<unknown>) => (
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
            <ReactSelect
                inputId={id}
                styles={customStyles}
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
