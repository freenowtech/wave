import { type Meta, type StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Text } from '../../../components';

// Storybook 10's Canvas only renders stories, so the example of the Breakpoints page lives here. It's hidden from the
// sidebar, which keeps showing only the Breakpoints page.
const meta: Meta = {
    title: 'Essentials/Breakpoints/Examples',
    tags: ['!dev', '!autodocs']
};

export default meta;

export const ResponsiveFontSize: StoryObj = {
    render: () => (
        <Text primary fontSize={[1, 2, 3, 4, 5]}>
            Sample text
        </Text>
    )
};
