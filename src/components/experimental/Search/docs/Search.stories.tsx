import { type StoryObj, type Meta } from '@storybook/react-vite';
import { Search } from '../Search';

const meta: Meta = {
    title: 'Experimental/Components/Search',
    component: Search,
    parameters: {
        layout: 'centered'
    },
    args: {
        placeholder: 'Search',
        isDisabled: false
    }
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};
