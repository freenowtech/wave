import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Text } from '../..';
import { Banner } from '../Banner';

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DismissibleBanner = ({ text, variant, position }) => {
    const handleDismiss = dismiss => () => {
        dismiss();
    };

    return (
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
};

export const BannerCreator = () => {
    const [banners, setBanners] = useState([]);

    const addBannerHandler = ({ variant, position }: { variant: string; position?: string }) => () => {
        setBanners(currentBanners => [
            ...currentBanners,
            { text: `Banner in variant "${variant}"`, variant, position }
        ]);
    };

    return (
        <>
            {banners.map((it, index) => (
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
