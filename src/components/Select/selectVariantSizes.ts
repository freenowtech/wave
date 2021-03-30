import { variant } from 'styled-system';
import { get } from '../../utils/themeGet';
import { SelectLabel } from './SelectLabel';

const bottomLinedSizeVariants = variant({
    prop: 'size',
    variants: {
        small: {
            fontSize: get('fontSizes.1'),
            height: '2.5rem',
            padding: '0.625rem 1.25rem 0.125rem 0.125rem',
            [`& ~ ${SelectLabel}`]: {
                top: '0.125rem',
                left: '0',
                padding: '0 0.125rem',
                fontSize: '0.625rem'
            },
            '& ~ .svg-icon': {
                top: '0.625rem'
            }
        },
        medium: {
            fontSize: get('fontSizes.2'),
            height: '3.5rem',
            padding: '1.25rem 1.75rem 0.25rem 0.25rem',
            [`& ~ ${SelectLabel}`]: {
                top: '0.375rem',
                left: '0',
                padding: '0 0.25rem',
                fontSize: get('fontSizes.0')
            },
            '& ~ .svg-icon': {
                top: '1rem'
            }
        }
    }
});

const boxedSizeVariants = variant({
    prop: 'size',
    variants: {
        small: {
            fontSize: get('fontSizes.1'),
            height: '2rem',
            padding: '0 1.5rem 0 0.5rem',
            [`& ~ ${SelectLabel}`]: {
                top: '-0.3125rem',
                left: '0.4375rem',
                padding: '0 0.125rem',
                fontSize: '0.625rem'
            }
        },
        medium: {
            fontSize: get('fontSizes.2'),
            height: '3rem',
            padding: '0 2.25rem 0 0.75rem',
            [`& ~ ${SelectLabel}`]: {
                top: '-0.3125rem',
                left: '0.5625rem',
                padding: '0 0.25rem',
                fontSize: get('fontSizes.0')
            }
        }
    }
});

export { boxedSizeVariants, bottomLinedSizeVariants };
