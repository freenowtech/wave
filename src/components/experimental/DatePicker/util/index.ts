import { format as dfFormat, isValid as dfIsValid, parse as dfParse } from 'date-fns';
import { CalendarDate, fromDate, getLocalTimeZone, type DateValue } from '@internationalized/date';

export type Mode = 'single' | 'multiple' | 'range';

type CalendarLike = { year: number; month: number; day: number };

function isCalendarLike(v: unknown): v is CalendarLike {
    return !!v && typeof v === 'object' && 'year' in v && 'month' in v && 'day' in v;
}

export function tryParse(raw: string, fmt: string, locale?: Locale): Date | null {
    if (!raw?.trim()) return null;

    const p = dfParse(raw, fmt, new Date(), { locale });
    if (dfIsValid(p)) return p;
    const loose = new Date(raw);
    return dfIsValid(loose) ? loose : null;
}

export function inBounds(d: Date, min?: Date, max?: Date): boolean {
    const t = stripTime(d).getTime();
    return (min ? t >= stripTime(min).getTime() : true) && (max ? t <= stripTime(max).getTime() : true);
}

export function stripTime(d: Date): Date {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
}

export function multipleSummary(
    dates: Date[],
    fmt: string,
    locale?: Locale,
    strategy: 'firstDate' | 'count' = 'count'
): string {
    const count = dates.length;
    if (count === 0) return '';
    if (strategy === 'firstDate') {
        return dfFormat(dates[0], fmt, { locale }) + (count > 1 ? ` +${count - 1}` : '');
    }
    return count === 1 ? dfFormat(dates[0], fmt, { locale }) : `${count} dates selected`;
}

export function getSeparator(mode?: Mode, separator?: string): string {
    return (mode === 'range' ? separator : undefined) ?? ' – ';
}

export function toJSDate(d: unknown): Date | undefined {
    if (!d) return undefined;
    if (d instanceof Date) return d;
    if (isCalendarLike(d)) {
        return new Date(d.year, d.month - 1, d.day);
    }
    return undefined;
}

export function dateToCalendarDate(d: Date): CalendarDate {
    const zdt = fromDate(d, getLocalTimeZone());
    return new CalendarDate(zdt.year, zdt.month, zdt.day);
}

export function calendarDateToDate(dv: DateValue): Date {
    const d = new Date(dv.year, dv.month - 1, dv.day);
    // `new Date()` treats 2-digit years as 19xx, `setFullYear` corrects this.
    if (dv.year < 100) {
        d.setFullYear(dv.year);
    }
    return d;
}
