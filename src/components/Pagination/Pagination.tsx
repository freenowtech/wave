import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Spaces } from '../../essentials/Spaces/Spaces';
import { BackwardIcon, BackwardLastIcon, ForwardIcon, ForwardLastIcon } from '../../icons';
import { Box } from '../Box/Box';
import { SelectList } from '../SelectList/SelectList';
import { getSemanticValue } from '../../utils/cssVariables';

const Container = styled.div`
    text-align: center;
`;

const ButtonsContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: ${Spaces[1]};
`;

const IconButton = styled.button`
    align-items: center;
    background-color: ${getSemanticValue('background-page-default')};
    border: 0.0625rem solid ${getSemanticValue('border-neutral-faded')};
    border-radius: 0.25rem;
    display: inline-flex;
    height: 2.5rem;
    justify-content: center;
    padding: 0;
    width: 2.5rem;
    color: ${getSemanticValue('foreground-primary')};
    fill: currentColor;

    &:not(:last-child) {
        margin-right: ${Spaces[1]};
    }

    &:disabled {
        color: ${getSemanticValue('foreground-disabled')};
    }

    &:hover:not(:disabled) {
        color: ${getSemanticValue('foreground-on-background-neutral')};
        background-color: ${getSemanticValue('background-element-neutral-emphasized')};
        cursor: pointer;
    }
`;

const LabelContainer = styled.div`
    margin-top: ${Spaces[2]};
`;

interface PaginationProps {
    /**
     * Define the size of the component, defaults to normal.
     */
    size?: 'normal' | 'small';
    /**
     * Value of the current page. The first page is assumed to be 1.
     */
    value: number;
    /**
     * Number of items per page.
     */
    pageSize: number;
    /**
     * Allow the user to select between the given page sizes.
     */
    pageSizes?: { label: string; value: string }[];
    /**
     * Total number of items.
     */
    totalItems: number;
    /**
     * Label to display current page and total pages.
     */
    label?: ReactNode;
    /**
     * Aria label for the skip backward button.
     */
    ariaLabelFirst?: string;
    /**
     * Aria label for the previous button.
     */
    ariaLabelPrevious?: string;
    /**
     * Aria label for the next button.
     */
    ariaLabelNext?: string;
    /**
     * Aria label for the skip forward button.
     */
    ariaLabelLast?: string;
    /**
     * Aria label for the container of the page size `SelectList`.
     */
    ariaLabelSelectPageSizeContainer?: string;
    /**
     * Callback when the next button was pressed.
     */
    onNextPage?: () => void;
    /**
     * Callback when the previous button was pressed.
     */
    onPrevPage?: () => void;
    /**
     * Callback when a different page size was selected. Can only be used when `pageSizes` is passed.
     */
    onSelectPageSize?: (selected: { label: string; value: string }) => void;
    /**
     * Callback when the skip forward button was pressed.
     */
    onSkipForward?: () => void;
    /**
     * Callback when the skip backward button was pressed.
     */
    onSkipBackward?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
    size = 'normal',
    value,
    pageSize,
    pageSizes = [],
    totalItems,
    label,
    ariaLabelFirst = 'First',
    ariaLabelPrevious = 'Previous',
    ariaLabelNext = 'Next',
    ariaLabelLast = 'Last',
    ariaLabelSelectPageSizeContainer = 'Select page size container',
    onNextPage,
    onPrevPage,
    onSelectPageSize,
    onSkipForward,
    onSkipBackward
}: PaginationProps) => {
    const isFirstPage = value === 1;
    const isLastPage = totalItems > 0 ? value === Math.ceil(totalItems / pageSize) : true;
    const hasMultiplePageSizes = pageSizes.length > 0;

    return (
        <Container>
            <ButtonsContainer>
                <Box flex="1">
                    {hasMultiplePageSizes && (
                        <Box aria-label={ariaLabelSelectPageSizeContainer} width="fit-content" minWidth="5em">
                            <SelectList
                                options={pageSizes}
                                onChange={onSelectPageSize}
                                value={pageSizes.find(sizeOption => sizeOption.value === pageSize.toString())}
                            />
                        </Box>
                    )}
                </Box>
                <Box>
                    {size !== 'small' && (
                        <IconButton aria-label={ariaLabelFirst} disabled={isFirstPage} onClick={onSkipBackward}>
                            <BackwardLastIcon size="small" color="inherit" />
                        </IconButton>
                    )}

                    <IconButton aria-label={ariaLabelPrevious} disabled={isFirstPage} onClick={onPrevPage}>
                        <BackwardIcon size="small" color="inherit" />
                    </IconButton>

                    <IconButton aria-label={ariaLabelNext} disabled={isLastPage} onClick={onNextPage}>
                        <ForwardIcon size="small" color="inherit" />
                    </IconButton>

                    {size !== 'small' && (
                        <IconButton aria-label={ariaLabelLast} disabled={isLastPage} onClick={onSkipForward}>
                            <ForwardLastIcon size="small" color="inherit" />
                        </IconButton>
                    )}
                </Box>
                <Box flex="1" />
            </ButtonsContainer>

            {label && <LabelContainer>{label}</LabelContainer>}
        </Container>
    );
};

export { Pagination, PaginationProps };
