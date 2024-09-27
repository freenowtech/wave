import React, { ReactElement } from 'react';
import {
    Calendar as BaseCalendar,
    CalendarProps as BaseCalendarProps,
    CalendarCell,
    CalendarGrid as BaseCalendarGrid,
    CalendarGridHeader,
    CalendarGridBody,
    CalendarHeaderCell,
    Heading as BaseHeading,
    DateValue,
    Button as BaseButton
} from 'react-aria-components';
import styled from 'styled-components';
import ChevronLeftIcon from '../../../icons/arrows/ChevronLeftIcon';
import ChevronRightIcon from '../../../icons/arrows/ChevronRightIcon';
import { getSemanticValue } from '../../../essentials/experimental';
import { textStyles } from '../Text/Text';
import { get } from '../../../utils/experimental/themeGet';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${get('space.3')};
`;

const Button = styled(BaseButton)`
    appearance: none;
    background: none;
    border: none;
    display: flex;
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: ${getSemanticValue('on-surface')};
    outline: 0;

    &[data-focused] {
        color: ${getSemanticValue('accent')};
    }

    &[data-disabled] {
        opacity: 0;
    }
`;

const Heading = styled(BaseHeading)`
    margin: 0;
    color: ${getSemanticValue('on-surface')};
    ${textStyles.variants.title2}
`;

const CalendarGrid = styled(BaseCalendarGrid)`
    border-collapse: collapse;
    border-spacing: 0;

    td {
        padding: 0;
    }

    th {
        padding: 0 0 ${get('space.1')};
    }
`;

const WeekDay = styled(CalendarHeaderCell)`
    color: ${getSemanticValue('on-surface')};
    ${textStyles.variants.label2}
`;

const Day = styled(CalendarCell)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${getSemanticValue('on-surface')};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    ${textStyles.variants.label2}
    transition: background ease 200ms;

    &[data-focused] {
        outline: ${getSemanticValue('accent')} solid 0.125rem;
    }

    &[data-hovered] {
        cursor: pointer;
        background: ${getSemanticValue('surface-variant')};
    }

    &[data-selected] {
        outline: 0;
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
    }

    &[data-disabled] {
        opacity: 0.38;
    }

    &[data-outside-month] {
        opacity: 0;
    }
`;

type CalendarProps = BaseCalendarProps<DateValue>;

function Calendar({ value, minValue, defaultValue, maxValue, onChange, ...props }: CalendarProps): ReactElement {
    return (
        <BaseCalendar {...props}>
            <Header>
                <Button slot="previous">
                    <ChevronLeftIcon size={24} />
                </Button>
                <Heading />
                <Button slot="next">
                    <ChevronRightIcon size={24} />
                </Button>
            </Header>
            <CalendarGrid weekdayStyle="short">
                <CalendarGridHeader>{weekDay => <WeekDay>{weekDay}</WeekDay>}</CalendarGridHeader>
                <CalendarGridBody>
                    {date => (
                        <Day date={date}>
                            {({ formattedDate }) => (formattedDate.length > 1 ? formattedDate : `0${formattedDate}`)}
                        </Day>
                    )}
                </CalendarGridBody>
            </CalendarGrid>
        </BaseCalendar>
    );
}

export { Calendar };
