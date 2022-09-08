import styled from 'styled-components';
import { ChevronUpIcon } from '../../../icons';
import { SemanticColors } from '../../../essentials';

export const ChevronUp = styled(ChevronUpIcon)`
    color: ${props => (props.color ? props.color : SemanticColors.icon.primary)};
`;
