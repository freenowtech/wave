import React, { FC } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Text } from '../../Text/Text';
import { MonthButton } from './MonthButton';

const MonthGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
`;

const YearSection = styled.div`
    flex: 1;
`;

export interface MonthCalendarProps {
    year: number;
    onClick: (monthIndex: number, year: number) => void;
    onHover: (monthIndex: number, year: number) => void;
    isMonthDisabled: (year: number, month: number) => boolean;
    isInRange: (date: Date) => boolean;
    isSelectedStartOrEnd: (date: Date) => boolean;
    locale: Locale;
}

export const MonthCalendar: FC<MonthCalendarProps> = ({
    year,
    onClick,
    onHover,
    isMonthDisabled,
    isSelectedStartOrEnd,
    isInRange,
    locale
}) => (
    <YearSection>
        <Text as="p" fontWeight="bold" mb={2} textAlign="center">
            {year}
        </Text>
        <MonthGrid>
            {Array.from({ length: 12 }).map((_, index) => {
                const date = new Date(year, index, 1);
                const monthName = format(date, 'MMM', { locale });
                const isDisabled = isMonthDisabled(year, index);

                return (
                    <MonthButton
                        key={monthName}
                        onClick={() => onClick(index, year)}
                        onMouseEnter={() => onHover(index, year)}
                        disabled={isDisabled}
                        isInRange={isInRange(date)}
                        isSelectedStartOrEnd={isSelectedStartOrEnd(date)}
                        aria-label={`${monthName} ${year}`}
                        aria-pressed={isSelectedStartOrEnd(date)}
                    >
                        {monthName}
                    </MonthButton>
                );
            })}
        </MonthGrid>
    </YearSection>
);
