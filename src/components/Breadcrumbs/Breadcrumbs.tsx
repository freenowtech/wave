import React, { Children, ReactElement, ReactNode, cloneElement, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MarginProps } from 'styled-system';

import { ChevronRightIcon } from '../../icons';
import { Text } from '../Text/Text';

import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Box } from '../Box/Box';
import { getSemanticValue } from '../../utils/cssVariables';

interface BreadcrumbsProps extends MarginProps {
    /**
     * Content of the Breadcrumbs
     * @required
     */
    children: ReactNode;
}

const BreadcrumbsList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const BreadcrumbsListItem = styled.li`
    display: flex;
`;

const Breadcrumbs = ({ children }: BreadcrumbsProps): JSX.Element => {
    const arrayChildren = Children.toArray(children);
    const breadcrumbsListRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (breadcrumbsListRef.current) {
            breadcrumbsListRef.current.scrollLeft = breadcrumbsListRef.current.scrollWidth;
        }
    }, []);

    return (
        <BreadcrumbsList ref={breadcrumbsListRef}>
            {Children.map(arrayChildren, (child, index) => (
                <BreadcrumbsListItem>
                    <nav aria-label="breadcrumbs">{cloneElement(child as ReactElement)}</nav>
                    {index < arrayChildren.length - 1 ? (
                        <Box height={16} mt="0.125rem">
                            <ChevronRightIcon size={16} color={getSemanticValue('foreground-neutral-default')} />
                        </Box>
                    ) : // eslint-disable-next-line unicorn/no-null
                    null}
                </BreadcrumbsListItem>
            ))}
        </BreadcrumbsList>
    );
};

const Link = styled.a.attrs({ theme })`
    display: inline-block;
    color: ${getSemanticValue('foreground-accent-default')};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${get('fonts.normal')};
    font-size: ${get('fontSizes.1')};
    text-decoration: none;
    padding: 0 0.25rem 0 0.25rem;

    &:hover,
    &:active {
        color: ${getSemanticValue('foreground-accent-emphasized')};
        text-decoration: underline;
    }
`;

const Item = styled(Text).attrs(() => ({
    fontSize: 'small',
    padding: '0 0.25rem 0 0.25rem'
}))``;

Breadcrumbs.Item = Item;
Breadcrumbs.Link = Link;

export { Breadcrumbs, BreadcrumbsProps };
