import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InfoBannerCard } from '../blocks/InfoBannerCard';

const meta: Meta = {
    title: 'Components/InfoBanner',
    component: InfoBannerCard,
    args: {
        title: 'Please do not share details about this information.',
        description: 'In case of uncertainty please contact Fraud department.'
    }
};

export default meta;

type Story = StoryObj<typeof InfoBannerCard>;

export const Default: Story = {
    args: {
        children: (
            <>
                <InfoBannerCard.Title>document.status.documents.title.no.vehicle</InfoBannerCard.Title>

                <InfoBannerCard.Description>
                    document.status.documents.body.no.vehicle
                </InfoBannerCard.Description>

                <InfoBannerCard.Link>
                    vehicles.addVehicle.button
                </InfoBannerCard.Link>
            </>
        )
    }
};

export const Success: Story = {
    args: {
        ...Default.args,
        variant: 'success'
    }
};

export const Warning: Story = {
    args: {
        ...Default.args,
        variant: 'warning',
        title: 'Possible Fraud',
        description: 'This passenger has more than 20 linked accounts.'
    }
};

export const Error: Story = {
    args: {
        ...Default.args,
        variant: 'error'
    }
};

export const Emphasized: Story = {
    args: {
        ...Default.args,
        emphasized: true
    }
};

export const WithLink: Story = {
    args: {
        ...Default.args,
        linkText: 'More info',
        linkUrl: 'https://free-now.com/'
    }
};
