import styled from 'styled-components';
import { getSemanticValue } from '../utils/cssVariables';

export const Advice = styled.div`
    border: 0.0625rem solid ${getSemanticValue('border-info-faded')};
    background-color: ${getSemanticValue('background-surface-info-active')};
    color: ${getSemanticValue('foreground-primary')};
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
`;
