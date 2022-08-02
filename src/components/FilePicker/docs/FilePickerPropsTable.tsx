import React, { FC } from 'react';

import { PropsTable } from '../../../docs/PropsTable';

export const FilePickerPropsTable: FC = () => {
    const props = [
        {
            name: 'name',
            type: 'string',
            description: 'Sets the name property of input element in the DOM.'
        },
        {
            name: 'accept',
            type: 'string',
            description: 'One or more unique file type identifiers describing file types to allow.'
        },
        {
            name: 'capture',
            type: 'string',
            description: 'What source to use for capturing image or video data.'
        },
        {
            name: 'label',
            type: 'string',
            description: 'Text to provide a clear description of what the user should upload.'
        },
        {
            name: 'buttonText',
            type: 'string',
            description:
                'Text to display within component button, it describes the main action, it works better when short.'
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Whether or not the component should render an error state.'
        },
        {
            name: 'onFileChange',
            type: 'Function => void',
            description: 'Callback to be used when the input receives a new file.'
        }
    ];
    return <PropsTable props={props} />;
};
