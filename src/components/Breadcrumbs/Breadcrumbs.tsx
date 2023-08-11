import React, { Children, ComponentPropsWithoutRef, ReactElement, ReactNode, cloneElement } from 'react';
import styled from 'styled-components';

import { ChevronRightIcon } from '../../icons';
import { Text } from '../Text/Text';

import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Box } from '../Box/Box';

interface InvertedStyle {
    /**
     * Adjust color for display on a dark background
     * @default false
     */
    inverted?: boolean;
}

interface BreadcrumbsProps extends InvertedStyle {
    /**
     * Content of the Breadcrumbs
     * @required
     */
    children: ReactNode;
}

interface LinkProps extends ComponentPropsWithoutRef<'a'>, InvertedStyle {}

type ItemProps = InvertedStyle;

const BreadcrumbsList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
`;

const BreadcrumbsListItem = styled.li`
    display: flex;
`;

const Breadcrumbs = ({ children, inverted }: BreadcrumbsProps): JSX.Element => {
    const arrayChildren = Children.toArray(children);

    return (
        <BreadcrumbsList>
            {Children.map(arrayChildren, (child, index) => (
                <BreadcrumbsListItem>
                    {cloneElement(child as ReactElement, {
                        inverted
                    })}
                    {index < arrayChildren.length - 1 ? (
                        <Box mx="0.25rem" height={16} mt="0.125rem">
                            <ChevronRightIcon size={16} color={Colors.AUTHENTIC_BLUE_350} />
                        </Box>
                    ) : // eslint-disable-next-line unicorn/no-null
                    null}
                </BreadcrumbsListItem>
            ))}
        </BreadcrumbsList>
    );
};

const Link = styled.a.attrs({ theme })<LinkProps>`
    display: inline-block;
    color: ${p => (p.inverted ? Colors.WHITE : Colors.ACTION_BLUE_900)};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${get('fonts.normal')};
    font-size: ${get('fontSizes.1')};
    font-weight: ${get('fontWeights.semibold')};
    text-decoration: none;

    &:hover,
    &:active {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_350 : Colors.ACTION_BLUE_1000)};
        text-decoration: underline;
    }
`;

const Item = styled(Text).attrs(({ inverted }: ItemProps) => ({
    secondary: inverted,
    fontSize: 'small',
    fontWeight: 'semibold'
}))<ItemProps>``;

Breadcrumbs.Item = Item;
Breadcrumbs.Link = Link;

export { Breadcrumbs };
