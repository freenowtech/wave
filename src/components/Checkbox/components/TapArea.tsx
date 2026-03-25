import { styled } from 'styled-components';
import { getSemanticValue } from '../../../utils/cssVariables';
import { get } from '../../../utils/themeGet';

const TapArea = styled.div`
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: ${get('radii.3')};
    background-color: transparent;
    top: -0.375rem;
    left: -0.375rem;
    transition: background-color 125ms;

    &:active {
        background-color: ${getSemanticValue('background-element-neutral-emphasized')};
    }
`;

export { TapArea };
