import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';
import {
    background,
    type BackgroundProps,
    color,
    type ColorProps,
    compose,
    flexbox,
    type FlexboxProps,
    grid,
    type GridProps,
    layout,
    type LayoutProps,
    position,
    type PositionProps,
    space,
    type SpaceProps,
    textAlign,
    type TextAlignProps
} from 'styled-system';
import { theme } from '../../essentials/theme';

interface BoxProps
    extends
        SpaceProps,
        LayoutProps,
        PositionProps,
        Omit<ColorProps, 'color'>, // HACK: avoid collision of `color` prop
        FlexboxProps,
        GridProps,
        BackgroundProps,
        TextAlignProps {}

const Box = styled.div.withConfig({ shouldForwardProp: isPropValid }).attrs({ theme })<BoxProps>`
    ${compose(space, layout, position, color, flexbox, grid, background, textAlign)}
`;

export { Box, type BoxProps };
