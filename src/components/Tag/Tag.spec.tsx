import { render, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';
import { Tag } from './Tag';
import { getSemanticValue } from '../../utils/cssVariables';

describe('Tag', () => {
    it('renders and can be dismissed', () => {
        const onDismiss = jest.fn();
        const { getByTestId } = render(<Tag onDismiss={onDismiss}>Lorem</Tag>);

        fireEvent.click(getByTestId('dismiss-icon'));

        expect(onDismiss).toBeCalledTimes(1);
    });

    it('renders and can not be dismissed when dismissible is set to false', () => {
        const onDismiss = jest.fn();
        const { queryByTestId } = render(
            <Tag onDismiss={onDismiss} dismissible={false}>
                Lorem
            </Tag>
        );

        expect(queryByTestId('dismiss-icon')).toBeNull();
    });

    it('renders disabled variant', () => {
        const { container } = render(<Tag variant="disabled">Lorem</Tag>);

        expect(container.firstChild).toHaveStyle(`
            border-color: ${getSemanticValue('border-disabled')};
        `);
        expect(screen.getByText('Lorem')).toHaveStyle(`
            color: ${getSemanticValue('foreground-disabled')};
        `);
        expect(screen.getByTestId('dismiss-icon')).toHaveStyle(`
            color: ${getSemanticValue('foreground-disabled')};
        `);
    });

    it('renders error variant', () => {
        const { container } = render(<Tag variant="error">Lorem</Tag>);

        expect(container.firstChild).toHaveStyle(`
            background-color: ${getSemanticValue('background-surface-danger-default')};
            border-color: ${getSemanticValue('border-danger-default')};
        `);
        expect(screen.getByText('Lorem')).toHaveStyle(`
            color: ${getSemanticValue('foreground-danger-default')};
        `);
        expect(screen.getByTestId('dismiss-icon')).toHaveStyle(`
            color: ${getSemanticValue('foreground-danger-default')};
        `);
    });
});
