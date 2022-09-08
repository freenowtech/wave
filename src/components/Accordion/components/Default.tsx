import React, { useState, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { SemanticColors } from '../../../essentials';
import { Text } from '../../Text/Text';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';
import { AccordionProps } from '../types';

const ButtonLabel = styled(Text).attrs({ as: 'p' })`
    color: ${SemanticColors.text.link};
`;

const PanelHeader = styled(Header)`
    &:hover {
        background-color: ${SemanticColors.background.info};
    }

    &:hover ${ButtonLabel} {
        color: ${SemanticColors.text.linkHover};
    }

    &:hover ${ChevronDown} {
        color: ${SemanticColors.text.linkHover};
    }
`;

const CardHeader = styled(Header).attrs({ p: '3' })`
    background-color: ${SemanticColors.background.secondary};
    border-radius: 0.3125rem 0.3125rem 0 0;

    &:hover {
        background-color: ${SemanticColors.background.info};
    }

    &:hover ${ButtonLabel} {
        color: ${SemanticColors.text.linkHover};
    }

    &:hover ${ChevronUp} {
        color: ${SemanticColors.text.linkHover};
    }
`;

const PanelBody = styled(Box).attrs({ my: '3' })`
    border: solid 0.0625rem ${SemanticColors.border.primary};
    border-radius: 0.3125rem;
`;

const PanelIcon = ({ isOpen }: { isOpen: boolean }) =>
    isOpen ? <ChevronUp color={SemanticColors.icon.action} /> : <ChevronDown color={SemanticColors.icon.action} />;

export const DefaultPanel = ({
    heading,
    description,
    info,
    buttonLabel,
    defaultExpanded = false,
    children,
    onExpand,
    onCollapse
}: PropsWithChildren<AccordionProps>): ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultExpanded);

    return (
        <>
            {isOpen ? (
                <PanelBody>
                    <CardHeader
                        onClick={() => {
                            setIsOpen(!isOpen);
                            onCollapse();
                        }}
                    >
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
                <PanelHeader
                    onClick={() => {
                        setIsOpen(!isOpen);
                        onExpand();
                    }}
                >
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
