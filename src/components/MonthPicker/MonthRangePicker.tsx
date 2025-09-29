import React, { useState, useEffect, useMemo, Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import { isBefore, isAfter, isSameMonth, startOfMonth, endOfMonth } from 'date-fns';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { dateToText, isBetween } from './utils';
import { Input } from '../Input/Input';
import { MonthCalendar } from './MonthCalender/MonthCalender';
import { theme } from '../../essentials/theme';
import { getSemanticValue } from '../../utils/cssVariables';
import { MediaQueries } from '../../essentials';
import { useClosestColorScheme } from '../../utils/hooks/useClosestColorScheme';
import { DarkScheme, LightScheme } from '../ColorScheme';
import { Arrow, MonthPickerContentContainer } from './MonthPickerContentElements';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';
import { useLocaleObject } from '../Datepicker/utils/useLocaleObject';

type FocusedInput = 'start' | 'end' | null;

const Wrapper = styled.div.attrs({ theme })<MarginProps & WidthProps>`
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 0;
    width: 100%;

    input {
        &:focus,
        &:active {
            box-shadow: none;
            border-color: ${getSemanticValue('border-neutral-default')};
        }
    }

    ${MediaQueries.small} {
        width: 14rem;

        .startDate input,
        .endDate input {
            text-align: left;
        }
    }

    ${compose(margin, width)}
`;

const NavButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

const YearGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 17.5625rem);
    grid-gap: 0 1.5rem;
    width: 100%;
`;

const Back = styled(NavButton)`
    left: 1.5rem;
`;

const Forward = styled(NavButton)`
    right: 1.5rem;
`;

export interface MonthRangePickerProps extends MarginProps, WidthProps {
    onRangeSelect?: (start: Date | null, end: Date | null) => void;
    minMonth?: Date;
    maxMonth?: Date;
    value?: { start?: Date | null; end?: Date | null } | null;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    placement?: 'left' | 'right' | 'center';
    locale?: string;
}

type DatepickerPopperPlacement = 'bottom-end' | 'bottom-start' | 'bottom';

const PLACEMENT_TO_POPPER_PLACEMENT_MAP: {
    [key in MonthRangePickerProps['placement']]: DatepickerPopperPlacement;
} = {
    center: 'bottom',
    left: 'bottom-start',
    right: 'bottom-end'
};

const mapPlacementToPopperPlacement = (placement: MonthRangePickerProps['placement']) =>
    PLACEMENT_TO_POPPER_PLACEMENT_MAP[placement];

export const MonthRangePicker: React.FC<MonthRangePickerProps> = ({
    onRangeSelect,
    minMonth,
    maxMonth,
    value,
    label,
    placeholder = 'Select a month range',
    disabled,
    placement = 'left',
    locale = 'en-US',
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [focusedInput, setFocusedInput] = useState<FocusedInput>(null);

    const [rangeStart, setRangeStart] = useState<Date | null>(null);
    const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
    const [hoveredMonth, setHoveredMonth] = useState<Date | null>(null);

    const [triggerReference, setTriggerReference] = useState<HTMLDivElement | null>(null);
    const [contentReference, setContentReference] = useState<HTMLDivElement | null>(null);
    const [arrowReference, setArrowReference] = useState(undefined);
    const localeObject = useLocaleObject(locale);

    const enforcedColorScheme = useClosestColorScheme(triggerReference);
    const mappedPlacement = mapPlacementToPopperPlacement(placement);

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement: mappedPlacement,
        modifiers: [
            {
                name: 'flip',
                enabled: true
            },
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [0, 15]
                }
            },
            {
                name: 'arrow',
                options: { element: arrowReference }
            }
        ]
    });

    useEffect(() => {
        const start = value?.start instanceof Date ? value.start : null;
        const end = value?.end instanceof Date ? value.end : null;
        setRangeStart(start ? startOfMonth(start) : null);
        setRangeEnd(end ? endOfMonth(end) : null);
    }, [value]);

    const inputText = useMemo(() => {
        if (rangeStart && rangeEnd) {
            return `${dateToText(rangeStart, localeObject)} - ${dateToText(rangeEnd, localeObject)}`;
        }
        return rangeStart ? `${dateToText(rangeStart, localeObject)} - ...` : '';
    }, [rangeStart, rangeEnd]);

    // Close the picker when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                triggerReference &&
                !triggerReference.contains(event.target as Node) &&
                contentReference &&
                !contentReference.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setFocusedInput(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [triggerReference, contentReference]);

    const handleMonthClick = (monthIndex: number, year: number) => {
        const clickedDate = startOfMonth(new Date(year, monthIndex, 1));
        if (focusedInput === 'start' || !rangeStart || (rangeStart && rangeEnd)) {
            setRangeStart(clickedDate);
            setRangeEnd(null);
            setFocusedInput('end');
            if (onRangeSelect) onRangeSelect(clickedDate, null);
        } else if (focusedInput === 'end') {
            let actualStart = rangeStart;
            let actualEnd = clickedDate;
            if (isBefore(clickedDate, rangeStart)) {
                actualStart = clickedDate;
                actualEnd = rangeStart;
            }
            const finalEndDate = endOfMonth(actualEnd);
            setRangeStart(actualStart);
            setRangeEnd(finalEndDate);
            if (onRangeSelect) onRangeSelect(actualStart, finalEndDate);
            setIsOpen(false);
            setFocusedInput(null);
        }
    };

    const handleMonthHover = (monthIndex: number, year: number) => {
        const hoveredDate = new Date(year, monthIndex, 1);

        if (rangeStart && !rangeEnd) {
            setHoveredMonth(hoveredDate);
        }
    };

    const isMonthDisabled = (year: number, month: number): boolean => {
        const date = new Date(year, month);
        if (minMonth && isBefore(date, startOfMonth(minMonth))) return true;
        if (maxMonth && isAfter(date, endOfMonth(maxMonth))) return true;
        return false;
    };

    const handleFocus = () => {
        setIsOpen(true);
        if (rangeStart && !rangeEnd) {
            setFocusedInput('end');
        } else {
            setFocusedInput('start');
        }
    };

    const isSelectedStartOrEnd = (date: Date) =>
        !!((rangeStart && isSameMonth(date, rangeStart)) || (rangeEnd && isSameMonth(date, rangeEnd)));

    const isInRange = (date: Date) => {
        if (rangeStart && rangeEnd) {
            return isBetween(date, rangeStart, rangeEnd);
        }
        if (rangeStart && !rangeEnd && hoveredMonth) {
            const earlier = isBefore(hoveredMonth, rangeStart) ? hoveredMonth : rangeStart;
            const later = isBefore(hoveredMonth, rangeStart) ? rangeStart : hoveredMonth;
            if (isSameMonth(earlier, later)) return false;
            return isAfter(date, earlier) && isBefore(date, later);
        }
        return false;
    };

    const PortalWrapper = useMemo(() => {
        if (!enforcedColorScheme) return Fragment;
        return enforcedColorScheme === 'light' ? LightScheme : DarkScheme;
    }, [enforcedColorScheme]);

    return (
        <Wrapper {...rest}>
            <div ref={setTriggerReference}>
                <Input
                    label={label}
                    placeholder={placeholder}
                    value={inputText}
                    onFocus={handleFocus}
                    readOnly
                    disabled={disabled}
                    autoComplete="off"
                />
            </div>
            {isOpen &&
                createPortal(
                    <PortalWrapper>
                        <MonthPickerContentContainer
                            ref={setContentReference}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            <Arrow ref={setArrowReference} style={styles.arrow} {...attributes.arrow} />
                            <Back
                                onClick={() => setCurrentYear(y => y - 1)}
                                aria-label="Previous year"
                                disabled={minMonth && currentYear <= minMonth.getFullYear()}
                            >
                                <ChevronLeftIcon />
                            </Back>
                            <Forward
                                onClick={() => setCurrentYear(y => y + 1)}
                                aria-label="Next year"
                                disabled={maxMonth && currentYear + 1 >= maxMonth.getFullYear()}
                            >
                                <ChevronRightIcon />
                            </Forward>
                            <YearGridContainer onMouseLeave={() => setHoveredMonth(null)}>
                                <MonthCalendar
                                    year={currentYear}
                                    onClick={handleMonthClick}
                                    onHover={handleMonthHover}
                                    isMonthDisabled={isMonthDisabled}
                                    isSelectedStartOrEnd={isSelectedStartOrEnd}
                                    isInRange={isInRange}
                                    locale={localeObject}
                                />
                                <MonthCalendar
                                    year={currentYear + 1}
                                    onClick={handleMonthClick}
                                    onHover={handleMonthHover}
                                    isMonthDisabled={isMonthDisabled}
                                    isSelectedStartOrEnd={isSelectedStartOrEnd}
                                    isInRange={isInRange}
                                    locale={localeObject}
                                />
                            </YearGridContainer>
                        </MonthPickerContentContainer>
                    </PortalWrapper>,
                    document.body
                )}
        </Wrapper>
    );
};
