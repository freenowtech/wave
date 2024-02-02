import React from 'react';
import styled from 'styled-components';

import { Box } from '../../Box/Box';
import { Headline } from '../../Headline/Headline';
import { Link as WaveLink } from '../../Link/Link';
import { Text } from '../../Text/Text';
import { Icon } from './Icon';
import { Container, LOCAL_CSS_VARIABLES } from './Container';
import { CardProps } from '../types';

const StyledLink = styled(WaveLink).attrs(props => ({
    fontSize: 0,
    textAlign: 'left',
    target: '_blank',
    marginTop: '0.25rem',
    ...props
}))`
    color: var(${LOCAL_CSS_VARIABLES.LINK});

    &:link,
    &:visited {
        color: var(${LOCAL_CSS_VARIABLES.LINK});
    }

    &:hover,
    &:active {
        color: var(${LOCAL_CSS_VARIABLES.LINK_HOVER});
    }
`;

const Title = ({ children }: { children: string }) => (
    <Headline as="h4" textAlign="left">
        {children}
    </Headline>
);

const Description = ({ children }: { children: string }) => (
    <Text fontSize="small" textAlign="left">
        {children}
    </Text>
);

const InfoBannerCard = ({ children, variant = 'info', emphasized, ...props }: CardProps): JSX.Element => (
    <Container variant={variant} emphasized={emphasized} {...props}>
        <Icon variant={variant} emphasized={emphasized} />
        <Box display="flex" flexDirection="column">
            {children}
        </Box>
    </Container>
);

InfoBannerCard.Title = Title;
InfoBannerCard.Description = Description;
InfoBannerCard.Link = StyledLink;

export { InfoBannerCard };
