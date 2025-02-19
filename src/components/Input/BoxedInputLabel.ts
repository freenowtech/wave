import { styled, css, Interpolation } from 'styled-components';
import { variant } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { activePositionBaseStyles, BaseInputLabel } from './BaseInputLabel';
import { InternalInputProps } from './InputProps';

const activeBoxedPosition = (size: InternalInputProps['waveSize']) => css`
    ${activePositionBaseStyles};

    top: ${size === 'small' ? '-0.375rem' : '-0.5rem'};
    font-size: ${size === 'small' ? '0.625rem' : get('fontSizes.0')};
`;

const sizeVariant = variant({
    prop: 'waveSize',
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

const BoxedInputLabel = styled(BaseInputLabel).attrs({ theme })<Pick<InternalInputProps, 'waveSize'>>`
    ${sizeVariant};
`;

export { activeBoxedPosition, BoxedInputLabel };
