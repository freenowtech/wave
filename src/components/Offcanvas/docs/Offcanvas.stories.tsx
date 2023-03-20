import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Offcanvas, useOffcanvasDismiss } from '../Offcanvas';
import { Button } from '../../Button/Button';

const meta: Meta = {
    title: 'Components/Offcanvas',
    component: Offcanvas,
    decorators: [
        Story => (
            <div style={{ willChange: 'transform', height: '150px', border: '1px dashed gray' }}>
                <Story />
            </div>
        )
    ],
    args: {
        children: 'Offcanvas Content'
    }
};

export default meta;

type Story = StoryObj<typeof Offcanvas>;

export const Default: Story = {
    render: ({ onClose, ...args }) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button size="small" mr={1} onClick={() => setOpen(true)}>
                    Open Offcanvas
                </Button>
                {open && (
                    <Offcanvas
                        {...args}
                        onClose={() => {
                            onClose?.();
                            setOpen(false);
                        }}
                    />
                )}
            </>
        );
    }
};

export const WithoutAutomaticDismiss: Story = {
    ...Default,
    args: {
        dismissible: false
    }
};

export const FromRightSide: Story = {
    ...Default,
    args: {
        side: 'right'
    }
};

export const DismissedWithRenderProps: Story = {
    render: args => <Offcanvas {...args}>{dismiss => <Button onClick={dismiss}>Close</Button>}</Offcanvas>
};

const Content = () => {
    const dismiss = useOffcanvasDismiss();
    return <Button onClick={dismiss}>Close</Button>;
};

export const DismissedWithHook: Story = {
    render: args => (
        <Offcanvas {...args}>
            <Content />
        </Offcanvas>
    )
};
