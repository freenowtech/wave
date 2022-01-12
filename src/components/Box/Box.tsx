import styled from 'styled-components';
import {
    background,
    BackgroundProps,
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    textAlign,
    TextAlignProps
} from 'styled-system';
import { theme } from '../../essentials/theme';

interface BoxProps
    extends SpaceProps,
        LayoutProps,
        PositionProps,
        Omit<ColorProps, 'color'>, // HACK: avoid collision of `color` prop
        FlexboxProps,
        GridProps,
        BackgroundProps,
        TextAlignProps {}

const Box = styled.div.attrs({ theme })<BoxProps>`
    ${compose(space, layout, position, color, flexbox, grid, background, textAlign)}
`;

export { Box, BoxProps };
