import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';

describe('Dialog', () => {
    const defaultProps = {
        isOpen: true,
        headline: 'Test Headline',
        subtitle: 'Test Subtitle',
        actionButton: <Button>Action</Button>
    };

    it('renders headline and subtitle correctly', () => {
        render(<Dialog {...defaultProps} />);

        expect(screen.getByText('Test Headline')).toBeInTheDocument();
        expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('renders action button', () => {
        render(<Dialog {...defaultProps} />);

        expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('renders dismiss button when provided', () => {
        render(<Dialog {...defaultProps} dismissButton={<Button emphasis="secondary">Cancel</Button>} />);

        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    it('calls onOpenChange when action button is clicked', () => {
        const onOpenChange = jest.fn();
        render(
            <Dialog
                {...defaultProps}
                onOpenChange={onOpenChange}
                actionButton={<Button onPress={() => onOpenChange(false)}>Close</Button>}
            />
        );

        fireEvent.click(screen.getByText('Close'));
        expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it('renders with role="dialog" by default', () => {
        render(<Dialog {...defaultProps} />);

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders with role="alertdialog" when specified', () => {
        render(<Dialog {...defaultProps} role="alertdialog" />);

        expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    it('renders checkboxes when provided', () => {
        render(
            <Dialog
                {...defaultProps}
                checkboxes={[
                    <Checkbox key="terms" label="Accept Terms" />,
                    <Checkbox key="privacy" label="Accept Privacy" />
                ]}
            />
        );

        expect(screen.getByText('Accept Terms')).toBeInTheDocument();
        expect(screen.getByText('Accept Privacy')).toBeInTheDocument();
    });

    it('is not rendered when isOpen is false', () => {
        render(<Dialog {...defaultProps} isOpen={false} />);

        expect(screen.queryByText('Test Headline')).not.toBeInTheDocument();
        expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
    });

    it('renders with checkboxes interaction', () => {
        const handleCheckbox = jest.fn();

        render(
            <Dialog
                {...defaultProps}
                checkboxes={[<Checkbox key="terms" label="Accept Terms" onChange={handleCheckbox} />]}
            />
        );

        fireEvent.click(screen.getByLabelText('Accept Terms'));
        expect(handleCheckbox).toHaveBeenCalled();
    });
});
