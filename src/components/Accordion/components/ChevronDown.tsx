import styled from 'styled-components';
import { ChevronDownIcon } from '../../../icons';
import { SemanticColors } from '../../../essentials';

export const ChevronDown = styled(ChevronDownIcon)`
    color: ${props => (props.color ? props.color : SemanticColors.icon.primary)};
`;
