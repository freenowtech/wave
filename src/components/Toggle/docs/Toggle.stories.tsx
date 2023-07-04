import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../Toggle';

const meta: Meta = {
    title: 'Components/Toggle',
    component: Toggle,
    argTypes: {
        ref: {
            description: 'Reference to the checkbox DOM element',
            control: false
        },
        label: {
            control: 'text'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const InitiallyToggledOn: Story = {
    args: {
        defaultChecked: true
    }
};

export const WithError: Story = {
    args: {
        defaultChecked: true,
        error: true
    }
};

export const WithLabel: Story = {
    args: {
        label: 'Turn on the light'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
}
