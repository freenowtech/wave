import React, { useRef } from 'react';
import styled from 'styled-components';
import {
    compose,
    layout,
    LayoutProps,
    margin as marginFn,
    MarginProps,
    width as widthFn,
    WidthProps
} from 'styled-system';
import { extractWrapperMarginProps } from '../../utils/extractProps';
import { Input } from '../Input/Input';
import { InputProps } from '../Input/InputProps';
import { SelectList } from '../SelectList/SelectList';
import { SelectListProps } from '../SelectList/types';
import { DynamicWidthMenu } from './components/DynamicWidthMenu';
import { Option } from './components/Option';
import { SingleValue } from './components/SingleValue';
import { COUNTRIES } from './constants';
import { PhoneAreaCodeCountry } from './types/PhoneAreaCodeCountry';

interface PhoneInputProps
    extends WidthProps,
        MarginProps,
        Pick<InputProps, 'name' | 'label' | 'placeholder' | 'error' | 'disabled'> {
    /**
     * Sets the variant of the phone input element
     */
    variant?: 'boxed' | 'bottom-lined';
    /**
     * Sets the size of the phone input element
     */
    size?: 'small' | 'medium';
    /**
     * Sets the ID for the phone input element
     */
    id?: string;
    /**
     * National number text value
     */
    text?: string;
    /**
     * Change handler for national number text input
     */
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Country object for determining the area code
     */
    country?: PhoneAreaCodeCountry;
    /**
     * Change handler for the area code country
     */
    onCountryChange?: (country?: PhoneAreaCodeCountry) => void;
    /**
     * HTML element which will be used as a parent for the prefix list
     */
    listPortalTarget?: SelectListProps['menuPortalTarget'];
    /**
     * Pass props directly to the internal input component. Any value from the `Input` component props are allowed, but props from the `PhoneInput` take precedence
     */
    inputProps?: InputProps;
    /**
     * Pass props directly to the internal SelectList component used to show prefixes. Any value from the `SelectList` component props are allowed, but props from the `PhoneInput` take precedence
     */
    selectListProps?: SelectListProps;
}

const Box = styled.div<LayoutProps & WidthProps>`
    ${compose(layout, widthFn, marginFn)}
`;

const PhoneInput: React.FC<PhoneInputProps> = ({
    width,
    variant = 'boxed',
    inputProps = {},
    selectListProps = {},
    ...props
}: PhoneInputProps) => {
    const { marginProps } = extractWrapperMarginProps(props);

    const nationalNumberInputRef = useRef<HTMLInputElement>();
    const containerRef = useRef<HTMLDivElement>();
    const spaceBetweenInputs = variant === 'boxed' ? '0.25rem' : '0.75rem';

    const handleCountrySelection = value => {
        if (props.onCountryChange) {
            props.onCountryChange(value);
        }

        if (nationalNumberInputRef?.current) nationalNumberInputRef.current.focus();
    };

    return (
        <Box display="inline-flex" width={width} {...marginProps} ref={containerRef}>
            <SelectList
                {...selectListProps}
                id={`${props.id}-area-code`}
                name={`${props.name}-area-code`}
                value={props.country}
                onChange={handleCountrySelection}
                options={COUNTRIES.map(it => ({ ...it, label: `${it.label} ${it.dialCode}` }))}
                placeholder=""
                width="8rem"
                components={{
                    SingleValue,
                    // eslint-disable-next-line unicorn/no-null
                    IndicatorSeparator: () => null,
                    Option,
                    // DynamicWidthMenu is a styled-component with its own `theme` prop since menuProps has `theme` prop
                    // from emotion and conflicts in TS
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    Menu: menuProps => <DynamicWidthMenu {...menuProps} width={containerRef.current?.offsetWidth} />
                }}
                variant={variant}
                size={props.size}
                isDisabled={props.disabled}
                menuPortalTarget={props.listPortalTarget}
            />
            <Input
                {...inputProps}
                id={`${props.id}-national-number`}
                name={`${props.name}-national-number`}
                ml={spaceBetweenInputs}
                ref={nationalNumberInputRef}
                value={props.text}
                label={props.label}
                placeholder={props.placeholder}
                onChange={props.onTextChange}
                autoComplete="tel-national"
                variant={variant}
                size={props.size}
                error={props.error}
                disabled={props.disabled}
                width={`calc(100% - 8rem + ${spaceBetweenInputs})`}
            />
        </Box>
    );
};

export { PhoneInput, PhoneInputProps };
