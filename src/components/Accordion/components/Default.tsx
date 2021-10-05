import React, { useState, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../essentials';
import { Text } from '../../Text/Text';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';
import { AccordionProps } from '../Accordion';

const ButtonLabel = styled(Text).attrs({ as: 'p' })`
    color: ${Colors.ACTION_BLUE_900};
`;

const PanelHeader = styled(Header)`
    &:hover {
        background-color: ${Colors.ACTION_BLUE_50};
    }

    &:hover ${ButtonLabel} {
        color: ${Colors.ACTION_BLUE_1000};
    }

    &:hover ${ChevronDown} {
        color: ${Colors.ACTION_BLUE_1000};
    }
`;

const CardHeader = styled(Header).attrs({ p: '3' })`
    background-color: ${Colors.AUTHENTIC_BLUE_50};
    border-radius: 5px 5px 0 0;

    &:hover {
        background-color: ${Colors.ACTION_BLUE_50};
    }

    &:hover ${ButtonLabel} {
        color: ${Colors.ACTION_BLUE_1000};
    }

    &:hover ${ChevronUp} {
        color: ${Colors.ACTION_BLUE_1000};
    }
`;

const PanelBody = styled(Box).attrs({ my: '3' })`
    border: solid 1px ${Colors.AUTHENTIC_BLUE_200};
    border-radius: 5px;
`;

const PanelIcon = ({ isOpen }: { isOpen: boolean }) =>
    isOpen ? <ChevronUp color={Colors.ACTION_BLUE_900} /> : <ChevronDown color={Colors.ACTION_BLUE_900} />;

export const DefaultPanel = ({
    heading,
    description,
    info,
    buttonLabel,
    defaultExpanded = false,
    children
}: PropsWithChildren<AccordionProps>) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultExpanded);

    return (
        <>
            {isOpen ? (
                <PanelBody>
                    <CardHeader onClick={() => setIsOpen(!isOpen)}>
                        <Box display="flex" flexDirection="column" maxWidth="33%">
                            <Headline as="h4" mr="3">
                                {heading}
                            </Headline>
                            <Description mt="1" description={description} />
                        </Box>
                        <Box ml="3" display="flex" flexDirection="row">
                            <ButtonLabel>{buttonLabel}</ButtonLabel>
                            <PanelIcon isOpen={isOpen} />
                        </Box>
                    </CardHeader>
                    <Box m="3">{children}</Box>
                </PanelBody>
            ) : (
                <PanelHeader onClick={() => setIsOpen(!isOpen)}>
                    <Headline as="h4" mr="3">
                        {heading}
                    </Headline>
                    <Box>
                        <Description description={description} />
                        <Text as="p" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                            {info}
                        </Text>
                    </Box>
                    <Box ml="3" display="flex" flexDirection="row">
                        <ButtonLabel>{buttonLabel}</ButtonLabel>
                        <PanelIcon isOpen={isOpen} />
                    </Box>
                </PanelHeader>
            )}
        </>
    );
};
