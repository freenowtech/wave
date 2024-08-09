import { StoryObj, Meta } from '@storybook/react';
import { Button } from '../Button';

const meta: Meta = {
    title: 'Experimental/Components/Button',
    component: Button,
    args: {
        children: 'Book now'
    },
    argTypes: {
        children: {
            description: 'Button text'
        },
        secondary: {
            control: 'boolean'
        },
        ref: {
            table: {
                disable: true
            }
        },
        theme: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
