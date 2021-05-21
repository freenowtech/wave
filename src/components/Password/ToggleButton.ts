import { variant } from 'styled-system';
import styled from 'styled-components';

import { get } from '../../utils/themeGet';
import { InputProps } from '../Input/InputProps';

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
    width: 2.5rem;
    right: 0;
    align-items: ${p => (p.size === 'small' || p.variant === 'bottom-lined' ? 'end' : 'center')};
    padding-bottom: ${p => {
        if (p.size === 'small') return '.25rem';

        return p.variant === 'bottom-lined' ? '.5rem' : 0;
    }};
    ${inputType};

    &:hover svg path {
        fill: var(--hover-color);
    }

    svg path {
        fill: var(--color);
    }
`;

export { ToggleButton };
