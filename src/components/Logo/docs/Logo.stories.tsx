import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../Logo';

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'business'],
            defaultValue: 'default'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Business: Story = {
    args: {
        variant: 'business'
    }
};

export const Drivers: Story = {
    args: {
        variant: 'drivers'
    }
};

export const DefaultVertical: Story = {
    args: {
        variant: 'default-vertical'
    }
};

export const TrustInTaxi: Story = {
    args: {
        variant: 'trust-in-taxi'
    }
};

export const ByLyft: Story = {
    args: {
        variant: 'by-lyft'
    }
};

export const BusinessMonochrome: Story = {
    args: {
        variant: 'business',
        monochrome: true
    }
};

export const Monochrome: Story = {
    args: {
        monochrome: true
    }
};

export const DefaultVerticalMonochrome: Story = {
    args: {
        variant: 'default-vertical',
        monochrome: true
    }
};

export const TrustInTaxiMonochrome: Story = {
    args: {
        variant: 'trust-in-taxi',
        monochrome: true
    }
};

export const DriversMonochrome: Story = {
    args: {
        variant: 'drivers',
        monochrome: true
    }
};

export const ByLyftMonochrome: Story = {
    args: {
        variant: 'by-lyft',
        monochrome: true
    }
};
