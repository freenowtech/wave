import styled from 'styled-components';

import { Elevation, SemanticColors } from '../../essentials';

const Dimming = styled.div`
    background-color: ${SemanticColors.dialog.dimming};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${Elevation.DIMMING};
`;

export { Dimming };
