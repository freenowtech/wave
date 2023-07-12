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
import { Spaces } from '../../essentials';

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
            background: getSemanticValue('overrides-infobanner-background-info-default'),
            borderColor: getSemanticValue('border-info-faded')
        },
        success: {
            background: getSemanticValue('overrides-infobanner-background-success-default'),
            borderColor: getSemanticValue('border-success-faded')
        },
        warning: {
            background: getSemanticValue('overrides-infobanner-background-warning-default'),
            borderColor: getSemanticValue('border-warning-faded')
        },
        error: {
            background: getSemanticValue('overrides-infobanner-background-danger-default'),
            borderColor: getSemanticValue('border-danger-faded')
        }
    }
});

const emphasizedBannerVariants = styledVariant({
    variants: {
        info: {
            background: getSemanticValue('background-info-emphasized'),
            borderColor: getSemanticValue('border-info-default')
        },
        success: {
            background: getSemanticValue('background-success-emphasized'),
            borderColor: getSemanticValue('border-success-default')
        },
        warning: {
            background: getSemanticValue('background-warning-emphasized'),
            borderColor: getSemanticValue('border-warning-default')
        },
        error: {
            background: getSemanticValue('background-danger-emphasized'),
            borderColor: getSemanticValue('border-danger-default')
        }
    }
});

const iconColorVariants = styledVariant({
    variants: {
        info: {
            color: getSemanticValue('overrides-infobanner-icon-action-default')
        },
        success: {
            color: getSemanticValue('icon-success')
        },
        warning: {
            color: getSemanticValue('icon-warning')
        },
        error: {
            color: getSemanticValue('icon-danger-default')
        }
    }
});

const emphasizedIconColorVariants = styledVariant({
    variants: {
        info: {
            color: getSemanticValue('icon-primary-inverted')
        },
        success: {
            color: getSemanticValue('icon-primary-inverted')
        },
        warning: {
            color: getSemanticValue('icon-primary-default')
        },
        error: {
            color: getSemanticValue('icon-primary-inverted')
        }
    }
});

const RoundedBox = styled(Box)<BoxWithVariant>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: ${get('radii.3')};
    border: 0.0625rem solid;
    padding: ${`${Spaces[1]} ${Spaces[2]} ${Spaces[1]} ${Spaces[1]}`};
    ${({ emphasized }) => (emphasized ? emphasizedBannerVariants : bannerVariants)};
`;

const IconBox = styled(Box)<BoxWithVariant>`
    ${({ emphasized }) => (emphasized ? emphasizedIconColorVariants : iconColorVariants)};
`;

const ICON_VARIANTS: {
    [key in InfoBannerVariants]: React.FC<IconProps>;
} = {
    warning: WarningSolidIcon,
    info: InfoCircleSolidIcon,
    success: CheckCircleSolidIcon,
    error: CloseCircleSolidIcon
};

const ROLE_VARIANTS: {
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
                <Text fontWeight="bold" textAlign="left" inverted={isInverted}>
                    {title}
                </Text>
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
