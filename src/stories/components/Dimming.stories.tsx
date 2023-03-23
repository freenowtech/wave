import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dimming } from '../..';

const description =
    'The Dimming is a dark blue transparent layer covering 100% of the screen’s width and height. It’s a building block to compose and emphasize a screen overlay. Here you will see it contained in a small box for demo purposes.';

export default {
    title: 'Components/Dimming',
    component: Dimming,
    argTypes: {
        style: {
            table: {
                disable: true
            }
        },
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
        },
        ref: {
            table: {
                disable: true
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: description
            },
            source: {
                excludeDecorators: true
            }
        }
    },
    decorators: [
        Story => (
            <div style={{ width: '15rem', height: '21rem' }}>
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof Dimming>;

const Template: ComponentStory<typeof Dimming> = args => <Dimming {...args} />;

export const Default = Template.bind({});
Default.args = {
    style: {
        position: 'static'
    }
};
