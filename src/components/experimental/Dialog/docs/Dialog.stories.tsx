import React, { useState } from 'react';
import { DialogTrigger } from 'react-aria-components';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dialog } from '../Dialog';
import { Button } from '../../Button/Button';
import { WarningIcon } from '../../../../icons';

const meta: Meta = {
    title: 'Experimental/Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered'
    }
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>Open a dialog</Button>
                <Dialog
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    headline="Are you sure?"
                    subtitle="This action cannot be undone"
                    dismissButton={
                        <Button emphasis="secondary" onPress={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                    }
                    actionButton={
                        <Button
                            onPress={() => {
                                action('Action')();
                                setIsOpen(false);
                            }}
                        >
                            <WarningIcon /> I do not care, do it
                        </Button>
                    }
                />
            </>
        );
    }
};

export const Alert: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>Trigger alert</Button>
                <Dialog
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    role="alertdialog"
                    headline="Error"
                    subtitle="We could not do the action"
                    dismissButton={
                        <Button emphasis="secondary" onPress={() => setIsOpen(false)}>
                            Dismiss
                        </Button>
                    }
                    actionButton={
                        <Button
                            onPress={() => {
                                action('Action retry')();
                                setIsOpen(false);
                            }}
                        >
                            Try again
                        </Button>
                    }
                />
            </>
        );
    }
};
