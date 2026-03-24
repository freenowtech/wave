import type React from 'react';
import { type StyledComponent } from 'styled-components';
import { type MarginProps } from 'styled-system';
import { type LinkProps } from './Link';

export type TabBarWithLink = StyledComponent<'nav', any, MarginProps> & {
    Link: React.FC<LinkProps>;
};
