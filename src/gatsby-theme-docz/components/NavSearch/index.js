import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 1rem 0.75rem;
    box-sizing: border-box;
    height: 2rem;
    color: #001e3d;
    border: 0.0625rem solid #c6cdd4;
    background-color: #ffffff;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    transition: border-color 100ms, background-color 100ms;
    font-family: 'Open Sans', sans-serif;
    -webkit-appearance: none;

    &::placeholder {
        color: #9ca7b4;
    }

    &:active,
    &:focus {
        outline: none;
        border-color: #096bdb;
        background-color: #ffffff;
    }

    @media screen and (min-width: 48rem) {
        font-size: 0.875rem;
        padding-left: 0.5rem;
        background-color: #f1f2f4;
    }
`;

export const NavSearch = props => {
    return <SearchInput {...props} />;
};
