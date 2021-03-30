import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const LabelPropsTable = () => {
    const props = [
        {
            name: 'variant',
            type: '"info" | "success" | "danger"',
            description: 'Set the appropriate colors for the component',
            defaultValue: '"info"'
        }
    ];
    return <PropsTable props={props} />;
};
