import styled from 'styled-components';
import { getSemanticValue } from '../../utils/cssVariables';

const determineBackground = (props: SlideProps) => {
    if (props.disabled) {
        return getSemanticValue('background-element-disabled-faded');
    }

    if (props.error) {
        return getSemanticValue('background-element-danger-default');
    }

    return getSemanticValue('background-element-accent-emphasized');
};

interface SlideProps {
    disabled?: boolean;
    error?: boolean;
}

const Slide = styled.div<SlideProps>`
    width: 2.25rem;
    height: 1rem;

    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${props =>
            // background-element-disabled-default is used for en enabled state 
            // because this is the only time this pair of colors used for a background of an enabled element
            // create a new semantic token when another such use case appear 
        getSemanticValue(props.disabled ? 'background-element-disabled-faded' : 'background-element-disabled-default')};
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
            getSemanticValue(props.disabled ? 'background-element-disabled-faded' : 'background-element-neutral-default')};
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
