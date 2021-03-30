import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animationData from './animationData.json';

const LottieWrapper = styled.div`
    height: 100%;
    width: auto;
    overflow: hidden;
    float: left;
    transition: opacity 150ms;

    &:hover {
        opacity: 0.75;
    }
`;

export const WaveLogoAnimated = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData
    };

    return (
        <LottieWrapper>
            <Lottie options={defaultOptions} />
        </LottieWrapper>
    );
};
