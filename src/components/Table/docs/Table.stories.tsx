import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components/Table';
import { DefaultTable } from './DefaultTable';
import { ActiveRowTable } from './ActiveRowTable';
import { ComplexDataTable } from './ComplexDataTable';
import { SkeletonTable } from './SkeletonTable';
import { SortableTable } from './SortableTable';
import { SortableTableDefault } from './SortableTableDefault';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    argTypes: {
        rowStyle: {
            control: 'radio',
            options: ['zebra', 'striped', 'lines']
        },
        rowSize: {
            control: 'radio',
            options: ['large', 'normal', 'small']
        },
        columnSpace: {
            control: 'radio',
            options: ['normal', 'small']
        }
    }
};

export default meta;

type TableStory = StoryObj<typeof Table>;

export const Default: TableStory = {
    render: DefaultTable
};

export const WithActiveRow: TableStory = {
    render: ActiveRowTable
};

export const WithComplexData: TableStory = {
    decorators: [
        Story => (
            <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                <Story />
            </div>
        )
    ],
    render: ComplexDataTable
};

export const WithSkeletonLoader: TableStory = {
    render: SkeletonTable
};

export const WithSortableTable: TableStory = {
    render: SortableTable
};

export const WithDefaultSortedTable: TableStory = {
    render: SortableTableDefault
};
