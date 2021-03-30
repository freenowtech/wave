import styled from 'styled-components';
import { Colors } from '../../../essentials';

interface CheckmarkProps {
    error?: boolean;
}

const Checkmark = styled.input<CheckmarkProps>`
    appearance: none;
    outline: none;
    border: 0;

    position: relative;

    width: 1rem;
    height: 1rem;
    padding: 0;
    margin: 0 0.5rem 0 0;

    background-color: ${Colors.WHITE};
    box-shadow: inset 0 0 0 0.125rem ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.AUTHENTIC_BLUE_200)};
    border-radius: 50%;
    transition: background-color 100ms, box-shadow 100ms;
    cursor: pointer;

    vertical-align: text-bottom;

    &::after {
        content: ' ';

        width: 1rem;
        height: 1rem;

        position: absolute;

        opacity: 0;
        visibility: hidden;
        transform: scale(0.2);
        transition: visibility 175ms, opacity 150ms, scale 175ms;
    }

    &:checked {
        box-shadow: inset 0 0 0 0.3125rem
            ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.ACTION_BLUE_900)};

        &::after {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${Colors.AUTHENTIC_BLUE_50};
        box-shadow: inset 0 0 0 0.125rem ${Colors.AUTHENTIC_BLUE_50};

        &:hover {
            box-shadow: inset 0 0 0 0.125rem ${Colors.AUTHENTIC_BLUE_50};
        }

        &:active {
            background-color: ${Colors.AUTHENTIC_BLUE_50};
        }

        &:checked {
            box-shadow: inset 0 0 0 0.3125rem ${Colors.AUTHENTIC_BLUE_50};
            background-color: ${Colors.WHITE};
        }
    }
`;

export { Checkmark };
