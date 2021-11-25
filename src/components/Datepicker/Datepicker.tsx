import React, { FC, RefObject } from 'react';
import { useDatepicker, MonthType, UseDatepickerProps } from '@datepicker-react/hooks';
import styled from 'styled-components';

import { Colors, MediaQueries } from '../../essentials';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';
import { Month } from './Month';
import { DatepickerContext } from './DatepickerContext';
import { GlobalDatepickerStyle } from './GlobalDatepickerStyle';

const DatepickerWrapper = styled.div<{
    activeMonths: MonthType[];
}>`
    display: grid;
    grid-template-columns: repeat(${props => props.activeMonths.length}, 17.5625rem);
    grid-gap: 0 1.5rem;
    width: 100%;
`;

const DatepickerContainer = styled.div`
    display: flex;
    padding: 0.5rem;
    margin: 0.9375rem 0;
    margin-left: -0.5rem;
    box-shadow: 0 0 0.5rem 0.1875rem rgba(0, 0, 0, 0.08);

    position: relative;
    background: ${Colors.WHITE};

    &::before {
        content: '';
        position: absolute;
        transform: rotate(45deg);
        width: 1.25rem;
        height: 1.25rem;
        background: ${Colors.WHITE};
        box-shadow: -0.25rem -0.25rem 0.5rem -0.125rem rgba(0, 0, 0, 0.08);
    }

    ${MediaQueries.small} {
        padding: 1.5rem;
        margin-left: 0;
    }
`;

const Back = styled(ChevronLeftIcon)`
    position: absolute;
    left: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`;

const Forward = styled(ChevronRightIcon)`
    position: absolute;
    right: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`;

interface BaseDatepickerProps extends UseDatepickerProps {
    forwardedRef: RefObject<HTMLDivElement>;
    locale: Locale;
}

export const BaseDatepicker: FC<BaseDatepickerProps> = ({
    forwardedRef,
    focusedInput,
    locale,
    ...datepickerProps
}: BaseDatepickerProps) => {
    const {
        firstDayOfWeek,
        activeMonths,
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        isDateBlocked,
        isDateFocused,
        focusedDate,
        onDateHover,
        onDateSelect,
        onDateFocus,
        goToPreviousMonths,
        goToNextMonths
    } = useDatepicker({
        focusedInput,
        ...datepickerProps
    });

    return (
        <DatepickerContext.Provider
            value={{
                focusedDate,
                isDateFocused,
                isDateSelected,
                isDateHovered,
                isDateBlocked,
                isFirstOrLastSelectedDate,
                onDateSelect,
                onDateFocus,
                onDateHover
            }}
        >
            <GlobalDatepickerStyle />
            <DatepickerContainer
                ref={forwardedRef}
                onMouseDown={e => {
                    // Prevent mousedown event on Datepicker, so everything else dont lose focus
                    e.preventDefault();
                }}
            >
                <Back onClick={goToPreviousMonths} />
                <Forward onClick={goToNextMonths} />
                <DatepickerWrapper activeMonths={activeMonths}>
                    {activeMonths.map(monthInformation => (
                        <Month
                            key={`${monthInformation.year}-${monthInformation.month}`}
                            year={monthInformation.year}
                            month={monthInformation.month}
                            firstDayOfWeek={firstDayOfWeek}
                            locale={locale}
                        />
                    ))}
                </DatepickerWrapper>
            </DatepickerContainer>
        </DatepickerContext.Provider>
    );
};

export const Datepicker = React.forwardRef(
    (props: Omit<BaseDatepickerProps, 'forwardedRef'>, ref: RefObject<HTMLDivElement>) => (
        <BaseDatepicker {...props} forwardedRef={ref} />
    )
);
