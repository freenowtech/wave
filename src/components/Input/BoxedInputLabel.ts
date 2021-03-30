import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { activePositionBaseStyles, BaseInputLabel } from './BaseInputLabel';

const activeBoxedPosition = size => css`
    ${activePositionBaseStyles};

    top: ${size == 'small' ? '-0.375rem' : '-0.5rem'};
    font-size: ${size == 'small' ? '0.625rem' : get('fontSizes.0')};
`;

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            top: '0.5rem',
            left: '0.375rem',
            padding: '0 0.125rem',
            fontSize: get('fontSizes.1')
        },
        medium: {
            top: '0.75rem',
            left: '0.5rem',
            padding: '0 0.25rem',
            fontSize: get('fontSizes.2')
        }
    }
});

const BoxedInputLabel = styled(BaseInputLabel).attrs({ theme })`
    ${sizeVariant};
`;

export { activeBoxedPosition, BoxedInputLabel };
