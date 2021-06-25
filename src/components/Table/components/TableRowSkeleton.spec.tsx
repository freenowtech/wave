import { render, screen } from '@testing-library/react';
import React from 'react';
import { TableRowSkeleton } from './TableRowSkeleton';

describe('TableRowSkeleton', () => {
    it('should contain correct number of table cells', () => {
        const columns = 3;

        render(
            <table>
                <tbody>
                    <TableRowSkeleton columns={columns} />
                </tbody>
            </table>
        );

        expect(screen.getAllByRole('cell').length).toBe(columns);
    });

    it('should contain the correct hidden label text', () => {
        const columns = 3;

        render(
            <table>
                <tbody>
                    <TableRowSkeleton columns={columns} />
                </tbody>
            </table>
        );
        const elements = screen.getAllByLabelText('table-row-skeleton');
        expect(elements.length).toBe(columns);
        elements.forEach(element => {
            expect(element.attributes.getNamedItem('aria-hidden')).toBeTruthy();
        });
    });
});
