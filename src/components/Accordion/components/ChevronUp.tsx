import { styled } from 'styled-components';
import { ChevronUpIcon } from '../../../icons';
import { getSemanticValue } from '../../../utils/cssVariables';

export const ChevronUp = styled(ChevronUpIcon)`
    color: ${props => (props.color ? props.color : getSemanticValue('foreground-primary'))};
`;
