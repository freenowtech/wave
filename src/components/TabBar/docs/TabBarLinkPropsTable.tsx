import React, { FC } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const TabBarLinkPropsTable: FC = () => {
    const props = [
        {
            name: 'selected',
            type: 'boolean',
            description: 'Indicates that the link is currently selected.'
        },
        {
            name: 'activeClassName',
            type: 'string',
            description: 'Override the default active class name (see react-router)'
        },
        {
            name: 'as',
            type: 'string or component',
            description: 'Replace the rendered component with an HTML tag or another component.'
        }
    ];

    return <PropsTable props={props} />;
};
