import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../essentials';
import { Box } from '../Box/Box';
import Compact from './components/Compact';
import DefaultPanel from './components/Default';

interface AccordionProps {
    heading?: string;
    description?: string;
    info?: string;
    buttonLabel?: string;
    variant?: 'compact' | 'default';
    expanded?: boolean;
    children: ReactNode;
}

const HorizontalDivider = styled(Box)`
    border: 0;
    border-top: solid 1px ${Colors.AUTHENTIC_BLUE_200};
`;

const HorizontalDividerTop = HorizontalDivider;

const HorizontalDividerBottom = HorizontalDivider;

const RenderedSection = styled(Box)`
    :nth-of-type(2n) ${HorizontalDividerTop} {
        display: none;
    }
    :nth-of-type(2n) ${HorizontalDividerBottom} {
        display: none;
    }
`;

const Accordion = ({ heading, description, info, buttonLabel, variant, expanded, children }: AccordionProps) => (
    <RenderedSection role="group">
        <HorizontalDividerTop />
        {variant === 'compact' ? (
            <Compact label={heading ? heading : ''} description={description} expanded={expanded}>
                {children}
            </Compact>
        ) : (
            <DefaultPanel
                label={heading ? heading : ''}
                description={description}
                buttonLabel={buttonLabel}
                info={info}
                expanded={expanded}
            >
                {children}
            </DefaultPanel>
        )}
        <HorizontalDividerBottom />
    </RenderedSection>
);

export { Accordion, AccordionProps };
