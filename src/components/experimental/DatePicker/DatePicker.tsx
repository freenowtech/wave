import { format as dfFormat, isValid as dfIsValid, parse as dfParse } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import type { Matcher } from 'react-day-picker';
import { DropdownSelectIcon, DropupSelectIcon } from '../../../icons';
import { CalendarTodayOutlineIcon } from '../../../icons/experimental';
import { Calendar } from '../Calendar/Calendar';
import { DateField } from '../DateField/DateField';
import { Button } from '../Field/Button';
import type { FieldProps } from '../Field/Props';
import { FocusTrap, Popover } from '../Popover/Popover';
import { Chip, ChipRemoveButton, Chips } from './DatePicker.styled';

type DateRange = { from?: Date; to?: Date } | undefined;

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
};

type SingleProps = CommonProps & {
    mode: 'single';
    value: Date | null;
    onChange: (date: Date | null) => void;
};

type MultipleProps = CommonProps & {
    mode: 'multiple';
    value: Date[];
    onChange: (dates: Date[]) => void;
    maxSelections?: number;
    summaryStrategy?: 'firstDate' | 'count';
};

type RangeProps = CommonProps & {
    mode: 'range';
    value: DateRange;
    onChange: (range: DateRange) => void;
    /** text between start/end when typing */
    separator?: string; // default ' – '
};

type CompatDateLike = Date | { year: number; month: number; day: number };

// legacy compat (avoid breaking changes)
type LegacyCompatProps = {
    defaultValue?: CompatDateLike;
    minValue?: CompatDateLike;
    maxValue?: CompatDateLike;
    isDisabled?: boolean;
    isInvalid?: boolean;
};

export type DatePickerProps = (SingleProps | MultipleProps | RangeProps) & LegacyCompatProps;

const StyledPopover = styled(Popover)`
    padding: 1.5rem;
    border-radius: 1.5rem;
`;

export function DatePicker(props: SingleProps & LegacyCompatProps): JSX.Element;
export function DatePicker(props: MultipleProps & LegacyCompatProps): JSX.Element;
export function DatePicker(props: RangeProps & LegacyCompatProps): JSX.Element;
export function DatePicker(props: DatePickerProps): JSX.Element {
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
        mode = 'single',
        placeholder,
        id,
        visibleMonths,
        defaultValue,
        minValue,
        maxValue,
        isDisabled,
        isInvalid
    } = props;

    // legacy compat
    const legacyDefaultValue = defaultValue;
    const legacyMinValue = minValue;
    const legacyMaxValue = maxValue;
    const legacyIsDisabled = isDisabled;

    const minDateCompat = toJSDate(legacyMinValue) ?? minDate;
    const maxDateCompat = toJSDate(legacyMaxValue) ?? maxDate;

    const [open, setOpen] = React.useState(false);
    const [internalSingle, setInternalSingle] = React.useState<Date | null>(toJSDate(legacyDefaultValue) ?? null);

    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const positionRef = React.useRef<HTMLDivElement | null>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const contentId = React.useId();
    const inputId = id ?? `dp-${mode}`;

    // current values by mode
    const isControlledSingle = mode === 'single' && (props as SingleProps).value instanceof Date;
    const singleSource: Date | null =
        mode === 'single' ? (isControlledSingle ? (props as SingleProps).value : internalSingle) : null;
    const singleValue = mode === 'single' ? (props as SingleProps).value : null;
    const multipleValue = mode === 'multiple' ? (props as MultipleProps).value : undefined;
    const rangeValue = mode === 'range' ? (props as RangeProps).value : undefined;

    const sepForRange = React.useMemo<string>(() => getSeparator(props), [mode, (props as RangeProps).separator]);

    const neutralPlaceholder =
        placeholder ??
        (mode === 'range'
            ? `dd / mm / yyyy${sepForRange}dd / mm / yyyy`
            : mode === 'multiple'
            ? 'Select dates'
            : 'dd / mm / yyyy');

    // input text (single/range); multiple shows read-only summary
    const [text, setText] = React.useState<string>('');

    // visible month
    const [month, setMonth] = React.useState<Date | undefined>(
        mode === 'single'
            ? singleValue ?? initialMonth
            : mode === 'multiple'
            ? multipleValue?.[0] ?? initialMonth
            : rangeValue?.from ?? initialMonth
    );

    React.useEffect(() => {
        if (mode === 'single') {
            const source = singleSource;
            setText(source ? dfFormat(source, displayFormat, { locale }) : '');
            if (source) setMonth(source);
            return;
        }

        if (mode === 'range') {
            const a = rangeValue?.from ? dfFormat(rangeValue.from, displayFormat, { locale }) : '';
            const b = rangeValue?.to ? dfFormat(rangeValue.to, displayFormat, { locale }) : '';
            setText(a || b ? `${a}${sepForRange}${b}` : '');
            if (rangeValue?.from) setMonth(rangeValue.from);
            else if (rangeValue?.to) setMonth(rangeValue.to);
            return;
        }

        // multiple
        if (multipleValue?.[0]) setMonth(multipleValue[0]);
    }, [
        mode,
        displayFormat,
        locale,
        singleSource?.getTime?.(),
        rangeValue?.from?.getTime?.(),
        rangeValue?.to?.getTime?.(),
        multipleValue?.[0]?.getTime?.(),
        sepForRange
    ]);

    // parsing/committing (single & range)
    const commitSingle = React.useCallback(
        (date: string) => {
            const parsedDate = tryParse(date, displayFormat, locale);
            if (parsedDate && inBounds(parsedDate, minDateCompat, maxDateCompat)) {
                (props as SingleProps).onChange?.(parsedDate);
                setInternalSingle(parsedDate);
                setMonth(parsedDate);
            } else if (date.trim() === '') {
                (props as SingleProps).onChange?.(null);
                setInternalSingle(null);
            }
        },
        [displayFormat, locale, minDateCompat, maxDateCompat, props]
    );

    const commitRange = React.useCallback(
        (raw: string, sep: string) => {
            const { onChange } = props as RangeProps;
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

            onChange(range);
            setMonth(from ?? to ?? month ?? new Date());
        },
        [displayFormat, locale, minDateCompat, maxDateCompat, month, props]
    );

    // input value
    const inputValue =
        mode === 'multiple'
            ? multipleSummary(
                  multipleValue ?? [],
                  displayFormat,
                  locale,
                  (props as MultipleProps).summaryStrategy ?? 'count'
              )
            : text;

    const readOnly = mode === 'multiple' || !!legacyIsDisabled;

    // calendar handlers
    const handleSelectSingle = React.useCallback(
        (date?: Date | null) => {
            (props as SingleProps).onChange?.(date ?? null);
            setInternalSingle(date ?? null);
            setText(date ? dfFormat(date, displayFormat, { locale }) : '');
            setOpen(false);
        },
        [displayFormat, locale, props]
    );

    const handleSelectMultiple = React.useCallback(
        (dates?: Date[]) => {
            const { onChange, maxSelections } = props as MultipleProps;
            const next = [...(dates ?? [])].sort((a, b) => a.getTime() - b.getTime());
            if (maxSelections && next.length > maxSelections) return;
            onChange(next);
        },
        [props]
    );

    const handleSelectRange = React.useCallback(
        (range?: { from?: Date; to?: Date }) => {
            const { onChange } = props as RangeProps;
            onChange(range);
            if (range?.from || range?.to) {
                const a = range?.from ? dfFormat(range.from, displayFormat, { locale }) : '';
                const b = range?.to ? dfFormat(range.to, displayFormat, { locale }) : '';
                setText(a || b ? `${a}${sepForRange}${b}` : '');
            }
        },
        [displayFormat, locale, sepForRange, props]
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
                <DateField
                    variant="text"
                    id={inputId}
                    name={name}
                    label={label}
                    description={description}
                    errorMessage={errorMessage}
                    isInvalid={isInvalid}
                    isVisuallyFocused={open}
                    leadingIcon={<CalendarTodayOutlineIcon />}
                    value={inputValue}
                    placeholder={neutralPlaceholder}
                    onChange={(v: string) => {
                        if (readOnly) return;
                        setText(v);
                        // optimistic month update for valid partials
                        const tmp =
                            mode === 'single'
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
                        onBlur: event => {
                            const nextEl = event.relatedTarget as HTMLElement | null;
                            if (nextEl && nextEl === triggerRef.current) return;
                            if (mode === 'single') commitSingle(event.currentTarget.value);
                            else if (mode === 'range') commitRange(event.currentTarget.value, sepForRange);
                        },
                        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
                            switch (event.key) {
                                case 'ArrowDown':
                                    event.preventDefault();
                                    setOpen(true);
                                    break;
                                case 'Enter': {
                                    const v = (event.target as HTMLInputElement).value;
                                    if (mode === 'single') commitSingle(v);
                                    else if (mode === 'range') commitRange(v, sepForRange);
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
            </div>

            {/* chips for multiple */}
            {mode === 'multiple' && (multipleValue?.length ?? 0) > 0 && (
                <Chips aria-label="Selected dates">
                    {multipleValue.map(d => {
                        const key = stripTime(d).getTime(); // stable per day
                        return (
                            <Chip key={key}>
                                {dfFormat(d, displayFormat, { locale })} {/* ensure same format */}
                                <ChipRemoveButton
                                    onPress={() =>
                                        (props as MultipleProps).onChange(
                                            multipleValue.filter(x => stripTime(x).getTime() !== key)
                                        )
                                    }
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
                        {mode === 'single' && (
                            <Calendar
                                selectionType="single"
                                {...commonCalProps}
                                visibleMonths={visibleMonths ?? 1}
                                selected={singleValue ?? undefined}
                                onSelect={handleSelectSingle}
                            />
                        )}

                        {mode === 'multiple' && (
                            <Calendar
                                selectionType="multiple"
                                {...commonCalProps}
                                visibleMonths={visibleMonths ?? 1}
                                selected={multipleValue}
                                onSelect={handleSelectMultiple}
                            />
                        )}

                        {mode === 'range' && (
                            <Calendar
                                selectionType="range"
                                {...commonCalProps}
                                visibleMonths={visibleMonths ?? 2}
                                selected={rangeValue}
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

/* ---------- helpers ---------- */

function tryParse(raw: string, fmt: string, locale?: Locale): Date | null {
    if (!raw?.trim()) return null;
    const p = dfParse(raw, fmt, new Date(), { locale });
    if (dfIsValid(p)) return p;
    const loose = new Date(raw);
    return dfIsValid(loose) ? loose : null;
}

function inBounds(d: Date, min?: Date, max?: Date) {
    const t = stripTime(d).getTime();
    return (min ? t >= stripTime(min).getTime() : true) && (max ? t <= stripTime(max).getTime() : true);
}

function stripTime(d: Date) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
}

function multipleSummary(dates: Date[], fmt: string, locale?: Locale, strategy: 'firstDate' | 'count' = 'count') {
    const count = dates.length;
    if (count === 0) return '';
    if (strategy === 'firstDate') {
        return dfFormat(dates[0], fmt, { locale }) + (count > 1 ? ` +${count - 1}` : '');
    }
    return count === 1 ? dfFormat(dates[0], fmt, { locale }) : `${count} dates selected`;
}

function getSeparator(props: DatePickerProps) {
    return (props.mode === 'range' ? props.separator : undefined) ?? ' – ';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toJSDate(d: any): Date | undefined {
    if (!d) return undefined;
    if (d instanceof Date) return d;
    if (typeof d === 'object' && 'year' in d && 'month' in d && 'day' in d) {
        return new Date(d.year as number, (d.month as number) - 1, d.day as number);
    }
    return undefined;
}
