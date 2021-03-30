import styled, { css } from 'styled-components';

const headlineStyles = css`
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    color: #001e3e;
`;

export const h1 = styled.h1`
    ${headlineStyles};
    font-size: 3rem;
    line-height: 3.75rem;
    margin: 0 0 1.5rem;
`;

export const h2 = styled.h2`
    ${headlineStyles};
    font-size: 2rem;
    line-height: 2.5rem;
`;

export const h3 = styled.h3`
    ${headlineStyles};
    font-size: 1.5rem;
    line-height: 2rem;
`;

export const h4 = styled.h4`
    ${headlineStyles};
    font-size: 1rem;
    line-height: 1.375rem;
`;

export const h5 = styled.h5`
    ${headlineStyles};
    font-size: 0.875rem;
    line-height: 1.25rem;
`;

export const h6 = styled.h6`
    ${headlineStyles};
    font-size: 0.75rem;
    line-height: 1.25rem;
`;
