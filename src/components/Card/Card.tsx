import { styled } from 'styled-components';
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
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

type CardProps = BorderRadiusProps &
    HeightProps &
    SpaceProps &
    WidthProps &
    PaddingProps & {
        /**
         * Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)
         * @default 0
         */
        level?: ResponsiveValue<0 | 100 | 200 | 300>;
    };

const levelVariant = variant({
    prop: 'level',
    variants: {
        0: {
            backgroundColor: getSemanticValue('background-page-default'),
            boxShadow: 'none'
        },
        100: {
            backgroundColor: getSemanticValue('background-page-elevation-1'),
            boxShadow: theme.shadows.small
        },
        200: {
            backgroundColor: getSemanticValue('background-page-elevation-2'),
            boxShadow: theme.shadows.medium
        },
        300: {
            backgroundColor: getSemanticValue('background-page-elevation-3'),
            boxShadow: theme.shadows.large
        }
    }
});

const Card = styled.div.attrs({ theme })`
    overflow: auto;
    box-sizing: border-box;
    border-radius: ${get('radii.1')};
    padding: ${get('space.5')};

    ${compose(levelVariant, borderRadius, height, space, width, padding)}
`;

export { Card, CardProps };
