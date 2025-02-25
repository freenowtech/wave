import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Text } from '../../Text/Text';

import { Pagination } from '../Pagination';

const meta: Meta = {
    title: 'Components/Pagination',
    component: Pagination,
    argTypes: {
        size: {
            options: ['normal', 'small'],
            control: 'radio'
        }
    },
    args: {
        value: 2,
        pageSize: 20,
        totalItems: 60
    }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const WithLabel: Story = {
    args: {
        label: 'Page 1 of 20'
    }
};

export const Small: Story = {
    args: {
        size: 'small'
    }
};

export const WithPageSizeSelector: Story = {
    args: {
        pageSizes: [
            { label: '20', value: '20' },
            { label: '50', value: '50' },
            { label: '100', value: '100' }
        ]
    },
    decorators: [
        (Story: React.FC): JSX.Element => (
            <div style={{ height: '200px' }}>
                <Story />
            </div>
        )
    ]
};

export const WithComplexLabel: Story = {
    args: {
        label: (
            <Text secondary>
                Page{' '}
                <Text as="b" fontWeight="semibold" secondary>
                    1 of 20
                </Text>
            </Text>
        )
    }
};
