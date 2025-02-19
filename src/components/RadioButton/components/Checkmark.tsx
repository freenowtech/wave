import { styled } from 'styled-components';
import { getSemanticValue } from '../../../utils/cssVariables';

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

    background-color: ${getSemanticValue('background-page-default')};
    box-shadow: inset 0 0 0 0.125rem
        ${props => getSemanticValue(props.error ? 'border-danger-default' : 'border-neutral-default')};
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
            ${props => getSemanticValue(props.error ? 'border-danger-default' : 'border-info-default')};

        &::after {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${getSemanticValue('background-element-disabled-faded')};
        box-shadow: inset 0 0 0 0.125rem ${getSemanticValue('background-element-disabled-faded')};

        &:hover {
            box-shadow: inset 0 0 0 0.125rem ${getSemanticValue('background-element-disabled-faded')};
        }

        &:active {
            background-color: ${getSemanticValue('background-element-disabled-faded')};
        }

        &:checked {
            box-shadow: inset 0 0 0 0.3125rem ${getSemanticValue('background-element-disabled-faded')};
            background-color: ${getSemanticValue('background-page-default')};
        }
    }
`;

export { Checkmark };
