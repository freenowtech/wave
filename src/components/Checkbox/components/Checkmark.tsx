import styled from 'styled-components';
import { Colors } from '../../../essentials';
import { get } from '../../../utils/themeGet';

interface CheckmarkProps {
    error?: boolean;
}

const Checkmark = styled.input<CheckmarkProps>`
    appearance: none;
    outline-offset: 0.25rem;
    border: none;

    position: relative;

    width: 1rem;
    height: 1rem;
    padding: 0;
    margin: 0;

    background-color: ${Colors.WHITE};

    box-shadow: inset 0 0 0 0.125rem ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.AUTHENTIC_BLUE_200)};
    border-radius: ${get('radii.2')};
    transition: background-color 100ms, box-shadow 100ms;
    cursor: pointer;

    vertical-align: text-bottom;

    &::after {
        content: ' ';

        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M3.711 8.037a1.051 1.051 0 0 1 1.485-.063l1.411 1.297 4.113-4.806a1.051 1.051 0 1 1 1.597 1.367l-4.63 5.41a1.333 1.333 0 0 1-1.916.116L3.774 9.522a1.051 1.051 0 0 1-.063-1.485z' id='a'/%3E%3C/defs%3E%3Cuse fill='%23FFF' fill-rule='nonzero' xlink:href='%23a'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: cover;
        width: 1rem;
        height: 1rem;

        position: absolute;
        top: 50%;
        left: 45%;

        opacity: 0;
        visibility: hidden;
        transform: translate(-45%, -40%) scale(0.2);
        transition: visibility 175ms, opacity 150ms, scale 175ms, transform 175ms;
    }

    &:checked {
        background-color: ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.ACTION_BLUE_900)};
        box-shadow: inset 0 0 0 0.125rem ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.ACTION_BLUE_900)};

        &::after {
            opacity: 1;
            visibility: visible;
            transform: translate(-45%, -50%) scale(1);
        }
    }

    &:indeterminate {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' data-reactroot=''%3E%3Cpath d='M15.833 10.833V9.167H4.167v1.666z' fill='%23FFF' fill-rule='nonzero'%3E%3C/path%3E%3C/svg%3E");
        background-color: ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.ACTION_BLUE_900)};
        box-shadow: inset 0 0 0 0.125rem ${props => (props.error ? Colors.NEGATIVE_ORANGE_900 : Colors.ACTION_BLUE_900)};

        &::after {
            opacity: 1;
            visibility: visible;
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
    }
`;

export { Checkmark };
