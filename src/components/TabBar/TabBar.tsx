import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';
import { margin } from 'styled-system';

import { theme } from '../../essentials/theme';
import { Link } from './Link';
import { type TabBarWithLink } from './TabBarWithLink';

const TabBar: TabBarWithLink = Object.assign(
    styled.nav.withConfig({ shouldForwardProp: isPropValid }).attrs({ theme })`
        display: flex;

        ${margin}
    `,
    { Link }
);

export { TabBar };

export { type TabBarWithLink } from './TabBarWithLink';
