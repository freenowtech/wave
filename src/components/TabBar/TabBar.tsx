import styled from 'styled-components';
import { margin } from 'styled-system';

import { Link } from './Link';
import { TabBarWithLink } from './TabBarWithLink';

const TabBar: TabBarWithLink = Object.assign(
    styled.nav`
        display: flex;

        ${margin}
    `,
    { Link }
);

export { TabBar, TabBarWithLink };
