import { styled } from 'styled-components';
import { Box } from '../../Box/Box';
import { getSemanticValue } from '../../../utils/cssVariables';

export const Header = styled(Box).attrs({ p: '2', color: getSemanticValue('foreground-primary') })`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    cursor: pointer;
    min-height: 2.5rem;
`;
