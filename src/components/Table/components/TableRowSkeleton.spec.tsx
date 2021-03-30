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
});
