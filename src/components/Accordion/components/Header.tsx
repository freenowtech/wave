import styled from 'styled-components';

import { Colors } from '../../../essentials';
import { Box } from '../../Box/Box';

export const Header = styled(Box).attrs({ p: '2', color: Colors.AUTHENTIC_BLUE_900 })`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    cursor: pointer;
`;
