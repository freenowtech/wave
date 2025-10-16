import React from 'react';
import {
    DayEventHandler,
    DayPicker,
    Matcher,
    DayButton as RdpDayButton,
    getDefaultClassNames,
    type DateRange as RdpRange
} from 'react-day-picker';
import { format } from 'date-fns';
import ChevronLeftIcon from '../../../icons/arrows/ChevronLeftIcon';
import ChevronRightIcon from '../../../icons/arrows/ChevronRightIcon';
import * as Styled from './Calendar.styled';
import { CalendarDayButton } from './components/CalendarDayButton';
import { SelectionTypeContext, type SelectionType } from './context/Calendar.context';

export type Range = RdpRange;
type DateFnsFormatOptions = Parameters<typeof format>[2];

type BaseProps = Omit<React.ComponentProps<typeof DayPicker>, 'mode' | 'selected' | 'onSelect'> & {
    visibleMonths?: 1 | 2 | 3;
    captionLayout?: React.ComponentProps<typeof DayPicker>['captionLayout'];
    weekStartsOn?: React.ComponentProps<typeof DayPicker>['weekStartsOn'];
    selected?: Date | Date[] | RdpRange;
    modifiers?: Record<string, Matcher | Matcher[]>;
    onDayClick?: DayEventHandler<React.MouseEvent>;
} & Omit<React.ComponentProps<typeof DayPicker>, 'mode' | 'classNames' | 'selected' | 'onSelect'>;

export type SingleProps = BaseProps & {
    selectionType?: 'single';
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

    const selectionType: SelectionType = props.selectionType ?? 'single';
    const defaults = getDefaultClassNames();

    // expose a plain function (required by your shared type), but render the memoized component
    const DayButtonComp = (p: React.ComponentProps<typeof RdpDayButton>) => <CalendarDayButton {...p} />;

    const common = {
        showOutsideDays: false,
        numberOfMonths: visibleMonths,
        weekStartsOn,
        captionLayout,
        formatters: {
            formatWeekdayName: (date, options?: DateFnsFormatOptions) => format(date, 'eee', options)
        },
        classNames: { ...defaults, ...classNames },
        components: {
            Chevron: ({ orientation, ...p }: { orientation?: 'left' | 'right' }) => {
                if (orientation === 'left') return <ChevronLeftIcon size={24} {...p} />;
                if (orientation === 'right') return <ChevronRightIcon size={24} {...p} />;
                return null as unknown as React.ReactElement;
            },
            DayButton: DayButtonComp,
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
            <SelectionTypeContext.Provider value={selectionType}>
                <DayPicker
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {...(common as any)}
                    {...modeProps}
                    {...selectedProp}
                    {...onSelectProp}
                />
            </SelectionTypeContext.Provider>
        </Styled.Container>
    );
}
