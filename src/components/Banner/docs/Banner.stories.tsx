import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../Banner';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';

const meta: Meta = {
    title: 'Components/Banner',
    component: Banner,
    argTypes: {
        children: {
            description:
                'Content of the banner. Can be `ReactNode` or a render function that receives a dismiss method',
            control: { type: 'none' }
        },
        position: {
            table: {
                defaultValue: {
                    summary: 'Depends on the variant prop value',
                    detail: `
                        info → top\nsuccess → top\ndanger → bottom
                    `
                }
            }
        }
    },
    args: {
        children: (
            <Text>
                In order to continuously improve our websites, and show offers and advertisements that are suited to
                you, we use cookies, tracking and (re-) targeting technologies. Please see our Cookie policy for more
                information. Tracking and (re-) targeting technologies will only be used if you click on Agree.
            </Text>
        )
    },
    decorators: [
        Story => (
            <div
                style={{
                    willChange: 'transform',
                    height: '250px',
                    border: '1px dashed gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text secondary fontSize={3}>
                    Page
                </Text>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
    args: {
        children: <Text style={{ color: 'inherit' }}>Hello</Text>
    }
};

export const Success: Story = {
    args: {
        variant: 'success'
    }
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: <Text>Oops! Something went wrong</Text>
    }
};

export const PositionTop: Story = {
    args: {
        position: 'top'
    }
};

export const WithDismissedFn: Story = {
    args: {
        children: dismiss => (
            <>
                <Text>If you are tired of this banner, hit the button 👉 </Text>
                <Button onClick={dismiss}>Close</Button>
            </>
        )
    }
};
