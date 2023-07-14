import styled from 'styled-components';
import { ChevronDownIcon } from '../../../icons';
import { getSemanticValue } from '../../../utils/cssVariables';

export const ChevronDown = styled(ChevronDownIcon)`
    color: ${props => (props.color ? props.color : getSemanticValue('foreground-primary'))};
`;
