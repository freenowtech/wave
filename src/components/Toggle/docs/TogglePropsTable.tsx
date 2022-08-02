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
        }
    ];
    return <PropsTable props={props} />;
};
