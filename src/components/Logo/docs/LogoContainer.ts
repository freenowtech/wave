import styled from 'styled-components';
import { Colors, Spaces } from '../../../essentials';

const LogoContainer = styled.div<{ inverted?: boolean }>`
    display: inline-block;
    margin-right: ${Spaces[4]};
    padding: ${Spaces[2]};
    background-color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
    border: 0.0625rem solid ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.AUTHENTIC_BLUE_50)};
`;

export { LogoContainer };
