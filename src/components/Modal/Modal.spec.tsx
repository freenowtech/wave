import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Modal, useModalDismiss } from './Modal';

describe('Modal', () => {
    describe('should call onClose function', () => {
        it('when clicking on close icon', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<Modal onClose={mockCloseHandler}>Content</Modal>);

            fireEvent.click(getByTestId('close-icon'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when clicking on close icon in fullscreen', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(
                <Modal onClose={mockCloseHandler} fullscreen>
                    Content
                </Modal>
            );

            fireEvent.click(getByTestId('close-icon'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when clicking on the dimming background', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<Modal onClose={mockCloseHandler}>Content</Modal>);

            fireEvent.click(getByTestId('dimming-background'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when pressing the escape key', async () => {
            const mockCloseHandler = jest.fn();
            render(<Modal onClose={mockCloseHandler}>Content</Modal>);

            fireEvent.keyUp(window, { keyCode: 27 });

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when calling the dismiss function', async () => {
            const mockCloseHandler = jest.fn();
            const { getByText } = render(
                <Modal onClose={mockCloseHandler}>
                    {dismiss => (
                        <button type="button" onClick={dismiss}>
                            dismiss
                        </button>
                    )}
                </Modal>
            );

            fireEvent.click(getByText('dismiss'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when calling the dismiss function from a hook', async () => {
            const user = userEvent.setup()
            const mockCloseHandler = jest.fn();

            const InnerComponent: React.FC = () => {
                const dismiss = useModalDismiss();
                return (
                    <button type="button" onClick={dismiss}>
                        Click Me
                    </button>
                );
            };

            render(
                <Modal onClose={mockCloseHandler}>
                    <InnerComponent />
                </Modal>
            );

            await user.click(screen.getByRole('button'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });
    });

    describe('in the non-dismissible state', () => {
        it('should not show the close icon for the default modal', () => {
            const { queryByTestId } = render(<Modal dismissible={false} />);

            expect(queryByTestId('close-icon')).toBeNull();
        });

        it('should not show the close icon for the fullscreen modal', () => {
            const { queryByTestId } = render(<Modal fullscreen dismissible={false} />);

            expect(queryByTestId('close-icon')).toBeNull();
        });

        it('should not call the onClose handler when clicking on the dimming', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<Modal dismissible={false} onClose={mockCloseHandler} />);

            fireEvent.click(getByTestId('dimming-background'));

            await waitFor(() => expect(mockCloseHandler).not.toHaveBeenCalled());
        });

        it('should not call the onClose handler when pressing the escape key', async () => {
            const mockCloseHandler = jest.fn();
            render(
                <Modal dismissible={false} onClose={mockCloseHandler}>
                    Content
                </Modal>
            );

            fireEvent.keyUp(window, { keyCode: 27 });

            await waitFor(() => expect(mockCloseHandler).not.toHaveBeenCalled());
        });

        it('should call the onClose handler when calling the dismiss function', async () => {
            const mockCloseHandler = jest.fn();
            const { getByText } = render(
                <Modal onClose={mockCloseHandler} dismissible={false}>
                    {dismiss => (
                        <button type="button" onClick={dismiss}>
                            dismiss
                        </button>
                    )}
                </Modal>
            );

            fireEvent.click(getByText('dismiss'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });
    });

    it('should not call onClose function when clicking dimming in fullscreen', async () => {
        const mockCloseHandler = jest.fn();
        const { getByTestId } = render(
            <Modal onClose={mockCloseHandler} fullscreen>
                Content
            </Modal>
        );

        fireEvent.click(getByTestId('dimming-background'));

        await waitFor(() => expect(mockCloseHandler).not.toHaveBeenCalled());
    });
});
