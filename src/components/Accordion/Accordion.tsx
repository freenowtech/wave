import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../essentials';
import { Box } from '../Box/Box';
import { Compact } from './components/Compact';
import { DefaultPanel } from './components/Default';
import { AccordionProps } from './types';

const HorizontalDivider = styled(Box)`
    border: 0;
    border-top: solid 0.0625rem ${Colors.AUTHENTIC_BLUE_200};
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

const Accordion = ({
    heading,
    description,
    info,
    buttonLabel,
    variant,
    defaultExpanded,
    children,
    onExpand = () => undefined,
    onCollapse = () => undefined
}: AccordionProps) => (
    <RenderedSection role="group">
        <HorizontalDividerTop />
        {variant === 'compact' ? (
            <Compact
                heading={heading ? heading : ''}
                description={description}
                defaultExpanded={defaultExpanded}
                onExpand={onExpand}
                onCollapse={onCollapse}
            >
                {children}
            </Compact>
        ) : (
            <DefaultPanel
                heading={heading ? heading : ''}
                description={description}
                buttonLabel={buttonLabel}
                info={info}
                defaultExpanded={defaultExpanded}
                onExpand={onExpand}
                onCollapse={onCollapse}
            >
                {children}
            </DefaultPanel>
        )}
        <HorizontalDividerBottom />
    </RenderedSection>
);

export { Accordion, AccordionProps };
