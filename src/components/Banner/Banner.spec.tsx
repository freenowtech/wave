import { render, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Colors } from '../../essentials';
import { ANIMATION_DURATION, Banner, useBannerDismiss } from './Banner';

describe('Banner', () => {
    it('renders a <div> tag by default', () => {
        expect(render(<Banner />)).toMatchHtmlTag('div');
    });

    it('allows rendering react nodes as children', () => {
        render(
            <Banner>
                <button>button</button>
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
                    return <button onClick={dismiss}>button</button>;
                }}
            </Banner>
        );

        expect(screen.getByText('button')).toBeInTheDocument();
    });

    it('can be dismissed by calling the dismiss function', async () => {
        render(<Banner>{dismiss => <button onClick={dismiss}>dismiss</button>}</Banner>);

        const banner = screen.getByText('dismiss');
        userEvent.click(banner);

        await waitForElementToBeRemoved(banner);
        expect(banner).not.toBeInTheDocument();
    });

    it('can be dismissed by calling the dismiss function from the hook', async () => {
        const InnerComponent: React.FC = () => {
            const dismiss = useBannerDismiss();
            return <button onClick={dismiss}>Close</button>;
        };

        render(
            <Banner>
                <InnerComponent />
            </Banner>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);

        await waitForElementToBeRemoved(button);
        expect(button).not.toBeInTheDocument();
    });

    it('calls the onClose callback after the animation finished', () => {
        jest.useFakeTimers();

        const mockOnClose = jest.fn();
        render(<Banner onClose={mockOnClose}>{dismiss => <button onClick={dismiss}>dismiss</button>}</Banner>);
        userEvent.click(screen.getByText('dismiss'));

        // We run the timer to just before the animation ends
        jest.advanceTimersByTime(ANIMATION_DURATION - 1);
        expect(mockOnClose).not.toBeCalled();

        // And now we let the animation end
        jest.advanceTimersByTime(1);
        expect(mockOnClose).toBeCalled();
    });

    describe('renders the variant', () => {
        it('"info" correctly', () => {
            expect(render(<Banner variant="info" />).container.firstChild).toHaveStyle(`
                background-color: ${Colors.AUTHENTIC_BLUE_550};
            `);
        });

        it('"success" correctly', () => {
            expect(render(<Banner variant="success" />).container.firstChild).toHaveStyle(`
                background-color: ${Colors.POSITIVE_GREEN_900};
            `);
        });

        it('"danger" correctly', () => {
            expect(render(<Banner variant="danger" />).container.firstChild).toHaveStyle(`
                background-color: ${Colors.NEGATIVE_ORANGE_900};
            `);
        });
    });
});
