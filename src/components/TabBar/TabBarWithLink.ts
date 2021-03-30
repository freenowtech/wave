import React from 'react';
import { StyledComponent } from 'styled-components';
import { MarginProps } from 'styled-system';
import { LinkProps } from './Link';

export type TabBarWithLink = StyledComponent<'nav', any, MarginProps> & {
    Link: React.FC<LinkProps>;
};
