import { FirstDayOfWeek, START_DATE } from '@datepicker-react/hooks';
import parse from 'date-fns/parse';
import React, { ChangeEventHandler, FC, useEffect, useMemo, useState } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';
import { Input, InputProps } from '../Input/Input';

import { Datepicker } from './Datepicker';
import { isValidDateText } from './utils/isValidDateText';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { HelperText } from '../HelperText/HelperText';
import { dateToDisplayText } from './utils/dateToDisplayText';
import { useLocaleObject } from './utils/useLocaleObject';
import { Arrow, DatepickerContentContainer } from './DatepickerContentElements';
import { DarkScheme, LightScheme } from '../ColorScheme';
import { useClosestColorScheme } from '../../utils/hooks/useClosestColorScheme';

interface DatepickerSingleInputProps
    extends MarginProps,
        WidthProps,
        Omit<InputProps, 'value' | 'onChange' | 'disabled'> {
    /**
     * Function that is used when datepicker closes without selected date.
     */
    onClose?: () => void;
    /**
     * Function that is used when datepicker selects new date.
     */
    onChange?: (date?: Date) => void;
    /**
     * Minimal date to select from.
     */
    minDate?: Date;
    /**
     * Maximum date to select from.
     */
    maxDate?: Date;
    /**
     * Accepts a number for first day of the week from 0 (Sunday) to 6 (Saturday).
     * @default 1
     */
    firstDayOfWeek?: FirstDayOfWeek;
    /**
     * Function that runs for each date and returns boolean whether date is disabled or not.
     * @default () => false
     */
    isDateBlocked?: (date: Date) => boolean;
    /**
     * String to format dates. See the format at [date-fns docs](https://date-fns.org/v2.29.3/docs/format)
     * @default dd/MM/yyyy
     */
    displayFormat?: string;
    /**
     * String to define the locale in ISO-639-1
     * @default en-US
     */
    locale?: string;
    /**
     * Set the value of the input
     */
    value?: Date;
    /**
     * Text to be shown if error filling the input
     * or fn to be trigger as a callback when error
     */
    errorHandler?: (() => void) | string;
    /**
     * The id to be assigned to the input field
     */
    inputId?: string;
    /**
     * Determines whether the datePicker is disabled or not
     */
    disabled?: boolean;
}

const DatepickerSingleInput: FC<DatepickerSingleInputProps> = ({
    minDate,
    maxDate,
    firstDayOfWeek,
    isDateBlocked,
    onClose,
    onChange,
    displayFormat = 'dd/MM/yyyy',
    locale = 'en-US',
    value,
    errorHandler,
    inputId,
    disabled,
    ...rest
}) => {
    const [triggerReference, setTriggerReference] = useState(undefined);
    const [contentReference, setContentReference] = useState(undefined);
    const [arrowReference, setArrowReference] = useState(undefined);

    const localeObject = useLocaleObject(locale);
    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState(dateToDisplayText(localeObject, displayFormat, value));
    const [error, setError] = useState(false);
    const displayErrorMessage = typeof errorHandler === 'string';

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement: 'bottom-start',
        modifiers: [
            {
                name: 'flip',
                enabled: true
            },
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [0, 15]
                }
            },
            {
                name: 'arrow',
                options: { element: arrowReference }
            }
        ]
    });

    const enforcedColorScheme = useClosestColorScheme(triggerReference);
    const id = useGeneratedId(inputId);

    useEffect(() => {
        if (error && typeof errorHandler === 'function') {
            errorHandler();
        }
    }, [error]);

    useEffect(() => {
        setInputText(dateToDisplayText(localeObject, displayFormat, value));
    }, [value, localeObject, displayFormat]);

    const handleDatepickerClose = () => {
        setIsFocused(false);

        if (onClose) {
            onClose();
        }
    };

    const handleDateChange = (date?: Date) => {
        if (onChange) {
            onChange(date);
        }
    };

    const handleDateTextChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value: inputValue } }) => {
        setInputText(inputValue);

        const parsedDate = inputValue === '' ? undefined : parse(inputValue, displayFormat, new Date());
        const validDate = isValidDateText(parsedDate, inputValue, displayFormat);
        const hasError = !!inputValue && !validDate;

        if (!hasError) {
            handleDateChange(parsedDate);
        }

        setError(hasError);
    };

    const PortalWrapper = useMemo(() => {
        if (!enforcedColorScheme) return React.Fragment;
        return enforcedColorScheme === 'light' ? LightScheme : DarkScheme;
    }, [enforcedColorScheme]);

    return (
        <>
            <Input
                ref={element => {
                    setTriggerReference(element);
                }}
                id={id}
                autoComplete="off"
                className="startDate"
                data-testid="start-date-input"
                value={inputText}
                onFocus={() => setIsFocused(true)}
                onBlur={handleDatepickerClose}
                onChange={handleDateTextChange}
                data-error={error}
                disabled={disabled}
                {...rest}
            />
            {displayErrorMessage && error && !isFocused && (
                <HelperText mt="1">{errorHandler || `error (${displayFormat})`}</HelperText>
            )}
            {isFocused &&
                createPortal(
                    <PortalWrapper>
                        <DatepickerContentContainer
                            ref={setContentReference}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            <Arrow ref={setArrowReference} style={styles.arrow} {...attributes.arrow} />
                            <Datepicker
                                numberOfMonths={1}
                                exactMinBookingDays
                                minBookingDays={1}
                                startDate={value}
                                endDate={value}
                                minBookingDate={minDate}
                                maxBookingDate={maxDate}
                                firstDayOfWeek={firstDayOfWeek}
                                focusedInput={isFocused ? START_DATE : undefined}
                                onDatesChange={({ focusedInput, startDate }) => {
                                    setIsFocused(focusedInput !== null);
                                    handleDateChange(startDate || undefined);
                                }}
                                isDateBlocked={isDateBlocked}
                                locale={localeObject}
                            />
                        </DatepickerContentContainer>
                    </PortalWrapper>,
                    document.body
                )}
        </>
    );
};

export { DatepickerSingleInput, DatepickerSingleInputProps };
