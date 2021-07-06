import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #096bdb;
    color: #ffffff;
    padding: 1rem 1.5rem;

    @media (min-width: 48rem) {
        padding: 1rem 3rem;
    }
`;

const Headline = styled.h1`
    margin-top: 3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    line-height: 3.75rem;
    font-size: 3rem;

    @media (min-width: 48rem) {
        margin-top: 12rem;
    }
`;

const SubHeadline = styled.p`
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4rem;
    max-width: 100%;
    margin: 1rem 0 1.5rem 0;

    @media (min-width: 48rem) {
        max-width: 60rem;
    }
`;

export const TitleCard = ({ headline, subHeadline }) => {
    if (!headline && !subHeadline) {
        return null;
    }

    return (
        <Wrapper>
            {headline && <Headline>{headline}</Headline>}
            {subHeadline && <SubHeadline>{subHeadline}</SubHeadline>}
        </Wrapper>
    );
};
