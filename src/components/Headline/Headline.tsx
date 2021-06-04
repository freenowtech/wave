import * as React from 'react';
import styled, { css } from 'styled-components';
import { compose, margin, MarginProps, textAlign, TextAlignProps } from 'styled-system';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

interface HeadlineProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
        MarginProps,
        TextAlignProps {
    /**
     * Adjust color for display on a dark background
     */
    inverted?: boolean;
    /**
     * Set the html tag for the headline including the appropriate styles
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Set the style of the headline
     */
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
}

const DEFAULT_HEADLINE_SIZE = {
    h1: 'xxl',
    h2: 'xl',
    h3: 'l',
    h4: 'm',
    h5: 's',
    h6: 'xs'
} as const;

function determineFontSize(props: HeadlineProps) {
    const h1Styles = css`
        font-size: ${get('fontSizes.7')};
        line-height: 3.75rem;
    `;

    const size = props.size ?? DEFAULT_HEADLINE_SIZE[props.as];
    switch (size) {
        case 'xxl':
            return h1Styles;
        case 'xl':
            return css`
                font-size: ${get('fontSizes.5')};
                line-height: 2.5rem;
            `;
        case 'l':
            return css`
                font-size: ${get('fontSizes.4')};
                line-height: 2rem;
            `;
        case 'm':
            return css`
                font-size: ${get('fontSizes.2')};
                line-height: 1.375rem;
            `;
        case 's':
            return css`
                font-size: ${get('fontSizes.1')};
                line-height: 1.25rem;
            `;
        case 'xs':
            return css`
                font-size: ${get('fontSizes.0')};
                line-height: 1.125rem;
            `;
        default:
            return h1Styles;
    }
}

const Headline: React.FC<HeadlineProps> = styled.h1.attrs({ theme })<HeadlineProps>`
    color: ${p => (p.inverted ? Colors.WHITE : Colors.AUTHENTIC_BLUE_900)};
    font-family: ${get('fonts.normal')};
    font-weight: ${get('fontWeights.bold')};
    margin: 0;

    ${determineFontSize}

    ${compose(margin, textAlign)}
`;

export { Headline, HeadlineProps };
