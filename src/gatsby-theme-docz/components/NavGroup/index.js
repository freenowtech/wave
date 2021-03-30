import React from 'react';
import { useCurrentDoc } from 'docz';
import { NavLink } from '../NavLink';
import styled from 'styled-components';

const GroupLink = styled.div`
    color: #637689;
    padding: 0 0.5rem;
    cursor: initial;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    border-left: 0.1875rem solid transparent;

    @media screen and (min-width: 48rem) {
        font-size: 0.75rem;
    }
`;

export const NavGroup = ({ item, sidebarRef }) => {
    const currentDoc = useCurrentDoc();
    const currentDocRef = React.useRef();
    const { menu } = item;

    React.useEffect(() => {
        if (sidebarRef.current && currentDocRef.current && currentDocRef.current.offsetTop > window.innerHeight - 200) {
            sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
        }
    }, [sidebarRef]);

    return (
        <div data-testid="nav-group">
            <GroupLink>{item.name}</GroupLink>
            <div data-testid="nav-group-links">
                {menu &&
                    menu.map(menu => {
                        if (currentDoc.route === menu.route) {
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
            </div>
        </div>
    );
};
