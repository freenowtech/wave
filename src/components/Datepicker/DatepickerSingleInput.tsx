import { FirstDayOfWeek, START_DATE } from '@datepicker-react/hooks';
import parse from 'date-fns/parse';
import React, { ChangeEventHandler, FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import TetherComponent from 'react-tether';
import { MarginProps, WidthProps } from 'styled-system';
import { Input } from '../Input/Input';

import { Datepicker } from './Datepicker';
import { isValidDateText } from './utils/isValidDateText';
import { Elevation } from '../../essentials';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { HelperText } from '../HelperText/HelperText';
import { dateToDisplayText } from './utils/dateToDisplayText';
import { useLocaleObject } from './utils/useLocaleObject';

interface DatepickerSingleInputProps extends MarginProps, WidthProps {
    /**
     * Placeholder for the input.
     */
    placeholder?: string;
    /**
     * Label for the input.
     */
    label?: string;
    /**
     * Function that used when datepicker closes without selected date.
     */
    onClose?: () => void;
    /**
     * Function that used when datepicker selects new date.
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
     * Default: 1
     */
    firstDayOfWeek?: FirstDayOfWeek;
    /**
     * Function that runs for each date and returns boolean whether date is disabled or not.
     * Default: () => false
     */
    isDateBlocked?: (date: Date) => boolean;
    /**
     * String to format dates.
     * Default: dd/MM/yyyy
     */
    displayFormat?: string;
    /**
     * String to define the locale in ISO-639-1
     * Default: en-US
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
}

const DatepickerSingleInput: FC<DatepickerSingleInputProps> = ({
    minDate,
    maxDate,
    firstDayOfWeek,
    isDateBlocked,
    onClose,
    onChange,
    placeholder,
    label,
    displayFormat = 'dd/MM/yyyy',
    locale = 'en-US',
    value,
    errorHandler,
    inputId,
    ...rest
}: DatepickerSingleInputProps) => {
    const localeObject = useLocaleObject(locale);
    const inputRef = useRef<HTMLDivElement>();
    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState(dateToDisplayText(localeObject, displayFormat, value));
    const [error, setError] = useState(false);
    const displayErrorMessage = typeof errorHandler === 'string';

    const id = useGeneratedId(inputId);

    useEffect(() => {
        if (error && typeof errorHandler === 'function') {
            errorHandler();
        }
    }, [error]);

    useEffect(() => {
        setInputText(dateToDisplayText(localeObject, displayFormat, value));
    }, [value, localeObject, displayFormat]);

    useEffect(() => {
        // after opening the datepicker, bring back focus to the input
        const target = inputRef.current && (inputRef.current.children[0] as HTMLInputElement);

        if (target && isFocused) {
            target.focus();
        }
    }, [isFocused]);

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

    return (
        <TetherComponent
            attachment="top left"
            targetAttachment="bottom left"
            constraints={[
                {
                    to: 'window',
                    attachment: 'together'
                }
            ]}
            renderTarget={(ref: MutableRefObject<HTMLDivElement>) => (
                <>
                    <Input
                        ref={element => {
                            inputRef.current = element;
                            // eslint-disable-next-line no-param-reassign
                            ref.current = element;
                        }}
                        id={id}
                        autoComplete="off"
                        className="startDate"
                        data-testid="start-date-input"
                        label={label}
                        placeholder={placeholder}
                        value={inputText}
                        onFocus={() => setIsFocused(true)}
                        onBlur={handleDatepickerClose}
                        onChange={handleDateTextChange}
                        data-error={error}
                        {...rest}
                    />
                    {displayErrorMessage && error && !isFocused && (
                        <HelperText mt="1">{errorHandler || `error (${displayFormat})`}</HelperText>
                    )}
                </>
            )}
            renderElement={(ref: MutableRefObject<HTMLDivElement>) =>
                isFocused && (
                    <Datepicker
                        ref={ref}
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
                )
            }
            style={{ zIndex: Elevation.DATEPICKER }}
        />
    );
};

export { DatepickerSingleInput, DatepickerSingleInputProps };
