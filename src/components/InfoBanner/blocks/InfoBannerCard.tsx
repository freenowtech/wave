import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { BoxProps, Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Link as WaveLink } from '../../Link/Link';
import { Text } from '../../Text/Text';

import { ICON_VARIANTS, IconBox, InfoBannerVariants, ROLE_VARIANTS, RoundedBox } from '../InfoBanner';

interface CardProps extends BoxProps {
    children: ReactNode;
    variant?: InfoBannerVariants;
    emphasized?: boolean;
}

const StyledTitle = styled(Headline).attrs({ as: 'h4', textAlign: 'left' })`
    color: var(--info-banner-text-color);
`;

const StyledDescription = styled(Text).attrs({ fontSize: 'small', textAlign: 'left' })`
    color: var(--info-banner-text-color);
`;

const StyledLink = styled(WaveLink).attrs({ fontSize: 0, textAlign: 'left', target: '_blank', marginTop: '0.25rem' })`
    &:link,
    &:visited {
        color: var(--info-banner-link-color);
    }

    &:hover,
    &:active {
        color: var(--info-banner-link-hover-color);
    }
`;

const Title = ({ children }: { children: string }) => <StyledTitle>{children}</StyledTitle>;

const Description = ({ children }: { children: string }) => <StyledDescription>{children}</StyledDescription>;

const InfoBannerCard = ({ children, variant = 'info', emphasized, ...props }: CardProps): JSX.Element => {
    const BannerIcon = ICON_VARIANTS[variant];

    return (
        <RoundedBox variant={variant} emphasized={emphasized} role={ROLE_VARIANTS[variant]} {...props}>
            <IconBox mr={1} variant={variant} emphasized={emphasized}>
                <BannerIcon size={20} color="inherit" />
            </IconBox>
            <Box display="flex" flexDirection="column">
                {children}
            </Box>
        </RoundedBox>
    );
};

InfoBannerCard.Title = Title;
InfoBannerCard.Description = Description;
InfoBannerCard.Link = StyledLink;

export { InfoBannerCard };
