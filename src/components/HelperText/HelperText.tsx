import type React from 'react';
import styled from 'styled-components';
import { compose, margin, type ResponsiveValue, variant } from 'styled-system';
import { getSemanticValue } from '../../utils/cssVariables';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Text, type TextProps } from '../Text/Text';

interface HelperTextProps extends TextProps {
    /**
     * Set the appropriate colors for component with 'info' as default
     * @default info
     */
    variant?: ResponsiveValue<'info' | 'danger'>;
}

const variants = variant({
    variants: {
        info: {
            color: getSemanticValue('foreground-neutral-emphasized')
        },
        danger: {
            color: getSemanticValue('foreground-danger-default')
        }
    }
});

const HelperText: React.FC<HelperTextProps> = styled(Text).attrs<HelperTextProps>({ theme, variant: 'info' })`
    display: block;
    font-size: ${get('fontSizes.0')};
    text-align: left;
    ${compose(variants, margin)};
`;

export { HelperText, type HelperTextProps };
