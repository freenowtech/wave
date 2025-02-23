import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dimming } from '../Dimming';

const meta: Meta = {
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
    decorators: [
        (Story: React.FC): JSX.Element => (
            // use a workaround with `willChange: transform` to keep the fixed positioned element inside the container
            <div style={{ width: '15rem', height: '21rem', willChange: 'transform' }}>
                <Story />
                text below
            </div>
        )
    ],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Dimming>;

export const Default: Story = {};
