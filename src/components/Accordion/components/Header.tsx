import styled from 'styled-components';

import { SemanticColors } from '../../../essentials';
import { Box } from '../../Box/Box';

export const Header = styled(Box).attrs({ p: '2', color: SemanticColors.text.primary })`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    cursor: pointer;
    min-height: 2.5rem;
`;
