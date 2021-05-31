import * as headings from './Headings';

import { Code } from 'gatsby-theme-docz/src/components/Code';
import { Layout } from 'gatsby-theme-docz/src/components/Layout';
import { Playground } from 'gatsby-theme-docz/src/components/Playground';
import { Pre } from 'gatsby-theme-docz/src/components/Pre';
import { Props } from 'gatsby-theme-docz/src/components/Props';
import styled from 'styled-components';

export default {
    ...headings,
    code: Code,
    playground: Playground,
    pre: Pre,
    layout: Layout,
    props: Props,
    p: styled.p`
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        line-height: 1.4;
        color: #001e3e;
    `,
    ul: styled.ul`
        margin-left: 20px;
        padding-left: 0;
    `,
    a: styled.a`
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        color: #096bdb;
        display: inline-block;
        cursor: pointer;
        line-height: 1.4;
        text-decoration: none;

        &:link,
        &:visited {
            color: #096bdb;
        }

        &:hover,
        &:active {
            color: #0750a4;
            text-decoration: underline;
        }
    `,
    li: styled.li`
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        color: #001e3e;
    `
};
