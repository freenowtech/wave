import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
    it('allows rendering react nodes as children', () => {
        render(
            <Accordion expanded>
                <button>button</button>
                <p>paragraph</p>
            </Accordion>
        );
        expect(screen.getByText('button')).toBeInTheDocument();
        expect(screen.getByText('paragraph')).toBeInTheDocument();
    });

    it('render default variant closed', () => {
        render(
            <Accordion heading="Some heading" info="some info" description="some description" buttonLabel="button">
                <p>Place holder</p>
            </Accordion>
        );
        expect(screen.getByText('Some heading')).toBeInTheDocument();
        expect(screen.getByText('some info')).toBeInTheDocument();
        expect(screen.getByText('some description')).toBeInTheDocument();
        expect(screen.getByText('button')).toBeInTheDocument();
    });

    it('render default variant open', () => {
        render(
            <Accordion heading="Some heading" info="some info" description="some description" buttonLabel="button">
                <p>Place holder</p>
            </Accordion>
        );
        userEvent.click(screen.getByText('Some heading'));
        expect(screen.getByText('Place holder')).toBeInTheDocument();
        expect(screen.getByText('some description')).toBeInTheDocument();
        expect(screen.getByText('button')).toBeInTheDocument();
        userEvent.click(screen.getByText('button'));
        expect(screen.queryByText('Place holder')).toBeFalsy();
    });

    it('render compact variant correct', () => {
        render(
            <Accordion
                heading="Some heading"
                info="some info"
                description="some description"
                buttonLabel="button"
                variant="compact"
            >
                <p>Place holder</p>
            </Accordion>
        );
        expect(screen.getByText('Some heading')).toBeInTheDocument();
        expect(screen.getByText('some description')).toBeInTheDocument();
        expect(screen.queryByText('some info')).toBeFalsy();
        expect(screen.queryByText('button')).toBeFalsy();
    });

    it('render compact variant open', () => {
        render(
            <Accordion heading="Some heading" description="some description" variant="compact">
                <p>Place holder</p>
            </Accordion>
        );
        userEvent.click(screen.getByText('Some heading'));
        expect(screen.getByText('Place holder')).toBeInTheDocument();
        expect(screen.getByText('some description')).toBeInTheDocument();
        userEvent.click(screen.getByText('Some heading'));
        expect(screen.queryByText('Place holder')).toBeFalsy();
    });
});
