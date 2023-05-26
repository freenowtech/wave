import React, { useState, ReactElement, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { SemanticColors } from '../../../essentials';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';
import { AccordionProps } from '../types';

type Props = PropsWithChildren<
    Pick<AccordionProps, 'heading' | 'description' | 'defaultExpanded' | 'onExpand' | 'onCollapse'>
>;

const StyleHeadline = styled(Headline)``;

const PanelHeader = styled(Header)`
    &:hover ${StyleHeadline} {
        color: ${SemanticColors.text.linkHover};
    }

    &:hover ${ChevronDown} {
        color: ${SemanticColors.text.linkHover};
    }

    &:hover ${ChevronUp} {
        color: ${SemanticColors.text.linkHover};
    }
`;

const PanelIcon = ({ isOpen }: { isOpen: boolean }) => (isOpen ? <ChevronUp /> : <ChevronDown />);

export const Compact = ({
    heading,
    description,
    defaultExpanded = false,
    children,
    onExpand,
    onCollapse
}: Props): ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultExpanded);

    return (
        <>
            <PanelHeader
                onClick={() => {
                    if (isOpen) {
                        onExpand();
                    } else {
                        onCollapse();
                    }
                    setIsOpen(!isOpen);
                }}
            >
                <Box display="flex" flexDirection="column" maxWidth="33%">
                    <Headline as="h4" mr="3">
                        {heading}
                    </Headline>
                    {isOpen && <Description mt="1" description={description} />}
                </Box>
                {!isOpen && <Description mt="1" description={description} />}
                <Box ml="3">
                    <PanelIcon isOpen={isOpen} />
                </Box>
            </PanelHeader>
            {isOpen && (
                <Box mx="2" mb="5">
                    {children}
                </Box>
            )}
        </>
    );
};
