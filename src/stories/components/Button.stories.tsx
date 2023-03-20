import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, TextButton } from '../..';

const description =
    'Renders a `button` tag. This module exposes two types of buttons `<TextButton />` and `<Button />`. Take a look to the [MDN web docs - Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to know more about some of the default props supported by a button along with some accessibility concerns. \n\n The purpose of the buttons is to trigger an interaction like order, confirmation or submit. For navigation targets consider a link. Use the primary button only once per screen and avoid putting two primary buttons next to each other. Use the secondary button for less important actions and in multi button scenarios.';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: description
            }
        }
    },
    argTypes: {
        variant: {
            description: 'Sets the button variant',
            options: ['primary', 'secondary', 'danger'],
            control: { type: 'radio' }
        },
        size: {
            description: 'Sets the button size',
            options: ['small', 'medium'],
            control: { type: 'radio' }
        },
        inverted: {
            description: 'Inverts the button for dark mode',
            options: [true, false],
            control: { type: 'radio' }
        }
    },
    subcomponents: { TextButton }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;
const TextButtonTemplate: ComponentStory<typeof TextButton> = args => <TextButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Button'
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Button'
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    size: 'small',
    children: 'Button'
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    variant: 'secondary',
    size: 'small',
    children: 'Button'
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
    variant: 'danger',
    size: 'small',
    children: 'Button'
};

export const DefaultTextButton = TextButtonTemplate.bind({});
DefaultTextButton.args = {
    variant: 'default',
    children: 'Text Button'
};

export const DangerTextButton = TextButtonTemplate.bind({});
DangerTextButton.args = {
    variant: 'danger',
    children: 'Text Button'
};
