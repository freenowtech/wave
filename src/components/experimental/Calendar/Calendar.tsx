import React, { useRef, useEffect } from 'react';
import { DayPicker, DayButton, getDefaultClassNames } from 'react-day-picker';
import { format } from 'date-fns';
import ChevronLeftIcon from '../../../icons/arrows/ChevronLeftIcon';
import ChevronRightIcon from '../../../icons/arrows/ChevronRightIcon';

import * as Styled from './Calendar.styled';

type Props = React.ComponentProps<Exclude<typeof DayPicker, 'mode' | 'classNames'>> & {
    selectionType?: 'single' | 'range' | 'multiple';
    visibleMonths?: 1 | 2 | 3;
    internalClassNames?: React.ComponentProps<typeof DayPicker>['classNames'];
};

function Calendar({
    className,
    internalClassNames,
    components,
    selectionType = 'single',
    visibleMonths = 1,
    captionLayout = 'label',
    weekStartsOn = 1
}: Props) {
    const defaults = getDefaultClassNames();

    const common = {
        showOutsideDays: false,
        numberOfMonths: visibleMonths,
        weekStartsOn,
        captionLayout,
        formatters: {
            formatWeekdayName: (date, options?: { locale }) => format(date, 'eee', { locale: options?.locale })
        },
        classNames: {
            ...defaults,
            ...internalClassNames
        },
        components: {
            Chevron: ({ orientation, ...p }: { orientation?: 'left' | 'right' }) => {
                if (orientation === 'left') return <ChevronLeftIcon size={24} {...p} />;
                if (orientation === 'right') return <ChevronRightIcon size={24} {...p} />;
                return null as unknown as React.ReactElement;
            },
            DayButton: CalendarDayButton,
            ...components
        }
    } satisfies Omit<React.ComponentProps<typeof DayPicker>, 'mode'>;

    const modeProps = (() => {
        switch (selectionType) {
            case 'range':
                return { mode: 'range' } as const;
            case 'multiple':
                return { mode: 'multiple' } as const;
            default:
                return { mode: 'single' } as const;
        }
    })();

    return (
        <Styled.Container className={className}>
            <DayPicker {...common} {...modeProps} />
        </Styled.Container>
    );
}

function CalendarDayButton({ day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
    const ref = useRef<HTMLButtonElement>(null);
    const defaults = getDefaultClassNames();

    useEffect(() => {
        if (modifiers.focused) {
            ref.current?.focus();
        }
    }, [modifiers.focused]);

    const dayNumber = day.date.getDate().toString().padStart(2, '0');

    return (
        <Styled.DayButton
            ref={ref}
            data-day={day.date.toLocaleDateString()}
            data-selected-single={
                modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle
            }
            data-selected-multiple={
                modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle
            }
            data-selected={modifiers.selected}
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

export { Calendar };
