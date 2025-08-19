import React from 'react';
import { DayPicker, DayButton, getDefaultClassNames } from 'react-day-picker';
import ChevronLeftIcon from '../../../icons/arrows/ChevronLeftIcon';
import ChevronRightIcon from '../../../icons/arrows/ChevronRightIcon';

import * as Styled from './Calendar.styled';

type Props = React.ComponentProps<typeof DayPicker> & {
    selectionType?: 'single' | 'range';
    visibleMonths?: 1 | 2 | 3;
};

function Calendar({
    className,
    classNames,
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
        classNames: {
            root: defaults.root,
            months: defaults.months,
            month: defaults.month,
            nav: defaults.nav,
            button_previous: defaults.button_previous,
            button_next: defaults.button_next,
            month_caption: defaults.month_caption,
            dropdowns: defaults.dropdowns,
            dropdown_root: defaults.dropdown_root,
            dropdown: defaults.dropdown,
            caption_label: defaults.caption_label,
            weekdays: defaults.weekdays,
            weekday: defaults.weekday,
            week: defaults.week,
            week_number_header: defaults.week_number_header,
            week_number: defaults.week_number,
            day: defaults.day,
            // Include range classes always, harmless in single mode
            range_start: defaults.range_start,
            range_middle: defaults.range_middle,
            range_end: defaults.range_end,
            today: defaults.today,
            outside: defaults.outside,
            disabled: defaults.disabled,
            hidden: defaults.hidden,
            ...classNames
        },
        components: {
            Chevron: ({ orientation, ...p }: { orientation?: 'left' | 'right' }) => {
                if (orientation === 'left') return <ChevronLeftIcon size={24} {...p} />;
                if (orientation === 'right') return <ChevronRightIcon size={24} {...p} />;
                return null as unknown as React.ReactElement;
            },
            DayButton: (dpProps: React.ComponentProps<typeof DayButton>) => <Styled.DayButton {...dpProps} />,
            ...components
        }
    } satisfies Omit<React.ComponentProps<typeof DayPicker>, 'mode'>;

    return (
        <Styled.Container className={className}>
            <DayPicker
                {...common}
                {...(selectionType === 'range' ? ({ mode: 'range' } as const) : ({ mode: 'single' } as const))}
            />
        </Styled.Container>
    );
}

export { Calendar };
