import { components } from 'react-windowed-select';
import styled from 'styled-components';

interface DynamicWidthMenuProps {
    width?: number;
}

const DynamicWidthMenu = styled(components.Menu)<DynamicWidthMenuProps>`
    ${props => (props.width ? `width: ${props.width}px !important;` : undefined)}
`;

export { DynamicWidthMenu };
