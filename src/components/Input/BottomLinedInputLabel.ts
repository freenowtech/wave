import styled, { css, Interpolation, ThemeProps } from 'styled-components';
import { variant } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { activePositionBaseStyles, BaseInputLabel } from './BaseInputLabel';
import { InputProps } from './InputProps';

const activeBottomLinedPosition = (size?: InputProps['size']): ReadonlyArray<Interpolation<ThemeProps<unknown>>> => css`
    ${activePositionBaseStyles};
    top: ${size === 'small' ? '0' : '0.25rem'};
    font-size: ${size === 'small' ? '0.625rem' : get('fontSizes.0')};
`;

const sizeVariant = variant<Record<string, unknown>, InputProps['size']>({
    prop: 'size',
    variants: {
        small: {
            top: '0.875rem',
            padding: '0 0.125rem',
            fontSize: get('fontSizes.1')
        },
        medium: {
            top: '1.375rem',
            padding: '0 0.25rem',
            fontSize: get('fontSizes.2')
        }
    }
});

const BottomLinedInputLabel = styled(BaseInputLabel).attrs({ theme })`
    left: 0;
    ${sizeVariant}
`;

export { activeBottomLinedPosition, BottomLinedInputLabel };
