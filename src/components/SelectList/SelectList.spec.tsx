import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import selectEvent from 'react-select-event';
import { SelectList } from './SelectList';
import { getSemanticValue } from '../../utils/cssVariables';

const createOptions = (count: number, prefix = 'Option') =>
    Array.from({ length: count }, (_, index) => ({ label: `${prefix} ${index}`, value: `${prefix}-${index}` }));

// react-select generates ids, so compare the class names of its emotion styles, which are hashes of the styles
const styleClassNames = (element: React.ReactElement) => {
    const { container, unmount } = render(element);
    const classNames = [...container.querySelectorAll('[class*="css-"]')].map(node => node.getAttribute('class'));
    unmount();

    return classNames;
};

describe('SelectList', () => {
    it('renders the boxed variant in medium size by default', () => {
        const options = createOptions(2);

        expect(styleClassNames(<SelectList options={options} />)).toEqual(
            styleClassNames(<SelectList options={options} variant="boxed" size="medium" />)
        );
        expect(styleClassNames(<SelectList options={options} />)).not.toEqual(
            styleClassNames(<SelectList options={options} size="small" />)
        );
    });

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

    describe('windowing', () => {
        it('renders every option when below the window threshold', () => {
            render(<SelectList inputId="select" label="Select" options={createOptions(50)} />);

            selectEvent.openMenu(screen.getByLabelText('Select'));

            expect(screen.getByText('Option 0')).toBeInTheDocument();
            expect(screen.getByText('Option 49')).toBeInTheDocument();
        });

        it('only renders the visible options when at or above the window threshold', () => {
            render(<SelectList inputId="select" label="Select" options={createOptions(150)} />);

            selectEvent.openMenu(screen.getByLabelText('Select'));

            expect(screen.getByText('Option 0')).toBeInTheDocument();
            expect(screen.queryByText('Option 149')).not.toBeInTheDocument();
        });

        it('selects an option from a windowed list', () => {
            const onChange = jest.fn();
            const options = createOptions(150);
            render(<SelectList inputId="select" label="Select" options={options} onChange={onChange} />);

            selectEvent.openMenu(screen.getByLabelText('Select'));
            // A plain click: hovering re-renders the windowed menu list, which remounts its items
            fireEvent.click(screen.getByText('Option 3'));

            expect(onChange).toHaveBeenCalledWith(options[3], expect.objectContaining({ action: 'select-option' }));
        });

        it('renders group headings in a windowed grouped list', () => {
            const groups = [
                { label: 'Group A', options: createOptions(60, 'A') },
                { label: 'Group B', options: createOptions(60, 'B') }
            ];
            render(<SelectList inputId="select" label="Select" options={groups} />);

            selectEvent.openMenu(screen.getByLabelText('Select'));

            expect(screen.getByText('Group A')).toBeInTheDocument();
            expect(screen.getByText('A 0')).toBeInTheDocument();
            expect(screen.queryByText('Group B')).not.toBeInTheDocument();
        });
    });
});
