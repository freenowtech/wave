import React, { useRef, useEffect, useMemo } from 'react';
import {
    DayPicker,
    DayButton as RdpDayButton,
    getDefaultClassNames,
    type DateRange as RdpRange
} from 'react-day-picker';
import { format } from 'date-fns';
import ChevronLeftIcon from '../../../icons/arrows/ChevronLeftIcon';
import ChevronRightIcon from '../../../icons/arrows/ChevronRightIcon';
import * as Styled from './Calendar.styled';

export type Range = RdpRange;

type BaseProps = Omit<React.ComponentProps<typeof DayPicker>, 'mode' | 'selected' | 'onSelect'> & {
    visibleMonths?: 1 | 2 | 3;
    captionLayout?: React.ComponentProps<typeof DayPicker>['captionLayout'];
    weekStartsOn?: React.ComponentProps<typeof DayPicker>['weekStartsOn'];
    selected?: Date | Date[] | RdpRange;
} & Omit<React.ComponentProps<typeof DayPicker>, 'mode' | 'classNames' | 'selected' | 'onSelect'>;

export type SingleProps = BaseProps & {
    selectionType?: 'single'; // defaults to 'single' if omitted
    selected?: Date;
    onSelect?: (value?: Date) => void;
};

export type MultipleProps = BaseProps & {
    selectionType: 'multiple';
    selected?: Date[];
    onSelect?: (value?: Date[]) => void;
};

export type RangeProps = BaseProps & {
    selectionType: 'range';
    selected?: Range;
    onSelect?: (value?: Range) => void;
};

export type CalendarProps = SingleProps | MultipleProps | RangeProps;

export function Calendar(props: SingleProps): JSX.Element;
export function Calendar(props: MultipleProps): JSX.Element;
export function Calendar(props: RangeProps): JSX.Element;

export function Calendar(props: CalendarProps): JSX.Element {
    const {
        className,
        classNames,
        components,
        visibleMonths = 1,
        captionLayout = 'label',
        weekStartsOn = 1,
        selected,
        onSelect,
        ...rest
    } = props;

    const selectionType = props.selectionType ?? 'single';
    const defaults = getDefaultClassNames();

    const DayBtn = useMemo(
        () => (p: React.ComponentProps<typeof RdpDayButton>) =>
            <CalendarDayButton selectionType={selectionType} {...p} />,
        [selectionType]
    );

    const common = {
        showOutsideDays: false,
        numberOfMonths: visibleMonths,
        weekStartsOn,
        captionLayout,
        formatters: {
            formatWeekdayName: (date, options?: { locale: unknown }) =>
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                format(date, 'eee', { locale: (options as any)?.locale })
        },
        classNames: { ...defaults, ...classNames },
        components: {
            Chevron: ({ orientation, ...p }: { orientation?: 'left' | 'right' }) => {
                if (orientation === 'left') return <ChevronLeftIcon size={24} {...p} />;
                if (orientation === 'right') return <ChevronRightIcon size={24} {...p} />;
                return null as unknown as React.ReactElement;
            },
            DayButton: DayBtn,
            ...(components ?? {})
        },
        ...rest
    } satisfies Omit<React.ComponentProps<typeof DayPicker>, 'mode'>;

    const selectedProp = selected !== undefined ? { selected: selected as unknown } : {};
    const onSelectProp = onSelect ? { onSelect: onSelect as unknown } : {};

    const modeProps =
        selectionType === 'range'
            ? ({ mode: 'range' } as const)
            : selectionType === 'multiple'
            ? ({ mode: 'multiple' } as const)
            : ({ mode: 'single' } as const);

    return (
        <Styled.Container className={className}>
            <DayPicker
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(common as any)}
                {...modeProps}
                {...selectedProp}
                {...onSelectProp}
            />
        </Styled.Container>
    );
}

type SelectionType = 'single' | 'range' | 'multiple';

type CalendarDayButtonProps = React.ComponentProps<typeof RdpDayButton> & {
    selectionType: SelectionType;
};

function CalendarDayButton({ day, modifiers, selectionType, ...props }: CalendarDayButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const defaults = getDefaultClassNames();

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
