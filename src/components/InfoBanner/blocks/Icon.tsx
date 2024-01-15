import React, { FC } from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';

import { Box } from '../../Box/Box';
import { getSemanticValue } from '../../../utils/cssVariables';
import {
    CheckCircleFilledIcon,
    XCrossCircleFilledIcon,
    IconProps,
    InfoCircleFilledIcon,
    WarningFilledIcon
} from '../../../icons';
import { BoxWithVariant, InfoBannerVariants } from '../types';

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

export const ICON_VARIANTS: {
    [key in InfoBannerVariants]: React.FC<IconProps>;
} = {
    warning: WarningFilledIcon,
    info: InfoCircleFilledIcon,
    success: CheckCircleFilledIcon,
    error: XCrossCircleFilledIcon
};

type Props = Pick<BoxWithVariant, 'variant' | 'emphasized'>;

const IconBox = styled(Box)<Props>`
    ${({ emphasized }) => (emphasized ? emphasizedIconColorVariants : iconColorVariants)};
`;

export const Icon: FC<Props> = ({ variant, emphasized }) => {
    const BannerIcon = ICON_VARIANTS[variant];
    return (
        <IconBox mr={1} variant={variant} emphasized={emphasized}>
            <BannerIcon size={20} color="inherit" />
        </IconBox>
    );
};
