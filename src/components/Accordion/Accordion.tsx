import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../essentials';
import { Box } from '../Box/Box';
import { Compact } from './components/Compact';
import { DefaultPanel } from './components/Default';

interface AccordionProps {
    heading?: string;
    description?: string;
    info?: string;
    buttonLabel?: string;
    variant?: 'compact' | 'default';
    defaultExpanded?: boolean;
    children: ReactNode;
}

const HorizontalDivider = styled(Box)`
    border: 0;
    border-top: solid 1px ${Colors.AUTHENTIC_BLUE_200};
`;

const HorizontalDividerTop = HorizontalDivider;

const HorizontalDividerBottom = styled(HorizontalDivider)`
    display: none;
`;

const RenderedSection = styled(Box)`
    :last-child ${HorizontalDividerBottom} {
        display: inherit;
    }
`;

const Accordion = ({ heading, description, info, buttonLabel, variant, defaultExpanded, children }: AccordionProps) => (
    <RenderedSection role="group">
        <HorizontalDividerTop />
        {variant === 'compact' ? (
            <Compact heading={heading ? heading : ''} description={description} defaultExpanded={defaultExpanded}>
                {children}
            </Compact>
        ) : (
            <DefaultPanel
                heading={heading ? heading : ''}
                description={description}
                buttonLabel={buttonLabel}
                info={info}
                defaultExpanded={defaultExpanded}
            >
                {children}
            </DefaultPanel>
        )}
        <HorizontalDividerBottom />
    </RenderedSection>
);

export { Accordion, AccordionProps };
