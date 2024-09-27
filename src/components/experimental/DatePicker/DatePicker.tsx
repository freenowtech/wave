import React, { ReactElement } from 'react';
import {
    DatePicker as BaseDatePicker,
    DatePickerProps as BaseDatePickerProps,
    DateValue,
    Group
} from 'react-aria-components';
import styled from 'styled-components';
import { DropdownSelectIcon, DropupSelectIcon } from '../../../icons';
import { CalendarTodayOutlineIcon } from '../../../icons/experimental';
import { Calendar } from '../Calendar/Calendar';
import { Popover } from '../Popover/Popover';
import { DateField } from '../DateField/DateField';
import { Button } from '../Field/Button';
import { FieldProps } from '../Field/Props';

interface DatePickerProps extends Pick<FieldProps, 'description' | 'errorMessage'>, BaseDatePickerProps<DateValue> {
    label: string;
}

const StyledPopover = styled(Popover)`
    padding: 1.5rem;
    border-radius: 1.5rem;
`;

function DatePicker({ label, onChange, description, errorMessage, ...props }: DatePickerProps): ReactElement {
    const [isOpen, setIsOpen] = React.useState(false);
    const positionRef = React.useRef(null);
    const triggerRef = React.useRef(null);

    const handleCalendarChange = React.useCallback(
        (calendarDate: DateValue) => {
            if (onChange) {
                onChange(calendarDate);
            }
            setIsOpen(false);
        },
        [onChange]
    );

    const toggleOpen = React.useCallback(() => setIsOpen(v => !v), []);

    return (
        <BaseDatePicker onChange={handleCalendarChange} aria-label={label} {...props} ref={positionRef}>
            <Group>
                <DateField
                    label={label}
                    description={description}
                    errorMessage={errorMessage}
                    isVisuallyFocused={isOpen}
                    leadingIcon={<CalendarTodayOutlineIcon size={24} />}
                    actionIcon={
                        <Button ref={triggerRef} onPress={toggleOpen}>
                            {isOpen ? <DropupSelectIcon size={24} /> : <DropdownSelectIcon size={24} />}
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
                <Calendar />
            </StyledPopover>
        </BaseDatePicker>
    );
}

export { DatePicker };
