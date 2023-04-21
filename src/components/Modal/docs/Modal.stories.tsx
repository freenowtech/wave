import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Modal, useModalDismiss } from '../Modal';
import { Button } from '../../Button/Button';

const meta: Meta = {
    title: 'Components/Modal',
    component: Modal,
    decorators: [
        Story => (
            <div style={{ willChange: 'transform', height: '150px', border: '1px dashed gray' }}>
                <Story />
            </div>
        )
    ],
    args: {
        children: 'Modal content'
    }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: ({ onClose, ...args }) => {
        const [open, setOpen] = useState(false);
        const openModal = () => setOpen(true);
        const closeModal = () => setOpen(false);
        return (
            <>
                <Button size="small" mr={1} onClick={openModal}>
                    Open Modal
                </Button>
                {open && (
                    <Modal
                        {...args}
                        onClose={() => {
                            onClose?.();
                            closeModal();
                        }}
                    />
                )}
            </>
        );
    }
};

export const FullScreen: Story = {
    ...Default,
    args: {
        fullscreen: true
    }
};

export const WithoutAutomaticDismiss: Story = {
    ...Default,
    args: {
        dismissible: false
    }
};

export const DismissedWithRenderProps: Story = {
    render: args => <Modal {...args}>{dismiss => <Button onClick={dismiss}>Close</Button>}</Modal>
};

const Content = () => {
    const dismiss = useModalDismiss();
    return <Button onClick={dismiss}>Close</Button>;
};

export const DismissedWithHook: Story = {
    render: args => (
        <Modal {...args}>
            <Content />
        </Modal>
    )
};
