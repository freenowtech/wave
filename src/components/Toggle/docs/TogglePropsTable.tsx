import React, { FC } from 'react';

import { PropsTable } from '../../../docs/PropsTable';

export const TogglePropsTable: FC = () => {
    const props = [
        {
            name: 'label',
            type: 'React.ReactNode',
            description: 'Provide a label for the input which will be shown next to the toggle.'
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Add styles to show the toggle has errors'
        },
        {
            name: 'className',
            type: 'string',
            description: 'Classes to set to the label of the toggle.'
        }
    ];
    return <PropsTable props={props} />;
};
