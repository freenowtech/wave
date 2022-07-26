import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const PhoneInputPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"boxed" | "bottom-lined"',
            defaultValue: '"boxed"'
        },
        {
            name: 'size',
            type: '"medium" | "small"',
            defaultValue: '"medium"'
        },
        {
            name: 'id',
            type: 'string',
            description: 'Prefix for the identifier of area code and national number inputs'
        },
        {
            name: 'text',
            type: 'string',
            description: 'National number text value'
        },
        {
            name: 'onTextChange',
            type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
            description: 'Change handler for national number text input'
        },
        {
            name: 'country',
            type: 'PhoneAreaCodeCountry',
            description: 'Country object for determining the area code'
        },
        {
            name: 'onCountryChange',
            type: '(country: PhoneAreaCodeCountry) => void',
            description: 'Change handler for the area code country'
        },
        {
            name: 'label',
            type: 'string'
        },
        {
            name: 'placeholder',
            type: 'string'
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Indicate the error state in the input'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables both, the area code and national number inputs'
        },
        {
            name: 'listPortalTarget',
            type: 'HTMLElement',
            description: 'HTML element which will be used as a parent for the prefix list'
        },
        {
            name: 'inputProps',
            type: 'Object',
            description:
                'Pass props directly to the internal input component. ' +
                'Any value from the `Input` component props are allowed, but props from the `PhoneInput` take precedence'
        },
        {
            name: 'selectListProps',
            type: 'Object',
            description:
                'Pass props directly to the internal SelectList component used to show prefixes. ' +
                'Any value from the `SelectList` component props are allowed, but props from the `PhoneInput` take precedence'
        }
    ];
    return <PropsTable props={props} />;
};
