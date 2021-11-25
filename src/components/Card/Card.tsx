import styled, { StyledComponent } from 'styled-components';
import {
    borderRadius,
    BorderRadiusProps,
    compose,
    height,
    HeightProps,
    padding,
    PaddingProps,
    ResponsiveValue,
    space,
    SpaceProps,
    variant,
    width,
    WidthProps
} from 'styled-system';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

type CardProps = BorderRadiusProps &
    HeightProps &
    SpaceProps &
    WidthProps &
    PaddingProps & {
        /**
         * Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)
         */
        level?: ResponsiveValue<0 | 100 | 200 | 300>;
    };

const levelVariant = variant({
    prop: 'level',
    variants: {
        0: {
            boxShadow: 'none'
        },
        100: {
            boxShadow: theme.shadows.small
        },
        200: {
            boxShadow: theme.shadows.medium
        },
        300: {
            boxShadow: theme.shadows.large
        }
    }
});

const Card: StyledComponent<'div', typeof theme, CardProps, 'theme'> = styled.div.attrs({ theme })`
    overflow: auto;
    box-sizing: border-box;
    background-color: ${Colors.WHITE};
    border-radius: ${get('radii.1')};
    padding: ${get('space.5')};

    ${compose(levelVariant, borderRadius, height, space, width, padding)}
`;

export { Card, CardProps };
