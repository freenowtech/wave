import React, { FC } from 'react';

import { PropsTable } from '../../../docs/PropsTable';

export const TextareaPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: "'boxed' | 'bottom-lined'",
            description: 'The variant of the component.'
        },
        {
            name: 'size',
            type: "'small' | 'medium'",
            description: 'The size of the component.'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Determines whether the component follows the inverted color scheme.'
        },
        {
            name: 'label',
            type: 'string',
            description: 'Label for the input.'
        },
        {
            name: 'placeholder',
            type: 'string',
            description: 'Placeholder for the component.'
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Determines the error state of the component.'
        }
    ];
    return <PropsTable props={props} />;
};
