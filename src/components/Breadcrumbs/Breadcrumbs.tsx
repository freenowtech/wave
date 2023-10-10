import React, {
    Children,
    ComponentPropsWithoutRef,
    ReactElement,
    ReactNode,
    cloneElement,
    useEffect,
    useRef
} from 'react';
import styled from 'styled-components';
import { MarginProps } from 'styled-system';

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

interface BreadcrumbsProps extends InvertedStyle, MarginProps {
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
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const BreadcrumbsListItem = styled.li`
    display: flex;
    text-wrap: nowrap;
`;

const Breadcrumbs = ({ children, inverted }: BreadcrumbsProps): JSX.Element => {
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
                    <nav aria-label="breadcrumbs">
                        {cloneElement(child as ReactElement, {
                            inverted
                        })}
                    </nav>
                    {index < arrayChildren.length - 1 ? (
                        <Box height={16} mt="0.125rem">
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
    text-decoration: none;
    padding: 0 0.25rem 0 0.25rem;

    &:hover,
    &:active {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_350 : Colors.ACTION_BLUE_1000)};
        text-decoration: underline;
    }
`;

const Item = styled(Text).attrs(({ inverted }: ItemProps) => ({
    secondary: inverted,
    fontSize: 'small',
    padding: '0 0.25rem 0 0.25rem'
}))<ItemProps>``;

Breadcrumbs.Item = Item;
Breadcrumbs.Link = Link;

export { Breadcrumbs, BreadcrumbsProps };
