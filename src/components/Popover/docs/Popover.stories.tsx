import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Popover } from '../Popover';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import SettingsIcon from '../../../icons/options/SettingsIcon';
import { Link } from '../../Link/Link';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    argTypes: {
        placement: {
            options: [
                'top-start',
                'top-end',
                'bottom-start',
                'bottom-end',
                'right-start',
                'right-end',
                'left-start',
                'left-end',
                'auto',
                'auto-start',
                'auto-end',
                'top',
                'left',
                'right',
                'bottom'
            ],
            defaultValue: 'bottom-start',
            control: 'select'
        },
        offset: {
            defaultValue: 5,
            control: 'number'
        },
        padding: {
            defaultValue: 0,
            control: 'number'
        }
    },
    args: {
        content: <Text>Content for the Popover. Can contain Icons, Forms or other elements.</Text>,
        children: 'Trigger'
    }
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {};

export const WithButtonTrigger: Story = {
    args: {
        content: (
            <Link href="free-now.com" target="_blank">
                Open in Payment CRM
            </Link>
        ),
        children: (
            <Button size="small" variant="primary">
                <SettingsIcon size={20} /> Manage Booking
            </Button>
        )
    }
};

export const WithoutPadding: Story = {
    args: {
        padding: 0
    }
};
