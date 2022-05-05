import React from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import { Colors } from '../../essentials';
import { AlertIcon, InfoCircleSolidIcon } from '../../icons';
import { BoxProps, Box } from '../Box/Box';
import { Headline } from '../Headline/Headline';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';

interface Props extends BoxProps {
    title: string;
    description: string;
    variant?: BannerVariants;
    emphasized?: boolean;
    linkText?: string;
    linkUrl?: string;
}

// TODO use variant from styled-system instead of the Maps below
const normalVariantStyles = styledVariant({
    variants: {
        info: {
            backgroundColor: Colors.ACTION_BLUE_50
        },
        success: {
            backgroundColor: Colors.POSITIVE_GREEN_50
        },
        warning: {
            backgroundColor: Colors.ATTENTION_YELLOW_50
        },
        danger: {
            backgroundColor: Colors.NEGATIVE_ORANGE_50
        }
    }
});

// TODO refactor to not use enum
export enum BannerVariants {
    info,
    warning,
    error
}

const VariantToBackgroundColorMap: { [key in BannerVariants]: Colors } = {
    [BannerVariants.info]: Colors.ACTION_BLUE_50,
    [BannerVariants.warning]: Colors.ATTENTION_YELLOW_900,
    [BannerVariants.error]: Colors.NEGATIVE_ORANGE_900
};

const VariantToBorderColorMap: { [key in BannerVariants]: Colors } = {
    [BannerVariants.info]: Colors.ACTION_BLUE_350,
    [BannerVariants.warning]: Colors.ATTENTION_YELLOW_900,
    [BannerVariants.error]: Colors.NEGATIVE_ORANGE_900
};

export const MinWidthAlertIcon = styled(AlertIcon)`
    min-width: 1rem;
`;

const InfoBannerBox = styled(Box)`
    display: flex;
    border-radius: 8px;
    border: 1px solid ${({ variant }: { variant: BannerVariants }) => VariantToBorderColorMap[variant]};
    background-color: ${({ variant }: { variant: BannerVariants }) => VariantToBackgroundColorMap[variant]};
    /* ${normalVariantStyles()} */
`;

export const InfoBanner = ({
    title,
    description,
    variant = BannerVariants.info,
    linkText,
    linkUrl,
    ...props
}: Props): JSX.Element => (
    <InfoBannerBox mt="2" p="1" pr="2" variant={variant} {...props}>
        {variant === BannerVariants.info && <InfoCircleSolidIcon color={Colors.ACTION_BLUE_900} />}
        {(variant === BannerVariants.warning || variant === BannerVariants.error) && (
            <MinWidthAlertIcon color={variant !== BannerVariants.warning ? Colors.WHITE : 'inherit'} />
        )}
        <Box ml="1">
            <Headline as="h4" size="s" inverted={variant === BannerVariants.error}>
                {title}
            </Headline>
            <Text as="p" fontSize="0" inverted={variant === BannerVariants.error}>
                {description}
            </Text>
            {linkText && linkUrl && (
                <Link fontSize="0" href={linkUrl} target="_blank" inverted={variant === BannerVariants.error}>
                    {linkText}
                </Link>
            )}
        </Box>
    </InfoBannerBox>
);
