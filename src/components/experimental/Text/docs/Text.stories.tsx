import { StoryObj, Meta } from '@storybook/react';
import { Text } from '../Text';

const meta: Meta = {
    title: 'Experimental/Components/Text',
    component: Text,
    args: {
        children: 'When zombies arrive, quickly fax Judge Pat',
        variant: 'display'
    },
    argTypes: {
        children: {
            description: 'Text'
        },
        variant: {
            options: ['display', 'headline', 'title1', 'title2', 'body1', 'body2', 'label1', 'lable2'],
            control: 'select'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};
