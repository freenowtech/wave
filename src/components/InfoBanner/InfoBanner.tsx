import React from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';
import {
    CheckCircleSolidIcon,
    CloseCircleSolidIcon,
    InfoCircleSolidIcon,
    WarningSolidIcon,
    IconProps
} from '../../icons';
import { BoxProps, Box } from '../Box/Box';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import { Headline } from '../Headline/Headline';
import { Spaces } from '../../essentials';
import { theme } from '../../essentials/theme';

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

type InfoBannerVariants = 'info' | 'success' | 'warning' | 'error';

interface BoxWithVariant extends BoxProps {
    variant: InfoBannerVariants;
    emphasized: boolean;
}

const bannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-surface-info-default'),
            borderColor: getSemanticValue('border-info-faded')
        },
        success: {
            background: getSemanticValue('background-surface-success-default'),
            borderColor: getSemanticValue('border-success-faded')
        },
        warning: {
            background: getSemanticValue('background-surface-warning-default'),
            borderColor: getSemanticValue('border-warning-faded')
        },
        error: {
            background: getSemanticValue('background-surface-danger-default'),
            borderColor: getSemanticValue('border-danger-faded')
        }
    }
});

const emphasizedBannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-surface-info-emphasized'),
            borderColor: getSemanticValue('border-info-default')
        },
        success: {
            background: getSemanticValue('background-surface-success-emphasized'),
            borderColor: getSemanticValue('border-success-default')
        },
        warning: {
            background: getSemanticValue('background-surface-warning-emphasized'),
            borderColor: getSemanticValue('border-warning-default')
        },
        error: {
            background: getSemanticValue('background-surface-danger-emphasized'),
            borderColor: getSemanticValue('border-danger-default')
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

    --info-banner-text-color: ${({ emphasized, variant }) =>
        emphasized && variant !== 'warning'
            ? get('semanticColors.text.primaryInverted')
            : get('semanticColors.text.primary')};
    --info-banner-link-color: ${({ emphasized, variant }) =>
        emphasized && variant !== 'warning'
            ? get('semanticColors.text.primaryInverted')
            : get('semanticColors.text.link')};
    --info-banner-link-hover-color: ${({ emphasized, variant }) =>
        emphasized && variant !== 'warning'
            ? get('semanticColors.text.tertiary')
            : get('semanticColors.text.linkHover')};
`;

export const IconBox = styled(Box)<BoxWithVariant>`
    ${({ emphasized }) => (emphasized ? emphasizedIconColorVariants : iconColorVariants)};
`;

export const ICON_VARIANTS: {
    [key in InfoBannerVariants]: React.FC<IconProps>;
} = {
    warning: WarningSolidIcon,
    info: InfoCircleSolidIcon,
    success: CheckCircleSolidIcon,
    error: CloseCircleSolidIcon
};

export const ROLE_VARIANTS: {
    [key in InfoBannerVariants]: string;
} = {
    error: 'alert',
    info: 'status',
    success: 'alert',
    warning: 'status'
};

const InfoBanner = ({
    title,
    description,
    variant = 'info',
    linkText,
    linkUrl,
    emphasized,
    ...props
}: InfoBannerProps): JSX.Element => {
    const BannerIcon = ICON_VARIANTS[variant];
    const isInverted = emphasized && variant !== 'warning';

    return (
        <RoundedBox variant={variant} emphasized={emphasized} role={ROLE_VARIANTS[variant]} {...props}>
            <IconBox mr={1} variant={variant} emphasized={emphasized} data-testid="infobanner-icon-container">
                <BannerIcon size={20} color="inherit" />
            </IconBox>
            <Box display="flex" flexDirection="column">
                <Headline as="h4" textAlign="left" inverted={isInverted}>
                    {title}
                </Headline>
                <Text fontSize="small" textAlign="left" inverted={isInverted}>
                    {description}
                </Text>
                {linkText && linkUrl && (
                    <Link
                        fontSize="0"
                        textAlign="left"
                        href={linkUrl}
                        target="_blank"
                        mt="0.25rem"
                        inverted={isInverted}
                    >
                        {linkText}
                    </Link>
                )}
            </Box>
        </RoundedBox>
    );
};

export { InfoBanner, InfoBannerProps, InfoBannerVariants };
