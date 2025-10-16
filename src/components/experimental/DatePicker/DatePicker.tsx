import { format as dfFormat } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import { type DateValue } from '@internationalized/date';
import type { Matcher, DateRange as RdpRange } from 'react-day-picker';

import { DropdownSelectIcon, DropupSelectIcon } from '../../../icons';
import { CalendarTodayOutlineIcon } from '../../../icons/experimental';
import { Calendar } from '../Calendar/Calendar';
import { DateField } from '../DateField/DateField';
import { Button } from '../Field/Button';
import type { FieldProps } from '../Field/Props';
import { FocusTrap, Popover } from '../Popover/Popover';
import { Chip, ChipRemoveButton, Chips } from './DatePicker.styled';

import {
    calendarDateToDate,
    dateToCalendarDate,
    getSeparator,
    inBounds,
    multipleSummary,
    stripTime,
    toJSDate,
    tryParse,
    type Mode
} from './util';

type DateRange = RdpRange | undefined;

type CommonProps = Pick<FieldProps, 'description' | 'errorMessage'> & {
    label?: string;
    placeholder?: string;
    /** date-fns format used for display/parse */
    displayFormat?: string;
    /** day constraints */
    minDate?: Date;
    maxDate?: Date;
    disabledDays?: Matcher | Matcher[];
    /** calendar & i18n */
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    locale?: Locale;
    initialMonth?: Date;
    /** how many months the calendar shows */
    visibleMonths?: 1 | 2 | 3;
    /** ids */
    id?: string;
    name?: string;
    /** focus input on mount */
    autoFocus?: boolean;
    /** top-level blur (both variants) */
    onBlur?: React.FocusEventHandler;
};

type SingleProps = CommonProps & {
    mode?: 'single';
    value?: Date | null; // optional for uncontrolled
    onChange?: (date: Date | null) => void;
};

type MultipleProps = CommonProps & {
    mode: 'multiple';
    value?: Date[]; // optional for uncontrolled
    onChange?: (dates: Date[]) => void;
    maxSelections?: number;
    summaryStrategy?: 'firstDate' | 'count';
};

type RangeProps = CommonProps & {
    mode: 'range';
    value?: DateRange; // optional for uncontrolled
    onChange?: (range: DateRange) => void;
    /** text between start/end when typing */
    separator?: string; // default ' – '
};

type CompatDateLike = Date | { year: number; month: number; day: number };

// legacy compat (avoid breaking changes)
type LegacyCompatProps = {
    defaultValue?: CompatDateLike; // single only (legacy)
    minValue?: CompatDateLike;
    maxValue?: CompatDateLike;
    isDisabled?: boolean;
    isInvalid?: boolean;
};

type DatePickerProps = (SingleProps | MultipleProps | RangeProps) & LegacyCompatProps;

const StyledPopover = styled(Popover)`
    padding: 1.5rem;
    border-radius: 1.5rem;
`;

// type guards
function hasMode(p: DatePickerProps): p is DatePickerProps & { mode: Mode } {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return 'mode' in p && typeof (p as any).mode === 'string';
}
function isSingleProps(props: DatePickerProps): props is SingleProps & LegacyCompatProps {
    return !hasMode(props) || props.mode === 'single';
}
function isMultipleProps(props: DatePickerProps): props is MultipleProps & LegacyCompatProps {
    return hasMode(props) && props.mode === 'multiple';
}
function isRangeProps(props: DatePickerProps): props is RangeProps & LegacyCompatProps {
    return hasMode(props) && props.mode === 'range';
}

export interface DatePickerOverloads {
    (props: SingleProps & LegacyCompatProps): JSX.Element;
    (props: MultipleProps & LegacyCompatProps): JSX.Element;
    (props: RangeProps & LegacyCompatProps): JSX.Element;
}

function DatePickerImpl(props: DatePickerProps): JSX.Element {
    const {
        label,
        description,
        errorMessage,
        displayFormat = 'dd / MM / yyyy',
        minDate,
        maxDate,
        disabledDays,
        weekStartsOn = 1,
        locale,
        initialMonth,
        name,
        // mode is optional; effective mode resolved via guards below
        placeholder,
        id,
        visibleMonths,
        defaultValue,
        minValue,
        maxValue,
        isDisabled,
        isInvalid,
        autoFocus,
        onBlur
    } = props;

    // legacy compat
    const legacyDefaultValue = defaultValue;
    const legacyMinValue = minValue;
    const legacyMaxValue = maxValue;
    const legacyIsDisabled = isDisabled;

    // effective mode flags
    const isSingle = isSingleProps(props);
    const isMultiple = isMultipleProps(props);
    const isRange = isRangeProps(props);
    const modeLocal: Mode = isRange ? 'range' : isMultiple ? 'multiple' : 'single';

    const { value: singleValueProp, onChange: onSingleChange } = isSingle ? props : ({} as SingleProps);
    const {
        value: multipleValueProp,
        onChange: onMultipleChange,
        maxSelections,
        summaryStrategy
    } = isMultiple ? props : ({} as MultipleProps);
    const { value: rangeValueProp, onChange: onRangeChange, separator } = isRange ? props : ({} as RangeProps);

    const minDateCompat = toJSDate(legacyMinValue) ?? minDate;
    const maxDateCompat = toJSDate(legacyMaxValue) ?? maxDate;

    const [open, setOpen] = React.useState(false);

    // internal states
    const [internalSingle, setInternalSingle] = React.useState<Date | null>(toJSDate(legacyDefaultValue) ?? null);
    const [internalMultiple, setInternalMultiple] = React.useState<Date[]>([]);
    const [internalRange, setInternalRange] = React.useState<DateRange>(undefined);

    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const positionRef = React.useRef<HTMLDivElement | null>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const contentId = React.useId();
    const inputId = id ?? `dp-${modeLocal}`;

    // controlled detection per mode (controlled when `value` prop is provided)
    const isControlledSingle = isSingle && singleValueProp !== undefined;
    const isControlledMultiple = isMultiple && multipleValueProp !== undefined;
    const isControlledRange = isRange && rangeValueProp !== undefined;

    // sources per mode
    const singleSource: Date | null = isSingle ? (isControlledSingle ? singleValueProp ?? null : internalSingle) : null;

    const multipleSource: Date[] | undefined = isMultiple
        ? isControlledMultiple
            ? multipleValueProp ?? []
            : internalMultiple
        : undefined;

    const rangeSource: DateRange = isRange ? (isControlledRange ? rangeValueProp : internalRange) : undefined;

    const sepForRange = React.useMemo<string>(
        () => (isRange ? getSeparator('range', separator) : getSeparator(modeLocal, undefined)),
        [isRange, separator, modeLocal]
    );

    const neutralPlaceholder =
        placeholder ??
        (isRange ? `dd / mm / yyyy${sepForRange}dd / mm / yyyy` : isMultiple ? 'Select dates' : 'dd / mm / yyyy');

    // input text (single/range); multiple shows read-only summary
    const [text, setText] = React.useState<string>('');

    // visible month
    const [month, setMonth] = React.useState<Date | undefined>(
        isSingle
            ? singleSource ?? initialMonth
            : isMultiple
            ? multipleSource?.[0] ?? initialMonth
            : rangeSource?.from ?? initialMonth
    );

    // reflect controlled changes in the UI
    React.useEffect(() => {
        if (isSingle) {
            const src = singleSource;
            setText(src ? dfFormat(src, displayFormat, { locale }) : '');
            if (src) setMonth(src);
            return;
        }

        if (isRange) {
            const a = rangeSource?.from ? dfFormat(rangeSource.from, displayFormat, { locale }) : '';
            const b = rangeSource?.to ? dfFormat(rangeSource.to, displayFormat, { locale }) : '';
            setText(a || b ? `${a}${sepForRange}${b}` : '');
            if (rangeSource?.from) setMonth(rangeSource.from);
            else if (rangeSource?.to) setMonth(rangeSource.to);
            return;
        }

        // multiple
        if (multipleSource?.[0]) setMonth(multipleSource[0]);
    }, [
        isSingle,
        isRange,
        displayFormat,
        locale,
        singleSource?.getTime?.(),
        rangeSource?.from?.getTime?.(),
        rangeSource?.to?.getTime?.(),
        multipleSource?.[0]?.getTime?.(),
        sepForRange
    ]);

    // always call onChange if provided; update internal only if uncontrolled
    const emitSingle = React.useCallback(
        (next: Date | null) => {
            onSingleChange?.(next);
            if (!isControlledSingle) setInternalSingle(next);
        },
        [onSingleChange, isControlledSingle]
    );

    const emitMultiple = React.useCallback(
        (next: Date[]) => {
            onMultipleChange?.(next);
            if (!isControlledMultiple) setInternalMultiple(next);
        },
        [onMultipleChange, isControlledMultiple]
    );

    const emitRange = React.useCallback(
        (next: DateRange) => {
            onRangeChange?.(next);
            if (!isControlledRange) setInternalRange(next);
        },
        [onRangeChange, isControlledRange]
    );

    // parsing/committing (single & range)
    const commitSingle = React.useCallback(
        (date: string) => {
            const parsedDate = tryParse(date, displayFormat, locale);
            if (parsedDate && inBounds(parsedDate, minDateCompat, maxDateCompat)) {
                emitSingle(parsedDate);
                setMonth(parsedDate);
            } else if (date.trim() === '') {
                emitSingle(null);
            }
        },
        [displayFormat, locale, minDateCompat, maxDateCompat, emitSingle]
    );

    const commitRange = React.useCallback(
        (raw: string, sep: string) => {
            const [ra, rb] = raw.split(sep);
            const from = ra ? tryParse(ra.trim(), displayFormat, locale) : undefined;
            const to = rb ? tryParse(rb.trim(), displayFormat, locale) : undefined;

            let range: DateRange;
            if (from || to) {
                let a = from;
                let b = to;
                if (a && b && a > b) [a, b] = [b, a];
                if (a && !inBounds(a, minDateCompat, maxDateCompat)) return;
                if (b && !inBounds(b, minDateCompat, maxDateCompat)) return;
                range = { from: a, to: b };
            }

            emitRange(range);
            setMonth(from ?? to ?? month ?? new Date());
        },
        [displayFormat, locale, minDateCompat, maxDateCompat, month, emitRange]
    );

    // input value
    const inputValue = isMultiple
        ? multipleSummary(multipleSource ?? [], displayFormat, locale, summaryStrategy ?? 'count')
        : text;

    const readOnly = isMultiple || !!legacyIsDisabled;

    // calendar handlers
    const handleSelectSingle = React.useCallback(
        (next: Date | null = null) => {
            emitSingle(next);
            setText(next ? dfFormat(next, displayFormat, { locale }) : '');
            setOpen(false);
        },
        [displayFormat, locale, emitSingle]
    );

    const handleSelectMultiple = React.useCallback(
        (dates?: Date[]) => {
            const next = [...(dates ?? [])].sort((a, b) => a.getTime() - b.getTime());
            if (maxSelections && next.length > maxSelections) return;
            emitMultiple(next);
        },
        [emitMultiple, maxSelections]
    );

    const handleSelectRange = React.useCallback(
        (range?: RdpRange) => {
            emitRange(range);
            if (range?.from || range?.to) {
                const a = range?.from ? dfFormat(range.from, displayFormat, { locale }) : '';
                const b = range?.to ? dfFormat(range.to, displayFormat, { locale }) : '';
                setText(a || b ? `${a}${sepForRange}${b}` : '');
            }
        },
        [displayFormat, locale, sepForRange, emitRange]
    );

    // disabled/hidden matchers
    const disabledMatcher = React.useMemo<Matcher[] | undefined>(() => {
        const arr: Matcher[] = [];
        if (Array.isArray(disabledDays)) arr.push(...disabledDays);
        else if (disabledDays) arr.push(disabledDays);
        if (minDateCompat) arr.push({ before: stripTime(minDateCompat) });
        if (maxDateCompat) arr.push({ after: stripTime(maxDateCompat) });
        return arr.length > 0 ? arr : undefined;
    }, [
        Array.isArray(disabledDays) ? disabledDays.map(el => String(el)).join('|') : String(disabledDays),
        minDateCompat?.getTime(),
        maxDateCompat?.getTime()
    ]);

    const hiddenMatcher = React.useMemo<Matcher[] | undefined>(() => {
        const arr: Matcher[] = [];
        if (minDateCompat) arr.push({ before: stripTime(minDateCompat) });
        if (maxDateCompat) arr.push({ after: stripTime(maxDateCompat) });
        return arr.length > 0 ? arr : undefined;
    }, [minDateCompat?.getTime(), maxDateCompat?.getTime()]);

    // common Calendar props
    const commonCalProps = {
        weekStartsOn,
        month,
        onMonthChange: setMonth,
        disabled: disabledMatcher,
        hidden: hiddenMatcher,
        captionLayout: 'label' as const,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        locale: locale as any
    };

    return (
        <div ref={positionRef} aria-label={label}>
            <div style={{ position: 'relative' }}>
                {isSingle ? (
                    <DateField
                        variant="segments"
                        id={inputId}
                        name={name}
                        label={label}
                        description={description}
                        errorMessage={errorMessage}
                        isInvalid={isInvalid}
                        isDisabled={legacyIsDisabled}
                        isVisuallyFocused={open}
                        leadingIcon={<CalendarTodayOutlineIcon />}
                        value={singleSource ? dateToCalendarDate(singleSource) : undefined}
                        onChange={(dv: DateValue | null | undefined) => {
                            const next = dv ? calendarDateToDate(dv) : null;
                            handleSelectSingle(next);
                        }}
                        autoFocus={autoFocus}
                        onBlur={onBlur}
                        actionIcon={
                            <Button
                                ref={triggerRef}
                                isDisabled={legacyIsDisabled}
                                onPress={() => !legacyIsDisabled && setOpen(v => !v)}
                                aria-haspopup="dialog"
                                aria-expanded={open}
                                aria-controls={contentId}
                                aria-label={label ? `${label}: open calendar` : 'Open calendar'}
                            >
                                {open ? <DropupSelectIcon /> : <DropdownSelectIcon />}
                            </Button>
                        }
                    />
                ) : (
                    <DateField
                        variant="text"
                        id={inputId}
                        name={name}
                        label={label}
                        description={description}
                        errorMessage={errorMessage}
                        isInvalid={isInvalid}
                        isDisabled={legacyIsDisabled}
                        isVisuallyFocused={open}
                        leadingIcon={<CalendarTodayOutlineIcon />}
                        value={inputValue}
                        placeholder={neutralPlaceholder}
                        onChange={(v: string) => {
                            if (readOnly) return;
                            setText(v);
                            // optimistic month update for valid partials
                            const tmp = isSingle
                                ? tryParse(v, displayFormat, locale)
                                : tryParse(v.split(sepForRange)[0]?.trim(), displayFormat, locale);
                            if (tmp) setMonth(tmp);
                        }}
                        inputProps={{
                            role: 'combobox',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': open,
                            'aria-controls': contentId,
                            'aria-autocomplete': 'none',
                            readOnly,
                            autoFocus,
                            onBlur: event => {
                                onBlur?.(event);
                                const nextEl = event.relatedTarget as HTMLElement | null;
                                if (nextEl && nextEl === triggerRef.current) return;
                                if (isSingle) commitSingle(event.currentTarget.value);
                                else if (isRange) commitRange(event.currentTarget.value, sepForRange);
                            },
                            onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
                                switch (event.key) {
                                    case 'ArrowDown':
                                        event.preventDefault();
                                        setOpen(true);
                                        break;
                                    case 'Enter': {
                                        const v = (event.target as HTMLInputElement).value;
                                        if (isSingle) commitSingle(v);
                                        else if (isRange) commitRange(v, sepForRange);
                                        break;
                                    }
                                    case 'Escape':
                                        setOpen(false);
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }}
                        actionIcon={
                            <Button
                                ref={triggerRef}
                                isDisabled={legacyIsDisabled}
                                onPress={() => !legacyIsDisabled && setOpen(v => !v)}
                                aria-haspopup="dialog"
                                aria-expanded={open}
                                aria-controls={contentId}
                                aria-label={label ? `${label}: open calendar` : 'Open calendar'}
                            >
                                {open ? <DropupSelectIcon /> : <DropdownSelectIcon />}
                            </Button>
                        }
                    />
                )}
            </div>

            {/* chips for multiple */}
            {isMultiple && (multipleSource?.length ?? 0) > 0 && (
                <Chips aria-label="Selected dates">
                    {multipleSource.map(d => {
                        const key = stripTime(d).getTime(); // stable per day
                        return (
                            <Chip key={key}>
                                {dfFormat(d, displayFormat, { locale })}
                                <ChipRemoveButton
                                    onPress={() => {
                                        const next = (multipleSource ?? []).filter(x => stripTime(x).getTime() !== key);
                                        emitMultiple(next);
                                    }}
                                    aria-label="Remove date"
                                >
                                    ×
                                </ChipRemoveButton>
                            </Chip>
                        );
                    })}
                </Chips>
            )}

            <StyledPopover
                aria-label={label ?? 'Date picker'}
                placement="bottom left"
                offset={0}
                triggerRef={positionRef}
                isOpen={open}
                onOpenChange={setOpen}
                shouldCloseOnInteractOutside={element => {
                    if (!element) return true;
                    if (triggerRef.current && (element === triggerRef.current || triggerRef.current.contains(element)))
                        return false;
                    if (contentRef.current && contentRef.current.contains(element)) return false;
                    return true;
                }}
            >
                <FocusTrap role="dialog">
                    <div id={contentId} ref={contentRef}>
                        {/* eslint-disable react/jsx-no-bind */}
                        {isSingle && (
                            <Calendar
                                selectionType="single"
                                {...commonCalProps}
                                visibleMonths={visibleMonths ?? 1}
                                selected={singleSource ?? undefined}
                                onSelect={handleSelectSingle}
                            />
                        )}

                        {isMultiple && (
                            <Calendar
                                selectionType="multiple"
                                {...commonCalProps}
                                visibleMonths={visibleMonths ?? 1}
                                selected={multipleSource}
                                onSelect={handleSelectMultiple}
                            />
                        )}

                        {isRange && (
                            <Calendar
                                selectionType="range"
                                {...commonCalProps}
                                visibleMonths={visibleMonths ?? 2}
                                selected={rangeSource}
                                onSelect={handleSelectRange}
                            />
                        )}
                        {/* eslint-enable react/jsx-no-bind */}
                    </div>
                </FocusTrap>
            </StyledPopover>
        </div>
    );
}

DatePickerImpl.displayName = 'DatePicker';

export type { DatePickerProps, LegacyCompatProps, SingleProps, MultipleProps, RangeProps };

// exported component with proper overloads
export const DatePicker = DatePickerImpl as unknown as DatePickerOverloads;
