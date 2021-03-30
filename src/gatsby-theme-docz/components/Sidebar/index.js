import React, { useRef, useState } from 'react';
import { useCurrentDoc, useMenus } from 'docz';
import { NavSearch } from '../NavSearch';

import { NavLink } from '../NavLink';
import { NavGroup } from '../NavGroup';
import styled from 'styled-components';

const BoxSidebar = styled.div`
    flex-direction: column;
    display: block;
    background: #f1f2f4;
    padding-left: 1.125rem;
    padding-bottom: 2rem;
    box-sizing: border-box;

    z-index: 9999;
    position: fixed;
    top: 52px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding-right: 1.125rem;
    will-change: transform, opacity;
    transition: transform 200ms, opacity 200ms;
    transform: ${props => (props.open ? 'translateY(0)' : 'translateY(100%)')};
    opacity: ${props => (props.open ? '1' : '0')};
    -webkit-overflow-scrolling: touch;
    overflow: auto;

    @media screen and (min-width: 48rem) {
        position: sticky;
        top: 0;
        z-index: 1;
        padding-right: 2.5rem;
        transform: translateY(0);
        opacity: 1;
        transition: none;
        will-change: none;
        margin-top: 52px;
        min-height: calc(100vh - 52px);
    }
`;

export const Sidebar = React.forwardRef((props, ref) => {
    const [query, setQuery] = useState('');
    const menus = useMenus({ query });
    const currentDoc = useCurrentDoc();
    const currentDocRef = useRef();
    const handleChange = ev => {
        setQuery(ev.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter' && menus[0] && menus[0].route) {
            window.location.href = menus[0].route;
        }
    };

    return (
        <BoxSidebar ref={ref} open={props.open} data-testid="sidebar">
            <NavSearch placeholder="Search" value={query} onChange={handleChange} onKeyPress={handleKeyPress} />

            {menus &&
                menus.map(menu => {
                    if (!menu.route) return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />;
                    if (menu.route === currentDoc.route) {
                        return (
                            <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                                {menu.name}
                            </NavLink>
                        );
                    }
                    return (
                        <NavLink key={menu.id} item={menu}>
                            {menu.name}
                        </NavLink>
                    );
                })}
        </BoxSidebar>
    );
});
