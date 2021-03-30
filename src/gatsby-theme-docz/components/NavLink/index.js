import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuItem = styled(Link)`
    display: block;
    color: #001e3d;
    cursor: pointer;
    line-height: 1.4;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    text-decoration: none;
    padding: 0 0.5rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    border-left: 0.1875rem solid transparent;
    transition: color 75ms;

    &:link,
    &:visited {
        color: #001e3d;
    }

    &:hover,
    &:active {
        color: #096bdb;
    }

    &.active {
        font-weight: 600;
        color: #096bdb;
        border-left-color: #096bdb;
    }

    @media screen and (min-width: 48rem) {
        font-size: 0.875rem;
    }
`;

export const NavLink = React.forwardRef(({ item, ...props }, ref) => {
    if (item.hidden) {
        return null;
    }

    return <MenuItem {...props} to={item.route} activeClassName="active" ref={ref} />;
});
