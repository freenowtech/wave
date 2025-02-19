import { ChevronLeftIcon, themeGet } from '@freenow/wave';
import { styled } from 'styled-components';

export const StyledIcon = styled(ChevronLeftIcon).attrs({ size: 16 })`
    fill: ${themeGet('semanticColors.icon.tertiary')};
    margin-left: auto;
`;
