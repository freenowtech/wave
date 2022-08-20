import React, { FC } from 'react';

import { PropsTable } from '../../../docs/PropsTable';

export const DatepickerSingleInputPropsTable: FC = () => {
    const props = [
        {
            name: 'placeholder',
            type: 'string',
            description: 'Placeholder for the input.'
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
            name: 'onChange',
            type: 'Function => void',
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
            name: 'value',
            type: 'Date',
            description: 'Set the value of the input.'
        },
        {
            name: 'errorHandler',
            type: '(Function => void) | string',
            description: 'Text to be shown if error filling the input or fn to be trigger as a callback when error.'
        },
        {
            name: 'inputId',
            type: 'string',
            description: 'The id to be assigned to the input field.'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Determines whether the datePicker is disabled or not.'
        }
    ];
    return <PropsTable props={props} />;
};
