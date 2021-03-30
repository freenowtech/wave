import styled from 'styled-components';

import { Colors, Elevation } from '../../essentials';

const Dimming = styled.div`
    background-color: ${Colors.AUTHENTIC_BLUE_1100};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${Elevation.DIMMING};
`;

export { Dimming };
