import styled from 'styled-components';

import { Dimming } from '../Dimming';

// This container is needed or the dimming component would overtake the whole docs page and the user would be unable to
// keep navigating.
const DimmingFixedDimensions = styled(Dimming)`
    height: 15rem;
    position: static;
    width: 21rem;
    z-index: 0;
`;

export { DimmingFixedDimensions };
