import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Snackbar } from '../Snackbar';

const meta: Meta = {
    title: 'Experimental/Components/Snackbar',
    component: Snackbar,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        children: 'Booking successfully cancelled',
        hasDismissButton: false,
        onDismiss: null
    }
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {};

export const WithDismissIcon: Story = {
    args: {
        hasDismissButton: true,
        onDismiss: action('Remove snackbar')
    }
};
