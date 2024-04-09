import styled from 'styled-components';
import { margin } from 'styled-system';

import { theme } from '../../essentials/theme';
import { Link } from './Link';
import { TabBarWithLink } from './TabBarWithLink';

const TabBar: TabBarWithLink = Object.assign(
    styled.nav.attrs({ theme })`
        display: flex;

        ${margin}
    `,
    { Link }
);

export { TabBar, TabBarWithLink };
