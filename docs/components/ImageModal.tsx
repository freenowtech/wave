import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Modal } from '../../src/components';

interface ImageModalProps {
    src: string;
    alt: string;
}

const ClickableImage = styled.img`
    cursor: pointer;
    transition: transform 100ms;

    &:hover {
        transform: scale(1.025);
    }
`;

export const ImageModal: FC<ImageModalProps> = ({ src, alt }: ImageModalProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {open && (
                <Modal onClose={() => setOpen(false)} fullscreen width="90%">
                    <img src={src} width="100%" alt={alt} />
                </Modal>
            )}
            <ClickableImage src={src} width="100%" alt={alt} onClick={() => setOpen(true)} />
        </>
    );
};
