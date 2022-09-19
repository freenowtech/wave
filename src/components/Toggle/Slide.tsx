import styled from 'styled-components';
import { SemanticColors } from '../../essentials';

const determineBackground = (props: SlideProps) => {
    if (props.disabled) {
        return SemanticColors.background.secondary;
    }

    if (props.error) {
        return SemanticColors.background.dangerEmphasized;
    }

    return SemanticColors.background.infoEmphasized;
};

interface SlideProps {
    disabled?: boolean;
    error?: boolean;
}

// TODO use SemanticColors.forms once https://github.com/freenowtech/wave/issues/286 is done
const Slide = styled.div<SlideProps>`
    width: 2.25rem;
    height: 1rem;

    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${props => (props.disabled ? SemanticColors.background.secondary : SemanticColors.border.primary)};
    display: inline-block;
    border-radius: 0.5rem;
    position: relative;
    margin-right: 0.5rem;

    &::before {
        content: '';
        position: absolute;
        top: -0.125rem;
        left: 0;
        width: 1.25rem;
        height: 1.25rem;
        background: ${props =>
            props.disabled ? SemanticColors.background.secondary : SemanticColors.background.primary};
        border-radius: 50%;
        box-shadow: 0 0 0.0625rem 0 rgba(0, 0, 0, 0.05), 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.4);
        transform: translateX(0);
        transition: transform 200ms;
    }

    &::after {
        content: '';
        display: block;
        border-radius: 0.5rem;
        width: 1rem;
        height: 1rem;
        background-color: ${determineBackground};
        transition: width 200ms;
    }
`;

export { Slide };
