import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { BoxProps, Box } from '../../Box/Box';
import { Link as WaveLink } from '../../Link/Link';
import { Text } from '../../Text/Text';

import { ICON_VARIANTS, IconBox, InfoBannerVariants, ROLE_VARIANTS, RoundedBox } from '../InfoBanner';

interface CardProps extends BoxProps {
    children: ReactNode;
    variant?: InfoBannerVariants;
    emphasized?: boolean;
}

const LinkList = styled.ul`
    margin-block-start: 0.3rem;
    margin-block-end: 0.3rem;
    padding-inline-start: 1.5rem;

    li {
        line-height: 1.1;
    }
`;

const Title = ({ children }: { children: string }) => (
    <Text className="Infobanner__Title" fontWeight="bold" textAlign="left">
        {children}
    </Text>
);

const Description = ({ children }: { children: string }) => (
    <Text className="Infobanner__Description" fontSize="small" textAlign="left">
        {children}
    </Text>
);

const Link = ({ linkUrl, linkText }: { linkUrl: string; linkText: string }) => (
    <WaveLink className="Infobanner__Link" fontSize="0" textAlign="left" href={linkUrl} target="_blank" mt="0.25rem">
        {linkText}
    </WaveLink>
);

// TODO: Document this compound component properly when Storybook migration is complete
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
InfoBannerCard.Link = Link;
InfoBannerCard.LinkList = LinkList;

export { InfoBannerCard };
