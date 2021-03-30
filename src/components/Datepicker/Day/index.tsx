import React, { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';

import { DatepickerContext } from '../DatepickerContext';
import { DayButton } from './DayButton';

interface DayProps {
    dayLabel: string;
    date: Date;
}

const Day = ({ dayLabel, date }: DayProps) => {
    const dayRef = useRef<HTMLButtonElement>(null);
    const datepickerContext = useContext(DatepickerContext);
    const dayProps = useDay({
        date,
        dayRef,
        ...datepickerContext,
        // This overwrite prevent undesired @datepicker-react behavior to set focus on selected day button when calendar is open.
        // The Wave's behavior is to keep focus on input element. When focus is moved out of the input, the calendar collapses.
        isDateFocused: () => false
    });

    // Even if dayLabel is missing we need to render a div to have consistent grid of 7 elements
    if (!dayLabel) {
        return <div />;
    }

    return (
        <DayButton ref={dayRef} {...dayProps}>
            {dayLabel}
        </DayButton>
    );
};

export { Day };
