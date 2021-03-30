import React, { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Pagination } from './Pagination';

describe('Pagination', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('should have no AXE violations', async () => {
        const { container } = render(<Pagination value={1} pageSize={20} totalItems={200} />);
        expect(axe(container)).resolves.toHaveNoViolations();
    });

    // This test is used as an example in the documentation, so if it breaks and needs to be adapted make sure to also
    // update the documentation.
    it('should select by aria-label', () => {
        const { getByRole } = render(<Pagination value={1} pageSize={20} totalItems={200} />);
        getByRole('button', { name: 'First' });
        getByRole('button', { name: 'Previous' });
        getByRole('button', { name: 'Next' });
        getByRole('button', { name: 'Last' });
    });

    it('should render a label from a string', () => {
        const { getByText } = render(<Pagination value={1} pageSize={20} totalItems={200} label="test label" />);
        getByText('test label');
    });

    it('should render a label from a component', () => {
        const { getByText } = render(
            <Pagination value={1} pageSize={20} totalItems={200} label={<span>test label</span>} />
        );
        getByText('test label');
    });

    it('should switch to the next page when clicking forward', () => {
        const onNextMock = jest.fn();
        const { getAllByRole } = render(
            <Pagination value={1} pageSize={20} totalItems={200} onNextPage={onNextMock} />
        );

        const [skipBackwardBtn, backwardBtn, forwardBtn, skipForwardBtn] = getAllByRole('button');

        userEvent.click(forwardBtn);
        expect(onNextMock).toHaveBeenCalled();
    });

    describe('when on first page', () => {
        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = render(<Pagination value={1} pageSize={20} totalItems={200} />);
        });

        it('should disabled the backwards buttons', () => {
            const [skipBackwardBtn, backwardBtn, forwardBtn, skipForwardBtn] = wrapper.getAllByRole('button');

            expect(skipBackwardBtn).toBeDisabled();
            expect(backwardBtn).toBeDisabled();
            expect(forwardBtn).toBeEnabled();
            expect(skipForwardBtn).toBeEnabled();
        });
    });

    describe('when on last page', () => {
        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = render(<Pagination value={10} pageSize={20} totalItems={200} />);
        });

        it('should disabled the forwards buttons', () => {
            const [skipBackwardBtn, backwardBtn, forwardBtn, skipForwardBtn] = wrapper.getAllByRole('button');

            expect(skipBackwardBtn).toBeEnabled();
            expect(backwardBtn).toBeEnabled();
            expect(forwardBtn).toBeDisabled();
            expect(skipForwardBtn).toBeDisabled();
        });
    });

    describe('when in the middle', () => {
        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = render(<Pagination value={5} pageSize={20} totalItems={200} />);
        });

        it('should enable all buttons', () => {
            const [skipBackwardBtn, backwardBtn, forwardBtn, skipForwardBtn] = wrapper.getAllByRole('button');

            expect(skipBackwardBtn).toBeEnabled();
            expect(backwardBtn).toBeEnabled();
            expect(forwardBtn).toBeEnabled();
            expect(skipForwardBtn).toBeEnabled();
        });
    });
});
