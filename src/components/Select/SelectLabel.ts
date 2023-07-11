import styled from 'styled-components';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

interface SelectLabelProps {
    inverted?: boolean;
}

const ANIMATION_DURATION = 100;

const SelectLabel = styled.label<SelectLabelProps>`
    position: absolute;
    pointer-events: none;
    line-height: 1;
    font-weight: ${get('fontWeights.semibold')};
    color: ${p => getSemanticValue(p.inverted ? 'text-secondaryInverted' : 'text-secondary')};
    background: ${p => getSemanticValue(p.inverted ? 'background-primary-inverted' : 'background-primary-default')};
    transition: color ${ANIMATION_DURATION}ms ease-out, background ${ANIMATION_DURATION}ms ease-out;
`;

export { SelectLabel };
