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
                <MenuButton onClick={onMenuOpen} />
            </HeaderWrapper>
        </>
    );
};
