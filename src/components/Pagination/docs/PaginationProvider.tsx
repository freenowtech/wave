import React, { ReactNode } from 'react';

import { Pagination } from '../Pagination';
import { Text } from '../../Text/Text';

interface Props {
    children: (props: {
        currentPage: number;
        pageSize: number;
        totalItems: number;
        handleNextPage: () => void;
        handlePrevPage: () => void;
        handleSkipForward: () => void;
        handleSkipBackward: () => void;
    }) => ReactNode;
}

interface State {
    currentPage: number;
}

class PaginationProvider extends React.Component<Props, State> {
    public readonly state: State = {
        currentPage: 1
    };

    private PAGE_SIZE = 20;
    private TOTAL_ITEMS = 200;

    public render() {
        return this.props.children({
            currentPage: this.state.currentPage,
            pageSize: this.PAGE_SIZE,
            totalItems: this.TOTAL_ITEMS,
            handleNextPage: this.handleNextPage,
            handlePrevPage: this.handlePrevPage,
            handleSkipForward: this.handleSkipForward,
            handleSkipBackward: this.handleSkipBackward
        });
    }

    private handleNextPage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
    };

    private handlePrevPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1 });
    };

    private handleSkipForward = () => {
        this.setState({ currentPage: Math.ceil(this.TOTAL_ITEMS / this.PAGE_SIZE) });
    };

    private handleSkipBackward = () => {
        this.setState({ currentPage: 1 });
    };
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

export { PaginationProvider, NormalPagination, SmallPagination };
