import React, { FC } from 'react';
import {
    ClearIndicatorProps,
    components as ReactSelectComponents,
    ControlProps,
    DropdownIndicatorProps,
    Props,
    StylesConfig
} from 'react-select';
import WindowedSelect from 'react-windowed-select';

import { Elevation } from '../../essentials';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '../../icons';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { getSemanticValue } from '../../utils/cssVariables';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { get } from '../../utils/themeGet';
import { Label } from './components/Label';
import { Wrapper } from './components/Wrapper';
import { disabledStyles, errorStyles, variantStyles } from './styles';
import { SelectListProps } from './types';

type WithSelectProps<T> = T & { selectProps: SelectListProps };

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
        const disabled = state.isDisabled && disabledStyles.control;
        const error = state.selectProps.error && errorStyles.control(state.selectProps);
        const variant = variantStyles.control({ isFocused: state.isFocused, ...state.selectProps });

        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 0,
            background: getSemanticValue('background-page-default'),
            color: getSemanticValue('foreground-primary'),
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
        backgroundColor: getSemanticValue('background-page-elevation-1'),
        boxShadow: `0 0.125rem 0.5rem 0.0625rem ${getSemanticValue('shadow-default')}`
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
        const disabled = state.isDisabled && disabledStyles.icons;

        return {
            ...provided,
            padding: '0',
            marginRight: '0.5rem',
            cursor: 'pointer',
            color: getSemanticValue('foreground-neutral-default'),
            ...disabled
        };
    },
    clearIndicator: (provided, state: WithSelectProps<Props>) => {
        const disabled = state.isDisabled && disabledStyles.icons;

        return {
            ...provided,
            color: getSemanticValue('foreground-neutral-default'),
            cursor: 'pointer',
            padding: 0,
            ...disabled
        };
    },
    placeholder: (provided, state: WithSelectProps<Props>) => {
        const disabled = state.isDisabled && disabledStyles.placeholder;

        return {
            ...provided,
            color: getSemanticValue('foreground-neutral-emphasized'),
            ...disabled
        };
    },
    option: (provided, state: WithSelectProps<Props>) => {
        const colorsByState = {
            isDisabled: {
                color: getSemanticValue('foreground-disabled')
            },
            isFocused: {
                backgroundColor: getSemanticValue('background-element-info-default')
            },
            isSelected: {
                backgroundColor: getSemanticValue('background-element-info-emphasized'),
                color: getSemanticValue('foreground-on-background-info')
            }
        };

        const defaultColors = {
            color: getSemanticValue('foreground-primary'),
            backgroundColor: getSemanticValue('background-page-elevation-1')
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
    multiValue: (provided, { selectProps }: { selectProps: Props }) => {
        const styles = {
            ...provided,
            color: getSemanticValue('foreground-info-faded'),
            border: `0.0625rem solid ${getSemanticValue('border-info-default')}`,
            borderRadius: '1rem',
            backgroundColor: getSemanticValue('background-element-info-default'),
            marginRight: '0.375rem',
            marginTop: '0.125rem',
            marginLeft: 0,
            marginBottom: '0.125rem',
            maxWidth: 'calc(100% - 0.5rem)',
            transition: 'color 125ms ease, background-color 125ms ease',
            '&:hover': {
                backgroundColor: getSemanticValue('background-element-info-emphasized'),
                color: getSemanticValue('foreground-on-background-info')
            }
        };

        if (selectProps.isDisabled) {
            return {
                ...styles,
                color: getSemanticValue('foreground-disabled'),
                backgroundColor: 'transparent',
                borderColor: getSemanticValue('border-disabled')
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
    const { components, isDisabled, variant, size, error, label, inputId } = restProps;

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
                <Label htmlFor={id} isDisabled={isDisabled} variant={variant} size={size} error={error}>
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
