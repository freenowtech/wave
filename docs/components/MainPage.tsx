import styled from 'styled-components';
import React, { PropsWithChildren } from 'react';

import { Headline, HeadlineProps } from '../../src/components/Headline/Headline';

export const H3: React.FC<PropsWithChildren<HeadlineProps>> = ({ children, ...rest }) => (
    <Headline as="h3" mt="50px" mb="20px" {...rest}>
        {children}
    </Headline>
);

export const CardLink = styled('a')`
    text-decoration: none;
`;
