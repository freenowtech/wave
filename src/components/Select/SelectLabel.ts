import styled from 'styled-components';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

const ANIMATION_DURATION = 100;

const SelectLabel = styled.label`
    position: absolute;
    pointer-events: none;
    line-height: 1;
    font-weight: ${get('fontWeights.semibold')};
    color: ${getSemanticValue('foreground-neutral-emphasized')};
    background: ${getSemanticValue('background-element-neutral-default')};
    transition: color ${ANIMATION_DURATION}ms ease-out, background ${ANIMATION_DURATION}ms ease-out;
`;

export { SelectLabel };
