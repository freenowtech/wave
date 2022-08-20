import React, { FC } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const PaginationPropsTable: FC = () => {
    const props = [
        {
            name: 'value (required)',
            type: 'number',
            description: 'Value of the current page. The first page has value 1.'
        },
        {
            name: 'pageSize (required)',
            type: 'number',
            description: 'Number of items per page.'
        },
        {
            name: 'totalItems (required)',
            type: 'number',
            description: 'Total number of items in the list.'
        },
        {
            name: 'size',
            type: '"normal" | "small"',
            defaultValue: '"normal"'
        },
        {
            name: 'label',
            type: 'React component or string',
            description: 'Label to display in the pagination container. Usually something like "Page X of Y".'
        },
        {
            name: 'pageSizes',
            type: '{ label: string; value: string }[]',
            description: 'Array of options if page size can be changed by user.'
        },
        {
            name: 'onNextPage',
            type: '() => void',
            description: 'Callback to call when the next page button is clicked.'
        },
        {
            name: 'onSkipForward',
            type: '() => void',
            description: 'Callback to call when the move to the last page button is clicked.'
        },
        {
            name: 'onPrevPage',
            type: '() => void',
            description: 'Callback to call when the previous page button is clicked.'
        },
        {
            name: 'onSkipBackward',
            type: '() => void',
            description: 'Callback to call when the move to the first page button is clicked.'
        },
        {
            name: 'onSelectPageSize',
            type: '(selected: { label: string; value: string }) => void',
            description:
                'Callback to call a different page size was selected. Fired only if `pageSizes` prop is provided.'
        },
        {
            name: 'ariaLabelNext',
            type: 'string',
            description: 'Aria label for the next page button.'
        },
        {
            name: 'ariaLabelLast',
            type: 'string',
            description: 'Aria label for the last page page button.'
        },
        {
            name: 'ariaLabelPrevious',
            type: 'string',
            description: 'Aria label for the previous page page button.'
        },
        {
            name: 'ariaLabelFirst',
            type: 'string',
            description: 'Aria label for the "Move to the first page" button.'
        },
        {
            name: 'ariaLabelSelectPageSizeContainer',
            type: 'string',
            description: 'Aria label for the container with the page sizes selector.'
        }
    ];

    return <PropsTable props={props} />;
};
