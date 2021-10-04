import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../essentials';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';

interface Props {
    label: string;
    description?: string;
    expanded?: boolean;
    children?: ReactNode;
}

const PanelHeader = styled(Header)`
    // @ts-ignore
    &:hover ${Headline} {
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

export const Compact = ({ label, description, expanded = false, children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(expanded);

    return (
        <>
            <PanelHeader onClick={() => setIsOpen(!isOpen)}>
                <Box display="flex" flexDirection="column" maxWidth="33%">
                    <Headline as="h4" mr="3">
                        {label}
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
