import React, { FC } from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';

import { applyPrefix, getSemanticValue } from '../../../utils/cssVariables';
import { Box } from '../../Box/Box';
import { theme } from '../../../essentials/theme';
import { get } from '../../../utils/themeGet';
import { Spaces } from '../../../essentials';
import { CardProps, InfoBannerVariants } from '../types';

export const LOCAL_CSS_VARIABLES = {
    LINK: applyPrefix('infobanner-link', 'l'),
    LINK_HOVER: applyPrefix('infobanner-link-hover', 'l')
};

const bannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-surface-info-default'),
            borderColor: getSemanticValue('border-info-banner'),
            color: getSemanticValue('foreground-primary'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-accent-default'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-accent-emphasized')
        },
        success: {
            background: getSemanticValue('background-surface-success-default'),
            borderColor: getSemanticValue('border-success-banner'),
            color: getSemanticValue('foreground-primary'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-accent-default'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-accent-emphasized')
        },
        warning: {
            background: getSemanticValue('background-surface-warning-default'),
            borderColor: getSemanticValue('border-warning-banner'),
            color: getSemanticValue('foreground-primary'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-accent-default'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-accent-emphasized')
        },
        error: {
            background: getSemanticValue('background-surface-danger-default'),
            borderColor: getSemanticValue('border-danger-banner'),
            color: getSemanticValue('foreground-primary'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-accent-default'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-accent-emphasized')
        }
    }
});

const emphasizedBannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-surface-info-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-info'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-on-background-info'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-neutral-faded')
        },
        success: {
            background: getSemanticValue('background-surface-success-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-success'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-on-background-success'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-neutral-faded')
        },
        warning: {
            background: getSemanticValue('background-surface-warning-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-warning'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-accent-default'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-accent-emphasized')
        },
        error: {
            background: getSemanticValue('background-surface-danger-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-danger'),
            [LOCAL_CSS_VARIABLES.LINK]: getSemanticValue('foreground-on-background-danger'),
            [LOCAL_CSS_VARIABLES.LINK_HOVER]: getSemanticValue('foreground-neutral-faded')
        }
    }
});

const RoundedBox = styled(Box).attrs({ theme })<CardProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: ${get('radii.3')};
    border: 0.0625rem solid;
    padding: ${Spaces[2]};
    ${({ emphasized }) => (emphasized ? emphasizedBannerVariants : bannerVariants)};
`;

export const ROLE_VARIANTS: {
    [key in InfoBannerVariants]: string;
} = {
    error: 'alert',
    info: 'status',
    success: 'alert',
    warning: 'status'
};

export const Container: FC<CardProps> = ({ children, variant = 'info', emphasized, ...props }) => (
    <RoundedBox variant={variant} emphasized={emphasized} role={ROLE_VARIANTS[variant]} {...props}>
        {children}
    </RoundedBox>
);
