import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ComboBox } from './ComboBox';
import { ListBoxItem } from '../ListBox/ListBox';

const mockItems = [
    { id: '1', name: 'Luke Skywalker' },
    { id: '2', name: 'Darth Vader' },
    { id: '3', name: 'Leia Organa' }
];

describe('ComboBox', () => {
    it('renders with label and placeholder', () => {
        render(
            <ComboBox label="Star Wars Character" placeholder="Select a character" items={mockItems}>
                {item => <ListBoxItem>{item.name}</ListBoxItem>}
            </ComboBox>
        );

        expect(screen.getByText('Star Wars Character')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Select a character')).toBeInTheDocument();
    });

    it('opens dropdown on type', async () => {
        render(
            <ComboBox label="Star Wars Character" items={mockItems}>
                {item => <ListBoxItem>{item.name}</ListBoxItem>}
            </ComboBox>
        );

        const input = screen.getByRole('combobox');
        fireEvent.click(input);
        fireEvent.change(input, { target: { value: 'Luke' } });

        await waitFor(() => {
            expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
            expect(screen.getByText('Darth Vader')).toBeInTheDocument();
            expect(screen.getByText('Leia Organa')).toBeInTheDocument();
        });
    });

    it('calls onSelectionChange when an item is selected', async () => {
        const onSelectionChange = jest.fn();
        render(
            <ComboBox label="Star Wars Character" items={mockItems} onSelectionChange={onSelectionChange}>
                {item => <ListBoxItem>{item.name}</ListBoxItem>}
            </ComboBox>
        );

        const input = screen.getByRole('combobox');
        fireEvent.click(input);
        fireEvent.change(input, { target: { value: 'Luke' } });
        fireEvent.click(screen.getByText('Luke Skywalker'));

        await waitFor(() => expect(onSelectionChange).toHaveBeenCalledWith('1'));
    });
});
