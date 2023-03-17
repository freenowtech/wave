import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '../..';

const description = 'Accordion component is use to display large amount of content in a compress and progressive way.';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: description
            }
        }
    },
    argTypes: {
        onExpand: { table: { disable: true } },
        onCollapse: { table: { disable: true } },
        heading: { description: 'Sets the heading text' },
        description: { description: 'Sets the description text' },
        info: { description: 'Sets the info text' },
        buttonLabel: { description: 'Sets the button text' },
        defaultExpanded: {
            description: 'Sets if the component should be expanded or collapsed by default',
            options: [true, false],
            control: { type: 'radio' }
        },
        variant: {
            description: 'Sets the accordion variant',
            options: ['default', 'compact'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading: 'A Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: 'Lorem ipsum',
    buttonLabel: 'Expand/Collapse',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ante lectus, eget condimentum libero suscipit vitae. Nunc vestibulum eleifend turpis, sed tempus lectus. Etiam a facilisis felis, at molestie enim.'
};

export const Compact = Template.bind({});
Compact.args = {
    variant: 'compact',
    heading: 'A Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ante lectus, eget condimentum libero suscipit vitae. Nunc vestibulum eleifend turpis, sed tempus lectus. Etiam a facilisis felis, at molestie enim.'
};
