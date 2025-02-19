import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import { compose, fontSize, FontSizeProps, margin, MarginProps, textAlign, TextAlignProps } from 'styled-system';
import { getSemanticValue } from '../../utils/cssVariables';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

interface LinkProps extends ComponentPropsWithoutRef<'a'>, MarginProps, FontSizeProps, TextAlignProps {}

const Link = styled.a.attrs({ theme })<LinkProps>`
    display: inline-block;
    color: ${getSemanticValue('foreground-accent-default')};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${get('fonts.normal')};
    font-size: ${get('fontSizes.2')};
    font-weight: ${get('fontWeights.semibold')};
    text-decoration: none;

    &:link,
    &:visited {
        color: ${getSemanticValue('foreground-accent-default')};
    }

    &:hover,
    &:active {
        color: ${getSemanticValue('foreground-accent-emphasized')};
        text-decoration: underline;
    }

    ${compose(margin, fontSize, textAlign)}
`;

export { Link, LinkProps };
