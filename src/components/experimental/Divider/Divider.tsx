import React from 'react';
import { compose, LayoutProps, space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';

type DividerProps = SpaceProps &
    LayoutProps & {
        /**
         * Set the direction of the divider to vertical
         */
        vertical?: boolean;
    };

const HorizontalLine = styled.div<DividerProps>`
    width: ${props => props.width || '100%'};
    border-top: 1px solid ${getSemanticValue('divider')};
    ${compose(space)}
`;

const VerticalLine = styled.div<DividerProps>`
    display: inline-block;
    height: ${props => props.height || '100%'};
    border-left: 1px solid ${getSemanticValue('divider')};
    width: 0;
    ${compose(space)}
`;

export const Divider: React.FC<DividerProps> = ({ vertical = false, ...props }: DividerProps) =>
    vertical ? (
        <VerticalLine data-testid="vertical-divider-experimental" {...props} />
    ) : (
        <HorizontalLine data-testid="horizontal-divider-experimental" {...props} />
    );
