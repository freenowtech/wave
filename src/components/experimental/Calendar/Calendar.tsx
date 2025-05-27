import React, { ReactElement } from 'react';
import {
    Calendar as BaseCalendar,
    CalendarProps as BaseCalendarProps,
    RangeCalendarProps,
    CalendarGridHeader,
    CalendarGridBody,
    DateValue,
    RangeCalendar
} from 'react-aria-components';
import ChevronLeftIcon from '../../../icons/arrows/ChevronLeftIcon';
import ChevronRightIcon from '../../../icons/arrows/ChevronRightIcon';

import * as Styled from './Calendar.styled';

type CalendarProps = { visibleMonths?: 1 | 2 | 3 } & (
    | ({ selectionType?: 'single' } & Omit<BaseCalendarProps<DateValue>, 'visibleDuration'>)
    | ({ selectionType: 'range' } & Omit<RangeCalendarProps<DateValue>, 'visibleDuration'>)
);

function Calendar({
    value,
    minValue,
    defaultValue,
    maxValue,
    onChange,
    selectionType = 'single',
    visibleMonths = 1,
    ...props
}: CalendarProps): ReactElement {
    const calendarInner = (
        <>
            <Styled.Header>
                <Styled.Button slot="previous">
                    <ChevronLeftIcon size={24} />
                </Styled.Button>
                <Styled.Heading />
                <Styled.Button slot="next">
                    <ChevronRightIcon size={24} />
                </Styled.Button>
            </Styled.Header>
            <Styled.MonthGrid>
                {Array.from({ length: visibleMonths }).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Styled.CalendarGrid weekdayStyle="short" key={`month_${index}`} offset={{ months: index }}>
                        <CalendarGridHeader>{weekDay => <Styled.WeekDay>{weekDay}</Styled.WeekDay>}</CalendarGridHeader>
                        <CalendarGridBody>
                            {date => (
                                <Styled.Day date={date}>
                                    {({ formattedDate }) =>
                                        formattedDate.length > 1 ? formattedDate : `0${formattedDate}`
                                    }
                                </Styled.Day>
                            )}
                        </CalendarGridBody>
                    </Styled.CalendarGrid>
                ))}
            </Styled.MonthGrid>
        </>
    );

    if (selectionType === 'single') {
        return (
            <BaseCalendar
                {...(props as BaseCalendarProps<DateValue>)}
                visibleDuration={{ months: visibleMonths }}
                data-selection-type="single"
            >
                {calendarInner}
            </BaseCalendar>
        );
    }

    return (
        <RangeCalendar
            {...(props as RangeCalendarProps<DateValue>)}
            visibleDuration={{ months: visibleMonths }}
            data-selection-type="range"
        >
            {calendarInner}
        </RangeCalendar>
    );
}

export { Calendar };
