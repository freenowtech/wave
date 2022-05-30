import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { MenuIcon } from './MenuIcon';
import { WaveLogoAnimated } from './WaveLogoAnimated';
import { Link } from 'gatsby';

const HeaderWrapper = styled.div`
    background-color: #000f1f;
    height: 52px;
    clear: both;
    position: fixed;
    z-index: 1000;
    width: 100%;
`;

const MenuButton = styled(MenuIcon).attrs({ width: '28px', height: '28px' })`
    float: right;
    cursor: pointer;
    color: #ffffff;
    margin: 0.75rem 1.5rem;

    @media screen and (min-width: 48rem) {
        display: none;
    }
`;

const LogoLink = styled(Link)`
    display: inline-block;
    height: 100%;

    svg {
        width: auto !important;
    }
`;

const SkipLink = styled.a`
    color: white;
    position: absolute;
    padding: 0.5rem;
    transform: translateY(-100%);

    &:focus {
        transition: 0.216s transform;
        transform: translateY(0%);
    }
`;

const GithubLink = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const MenuRightSection = styled.div`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
`;

export const Header = ({ onOpen: onMenuOpen }) => {
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
                />
            </Helmet>
            <HeaderWrapper>
                <LogoLink aria-label="go to home screen" to="/">
                    <WaveLogoAnimated />
                </LogoLink>
                <SkipLink href="#main">Skip to content</SkipLink>
                <MenuRightSection>
                    <GithubLink target="_blank" href="https://github.com/freenowtech/wave">
                        GitHub
                    </GithubLink>
                    <MenuButton onClick={onMenuOpen} />
                </MenuRightSection>
            </HeaderWrapper>
        </>
    );
};
