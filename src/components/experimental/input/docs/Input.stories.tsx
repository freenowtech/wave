import { StoryObj, Meta } from '@storybook/react';
import { Input } from '../Input';

const meta: Meta = {
    title: 'Experimental/Components/Input',
    component: Input,
    args: {
        label: 'Passenger name'
    },
    argTypes: {
        label: {
            description: 'The label the text field'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};
