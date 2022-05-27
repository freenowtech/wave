import React from 'react';
import styled from 'styled-components';

import { Spaces } from '../../essentials';
import { Card } from '../Card/Card';

interface PopoverContentProps {
    /**
     * Popover content (can be any valid React Element or component)
     */
    children: React.ReactNode;
}

const PopoverContentContainer = styled(Card)`
    display: block;
    padding: ${Spaces[2]};
`;

export const PopoverContent = ({ children }: PopoverContentProps): React.ReactElement => (
    <>
        <PopoverContentContainer level={200}>{children}</PopoverContentContainer>
    </>
);
