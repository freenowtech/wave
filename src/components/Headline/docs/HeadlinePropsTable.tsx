import React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const HeadlinePropsTable = () => {
    const props = [
        {
            name: 'as',
            type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
            defaultValue: 'h1'
        },
        {
            name: 'size',
            type: '"xxl" | "xl" | "l" | "m" | "s" | "xs"',
            defaultValue: `depends on the heading level`
        }
    ];

    return <PropsTable props={props} />;
};
