import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';
import { Slide } from './Slide';

interface InputProps {
    disabled?: boolean;
    error?: boolean;
}

const Input = styled.input.withConfig({ shouldForwardProp: isPropValid })<InputProps>`
    height: 0;
    width: 0;
    margin: 0;
    visibility: hidden;

    &:checked + ${/* sc-selector */ Slide}::before {
        transform: translateX(calc(100% - 0.25rem));
    }

    &:checked + ${/* sc-selector */ Slide}::after {
        width: 2.25rem;
    }
`;

export { Input };
