import React, { FC } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const HeadlinePropsTable: FC = () => {
    const props = [
        {
            name: 'as',
            type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
            defaultValue: 'h1',
            description: 'HTML-tag to use'
        },
        {
            name: 'size',
            type: '"xxl" | "xl" | "l" | "m" | "s" | "xs"',
            description: 'if "size" prop is not set , the size is determined based on "as" prop'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'if "true" - sets bright color to the font'
        }
    ];

    return <PropsTable props={props} />;
};
