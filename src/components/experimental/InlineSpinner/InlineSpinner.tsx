import React from 'react';
import { styled, keyframes } from 'styled-components';
import { compose, variant } from 'styled-system';
import SpinnerIcon from '../../../icons/experimental/SpinnerIcon';
import { getSemanticValue } from '../../../essentials/experimental';

interface InlineSpinnerProps {
    /**
     * Override the color of the spinner
     */
    color?: string;
    /**
     * Set the size of the component
     */
    size?: 'small' | 'medium' | 'large';
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            width: '1rem',
            height: '1rem'
        },
        medium: {
            width: '1.25rem',
            height: '1.25rem'
        },
        large: {
            width: '2.5rem',
            height: '2.5rem'
        }
    }
});

const rotation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.span<InlineSpinnerProps>`
    display: inline-flex;
    box-sizing: border-box;
    vertical-align: text-bottom;

    ${compose(sizeVariant)}
`;

const Icon = styled(SpinnerIcon)`
    width: 100%;
    height: 100%;

    animation: ${rotation} 750ms linear infinite;
`;

const InlineSpinner: React.FC<InlineSpinnerProps> = ({
    color = getSemanticValue('interactive'),
    size = 'medium',
    ...rest
}: InlineSpinnerProps) => (
    <Wrapper aria-busy="true" size={size}>
        <Icon color={color} {...rest} />
    </Wrapper>
);

export { InlineSpinner, InlineSpinnerProps };
