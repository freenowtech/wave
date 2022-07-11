import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const InfoBannerPropsTable: FC = () => {
    const props = [
        {
            name: 'title',
            type: 'string',
            description: 'Sets the title of the banner'
        },
        {
            name: 'description',
            type: 'string',
            description: 'Sets the description of the banner'
        },
        {
            name: 'variant',
            type: '"info" | "success" | "warning" | "danger"',
            description: 'Sets the appropriate colors for the component',
            defaultValue: '"info"'
        },
        {
            name: 'emphasized',
            type: 'boolean',
            description: 'Adds additional emphasis or highlights critical status',
            defaultValue: '"false"'
        },
        {
            name: 'linkText',
            type: 'string',
            description: 'Sets the text of the link contained in the banner'
        },
        {
            name: 'linkUrl',
            type: 'string',
            description: 'Sets the url where the user will be redirected when clicking on the link'
        }
    ];
    return <PropsTable props={props} />;
};
