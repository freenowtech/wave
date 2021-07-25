import styled from 'styled-components';
import { Colors } from '../../essentials';

const determineBackground = (props: SlideProps) => {
    if (props.disabled) {
        return Colors.AUTHENTIC_BLUE_50;
    }

    if (props.error) {
        return Colors.NEGATIVE_ORANGE_900;
    }

    return Colors.ACTION_BLUE_900;
};

interface SlideProps {
    disabled?: boolean;
    error?: boolean;
}

const Slide = styled.div<SlideProps>`
    width: 2.25rem;
    height: 1rem;

    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${props => (props.disabled ? Colors.AUTHENTIC_BLUE_50 : Colors.AUTHENTIC_BLUE_200)};
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
        background: ${props => (props.disabled ? Colors.AUTHENTIC_BLUE_50 : Colors.WHITE)};
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
