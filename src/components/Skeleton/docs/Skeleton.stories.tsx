import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../Skeleton';

const meta: Meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    argTypes: {
        animated: {
            options: [true, false],
            defaultValue: false,
            control: 'radio'
        },
        ref: {
            table: {
                disable: true
            }
        },
        as: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        },
        theme: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const WithAnimation: Story = {
    args: {
        animated: true
    }
};
