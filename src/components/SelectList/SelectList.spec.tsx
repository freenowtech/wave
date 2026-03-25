import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { SelectList } from './SelectList';
import { getSemanticValue } from '../../utils/cssVariables';

describe('SelectList', () => {
    it('renders options in multi select', () => {
        const options = [
            {
                label: 'Sales',
                value: 'sales'
            },
            {
                label: 'Marketing',
                value: 'marketing',
                error: true
            }
        ];

        render(<SelectList options={options} value={options} isMulti />);

        const normalTag = screen.getByText('Sales').parentElement;
        expect(normalTag).toHaveStyle(`
            background-color: ${getSemanticValue('background-element-info-default')};
        `);

        const errorTag = screen.getByText('Marketing').parentElement;
        expect(errorTag).toHaveStyle(`
            background-color: rgba(0, 0, 0, 0);
        `);
    });

    it('disables options in multi select when control is disabled', () => {
        const options = [
            {
                label: 'Sales',
                value: 'sales'
            },
            {
                label: 'Marketing',
                value: 'marketing',
                error: true
            }
        ];

        render(<SelectList options={options} value={options} isMulti isDisabled />);

        const normalTag = screen.getByText('Sales').parentElement;
        expect(normalTag).toHaveStyle(`
            background-color: rgba(0, 0, 0, 0);
        `);

        const errorTag = screen.getByText('Marketing').parentElement;
        expect(errorTag).toHaveStyle(`
            background-color: rgba(0, 0, 0, 0);
        `);
    });
});
