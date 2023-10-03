import React from 'react';

import { BoxProps } from '../Box/Box';
import { InfoBannerCard } from './blocks/InfoBannerCard';
import { InfoBannerVariants } from './types';

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

const InfoBanner: React.FC<InfoBannerProps> = ({
    title,
    description,
    variant = 'info',
    linkText,
    linkUrl,
    emphasized,
    ...props
}) => (
    <InfoBannerCard variant={variant} emphasized={emphasized} {...props}>
        <InfoBannerCard.Title>{title}</InfoBannerCard.Title>
        <InfoBannerCard.Description>{description}</InfoBannerCard.Description>
        {linkText && linkUrl && <InfoBannerCard.Link href={linkUrl}>{linkText}</InfoBannerCard.Link>}
    </InfoBannerCard>
);

export { InfoBanner, InfoBannerProps, InfoBannerVariants };
