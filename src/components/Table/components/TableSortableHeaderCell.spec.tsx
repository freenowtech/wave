import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { SortingDirection } from '../types';
import { TableSortableHeaderCell } from './TableSortableHeaderCell';

const handleSortChange = jest.fn();

const renderComponent = (active = false, direction = 'ASC') =>
    render(
        <table>
            <thead>
                <tr>
                    <TableSortableHeaderCell
                        active={active}
                        field="address"
                        direction={direction as SortingDirection}
                        onSortChange={handleSortChange}
                    >
                        Address
                    </TableSortableHeaderCell>
                </tr>
            </thead>
        </table>
    );

describe('TableSortableHeaderCell', () => {
    it('should indicate the ASC direction', () => {
        renderComponent(true, 'ASC');

        expect(screen.getByText('Address', { exact: false })).toMatchSnapshot();
    });

    it('should indicate the DESC direction', () => {
        renderComponent(true, 'DESC');

        expect(screen.getByText('Address', { exact: false })).toMatchSnapshot();
    });

    it('should have aria-sort none when inactive', () => {
        renderComponent();

        expect(screen.getByText('Address', { exact: false }).parentElement).toHaveAttribute('aria-sort', 'none');
    });

    it('should have aria-sort ascending when active and direction is ASC', () => {
        renderComponent(true, 'ASC');

        expect(screen.getByText('Address', { exact: false }).parentElement).toHaveAttribute('aria-sort', 'ascending');
    });

    it('should have aria-sort descending when active and direction is DESC', () => {
        renderComponent(true, 'DESC');

        expect(screen.getByText('Address', { exact: false }).parentElement).toHaveAttribute('aria-sort', 'descending');
    });

    it('should call the callback with the right arguments', async () => {
        const user = userEvent.setup();
        renderComponent(true, 'ASC');

        await user.click(screen.getByText('Address', { exact: false }));

        expect(handleSortChange).toHaveBeenCalledWith('address', 'ASC');
    });
});
