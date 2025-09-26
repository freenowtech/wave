import { isBefore, isAfter, format, parse } from 'date-fns';

export const dateToText = (d: Date | null, locale: Locale, displayFormat = 'MMM yyyy'): string =>
    d ? format(d, displayFormat, { locale }) : '';

export const textToDate = (t: string, locale: Locale, displayFormat = 'MMM yyyy'): Date | null => {
    const parsed = parse(t, displayFormat, new Date(), { locale });
    return !Number.isNaN(parsed.valueOf()) && format(parsed, displayFormat, { locale }) === t ? parsed : null;
};

export const isBetween = (date: Date, start: Date | null, end: Date | null): boolean => {
    if (!start || !end) return false;
    return isAfter(date, start) && isBefore(date, end);
};
