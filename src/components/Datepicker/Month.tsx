import React, { FC } from 'react';
import { useMonth, FirstDayOfWeek } from '@datepicker-react/hooks';
import styled from 'styled-components';
import { format } from 'date-fns';

import { Colors } from '../../essentials';
import { Text } from '../Text/Text';
import { Day } from './Day';

const Weekdays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
    margin-bottom: 0.25rem;
`;

const DaysContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    justify-content: center;
    position: relative;

    grid-gap: 0.0625rem;
`;

interface MonthProps {
    year: number;
    month: number;
    firstDayOfWeek: FirstDayOfWeek;
    locale: Locale;
}

const Month: FC<MonthProps> = ({ year, month, firstDayOfWeek, locale }: MonthProps) => {
    const { days, weekdayLabels, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek,
        weekdayLabelFormat(date: Date): string {
            return format(date, 'eeeeee', { locale });
        },
        monthLabelFormat(date: Date): string {
            return format(date, 'MMMM yyyy', { locale });
        }
    });

    return (
        <div>
            <Text as="p" fontWeight="bold" mb={2} textAlign="center">
                {monthLabel}
            </Text>
            <Weekdays>
                {weekdayLabels.map(dayLabel => (
                    <Text as="p" key={dayLabel} fontSize={0} textAlign="center" color={Colors.AUTHENTIC_BLUE_550}>
                        {dayLabel}
                    </Text>
                ))}
            </Weekdays>
            <DaysContainer>
                {days.map(day => {
                    if (typeof day === 'object') {
                        return <Day date={day.date} key={day.date.toString()} dayLabel={day.dayLabel} />;
                    }

                    return <div key={day} />;
                })}
            </DaysContainer>
        </div>
    );
};

export { Month };
