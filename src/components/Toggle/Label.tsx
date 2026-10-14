import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';
import { margin, type MarginProps } from 'styled-system';

interface LabelProps extends MarginProps {
    disabled?: boolean;
}

const Label = styled.label.withConfig({ shouldForwardProp: isPropValid })<LabelProps>`
    display: flex;
    align-items: center;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    user-select: none;

    gap: 0.5rem;

    ${margin}
`;

export { Label };
