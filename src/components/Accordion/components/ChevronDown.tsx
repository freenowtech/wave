import styled from 'styled-components';
import { ChevronDownIcon } from '../../../icons';
import { Colors } from '../../../essentials';

export const ChevronDown = styled(ChevronDownIcon)`
    color: ${props => (props.color ? props.color : Colors.AUTHENTIC_BLUE_900)};
`;
