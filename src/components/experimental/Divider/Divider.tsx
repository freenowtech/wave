import React from 'react';
import { compose, LayoutProps, space, SpaceProps, variant } from 'styled-system';
import styled from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';

type DividerProps = SpaceProps &
    LayoutProps & {
        /**
         * Set the direction of the divider to vertical
         */
        vertical?: boolean;
        /**
         * Set the variant of the divider
         */
        variant?: 'full-width' | 'inset' | 'middle-inset';
    };

const horizontalVariants = variant({
    prop: 'variant',
    variants: {
        'full-width': {
            minWidth: '100%'
        },
        inset: {
            marginLeft: '1rem'
        },
        'middle-inset': {
            marginLeft: '1rem',
            marginRight: '1rem'
        }
    }
});

const verticalVariants = variant({
    prop: 'variant',
    variants: {
        'full-width': {
            minHeight: '100%'
        },
        inset: {
            marginTop: '1rem'
        },
        'middle-inset': {
            marginTop: '1rem',
            marginBottom: '1rem'
        }
    }
});

const HorizontalLine = styled.div<DividerProps>`
    border-top: 1px solid ${getSemanticValue('divider')};
    ${compose(space, horizontalVariants)}
`;

const VerticalLine = styled.div<DividerProps>`
    align-self: stretch;
    border-left: 1px solid ${getSemanticValue('divider')};
    ${compose(space, verticalVariants)}
`;

export const Divider: React.FC<DividerProps> = ({
    vertical = false,
    variant: variantVal = 'full-width',
    ...props
}: DividerProps) =>
    vertical ? (
        <VerticalLine data-testid="vertical-divider-experimental" variant={variantVal} {...props} />
    ) : (
        <HorizontalLine data-testid="horizontal-divider-experimental" variant={variantVal} {...props} />
    );
