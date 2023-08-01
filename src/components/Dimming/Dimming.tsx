import styled from 'styled-components';

import { Elevation } from '../../essentials';
import { getSemanticValue } from '../../utils/cssVariables';

const Dimming = styled.div`
    background-color: ${getSemanticValue('background-backdrop')};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${Elevation.DIMMING};
`;

export { Dimming };
