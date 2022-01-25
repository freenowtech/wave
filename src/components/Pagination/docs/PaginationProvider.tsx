import React, { ReactNode } from 'react';
import { Text } from '../../Text/Text';

import { Pagination } from '../Pagination';

interface Props {
    children: (props: {
        currentPage: number;
        pageSize: number;
        pageSizes: { label: string; value: string }[];
        totalItems: number;
        handleNextPage: () => void;
        handlePrevPage: () => void;
        handleSelectPageSize: (selected: { label: string; value: string }) => void;
        handleSkipForward: () => void;
        handleSkipBackward: () => void;
    }) => ReactNode;
}

interface State {
    currentPage: number;
    pageSize: number;
}

class PaginationProvider extends React.Component<Props, State> {
    private TOTAL_ITEMS = 200;

    private PAGE_SIZES = [
        {
            label: '10',
            value: '10'
        },
        {
            label: '15',
            value: '15'
        },
        {
            label: '20',
            value: '20'
        }
    ];

    constructor(props: Props) {
        super(props);

        this.state = {
            currentPage: 1,
            pageSize: 10
        };
    }

    private handleNextPage = () => {
        this.setState(current => ({ ...current, currentPage: current.currentPage + 1 }));
    };

    private handlePrevPage = () => {
        this.setState(current => ({ ...current, currentPage: current.currentPage - 1 }));
    };

    private handleSelectPageSize = (selected: { label: string; value: string }) => {
        this.setState(current => ({ ...current, pageSize: Number.parseInt(selected.value, 10) }));
    };

    private handleSkipForward = () => {
        this.setState(current => ({ ...current, currentPage: Math.ceil(this.TOTAL_ITEMS / current.pageSize) }));
    };

    private handleSkipBackward = () => {
        this.setState(current => ({ ...current, currentPage: 1 }));
    };

    public render(): ReactNode {
        return this.props.children({
            currentPage: this.state.currentPage,
            pageSize: this.state.pageSize,
            pageSizes: this.PAGE_SIZES,
            totalItems: this.TOTAL_ITEMS,
            handleNextPage: this.handleNextPage,
            handlePrevPage: this.handlePrevPage,
            handleSelectPageSize: this.handleSelectPageSize,
            handleSkipForward: this.handleSkipForward,
            handleSkipBackward: this.handleSkipBackward
        });
    }
}

const NormalPagination: React.FC = () => (
    <PaginationProvider>
        {({
            currentPage,
            pageSize,
            totalItems,
            handleNextPage,
            handlePrevPage,
            handleSkipForward,
            handleSkipBackward
        }) => (
            <Pagination
                value={currentPage}
                pageSize={pageSize}
                totalItems={totalItems}
                label={
                    <Text weak>
                        Page{' '}
                        <Text as="b" fontWeight="semibold" weak>
                            {currentPage} of {Math.ceil(totalItems / pageSize)}
                        </Text>
                    </Text>
                }
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
                onSkipForward={handleSkipForward}
                onSkipBackward={handleSkipBackward}
            />
        )}
    </PaginationProvider>
);

const SmallPagination: React.FC = () => (
    <PaginationProvider>
        {({
            currentPage,
            pageSize,
            totalItems,
            handleNextPage,
            handlePrevPage,
            handleSkipForward,
            handleSkipBackward
        }) => (
            <Pagination
                size="small"
                value={currentPage}
                pageSize={pageSize}
                totalItems={totalItems}
                label={
                    <Text weak>
                        Page{' '}
                        <Text as="b" fontWeight="semibold" weak>
                            {currentPage} of {Math.ceil(totalItems / pageSize)}
                        </Text>
                    </Text>
                }
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
                onSkipForward={handleSkipForward}
                onSkipBackward={handleSkipBackward}
            />
        )}
    </PaginationProvider>
);

const PaginationWithPageSize: React.FC = () => (
    <PaginationProvider>
        {({
            currentPage,
            pageSize,
            pageSizes,
            totalItems,
            handleNextPage,
            handlePrevPage,
            handleSelectPageSize,
            handleSkipForward,
            handleSkipBackward
        }) => (
            <Pagination
                value={currentPage}
                pageSize={pageSize}
                pageSizes={pageSizes}
                totalItems={totalItems}
                label={
                    <Text weak>
                        Page{' '}
                        <Text as="b" fontWeight="semibold" weak>
                            {currentPage} of {Math.ceil(totalItems / pageSize)}
                        </Text>
                    </Text>
                }
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
                onSelectPageSize={handleSelectPageSize}
                onSkipForward={handleSkipForward}
                onSkipBackward={handleSkipBackward}
            />
        )}
    </PaginationProvider>
);

export { PaginationProvider, NormalPagination, SmallPagination, PaginationWithPageSize };
