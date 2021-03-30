import styled from 'styled-components';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';

interface SelectLabelProps {
    inverted?: boolean;
}

const ANIMATION_DURATION = 100;

const SelectLabel = styled.label<SelectLabelProps>`
    position: absolute;
    pointer-events: none;
    line-height: 1;
    font-weight: ${get('fontWeights.semibold')};
    color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550)};
    background: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_900 : Colors.WHITE)};
    transition: color ${ANIMATION_DURATION}ms ease-out, background ${ANIMATION_DURATION}ms ease-out;
`;

export { SelectLabel };
