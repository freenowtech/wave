import React from 'react';
import { IStyledComponent } from 'styled-components';
import { MarginProps } from 'styled-system';
import { LinkProps } from './Link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TabBarWithLink = any & {
    Link: React.FC<LinkProps>;
};
