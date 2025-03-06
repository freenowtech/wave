import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';

interface LabelProps extends MarginProps {
    disabled?: boolean;
}

const Label = styled.label<LabelProps>`
    display: flex;
    align-items: center;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    user-select: none;

    gap: 0.5rem;

    ${margin}
`;

export { Label };
