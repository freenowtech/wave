import { Meta, StoryObj } from '@storybook/react';
import { InfoBanner } from '../InfoBanner';

const meta: Meta = {
    title: 'Components/InfoBanner',
    component: InfoBanner,
    args: {
        title: 'Please do not share details about this information.',
        description: 'In case of uncertainty please contact Fraud department.'
    }
};

export default meta;

type Story = StoryObj<typeof InfoBanner>;

export const Default: Story = {};

export const Success: Story = {
    args: {
        variant: 'success'
    }
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Possible Fraud',
        description: 'This passenger has more than 20 linked accounts.'
    }
};

export const Error: Story = {
    args: {
        variant: 'error'
    }
};

export const Emphasized: Story = {
    args: {
        emphasized: true
    }
};

export const WithLink: Story = {
    args: {
        linkText: 'More info',
        linkUrl: 'https://free-now.com/'
    }
};
