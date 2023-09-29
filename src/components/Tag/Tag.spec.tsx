import { render, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';
import { Tag } from './Tag';
import { SemanticColors } from '../../essentials';

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
            border-color: ${SemanticColors.border.primary};
        `);
        expect(screen.getByText('Lorem')).toHaveStyle(`
            color: ${SemanticColors.text.disabled};
        `);
        expect(screen.getByTestId('dismiss-icon')).toHaveStyle(`
            color: ${SemanticColors.icon.disabled};
        `);
    });

    it('renders error variant', () => {
        const { container } = render(<Tag variant="error">Lorem</Tag>);

        expect(container.firstChild).toHaveStyle(`
            background-color: ${SemanticColors.background.danger};
            border-color: ${SemanticColors.border.dangerEmphasized};
        `);
        expect(screen.getByText('Lorem')).toHaveStyle(`
            color: ${SemanticColors.text.dangerInverted};
        `);
        expect(screen.getByTestId('dismiss-icon')).toHaveStyle(`
            color: ${SemanticColors.icon.danger};
        `);
    });
});
