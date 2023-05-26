import { Meta, StoryObj } from '@storybook/react';
import * as FlagIcons from '../flags';
import { LargeFlag } from './LargeFlag';

const meta: Meta = {
    title: 'Essentials/Icons/Flags',
    component: LargeFlag,
    argTypes: {
        theme: {
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
        }
    }
};

export default meta;

type Story = StoryObj<typeof LargeFlag>;

export const Primary: Story = {
    name: 'Flags',
    args: {
        code: 'US'
    },
    argTypes: {
        code: {
            description: 'Two letters ISO country code.',
            control: 'select',
            options: Object.entries(FlagIcons).map(it => it[0])
        }
    }
};
