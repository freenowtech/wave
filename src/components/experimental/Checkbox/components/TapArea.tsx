import styled from 'styled-components';
import { getSemanticValue, themeGet } from '../../../../experimental';

const TapArea = styled.div`
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: ${themeGet('radii.3')};
    background-color: transparent;
    top: -0.375rem;
    left: -0.235rem;
    transition: background-color 125ms;

    &:active {
        background-color: ${getSemanticValue('surface')};
    }
`;

export { TapArea };
