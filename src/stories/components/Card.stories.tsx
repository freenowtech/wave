import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../..';

const description =
    'The Card supports `space`, `height` and `width` [styled-system](https://styled-system.com/table) props.';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        docs: {
            description: {
                component: description
            }
        }
    },
    argTypes: {
        ref: { table: { disable: true } },
        forwardedAs: { table: { disable: true } },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        children: { description: 'Defines the inner content of the card' },
        level: {
            description: 'Sets the drop-shadow level',
            options: [0, 100, 200, 300],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Card';
Default.args = {
    level: 300,
    children: 'Card Contents'
};
