import React, { ReactElement, ReactNode } from 'react';
import { Heading } from 'react-aria-components';
import styled from 'styled-components';
import { Text, textStyles } from '../Text/Text';
import { Modal } from '../Modal/Modal';
import { Backdrop, BackdropProps } from '../Backdrop/Backdrop';
import { getSemanticValue } from '../../../essentials/experimental';

const Card = styled.div`
    display: grid;
    gap: 0.5rem;
`;

const ButtonsWrapper = styled.div`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
`;

const BodyWrapper = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const StyledModal = styled(Modal)`
    padding: 2rem;
    width: 30rem;
`;

const HeadlineText = styled(Heading)`
    margin: 0;
    ${textStyles.variants.headline}
`;

const SubtitleText = styled(Text)`
    color: ${getSemanticValue('on-surface-variant')};
`;

interface DialogProps extends Omit<BackdropProps, 'isDismissable' | 'isKeyboardDismissDisabled'> {
    role?: 'dialog' | 'alertdialog';
    headline: ReactNode;
    subtitle: ReactNode;
    dismissButton?: ReactNode;
    actionButton: ReactNode;
    body?: ReactNode;
    isBackdropVisible?: boolean;
}

const Dialog = ({
    role = 'dialog',
    headline,
    subtitle,
    dismissButton,
    actionButton,
    body,
    isBackdropVisible = true,
    ...props
}: DialogProps): ReactElement => (
    <Backdrop {...props} isDismissable={false} isKeyboardDismissDisabled isBackdropVisible={isBackdropVisible}>
        <StyledModal role={role}>
            <Card>
                <HeadlineText slot="title">{headline}</HeadlineText>

                <SubtitleText as="p" variant="body1">
                    {subtitle}
                </SubtitleText>

                {body && <BodyWrapper>{body}</BodyWrapper>}

                <ButtonsWrapper>
                    {dismissButton}
                    {actionButton}
                </ButtonsWrapper>
            </Card>
        </StyledModal>
    </Backdrop>
);

export { Dialog, DialogProps };
