import React from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import { get } from '../../utils/themeGet';
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
    title: string;
    description: string;
    variant?: InfoBannerVariants;
    emphasized?: boolean;
    linkText?: string;
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
            background: get('semanticColors.background.info'),
            borderColor: get('semanticColors.border.info')
        },
        success: {
            background: get('semanticColors.background.success'),
            borderColor: get('semanticColors.border.success')
        },
        warning: {
            background: get('semanticColors.background.warning'),
            borderColor: get('semanticColors.border.warning')
        },
        error: {
            background: get('semanticColors.background.danger'),
            borderColor: get('semanticColors.border.danger')
        }
    }
});

const emphasizedBannerVariants = styledVariant({
    variants: {
        info: {
            background: get('semanticColors.background.infoEmphasized'),
            borderColor: get('semanticColors.border.infoEmphasized')
        },
        success: {
            background: get('semanticColors.background.successEmphasized'),
            borderColor: get('semanticColors.border.successEmphasized')
        },
        warning: {
            background: get('semanticColors.background.warningEmphasized'),
            borderColor: get('semanticColors.border.warningEmphasized')
        },
        error: {
            background: get('semanticColors.background.dangerEmphasized'),
            borderColor: get('semanticColors.border.dangerEmphasized')
        }
    }
});

const iconColorVariants = styledVariant({
    variants: {
        info: {
            color: get('semanticColors.icon.action')
        },
        success: {
            color: get('semanticColors.icon.success')
        },
        warning: {
            color: get('semanticColors.icon.primary')
        },
        error: {
            color: get('semanticColors.icon.danger')
        }
    }
});

const emphasizedIconColorVariants = styledVariant({
    variants: {
        info: {
            color: get('semanticColors.icon.primaryInverted')
        },
        success: {
            color: get('semanticColors.icon.primaryInverted')
        },
        warning: {
            color: get('semanticColors.icon.primary')
        },
        error: {
            color: get('semanticColors.icon.primaryInverted')
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
