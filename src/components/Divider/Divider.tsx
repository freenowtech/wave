import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { compose, space, SpaceProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

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
    DividerProps
>`
    width: 100%;
    margin: 0 auto;
    border: 0;
    border-top: 0.06rem solid ${get('semanticColors.border.primary')};

    ${compose(space)}
`;

const VerticalLine: StyledComponent<'div', typeof theme, DividerProps, 'theme'> = styled.div.attrs({ theme })<
    DividerProps
>`
    display: inline-block;
    width: 0.06rem;
    margin: 0 auto;
    border: 0;
    border-left: 0.06rem solid ${get('semanticColors.border.primary')};

    ${compose(space)}
`;

/**
 * ** Primary UI element for visually separating content **
 *
 * Renders a divider UI component: horizontal or vertical line that visually separates two pieces of data, content or UI immediately next to it.
 *
 * Horizontal divider will take up full available width, vertical divider will take up full available height.
 *
 * _Divider_ renders a horizontal divider by default. Set **vertical** prop to __true__ to change divider orientation.
 *
 *
 * ---
 *
 * <br/>
 *
 * #### Divider vs. Border
 *
 * The default color of _Divider_ is $border.primary (#C6CDD4) <span style="color: #C6CDD4">⬤</span>, however...
 *
 * ** Divider is NOT a border, and should not be used as such. Please do not use this component as a border for elements. **
 *
 * Divider is naturally expected to have a certain offset from the elements it is 'dividing' or separating.
 *
 * ---
 *
 * #### Style Props
 *
 * The Divider has following design props:
 * - **offset** - set the divider offset from the content it is separating (uses _mx_, _my_ styled system props)
 *
 */
const Divider = ({ vertical = false, offset = 0 }: DividerProps): React.ReactElement =>
    vertical ? (
        <VerticalLine mx={offset} data-testid="vertical-divider" />
    ) : (
        <HorizontalLine my={offset} data-testid="horizontal-divider" />
    );

export { Divider, DividerProps, DividerOffset };
