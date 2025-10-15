import React, { useRef, useEffect, useContext } from 'react';
import { DayButton as RdpDayButton, getDefaultClassNames } from 'react-day-picker';
import * as Styled from './Calendar.styled';
import { SelectionTypeContext } from './Calendar.context';

type CalendarDayButtonProps = React.ComponentProps<typeof RdpDayButton>;

function CalendarDayButtonBase({ day, modifiers, ...props }: CalendarDayButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const defaults = getDefaultClassNames();
    const selectionType = useContext(SelectionTypeContext);

    useEffect(() => {
        if (modifiers.focused) ref.current?.focus();
    }, [modifiers.focused]);

    const dayNumber = day.date.getDate().toString().padStart(2, '0');
    const isSelectedPlain =
        modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle;

    return (
        <Styled.DayButton
            ref={ref}
            data-day={day.date.toLocaleDateString()}
            data-selected={modifiers.selected}
            data-selected-single={selectionType === 'single' && isSelectedPlain}
            data-selected-multiple={selectionType === 'multiple' && modifiers.selected}
            data-today={modifiers.today}
            data-outside={modifiers.outside}
            data-disabled={modifiers.disabled}
            data-range-start={modifiers.range_start}
            data-range-end={modifiers.range_end && !modifiers.range_start}
            data-range-middle={modifiers.range_middle}
            data-focused={modifiers.focused}
            className={defaults.day_button}
            {...props}
        >
            {dayNumber}
        </Styled.DayButton>
    );
}

export const CalendarDayButton = React.memo(CalendarDayButtonBase);
CalendarDayButton.displayName = 'CalendarDayButton';
