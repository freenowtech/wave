import styled, { css, keyframes } from 'styled-components';
import { borderRadius, BorderRadiusProps, compose, layout, LayoutProps, margin, MarginProps } from 'styled-system';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';

const shimmerAnimation = keyframes`
    100% {
        transform: translateX(100%);
    }
`;

const animationStyles = css`
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-75%);
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0.5) 37%,
            rgba(255, 255, 255, 0) 63%
        );
        background-repeat: no-repeat;
        content: '';

        animation: ${shimmerAnimation} 1600ms ease infinite;
        animation-delay: 200ms;
    }
`;

export interface SkeletonProps extends LayoutProps, MarginProps, BorderRadiusProps {
    /**
     * Show skeleton animation
     * @default false
     */
    animated?: boolean;
}

export const Skeleton = styled.span<SkeletonProps>`
    display: inline-block;
    height: 1rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: ${get('radii.2')};
    background-color: ${getSemanticValue('background-surface-neutral-faded')};

    ${compose(layout, margin, borderRadius)};

    ${p => (p.animated ? animationStyles : undefined)}
`;
