import styled from 'styled-components';
import { ChevronUpIcon } from '../../../icons';
import { Colors } from '../../../essentials';

export const ChevronUp = styled(ChevronUpIcon)`
    color: ${props => (props.color ? props.color : Colors.AUTHENTIC_BLUE_900)};
`;
