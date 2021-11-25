import React, { FC, useState } from 'react';

import { Button, Headline, Modal, TextButton } from '../..';
import { ControlledDatepickerSingleInput } from './ControlledDatepickerSingleInput';

export const DatepickerOnModal: FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button size="small" onClick={() => setShowModal(true)}>
                Open Modal with Datepicker
            </Button>
            {showModal && (
                <Modal dismissible={false} onClose={() => setShowModal(false)}>
                    {dismiss => (
                        <>
                            <Headline as="h2">New Event</Headline>

                            <ControlledDatepickerSingleInput />

                            <br />
                            <Button onClick={dismiss}>Add Event</Button>
                            <TextButton onClick={dismiss}>Cancel</TextButton>
                        </>
                    )}
                </Modal>
            )}
        </>
    );
};
