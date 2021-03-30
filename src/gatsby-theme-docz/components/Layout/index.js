import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { MainContainer } from '../MainContainer';

const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }
`;

const LayoutContainer = styled.div`
    flex: 1;
    display: block;

    @media screen and (min-width: 48rem) {
        display: grid;
        grid-template-columns: 19.5rem minmax(0, 1fr);
        min-height: calc(100% - 52px);
    }
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const nav = useRef();

    return (
        <div data-testid="layout">
            <GlobalStyles />
            <MainBox>
                <Header onOpen={() => setOpen(s => !s)} />
                <LayoutContainer>
                    <Sidebar
                        ref={nav}
                        open={open}
                        onFocus={() => setOpen(true)}
                        onBlur={() => setOpen(false)}
                        onClick={() => setOpen(false)}
                    />
                    <MainContainer data-testid="main-container">{children}</MainContainer>
                </LayoutContainer>
            </MainBox>
        </div>
    );
};
