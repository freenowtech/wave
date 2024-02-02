import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { compose, space, SpaceProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import { getSemanticValue } from '../../utils/cssVariables';

type DividerOffset = number | string;

interface DividerProps extends SpaceProps {
    /**
     * Set the direction of the divider to vertical
     */
    vertical?: boolean;
    /**
     * Set offset / margin of the divider from the surrounding content
     */
    offset?: DividerOffset;
}

const HorizontalLine: StyledComponent<'div', typeof theme, DividerProps, 'theme'> = styled.div.attrs({ theme })<
    Pick<SpaceProps, 'my'>
>`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 0;
    border-top: 1px solid ${getSemanticValue('border-neutral-default')};

    ${compose(space)}
`;

const VerticalLine: StyledComponent<'div', typeof theme, DividerProps, 'theme'> = styled.div.attrs({ theme })<
    Pick<SpaceProps, 'mx'>
>`
    display: inline-block;
    width: 0.06rem;
    margin-top: 0;
    margin-bottom: 0;
    border: 0;
    border-left: 1px solid ${getSemanticValue('border-neutral-default')};

    ${compose(space)}
`;

const Divider: React.FC<DividerProps> = ({ vertical = false, offset = '1rem' }: DividerProps) =>
    vertical ? (
        <VerticalLine mx={offset} data-testid="vertical-divider" />
    ) : (
        <HorizontalLine my={offset} data-testid="horizontal-divider" />
    );

export { Divider, DividerProps, DividerOffset };
