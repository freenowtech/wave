import React, { FC } from 'react';

import { PropsTable } from '../../../docs/PropsTable';

export const DatepickerRangeInputPropsTable: FC = () => {
    const props = [
        {
            name: 'startPlaceholder',
            type: 'string',
            description: 'Placeholder for start date.'
        },
        {
            name: 'endPlaceholder',
            type: 'string',
            description: 'Placeholder for end date.'
        },
        {
            name: 'label',
            type: 'string',
            description: 'Label for the input.'
        },
        {
            name: 'onClose',
            type: 'Function => void',
            description: 'Function that is used when datepicker closes without selected date.'
        },
        {
            name: 'value',
            type: 'DateRange (interface containing startDate and endDate properties)',
            description: 'Set the value for the date.'
        },
        {
            name: 'onChange',
            type: 'Function (change: DateRange) => void',
            description: 'Function that is used when datepicker selects new date.'
        },
        {
            name: 'minDate',
            type: 'Date',
            description: 'Minimal date to select from.'
        },
        {
            name: 'maxDate',
            type: 'Date',
            description: 'Maximum date to select from.'
        },
        {
            name: 'firstDayOfWeek',
            type: 'FirstDayOfWeek (number from 0-6)',
            description: 'Accepts a number for first day of the week from 0 (Sunday) to 6 (Saturday).',
            defaultValue: '1'
        },
        {
            name: 'isDateBlocked',
            type: 'Function => boolean',
            description: 'Function that runs for each date and returns boolean whether date is disabled or not.',
            defaultValue: '() => false'
        },
        {
            name: 'placement',
            type: "'left' | 'right' | 'center'",
            description: 'Used to align the datepicker in relation to input.',
            defaultValue: 'left'
        },
        {
            name: 'displayFormat',
            type: 'string',
            description: 'String to format dates.',
            defaultValue: 'dd/MM/yyyy'
        },
        {
            name: 'locale',
            type: 'string',
            description: 'String to define the locale in ISO-639-1.',
            defaultValue: 'en-US'
        },
        {
            name: 'errorHandler',
            type: '(Function => void) | string',
            description: 'Text to be shown if error filling the input or fn to be trigger as a callback when error.'
        },
        {
            name: 'startInputId',
            type: 'string',
            description: 'The id to be assigned to the start date input.'
        },
        {
            name: 'endInputId',
            type: 'string',
            description: 'The id to be assigned to the end date input.'
        },
        {
            name: 'variant',
            type: "'compact' | 'normal'",
            description: "Determines the variant, 'compact' displays only a single month",
            defaultValue: "'normal'"
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Determines whether the datePicker is disabled or not.'
        }
    ];
    return <PropsTable props={props} />;
};
