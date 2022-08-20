import { END_DATE, FirstDayOfWeek, FocusedInput, START_DATE } from '@datepicker-react/hooks';
import { compareDesc, Locale, parse, startOfDay, endOfDay } from 'date-fns';
import React, { ChangeEventHandler, FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import TetherComponent from 'react-tether';
import styled from 'styled-components';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { Colors, Elevation, MediaQueries } from '../../essentials';
import { theme } from '../../essentials/theme';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { ChevronRightIcon } from '../../icons';
import { Input } from '../Input/Input';

import { Datepicker } from './Datepicker';
import { isValidDateText } from './utils/isValidDateText';
import { HelperText } from '../HelperText/HelperText';
import { dateToDisplayText } from './utils/dateToDisplayText';
import { useLocaleObject } from './utils/useLocaleObject';
import { useOnChange } from './utils/useOnChange';

type DateRangerProps = MarginProps & WidthProps;

const DateRangeWrapper = styled.div.attrs({ theme })<DateRangerProps>`
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 0;
    width: 100%;

    input {
        &:focus,
        &:active {
            box-shadow: none;
            border-color: ${Colors.AUTHENTIC_BLUE_200};
        }
    }

    .startDate input {
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        text-align: center;
    }

    .endDate input {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        text-align: center;
    }

    ${MediaQueries.small} {
        width: 14rem;

        .startDate input,
        .endDate input {
            text-align: left;
        }
    }

    ${compose(margin, width)}
`;

const DateArrow = styled(ChevronRightIcon)`
    position: absolute;
    left: calc(50% - 0.75rem);
    z-index: 1;
`;

const StartDateFocusedBlock = styled.div`
    background: ${Colors.ACTION_BLUE_900};
    height: 0.25rem;
    width: calc(50% - 1.5rem);

    position: absolute;
    bottom: 0;
    left: 0.75rem;
`;

const EndDateFocusedBlock = styled.div`
    background: ${Colors.ACTION_BLUE_900};
    height: 0.25rem;
    width: calc(50% - 1.5rem);

    position: absolute;
    bottom: 0;
    right: 0.75rem;
`;

export interface DateRange {
    startDate?: Date;
    endDate?: Date;
}

interface DatepickerRangeInputProps extends MarginProps, WidthProps {
    /**
     * Placeholder for start date.
     */
    startPlaceholder?: string;
    /**
     * Placeholder for end date.
     */
    endPlaceholder?: string;
    /**
     * Label for the input.
     */
    label?: string;
    /**
     * Function that is used when datepicker closes without selected date.
     */
    onClose?: () => void;
    /**
     * Set the value for the date
     */
    value?: DateRange;
    /**
     * Function that is used when datepicker selects new date.
     */
    onChange?: (change: DateRange) => void;
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
     * Used to align the datepicker in relation to input.
     * Default: left
     */
    placement?: 'left' | 'right' | 'center';
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
     * Text to be shown if error filling the input
     * or fn to be trigger as a callback when error
     */
    errorHandler?: (() => void) | string;
    /**
     * The id to be assigned to the start date input
     */
    startInputId?: string;
    /**
     * The id to be assigned to the end date input
     */
    endInputId?: string;
    /**
     * Determines the variant
     * @value `'compact'` displays only a single month
     * @default 'normal'
     */
    variant?: 'compact' | 'normal';
    /**
     * Determines whether the datePicker is disabled or not
     */
    disabled?: boolean;
}

interface DateRangeInputText {
    startText: string;
    endText: string;
}

const dateRangeToDisplayText = (locale: Locale, displayFormat?: string, dateRange?: DateRange): DateRangeInputText => {
    if (!dateRange) {
        return {
            startText: '',
            endText: ''
        };
    }

    return {
        startText: dateToDisplayText(locale, displayFormat, dateRange.startDate),
        endText: dateToDisplayText(locale, displayFormat, dateRange.endDate)
    };
};

// https://date-fns.org/v2.12.0/docs/compareDesc
const isValidRange = (startDate, endDate) => {
    if (startDate && endDate) {
        return compareDesc(startDate, endDate) >= 0;
    }

    // Range remains valid until both values of the range are set
    return true;
};

const DatepickerRangeInput: FC<DatepickerRangeInputProps> = ({
    minDate,
    maxDate,
    firstDayOfWeek,
    isDateBlocked,
    onClose,
    startPlaceholder,
    endPlaceholder,
    placement = 'left',
    label,
    onChange,
    displayFormat = 'dd/MM/yyyy',
    locale = 'en-US',
    value = {},
    errorHandler,
    startInputId,
    endInputId,
    variant = 'normal',
    disabled,
    ...rest
}: DatepickerRangeInputProps) => {
    const localeObject = useLocaleObject(locale);
    const startDateRef = useRef<HTMLInputElement>();
    const endDateRef = useRef<HTMLInputElement>();
    const [focusedInput, setFocusedInput] = useState<FocusedInput>();
    const [inputText, setInputText] = useState<DateRangeInputText>(
        dateRangeToDisplayText(localeObject, displayFormat, value)
    );
    const [error, setError] = useState({ startDate: false, endDate: false });
    const displayErrorMessage = typeof errorHandler === 'string';

    const startId = useGeneratedId(startInputId);
    const endId = useGeneratedId(endInputId);

    useEffect(() => {
        if (!focusedInput && (error.startDate || error.endDate) && typeof errorHandler === 'function') {
            errorHandler();
        }
    }, [error.startDate, error.endDate, focusedInput]);

    useEffect(() => {
        setInputText(dateRangeToDisplayText(localeObject, displayFormat, value));
    }, [value.startDate, value.endDate, displayFormat, localeObject]);

    useEffect(() => {
        // when the datepicker is open, bring focus to correct input

        switch (focusedInput) {
            case START_DATE: {
                const startInputTarget = startDateRef.current && (startDateRef.current.children[0] as HTMLInputElement);

                if (startInputTarget) {
                    startInputTarget.focus();
                }

                break;
            }
            case END_DATE: {
                const endInputTarget = endDateRef.current && (endDateRef.current.children[0] as HTMLInputElement);

                if (endInputTarget) {
                    endInputTarget.focus();
                }

                break;
            }
            default:
                break;
        }
    }, [focusedInput]);

    useOnChange(newFocusedInput => {
        if (!newFocusedInput && onClose) {
            onClose();
        }
    }, focusedInput);

    const handleDateChange = (startDate?: Date, endDate?: Date) => {
        if (onChange) {
            onChange({ startDate: startDate && startOfDay(startDate), endDate: endDate && endOfDay(endDate) });
        }
    };

    const handleStartDateInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value: inputValue } }) => {
        setInputText({
            startText: inputValue,
            endText: inputText.endText
        });

        const parsedDate = inputValue === '' ? undefined : parse(inputValue, displayFormat, new Date());
        const validDate = isValidDateText(parsedDate, inputValue, displayFormat);
        const validRange = isValidRange(parsedDate, value.endDate);
        const hasError = (!!inputValue && !validDate) || !validRange;

        if (!hasError) {
            handleDateChange(parsedDate, value.endDate);
        }

        setError(state => ({
            ...state,
            startDate: hasError
        }));
    };

    const handleEndDateInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value: inputValue } }) => {
        setInputText({
            startText: inputText.startText,
            endText: inputValue
        });

        const parsedDate = inputValue === '' ? undefined : parse(inputValue, displayFormat, new Date());
        const validDate = isValidDateText(parsedDate, inputValue, displayFormat);
        const validRange = isValidRange(value.startDate, parsedDate);
        const hasError = (!!inputValue && !validDate) || !validRange;

        if (!hasError) {
            handleDateChange(value.startDate, parsedDate);
        }

        setError(state => ({
            ...state,
            endDate: hasError
        }));
    };

    return (
        <TetherComponent
            attachment={`top ${placement}`}
            targetAttachment={`bottom ${placement}`}
            constraints={[
                {
                    to: 'window',
                    attachment: 'together'
                }
            ]}
            renderTarget={(ref: MutableRefObject<HTMLDivElement>) => (
                <>
                    <DateRangeWrapper ref={ref} {...rest}>
                        <Input
                            id={startId}
                            ref={startDateRef}
                            autoComplete="off"
                            className="startDate"
                            data-testid="start-date-input"
                            label={label}
                            placeholder={startPlaceholder}
                            onFocus={() => setFocusedInput(START_DATE)}
                            onBlur={() => setFocusedInput(undefined)}
                            value={inputText.startText}
                            width="100%"
                            onChange={handleStartDateInputChange}
                            data-error={error.startDate}
                            disabled={disabled}
                        />
                        {focusedInput === START_DATE && <StartDateFocusedBlock />}
                        <DateArrow color={disabled ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550} />
                        <Input
                            id={endId}
                            ref={endDateRef}
                            tabIndex={!inputText.startText ? -1 : 0}
                            autoComplete="off"
                            className="endDate"
                            data-testid="end-date-input"
                            placeholder={endPlaceholder}
                            onFocus={() => setFocusedInput(!value.startDate ? START_DATE : END_DATE)}
                            onBlur={() => setFocusedInput(undefined)}
                            value={inputText.endText}
                            onChange={handleEndDateInputChange}
                            width="100%"
                            data-error={error.endDate}
                            disabled={disabled}
                        />
                        {focusedInput === END_DATE && <EndDateFocusedBlock />}
                    </DateRangeWrapper>
                    {displayErrorMessage && (error.startDate || error.endDate) && !focusedInput && (
                        <HelperText mt="1">{errorHandler || `error (${displayFormat})`}</HelperText>
                    )}
                </>
            )}
            renderElement={(ref: MutableRefObject<HTMLDivElement>) =>
                focusedInput && (
                    <Datepicker
                        ref={ref}
                        // TODO: refer to https://stash.intapps.it/projects/DS/repos/wave/pull-requests/104/overview?commentId=168382
                        numberOfMonths={variant === 'normal' && window.innerWidth >= 768 ? 2 : 1}
                        minBookingDays={1}
                        startDate={value.startDate}
                        endDate={value.endDate}
                        minBookingDate={minDate}
                        maxBookingDate={maxDate}
                        firstDayOfWeek={firstDayOfWeek}
                        focusedInput={focusedInput}
                        onDatesChange={({ focusedInput: focusedValue, startDate, endDate }) => {
                            setFocusedInput(focusedValue);
                            handleDateChange(startDate || undefined, endDate || undefined);
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

export { DatepickerRangeInput, DatepickerRangeInputProps };
