import React, { FC, useState } from 'react';
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
    }) => JSX.Element;
}

const TOTAL_ITEMS = 200;

const PAGE_SIZES = [
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

const PaginationProvider: FC<Props> = ({ children }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleNextPage = () => {
        setCurrentPage(current => current + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(current => current - 1);
    };

    const handleSelectPageSize = (selected: { label: string; value: string }) => {
        setPageSize(Number.parseInt(selected.value, 10));
    };

    const handleSkipForward = () => {
        setCurrentPage(Math.ceil(TOTAL_ITEMS / pageSize));
    };

    const handleSkipBackward = () => {
        setCurrentPage(1);
    };

    return children({
        currentPage,
        pageSize,
        pageSizes: PAGE_SIZES,
        totalItems: TOTAL_ITEMS,
        handleNextPage,
        handlePrevPage,
        handleSelectPageSize,
        handleSkipForward,
        handleSkipBackward
    });
};

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
                    <Text secondary>
                        Page{' '}
                        <Text as="b" fontWeight="semibold" secondary>
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
                    <Text secondary>
                        Page{' '}
                        <Text as="b" fontWeight="semibold" secondary>
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

export { NormalPagination, PaginationWithPageSize };
