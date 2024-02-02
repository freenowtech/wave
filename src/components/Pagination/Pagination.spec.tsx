import { render, RenderResult, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import selectEvent from 'react-select-event';

import { Pagination } from './Pagination';

describe('Pagination', () => {
    const examplePageSizes = [
        {
            label: '10',
            value: '10'
        },
        {
            label: '20',
            value: '20'
        }
    ];

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('should have no AXE violations', async () => {
        const { container } = render(<Pagination value={1} pageSize={20} totalItems={200} />);

        await expect(axe(container)).resolves.toHaveNoViolations();
    });

    // This test is used as an example in the documentation, so if it breaks and needs to be adapted make sure to also
    // update the documentation.
    it('should select by aria-label', () => {
        const { getByRole, getByLabelText } = render(
            <Pagination value={1} pageSize={20} totalItems={200} pageSizes={examplePageSizes} />
        );

        expect(getByRole('button', { name: 'First' })).toBeInTheDocument();
        expect(getByRole('button', { name: 'Previous' })).toBeInTheDocument();
        expect(getByRole('button', { name: 'Next' })).toBeInTheDocument();
        expect(getByRole('button', { name: 'Last' })).toBeInTheDocument();
        expect(getByLabelText('Select page size container')).toBeInTheDocument();
    });

    it('should render a label from a string', () => {
        const { getByText } = render(<Pagination value={1} pageSize={20} totalItems={200} label="test label" />);

        expect(getByText('test label')).toBeInTheDocument();
    });

    it('should render a label from a component', () => {
        const { getByText } = render(
            <Pagination value={1} pageSize={20} totalItems={200} label={<span>test label</span>} />
        );

        expect(getByText('test label')).toBeInTheDocument();
    });

    it('should switch to the next page when clicking forward', async () => {
        const user = userEvent.setup();
        const onNextMock = jest.fn();
        const { getByRole } = render(<Pagination value={1} pageSize={20} totalItems={200} onNextPage={onNextMock} />);

        const forwardBtn = getByRole('button', { name: 'Next' });

        await user.click(forwardBtn);
        expect(onNextMock).toHaveBeenCalled();
    });

    it('should select a page size when clicking on the page size list', async () => {
        const user = userEvent.setup();
        const onSelectPageSizeMock = jest.fn();

        const { queryByLabelText } = render(
            <Pagination
                value={1}
                pageSize={20}
                totalItems={200}
                pageSizes={examplePageSizes}
                onSelectPageSize={onSelectPageSizeMock}
            />
        );

        const container = queryByLabelText('Select page size container');

        const pageSizeSelectList = within(container).queryByRole('combobox');

        await user.type(pageSizeSelectList, '1');

        await selectEvent.select(container, ['10']);

        expect(onSelectPageSizeMock).toHaveBeenCalledWith(
            { label: '10', value: '10' },
            { action: 'select-option', name: undefined, option: undefined }
        );
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
