import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import * as Icons from '..';
import { getSemanticValue } from '../../utils/cssVariables';

const meta: Meta = {
    title: 'Essentials/Icons/Icons',
    component: Icon
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    name: 'Icons',
    args: {
        name: 'CheckCircleFilledIcon',
        color: getSemanticValue('foreground-success-default'),
        size: 40
    },
    argTypes: {
        name: {
            description: 'Name of the icon\n\n**Example Only!**',
            control: 'select',
            options: Object.keys(Icons).filter(key => !['Flag', 'IconProps'].includes(key))
        },
        color: {
            control: 'color'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 40]
        }
    }
};
