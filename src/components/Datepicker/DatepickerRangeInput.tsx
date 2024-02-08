import { END_DATE, FirstDayOfWeek, FocusedInput, START_DATE } from '@datepicker-react/hooks';
import { compareDesc, Locale, parse, startOfDay, endOfDay } from 'date-fns';
import React, { ChangeEventHandler, FC, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';
import { MediaQueries } from '../../essentials';
import { theme } from '../../essentials/theme';
import { getSemanticValue } from '../../utils/cssVariables';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { ChevronRightIcon } from '../../icons';
import { Input } from '../Input/Input';

import { Datepicker } from './Datepicker';
import { isValidDateText } from './utils/isValidDateText';
import { HelperText } from '../HelperText/HelperText';
import { dateToDisplayText } from './utils/dateToDisplayText';
import { useLocaleObject } from './utils/useLocaleObject';
import { useOnChange } from './utils/useOnChange';
import { Arrow, DatepickerContentContainer } from './DatepickerContentElements';
import { DarkScheme, LightScheme } from '../ColorScheme';
import { useClosestColorScheme } from '../../utils/hooks/useClosestColorScheme';

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
            border-color: ${getSemanticValue('border-neutral-default')};
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
    background: ${getSemanticValue('background-element-info-emphasized')};
    height: 0.25rem;
    width: calc(50% - 1.5rem);

    position: absolute;
    bottom: 0;
    left: 0.75rem;
`;

const EndDateFocusedBlock = styled.div`
    background: ${getSemanticValue('background-element-info-emphasized')};
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
     * @default 1
     */
    firstDayOfWeek?: FirstDayOfWeek;
    /**
     * Function that runs for each date and returns boolean whether date is disabled or not.
     * @default () => false
     */
    isDateBlocked?: (date: Date) => boolean;
    /**
     * Used to align the datepicker in relation to input.
     * Default: left
     */
    placement?: 'left' | 'right' | 'center';
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
     * Show two (`'normal'`) or one (`'compact'`) month in the datepicker
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

type DatepickerPopperPlacement = 'bottom-end' | 'bottom-start' | 'bottom';

const PLACEMENT_TO_POPPER_PLACEMENT_MAP: {
    [key in DatepickerRangeInputProps['placement']]: DatepickerPopperPlacement;
} = {
    center: 'bottom',
    left: 'bottom-start',
    right: 'bottom-end'
};

const mapPlacementToPopperPlacement = (placement: DatepickerRangeInputProps['placement']) =>
    PLACEMENT_TO_POPPER_PLACEMENT_MAP[placement];

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
}) => {
    const [triggerReference, setTriggerReference] = useState(undefined);
    const [contentReference, setContentReference] = useState(undefined);
    const [arrowReference, setArrowReference] = useState(undefined);

    const localeObject = useLocaleObject(locale);
    const startDateRef = useRef<HTMLInputElement>();
    const endDateRef = useRef<HTMLInputElement>();
    // eslint-disable-next-line unicorn/no-null
    const [focusedInput, setFocusedInput] = useState<FocusedInput>(null);
    const [inputText, setInputText] = useState<DateRangeInputText>(
        dateRangeToDisplayText(localeObject, displayFormat, value)
    );
    const [error, setError] = useState({ startDate: false, endDate: false });
    const displayErrorMessage = typeof errorHandler === 'string';

    const mappedPlacement = mapPlacementToPopperPlacement(placement);

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement: mappedPlacement,
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
                if (startDateRef?.current) startDateRef.current.focus();

                break;
            }
            case END_DATE: {
                if (endDateRef?.current) endDateRef.current.focus();

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

    const PortalWrapper = useMemo(() => {
        if (!enforcedColorScheme) return React.Fragment;
        return enforcedColorScheme === 'light' ? LightScheme : DarkScheme;
    }, [enforcedColorScheme]);

    return (
        <>
            <DateRangeWrapper ref={setTriggerReference} {...rest}>
                <Input
                    id={startId}
                    ref={startDateRef}
                    autoComplete="off"
                    className="startDate"
                    data-testid="start-date-input"
                    label={label}
                    placeholder={startPlaceholder}
                    onFocus={() => setFocusedInput(START_DATE)}
                    // eslint-disable-next-line unicorn/no-null
                    onBlur={() => setFocusedInput(null)}
                    value={inputText.startText}
                    width="100%"
                    onChange={handleStartDateInputChange}
                    data-error={error.startDate}
                    disabled={disabled}
                />
                {focusedInput === START_DATE && <StartDateFocusedBlock />}
                <DateArrow
                    color={getSemanticValue(disabled ? 'foreground-disabled' : 'foreground-neutral-emphasized')}
                />
                <Input
                    id={endId}
                    ref={endDateRef}
                    tabIndex={!inputText.startText ? -1 : 0}
                    autoComplete="off"
                    className="endDate"
                    data-testid="end-date-input"
                    placeholder={endPlaceholder}
                    onFocus={() => setFocusedInput(!value.startDate ? START_DATE : END_DATE)}
                    // eslint-disable-next-line unicorn/no-null
                    onBlur={() => setFocusedInput(null)}
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
            {focusedInput &&
                createPortal(
                    <PortalWrapper>
                        <DatepickerContentContainer
                            ref={setContentReference}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            <Arrow ref={setArrowReference} style={styles.arrow} {...attributes.arrow} />
                            <Datepicker
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
                        </DatepickerContentContainer>
                    </PortalWrapper>,
                    document.body
                )}
        </>
    );
};

export { DatepickerRangeInput, DatepickerRangeInputProps };
