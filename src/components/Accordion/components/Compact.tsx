import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../essentials';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';
import { AccordionProps } from '../types';

type Props = Pick<
    AccordionProps,
    'heading' | 'description' | 'defaultExpanded' | 'children' | 'onExpand' | 'onCollapse'
>;

const StyleHeadline = styled(Headline)``;

const PanelHeader = styled(Header)`
    &:hover ${StyleHeadline} {
        color: ${Colors.ACTION_BLUE_1000};
    }

    &:hover ${ChevronDown} {
        color: ${Colors.ACTION_BLUE_1000};
    }

    &:hover ${ChevronUp} {
        color: ${Colors.ACTION_BLUE_1000};
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
