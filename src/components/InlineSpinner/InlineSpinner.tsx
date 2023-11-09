import * as React from 'react';

import styled, { keyframes } from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant } from 'styled-system';
import { getSemanticValue } from '../../utils/cssVariables';
import { ReadCssColorVariable } from '../../essentials/Colors/types';

interface InlineSpinnerProps extends MarginProps {
    /**
     * Override the color of the spinner
     */
    // the below is the hack to keep autocomplete showing semantic variables but allowing any string as well
    // eslint-disable-next-line @typescript-eslint/ban-types
    color?: ReadCssColorVariable | (string & {});
    /**
     * Set the size of the component
     */
    size?: ResponsiveValue<'small' | 'medium'>;
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            width: '1rem',
            height: '1rem',
            borderWidth: '0.1rem'
        },
        medium: {
            width: '1.25rem',
            height: '1.25rem',
            borderWidth: '0.125rem'
        }
    }
});

const rotation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const InlineSpinnerIcon = styled.span<InlineSpinnerProps>`
    display: inline-block;
    box-sizing: border-box;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: text-bottom;
    border: 0.125rem solid ${p => p.color};
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotation} 750ms linear infinite;

    ${compose(margin, sizeVariant)}
`;

const InlineSpinner: React.FC<InlineSpinnerProps> = ({
    color = getSemanticValue('foreground-primary'),
    size = 'medium',
    ...rest
}: InlineSpinnerProps) => (
    <span role="progressbar">
        <InlineSpinnerIcon color={color} size={size} {...rest} />
    </span>
);

export { InlineSpinner, InlineSpinnerProps };
