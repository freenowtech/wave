import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const ModalPropsTable = () => {
    const props = [
        {
            name: 'fullscreen',
            type: 'boolean',
            description: 'Show the modal covering the whole page to focus the users attention.',
            defaultValue: 'false'
        },
        {
            name: 'dismissible',
            type: 'boolean',
            description: 'Makes the modal dismissible by the user.',
            defaultValue: 'true'
        },
        {
            name: 'onClose',
            type: '() => void',
            description:
                'A function that will be called after the user has dismissed the modal and the modal has disappeared.',
            defaultValue: '-'
        }
    ];
    return <PropsTable props={props} />;
};
