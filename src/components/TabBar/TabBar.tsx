import React from 'react';
import styled from 'styled-components';
import { margin } from 'styled-system';

import { Link } from './Link';
import { TabBarWithLink } from './TabBarWithLink';

// tslint:disable-next-line: prefer-object-spread disabled because you can't spread a styled component
const TabBar: TabBarWithLink = Object.assign(
    styled.nav`
        display: flex;

        ${margin}
    `,
    { Link }
);

export { TabBar, TabBarWithLink };
