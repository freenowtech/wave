import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { MainContainer } from '../MainContainer';
import { TitleCard } from '../TitleCard';

const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }
`;

const LayoutContainer = styled.div`
    margin-top: 52px;

    @media screen and (min-width: 48rem) {
        margin-left: 19.5rem;
    }
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const TableOfContentsWrapper = styled.div`
    padding: 4rem 1rem 0 1rem;
    position: sticky;
    top: 52px;
    display: none;
    vertical-align: top;

    @media screen and (min-width: 60rem) {
        display: inline-block;
    }
`;

const TableOfContentsTitle = styled.div`
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #001e3e;
`;

const SectionLink = styled.a`
    font-size: 0.875rem;
    display: block;
    color: #637689;
    cursor: pointer;
    text-decoration: none;
    margin-top: 0.25rem;

    &:hover {
        text-decoration: underline;
        color: #001e3e;
    }
`;

export const Layout = ({ children, doc }) => {
    const [open, setOpen] = useState(false);
    const nav = useRef();

    const { headings, cardHeadline, cardSubHeadline } = doc.value;
    const displayableHeadings = headings.filter(it => it.depth === 2);

    return (
        <div data-testid="layout">
            <GlobalStyles />
            <MainBox>
                <Header onOpen={() => setOpen(s => !s)} />
                <Sidebar
                    ref={nav}
                    open={open}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    onClick={() => setOpen(false)}
                />
                <LayoutContainer>
                    <TitleCard headline={cardHeadline} subHeadline={cardSubHeadline} />
                    <MainContainer id="main" data-testid="main-container" style={{ maxWidth: '60rem' }}>
                        {children}
                    </MainContainer>
                    {displayableHeadings.length > 1 && (
                        <TableOfContentsWrapper>
                            <TableOfContentsTitle>Table of contents</TableOfContentsTitle>
                            {displayableHeadings.map(heading => (
                                <SectionLink href={`#${heading.slug}`}>{heading.value}</SectionLink>
                            ))}
                        </TableOfContentsWrapper>
                    )}
                </LayoutContainer>
            </MainBox>
        </div>
    );
};
