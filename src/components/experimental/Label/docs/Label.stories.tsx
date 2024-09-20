import React from 'react';
import styled from 'styled-components';
import { StoryObj, Meta } from '@storybook/react';
import { Label } from '../Label';
import { darkTheme, getBareValue } from '../../../../essentials/experimental';

const meta: Meta = {
    title: 'Experimental/Components/Label',
    component: Label,
    parameters: {
        layout: 'centered'
    },
    args: {
        children: 'Label Text'
    },
    argTypes: {
        type: {
            control: 'radio',
            options: ['default', 'positive', 'negative']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Positive: Story = {
    args: {
        type: 'positive'
    }
};

export const Negative: Story = {
    args: {
        type: 'negative'
    }
};

export const Custom: Story = {
    render: ({ children, ...props }) => {
        const CustomLabel = styled(Label)`
            color: ${getBareValue('neutral-99')};
            background-color: ${getBareValue('blue-50')};

            ${darkTheme`
                color: ${getBareValue('neutral-10')};
                background-color: ${getBareValue('blue-70')};
            `}
        `;

        return <CustomLabel {...props}>{children}</CustomLabel>;
    }
};
