import React, { ReactElement, useState, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';
import { AccordionProps } from '../types';
import { getSemanticValue } from '../../../utils/cssVariables';

type Props = Pick<
    PropsWithChildren<AccordionProps>,
    'heading' | 'description' | 'defaultExpanded' | 'children' | 'onExpand' | 'onCollapse'
>;

const StyleHeadline = styled(Headline)``;

const PanelHeader = styled(Header)`
  /* stylelint-disable */
    &:hover ${StyleHeadline},
    &:hover ${ChevronDown},
    &:hover ${ChevronUp} {
        color: ${getSemanticValue('foreground-accent-emphasized')};
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
