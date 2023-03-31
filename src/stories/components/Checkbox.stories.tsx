import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../..';

export default {
    title: 'Form Elements/Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            description: 'Sets a label for the checkbox',
            type: {
                name: 'string'
            }
        },
        error: {
            description: 'Sets styles to indicate an error',
            options: [true, false],
            control: { type: 'radio' }
        },
        disabled: {
            description: 'Sets the state of the checkbox disabled',
            options: [true, false],
            control: { type: 'radio' }
        },
        size: {
            description: 'Adjusts the size of the checkbox label',
            options: ['large', 'medium', 'small'],
            defaultValue: 'medium'
        },
        textVerticalAlign: {
            description: 'Adjusts the vertical alignment of the checkbox',
            options: ['top', 'center'],
            defaultValue: 'center'
        },
        indeterminate: {
            description: 'Sets the checkbox in the indeterminate state',
            options: [true, false],
            control: { type: 'radio' },
            defaultValue: false
        },
        onChange: {
            action: 'onChange'
        }
    }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Checkbox'
};

export const Error = Template.bind({});
Error.args = {
    label: 'Checkbox',
    error: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Checkbox',
    disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    label: 'Checkbox',
    indeterminate: true
};
