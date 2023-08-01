import React, { PropsWithChildren, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Text } from '../../Text/Text';
import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Header } from './Header';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { Description } from './Description';
import { AccordionProps } from '../types';
import { getSemanticValue } from '../../../utils/cssVariables';

const ButtonLabel = styled(Text).attrs({ as: 'p' })`
    color: ${getSemanticValue('foreground-accent-default')};
`;

const PanelHeader = styled(Header)`
    &:hover {
        background-color: ${getSemanticValue('background-surface-info-default')};
    }

    /* stylelint-disable */
    &:hover ${ButtonLabel}, &:hover ${ChevronDown} {
        color: ${getSemanticValue('foreground-accent-emphasized')};
    }
    /* stylelint-enable */
`;

const CardHeader = styled(Header).attrs({ p: '3' })`
    background-color: ${getSemanticValue('background-surface-neutral-faded')};
    border-radius: 0.3125rem 0.3125rem 0 0;

    &:hover {
        background-color: ${getSemanticValue('background-surface-info-default')};
    }

    /* stylelint-disable */
    &:hover ${ButtonLabel}, &:hover ${ChevronUp} {
        color: ${getSemanticValue('foreground-accent-emphasized')};
    }
    /* stylelint-enable */
`;

const PanelBody = styled(Box).attrs({ my: '3' })`
    border: solid 0.0625rem ${getSemanticValue('border-neutral-default')};
    border-radius: 0.3125rem;
`;

const PanelIcon = ({ isOpen }: { isOpen: boolean }) =>
    isOpen ? (
        <ChevronUp color={getSemanticValue('foreground-accent-default')} />
    ) : (
        <ChevronDown color={getSemanticValue('foreground-accent-default')} />
    );

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
