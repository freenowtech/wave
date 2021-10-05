import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const AccordionPropsTable = () => {
    const props = [
        {
            name: 'heading',
            type: 'string | undefined',
            description: 'Accordion title',
            defaultValue: '-'
        },
        {
            name: 'description',
            type: 'string | undefined',
            description: 'Accordion description',
            defaultValue: '-'
        },
        {
            name: 'info',
            type: 'string | undefined',
            description: 'Accordion information',
            defaultValue: '-'
        },
        {
            name: 'buttonLabel',
            type: 'string | undefined',
            description: 'Accordion button label',
            defaultValue: '-'
        },
        {
            name: 'variant',
            type: "'compact' | 'default'",
            description: 'Accordion variant',
            defaultValue: 'default'
        },
        {
            name: 'defaultExpanded',
            type: 'boolean | undefined',
            description: '',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
