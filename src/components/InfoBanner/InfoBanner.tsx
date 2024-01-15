import React from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';
import {
    CheckCircleFilledIcon,
    XCrossCircleFilledIcon,
    InfoCircleFilledIcon,
    WarningFilledIcon,
    IconProps
} from '../../icons';
import { BoxProps, Box } from '../Box/Box';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import { Headline } from '../Headline/Headline';
import { Spaces } from '../../essentials';
import { theme } from '../../essentials/theme';
import { InfoBannerVariants, BoxWithVariant } from './types';

interface InfoBannerProps extends BoxProps {
    /**
     * The title of the banner
     */
    title: string;
    /**
     * The description of the banner
     */
    description: string;
    /**
     * Color and message type for the component
     * @default info
     */
    variant?: InfoBannerVariants;
    /**
     * Adds additional emphasis or highlights critical status of the message
     * @default false
     */
    emphasized?: boolean;
    /**
     * Sets the text of the link contained in the banner
     */
    linkText?: string;
    /**
     * Sets the url where the user will be redirected when clicking on the link
     */
    linkUrl?: string;
}

const bannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-surface-info-default'),
            borderColor: getSemanticValue('border-info-banner'),
            color: getSemanticValue('foreground-primary')
        },
        success: {
            background: getSemanticValue('background-surface-success-default'),
            borderColor: getSemanticValue('border-success-banner'),
            color: getSemanticValue('foreground-primary')
        },
        warning: {
            background: getSemanticValue('background-surface-warning-default'),
            borderColor: getSemanticValue('border-warning-banner'),
            color: getSemanticValue('foreground-primary')
        },
        error: {
            background: getSemanticValue('background-surface-danger-default'),
            borderColor: getSemanticValue('border-danger-banner'),
            color: getSemanticValue('foreground-primary')
        }
    }
});

const emphasizedBannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-surface-info-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-info')
        },
        success: {
            background: getSemanticValue('background-surface-success-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-success')
        },
        warning: {
            background: getSemanticValue('background-surface-warning-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-warning')
        },
        error: {
            background: getSemanticValue('background-surface-danger-emphasized'),
            borderColor: getSemanticValue('transparent'),
            color: getSemanticValue('foreground-on-background-danger')
        }
    }
});

const iconColorVariants = styledVariant({
    variants: {
        info: {
            color: getSemanticValue('foreground-info-default')
        },
        success: {
            color: getSemanticValue('foreground-success-default')
        },
        warning: {
            color: getSemanticValue('foreground-warning-default')
        },
        error: {
            color: getSemanticValue('foreground-danger-default')
        }
    }
});

const emphasizedIconColorVariants = styledVariant({
    variants: {
        info: {
            color: getSemanticValue('foreground-on-background-info')
        },
        success: {
            color: getSemanticValue('foreground-on-background-success')
        },
        warning: {
            color: getSemanticValue('foreground-on-background-warning')
        },
        error: {
            color: getSemanticValue('foreground-on-background-danger')
        }
    }
});

export const RoundedBox = styled(Box).attrs({ theme })<BoxWithVariant>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: ${get('radii.3')};
    border: 0.0625rem solid;
    padding: ${Spaces[2]};
    ${({ emphasized }) => (emphasized ? emphasizedBannerVariants : bannerVariants)};

    --info-banner-link-color: ${({ emphasized }) =>
        emphasized
            ? getSemanticValue('foreground-on-background-primary')
            : getSemanticValue('foreground-accent-default')};
    --info-banner-link-hover-color: ${({ emphasized }) =>
        emphasized ? getSemanticValue('foreground-neutral-default') : getSemanticValue('foreground-accent-emphasized')};
`;

export const IconBox = styled(Box)<BoxWithVariant>`
    ${({ emphasized }) => (emphasized ? emphasizedIconColorVariants : iconColorVariants)};
`;

export const ICON_VARIANTS: {
    [key in InfoBannerVariants]: React.FC<IconProps>;
} = {
    warning: WarningFilledIcon,
    info: InfoCircleFilledIcon,
    success: CheckCircleFilledIcon,
    error: XCrossCircleFilledIcon
};

export const ROLE_VARIANTS: {
    [key in InfoBannerVariants]: string;
} = {
    error: 'alert',
    info: 'status',
    success: 'alert',
    warning: 'status'
};

const InfoBanner: React.FC<InfoBannerProps> = ({
    title,
    description,
    variant = 'info',
    linkText,
    linkUrl,
    emphasized,
    ...props
}) => {
    const BannerIcon = ICON_VARIANTS[variant];

    return (
        <RoundedBox variant={variant} emphasized={emphasized} role={ROLE_VARIANTS[variant]} {...props}>
            <IconBox mr={1} variant={variant} emphasized={emphasized} data-testid="infobanner-icon-container">
                <BannerIcon size={20} color="inherit" />
            </IconBox>
            <Box display="flex" flexDirection="column">
                <Headline as="h4" textAlign="left">
                    {title}
                </Headline>
                <Text fontSize="small" textAlign="left">
                    {description}
                </Text>
                {linkText && linkUrl && (
                    <Link fontSize="0" textAlign="left" href={linkUrl} target="_blank" mt="0.25rem">
                        {linkText}
                    </Link>
                )}
            </Box>
        </RoundedBox>
    );
};

export { InfoBanner, InfoBannerProps, InfoBannerVariants };
