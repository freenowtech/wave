import type React from 'react';
import { type IStyledComponent } from 'styled-components';
import { type MarginProps } from 'styled-system';
import { type LinkProps } from './Link';

export type TabBarWithLink = IStyledComponent<'web', MarginProps & React.ComponentPropsWithRef<'nav'>> & {
    Link: React.FC<LinkProps>;
};
