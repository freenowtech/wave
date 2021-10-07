import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const LogoPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"default" | "business"',
            description: 'Specify the department of the company',
            defaultValue: '"default"'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust colors for display on a dark background',
            defaultValue: '-'
        },
        {
            name: 'monochrome',
            type: 'boolean',
            description: 'Use one color version of the logo: blue for default and all white for inverted',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
