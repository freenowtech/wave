import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { SelectList } from './SelectList';
import { SemanticColors } from '../../essentials';

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
            background-color: ${SemanticColors.background.info};
            border-color: ${SemanticColors.border.infoEmphasized};
        `);

        const errorTag = screen.getByText('Marketing').parentElement;
        expect(errorTag).toHaveStyle(`
            background-color: transparent;
            border-color: ${SemanticColors.border.dangerEmphasized};
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
            border-color: ${SemanticColors.border.primary};
        `);

        const errorTag = screen.getByText('Marketing').parentElement;
        expect(errorTag).toHaveStyle(`
            background-color: transparent;
            border-color: ${SemanticColors.border.primary};
        `);
    });
});
