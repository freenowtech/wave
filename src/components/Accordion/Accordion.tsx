import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { Box } from '../Box/Box';
import { Compact } from './components/Compact';
import { DefaultPanel } from './components/Default';
import { AccordionProps } from './types';
import { getSemanticValue } from '../../utils/cssVariables';

const HorizontalDivider = styled(Box)`
    border: 0;
    border-top: solid 0.0625rem ${getSemanticValue('border-neutral-default')};
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

const Accordion: React.FC<PropsWithChildren<AccordionProps>> = ({
    heading,
    description,
    info,
    buttonLabel,
    variant,
    defaultExpanded,
    children,
    onExpand = () => undefined,
    onCollapse = () => undefined
}) => (
    <RenderedSection role="group">
        <HorizontalDividerTop />
        {variant === 'compact' ? (
            <Compact
                heading={heading}
                description={description}
                defaultExpanded={defaultExpanded}
                onExpand={onExpand}
                onCollapse={onCollapse}
            >
                {children}
            </Compact>
        ) : (
            <DefaultPanel
                heading={heading}
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
