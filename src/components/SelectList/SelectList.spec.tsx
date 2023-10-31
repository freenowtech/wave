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
            border-color: ${getSemanticValue('border-info-default')};
        `);

        const errorTag = screen.getByText('Marketing').parentElement;
        expect(errorTag).toHaveStyle(`
            background-color: transparent;
            border-color: ${getSemanticValue('border-danger-default')};
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
            background-color: transparent;
            border-color: ${getSemanticValue('border-disabled')};
        `);

        const errorTag = screen.getByText('Marketing').parentElement;
        expect(errorTag).toHaveStyle(`
            background-color: transparent;
            border-color: ${getSemanticValue('border-disabled')};
        `);
    });
});
