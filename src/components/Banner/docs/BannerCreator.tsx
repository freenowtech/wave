import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { BannerProps, Button, Text } from '../..';
import { Banner, DismissFunc } from '../Banner';

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface ExampleBannerProps extends Pick<BannerProps, 'variant' | 'position'> {
    text: string;
}

const handleDismiss = (dismiss: DismissFunc) => () => {
    dismiss();
};

const DismissibleBanner = ({ text, variant, position }: ExampleBannerProps) => (
    <Banner variant={variant} position={position}>
        {dismiss => (
            <FlexContainer>
                <Text inverted>{text}</Text>
                <Button variant="secondary" size="small" inverted onClick={handleDismiss(dismiss)}>
                    Dismiss
                </Button>
            </FlexContainer>
        )}
    </Banner>
);

export const BannerCreator: FC = () => {
    const [banners, setBanners] = useState<ExampleBannerProps[]>([]);

    const addBannerHandler = ({ variant, position }: Pick<BannerProps, 'variant' | 'position'>) => () => {
        setBanners(currentBanners => [
            ...currentBanners,
            { text: `Banner in variant "${variant}"`, variant, position }
        ]);
    };

    return (
        <>
            {banners.map((it, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <DismissibleBanner text={it.text} variant={it.variant} key={index} position={it.position} />
            ))}
            <Button size="small" mr={1} mb={1} onClick={addBannerHandler({ variant: 'info' })}>
                Add Info Banner
            </Button>
            <Button size="small" mr={1} mb={1} onClick={addBannerHandler({ variant: 'success' })}>
                Add Success Banner
            </Button>
            <Button size="small" mr={1} mb={1} onClick={addBannerHandler({ variant: 'danger' })}>
                Add Danger Banner
            </Button>
            <Button size="small" mb={1} onClick={addBannerHandler({ variant: 'success', position: 'top' })}>
                Add Success Banner (Top)
            </Button>
        </>
    );
};
