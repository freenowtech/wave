import { variant } from 'styled-system';
import styled from 'styled-components';

import { get } from '../../utils/themeGet';
import { InputProps } from '../Input/InputProps';
import { TOGGLE_MODE_BUTTON_WIDTH } from './constants';

const inputType = variant({
    prop: 'variant',
    variants: {
        'bottom-lined': {
            justifyContent: 'right'
        }
    }
});

const ToggleButton = styled.button<Pick<InputProps, 'size' | 'variant'>>`
    box-sizing: border-box;
    position: absolute;
    background: transparent;
    border-radius: ${get('radii.2')};
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    height: 100%;
    width: ${TOGGLE_MODE_BUTTON_WIDTH};
    right: 0;
    align-items: ${p => (p.size === 'small' || p.variant === 'bottom-lined' ? 'end' : 'center')};
    padding-bottom: ${p => {
        if (p.size === 'small') return '0.25rem';

        return p.variant === 'bottom-lined' ? '0.5rem' : 0;
    }};
    ${inputType};

    svg path {
        fill: var(--color);
    }

    &:hover svg path {
        fill: var(--hover-color);
    }
`;

export { ToggleButton };
