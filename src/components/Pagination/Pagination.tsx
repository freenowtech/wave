import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../essentials/Colors/Colors';
import { Spaces } from '../../essentials/Spaces/Spaces';
import { BackwardIcon, BackwardLastIcon, ForwardIcon, ForwardLastIcon } from '../../icons/basic';

const Container = styled.div`
    text-align: center;
`;

const IconButton = styled.button`
    align-items: center;
    background-color: ${Colors.WHITE};
    border: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_200};
    border-radius: 0.25rem;
    display: inline-flex;
    height: 2.5rem;
    justify-content: center;
    padding: 0;
    width: 2.5rem;

    &:not(:last-child) {
        margin-right: ${Spaces[1]};
    }

    &:hover:not(:disabled) {
        background-color: ${Colors.AUTHENTIC_BLUE_50};
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
     * Callback when the next button was pressed.
     */
    onNextPage?: () => void;
    /**
     * Callback when the previous button was pressed.
     */
    onPrevPage?: () => void;
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
    totalItems,
    label,
    ariaLabelFirst = 'First',
    ariaLabelPrevious = 'Previous',
    ariaLabelNext = 'Next',
    ariaLabelLast = 'Last',
    onNextPage,
    onPrevPage,
    onSkipForward,
    onSkipBackward
}: PaginationProps) => {
    const isFirstPage = value === 1;
    const isLastPage = totalItems > 0 ? value === Math.ceil(totalItems / pageSize) : true;

    return (
        <Container>
            <div>
                {size !== 'small' && (
                    <IconButton aria-label={ariaLabelFirst} disabled={isFirstPage} onClick={onSkipBackward}>
                        <BackwardLastIcon
                            size="small"
                            color={isFirstPage ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_900}
                        />
                    </IconButton>
                )}

                <IconButton aria-label={ariaLabelPrevious} disabled={isFirstPage} onClick={onPrevPage}>
                    <BackwardIcon
                        size="small"
                        color={isFirstPage ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_900}
                    />
                </IconButton>

                <IconButton aria-label={ariaLabelNext} disabled={isLastPage} onClick={onNextPage}>
                    <ForwardIcon
                        size="small"
                        color={isLastPage ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_900}
                    />
                </IconButton>

                {size !== 'small' && (
                    <IconButton aria-label={ariaLabelLast} disabled={isLastPage} onClick={onSkipForward}>
                        <ForwardLastIcon
                            size="small"
                            color={isLastPage ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_900}
                        />
                    </IconButton>
                )}
            </div>

            {label && <LabelContainer>{label}</LabelContainer>}
        </Container>
    );
};

export { Pagination, PaginationProps };
