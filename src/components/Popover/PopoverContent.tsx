import React from 'react';
import { styled } from 'styled-components';

import { Spaces } from '../../essentials';
import { Card } from '../Card/Card';

const DEFAULT_PADDING = Spaces[2];

interface PopoverContentProps {
    /**
     * Popover content (can be any valid React Element or component)
     */
    children: React.ReactNode;
    /**
     * Popover content padding
     */
    padding: string | number;
}

const PopoverContentContainer = styled(Card)<{ padding: string | number }>`
    display: block;
    padding: ${props => props.padding};
`;

export const PopoverContent = ({ padding = DEFAULT_PADDING, children }: PopoverContentProps): React.ReactElement => (
    <>
        {/* @ts-expect-error TS2769 */}
        <PopoverContentContainer padding={padding} level={200}>
            {children}
        </PopoverContentContainer>
    </>
);
