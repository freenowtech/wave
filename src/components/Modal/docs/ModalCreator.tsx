import React, { FC, useState } from 'react';
import { Button, Headline, Text, TextButton } from '../..';
import { Modal } from '../Modal';

export const modalContent = (dismiss: () => void): React.ReactElement => (
    <>
        <Headline as="h2">Add Note</Headline>
        <Text as="p" weak my={3}>
            Please keep in mind that comments are also read by other agents. Make sure to write comprehensible text.
        </Text>
        <Button onClick={dismiss}>Add Note</Button>
        <TextButton ml={1} onClick={dismiss}>
            Cancel
        </TextButton>
    </>
);

enum ModalType {
    NONE,
    DEFAULT,
    FULLSCREEN,
    NON_DISMISSIBLE
}

const ModalCreator: FC = () => {
    const [modal, setModal] = useState(ModalType.NONE);

    const openModal = (type: ModalType) => () => {
        setModal(type);
    };

    const hideModal = () => {
        setModal(ModalType.NONE);
    };

    return (
        <>
            <Button size="small" mr={1} onClick={openModal(ModalType.FULLSCREEN)}>
                Fullscreen Modal
            </Button>
            <Button size="small" onClick={openModal(ModalType.NON_DISMISSIBLE)}>
                Non-Dismissible Modal
            </Button>
            {modal === ModalType.FULLSCREEN && (
                <Modal onClose={hideModal} fullscreen>
                    {modalContent}
                </Modal>
            )}
            {modal === ModalType.NON_DISMISSIBLE && (
                <Modal onClose={hideModal} dismissible={false}>
                    {modalContent}
                </Modal>
            )}
        </>
    );
};

export { ModalCreator };
