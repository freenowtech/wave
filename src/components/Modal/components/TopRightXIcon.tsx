import styled from 'styled-components';
import { Elevation, Spaces } from '../../../essentials';
import { CloseIcon } from '../../../icons';

const TopRightXIcon = styled(CloseIcon)`
    position: absolute;
    top: ${Spaces[1]};
    right: ${Spaces[1]};
    cursor: pointer;
    z-index: ${Elevation.CARD_ON_DIMMING};
`;

export { TopRightXIcon };
