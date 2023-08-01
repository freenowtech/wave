import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { ANIMATION_DURATION, Banner, useBannerDismiss } from './Banner';

describe('Banner', () => {
    it('renders a <div> tag by default', () => {
        expect(render(<Banner />)).toMatchHtmlTag('div');
    });

    it('allows rendering react nodes as children', () => {
        render(
            <Banner>
                <button type="button">button</button>
                <p>paragraph</p>
            </Banner>
        );

        expect(screen.getByText('button')).toBeInTheDocument();
        expect(screen.getByText('paragraph')).toBeInTheDocument();
    });

    it('allows rendering a function as a child', () => {
        render(
            <Banner>
                {dismiss => {
                    expect(dismiss).toBeDefined();
                    return (
                        <button type="button" onClick={dismiss}>
                            button
                        </button>
                    );
                }}
            </Banner>
        );

        expect(screen.getByText('button')).toBeInTheDocument();
    });

    it('can be dismissed by calling the dismiss function', async () => {
        const user = userEvent.setup();
        render(
            <Banner>
                {dismiss => (
                    <button type="button" onClick={dismiss}>
                        dismiss
                    </button>
                )}
            </Banner>
        );

        const banner = screen.getByText('dismiss');
        await user.click(banner);

        await waitForElementToBeRemoved(banner);
        expect(banner).not.toBeInTheDocument();
    });

    it('can be dismissed by calling the dismiss function from the hook', async () => {
        const user = userEvent.setup();
        const InnerComponent: React.FC = () => {
            const dismiss = useBannerDismiss();
            return (
                <button type="button" onClick={dismiss}>
                    Close
                </button>
            );
        };

        render(
            <Banner>
                <InnerComponent />
            </Banner>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        await waitForElementToBeRemoved(button);
        expect(button).not.toBeInTheDocument();
    });

    it('calls the onClose callback after the animation finished', async () => {
        jest.useFakeTimers();

        const user = userEvent.setup();
        const mockOnClose = jest.fn();
        render(
            <Banner onClose={mockOnClose}>
                {dismiss => (
                    <button type="button" onClick={dismiss}>
                        dismiss
                    </button>
                )}
            </Banner>
        );

        // testing library requires us to use `await` here,
        // but we use fake timers, so the click won't be handled until we run the timers,
        // so we can't use `await` here
        // @typescript-eslint/no-floating-promises
        user.click(screen.getByText('dismiss'));

        // We run the timer to just before the animation ends
        jest.advanceTimersByTime(ANIMATION_DURATION - 1);
        expect(mockOnClose).not.toBeCalled();

        // And now we let the animation end
        jest.runAllTimers();
        await waitFor(() => {
            expect(mockOnClose).toBeCalled();
        });
    });
});
