import type React from 'react';
import { type StyledComponent } from 'styled-components';
import { type MarginProps } from 'styled-system';
import { type LinkProps } from './Link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TabBarWithLink = StyledComponent<'nav', any, MarginProps> & {
    Link: React.FC<LinkProps>;
};
