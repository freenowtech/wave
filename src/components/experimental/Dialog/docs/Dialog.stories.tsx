import React, { useState } from 'react';
import styled from 'styled-components';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Dialog } from '../Dialog';
import { Button } from '../../Button/Button';
import { WarningIcon } from '../../../../icons';
import { Checkbox } from '../../Checkbox/Checkbox';
import { getSemanticValue } from '../../../../experimental';

const StyledLink = styled.a`
    color: ${getSemanticValue('accent')};
    text-decoration: underline;
`;

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

export const WithCheckboxesAsBody: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [termsChecked, setTermsChecked] = useState(false);
        const [privacyChecked, setPrivacyChecked] = useState(false);
        const [termsInvalid, setTermsInvalid] = useState(false);
        const [privacyInvalid, setPrivacyInvalid] = useState(false);

        const handleProceed = () => {
            if (termsChecked && privacyChecked) {
                action('Action - Both accepted')();
                setIsOpen(false);
            } else {
                if (!termsChecked) setTermsInvalid(true);
                if (!privacyChecked) setPrivacyInvalid(true);
                action('Action - Validation failed')();
            }
        };

        const handleTermsChange = (isSelected: boolean) => {
            setTermsChecked(isSelected);
            if (isSelected) setTermsInvalid(false);
        };

        const handlePrivacyChange = (isSelected: boolean) => {
            setPrivacyChecked(isSelected);
            if (isSelected) setPrivacyInvalid(false);
        };

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>Open a dialog</Button>
                <Dialog
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    headline="Review and Accept: Terms & Privacy"
                    subtitle="To continue using the Dispatcher tool, please review and accept both our Terms and Conditions and Privacy Policy."
                    actionButton={<Button onPress={handleProceed}>Proceed</Button>}
                    body={[
                        <Checkbox
                            key="terms"
                            isSelected={termsChecked}
                            onChange={handleTermsChange}
                            isInvalid={termsInvalid}
                            label={
                                <>
                                    I have read and agree to FREENOW&apos;s
                                    <StyledLink href="/terms">Terms and Conditions.</StyledLink>
                                </>
                            }
                        />,
                        <Checkbox
                            key="privacy"
                            isSelected={privacyChecked}
                            onChange={handlePrivacyChange}
                            isInvalid={privacyInvalid}
                            label={
                                <>
                                    I have read and agree to FREENOW&apos;s
                                    <StyledLink href="/terms">Privacy Policy.</StyledLink>
                                </>
                            }
                        />
                    ]}
                />
            </>
        );
    }
};
