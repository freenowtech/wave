import { variant } from 'styled-system';
import styled from 'styled-components';

import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { InputProps } from '../Input/InputProps';

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            alignItems: 'end',
            paddingBottom: '.25rem'
        },
        medium: {
            alignItems: 'center'
        }
    }
});

const inputType = variant({
    prop: 'variant',
    variants: {
        boxed: {
            right: '2.75rem'
        },
        'bottom-lined': {
            right: '2rem',
            alignItems: 'end',
            paddingBottom: '.5rem'
        }
    }
});

const ToggleButton = styled.button<Pick<InputProps, 'size' | 'variant'>>`
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
    width: 3.5rem;
    ${sizeVariant}
    ${inputType}

    svg path {
        fill: ${Colors.AUTHENTIC_BLUE_550};
    }
`;

export { ToggleButton };
