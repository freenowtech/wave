import React from 'react';
import styled from 'styled-components';
import { Dialog, DialogProps, Modal as BaseModal } from 'react-aria-components';
import { getSemanticValue } from '../../../essentials/experimental';

const ModalCard = styled(BaseModal)`
    padding: 2rem;
    border-radius: 1.5rem;
    background: ${getSemanticValue('surface')};
    color: ${getSemanticValue('on-surface')};
    outline: none;

    &[data-entering] {
        animation: modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes modal-zoom {
        from {
            transform: scale(0.8);
        }
        to {
            transform: scale(1);
        }
    }
`;

const StyledDialog = styled(Dialog)`
    outline: none;
`;

type ModalProps = Pick<DialogProps, 'children' | 'role'>;

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => (
    <ModalCard ref={ref}>
        <StyledDialog {...props} />
    </ModalCard>
));

export { Modal, ModalProps };
