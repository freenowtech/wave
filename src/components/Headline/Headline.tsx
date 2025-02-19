import * as React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import { compose, margin, system, MarginProps, textAlign, TextAlignProps, ResponsiveValue } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

interface HeadlineProps extends ComponentPropsWithoutRef<'h1'>, MarginProps, TextAlignProps {
    /**
     * Set the html tag for the headline including the appropriate styles
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Set the style of the headline
     */
    size?: ResponsiveValue<'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'>;
}

export const DEFAULT_HEADLINE_SIZE = {
    h1: 'xxl',
    h2: 'xl',
    h3: 'l',
    h4: 'm',
    h5: 's',
    h6: 'xs'
} as const;

const parser = system({
    fontSize: {
        property: 'fontSize',
        defaultScale: {
            xs: '0.75rem',
            s: '0.875rem',
            m: '1rem',
            l: '1.5rem',
            xl: '2rem',
            xxl: '3rem'
        }
    },
    lh: {
        property: 'lineHeight',
        defaultScale: {
            xs: '1.125rem',
            s: '1.25rem',
            m: '1.375rem',
            l: '2rem',
            xl: '2.5rem',
            xxl: '3.75rem'
        }
    }
});

const getSize = ({ as = 'h1', size }: HeadlineProps): ResponsiveValue<'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'> =>
    size || DEFAULT_HEADLINE_SIZE[as];

const Headline: React.FC<HeadlineProps> = styled.h1.attrs({ theme })<HeadlineProps>`
    color: inherit;
    font-family: ${get('fonts.normal')};
    font-weight: ${get('fontWeights.bold')};
    margin: 0;

    ${props => parser({ fontSize: getSize(props), lh: getSize(props), ...props })}
    ${compose(margin, textAlign)}
`;

export { Headline, HeadlineProps };
