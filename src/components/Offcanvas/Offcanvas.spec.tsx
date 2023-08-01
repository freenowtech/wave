import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Offcanvas, useOffcanvasDismiss } from './Offcanvas';

describe('Offcanvas', () => {
    describe('should call onClose function', () => {
        it('when clicking on close icon', async () => {
            const user = userEvent.setup()
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<Offcanvas onClose={mockCloseHandler}>Content</Offcanvas>);

            await user.click(getByTestId('close-icon'));
            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when clicking on the dimming background', async () => {
            const user = userEvent.setup()
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<Offcanvas onClose={mockCloseHandler}>Content</Offcanvas>);

            await user.click(getByTestId('dimming-background'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when pressing the escape key', async () => {
            const user = userEvent.setup()
            const mockCloseHandler = jest.fn();
            render(<Offcanvas onClose={mockCloseHandler}>Content</Offcanvas>);

            fireEvent.keyUp(window, { keyCode: 27 });

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when calling the dismiss function', async () => {
            const mockCloseHandler = jest.fn();
            const { getByText } = render(
                <Offcanvas onClose={mockCloseHandler}>
                    {dismiss => (
                        <button type="button" onClick={dismiss}>
                            dismiss
                        </button>
                    )}
                </Offcanvas>
            );

            fireEvent.click(getByText('dismiss'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it('when calling the dismiss function from a hook', async () => {
            const user = userEvent.setup()
            const mockCloseHandler = jest.fn();

            const InnerComponent: React.FC = () => {
                const dismiss = useOffcanvasDismiss();
                return (
                    <button type="button" onClick={dismiss}>
                        Click Me
                    </button>
                );
            };

            render(
                <Offcanvas onClose={mockCloseHandler}>
                    <InnerComponent />
                </Offcanvas>
            );

            await user.click(screen.getByRole('button'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });
    });

    describe('in the non-dismissible state', () => {
        it('should not show the close icon for the default Offcanvas', () => {
            const { queryByTestId } = render(<Offcanvas dismissible={false} />);

            expect(queryByTestId('close-icon')).toBeNull();
        });

        it('should not call the onClose handler when clicking on the dimming', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<Offcanvas dismissible={false} onClose={mockCloseHandler} />);

            fireEvent.click(getByTestId('dimming-background'));

            await waitFor(() => expect(mockCloseHandler).not.toHaveBeenCalled());
        });

        it('should not call the onClose handler when pressing the escape key', async () => {
            const mockCloseHandler = jest.fn();
            render(
                <Offcanvas dismissible={false} onClose={mockCloseHandler}>
                    Content
                </Offcanvas>
            );

            fireEvent.keyUp(window, { keyCode: 27 });

            await waitFor(() => expect(mockCloseHandler).not.toHaveBeenCalled());
        });

        it('should call the onClose handler when calling the dismiss function', async () => {
            const mockCloseHandler = jest.fn();
            const { getByText } = render(
                <Offcanvas onClose={mockCloseHandler} dismissible={false}>
                    {dismiss => (
                        <button type="button" onClick={dismiss}>
                            dismiss
                        </button>
                    )}
                </Offcanvas>
            );

            fireEvent.click(getByText('dismiss'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });
    });
});
