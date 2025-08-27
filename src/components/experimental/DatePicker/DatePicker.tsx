import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    DatePicker as BaseDatePicker,
    DatePickerProps as BaseDatePickerProps,
    DateValue,
    Group
} from 'react-aria-components';
import styled from 'styled-components';
import { CalendarDate } from '@internationalized/date';
import { DropdownSelectIcon, DropupSelectIcon } from '../../../icons';
import { CalendarTodayOutlineIcon } from '../../../icons/experimental';
import { Calendar } from '../Calendar/Calendar';
import { FocusTrap, Popover } from '../Popover/Popover';
import { DateField } from '../DateField/DateField';
import { Button } from '../Field/Button';
import { FieldProps } from '../Field/Props';

function dateValueToDate(dateValue: DateValue | null | undefined): Date | undefined {
    if (!dateValue) return undefined;
    if (typeof dateValue === 'object' && 'toDate' in dateValue && typeof dateValue.toDate === 'function')
        return dateValue.toDate('UTC');
    if (typeof dateValue === 'object' && 'year' in dateValue && 'month' in dateValue && 'day' in dateValue)
        return new Date(dateValue.year, dateValue.month - 1, dateValue.day);
    return undefined;
}

function dateToDateValue(date: Date | undefined): DateValue | null {
    if (!date) return null;
    return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

interface DatePickerProps extends Pick<FieldProps, 'description' | 'errorMessage'>, BaseDatePickerProps<DateValue> {
    label?: string;
}

const StyledPopover = styled(Popover)`
    padding: 1.5rem;
    border-radius: 1.5rem;
`;

function DatePicker({
    label,
    onChange,
    description,
    errorMessage,
    value,
    defaultValue,
    ...props
}: DatePickerProps): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<DateValue | null>(value || defaultValue || null);
    const positionRef = useRef(null);
    const triggerRef = useRef(null);

    const currentValue = value !== undefined ? value : internalValue;

    const selectedDate = useMemo(() => dateValueToDate(currentValue), [currentValue]);

    const handleCalendarChange = useCallback(
        (date: Date | undefined) => {
            const dateValue = dateToDateValue(date);
            if (value === undefined) setInternalValue(dateValue);
            onChange?.(dateValue);
            setIsOpen(false);
        },
        [onChange, value]
    );

    const handleDateFieldChange = useCallback(
        (dateValue: DateValue) => {
            if (value === undefined) setInternalValue(dateValue);
            onChange?.(dateValue);
        },
        [onChange, value]
    );

    const toggleOpen = useCallback(() => setIsOpen(v => !v), []);

    useEffect(() => {
        if (value !== undefined) setInternalValue(value);
    }, [value]);

    return (
        <BaseDatePicker
            onChange={handleDateFieldChange}
            aria-label={label}
            value={currentValue}
            {...props}
            ref={positionRef}
        >
            <Group>
                <DateField
                    label={label}
                    description={description}
                    errorMessage={errorMessage}
                    isVisuallyFocused={isOpen}
                    leadingIcon={<CalendarTodayOutlineIcon />}
                    actionIcon={
                        <Button ref={triggerRef} onPress={toggleOpen}>
                            {isOpen ? <DropupSelectIcon /> : <DropdownSelectIcon />}
                        </Button>
                    }
                />
            </Group>

            <StyledPopover
                placement="bottom left"
                offset={0}
                triggerRef={positionRef}
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                shouldCloseOnInteractOutside={element => element !== triggerRef.current}
            >
                <FocusTrap>
                    <Calendar selected={selectedDate} onSelect={handleCalendarChange} selectionType="single" />
                </FocusTrap>
            </StyledPopover>
        </BaseDatePicker>
    );
}

export { DatePicker };
