import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { getSemanticValue } from '../../utils/cssVariables';
import { type InfoBannerVariants, InfoBanner } from './InfoBanner';

describe('InfoBanner', () => {
    describe('renders the different variants', () => {
        const testCases = [
            [
                'info',
                {
                    background: getSemanticValue('background-surface-info-default'),
                    iconColor: getSemanticValue('foreground-info-default')
                }
            ],
            [
                'success',
                {
                    background: getSemanticValue('background-surface-success-default'),
                    iconColor: getSemanticValue('foreground-success-default')
                }
            ],
            [
                'warning',
                {
                    background: getSemanticValue('background-surface-warning-default'),
                    iconColor: getSemanticValue('foreground-warning-default')
                }
            ],
            [
                'error',
                {
                    background: getSemanticValue('background-surface-danger-default'),
                    iconColor: getSemanticValue('foreground-danger-default')
                }
            ]
        ] as const;

        test.each(testCases)('"%s" with correct styles', (variant: InfoBannerVariants, expectedStyles) => {
            expect(
                render(<InfoBanner title="Title" description="Description" variant={variant} />).container.firstChild
            ).toHaveStyle(`background: ${expectedStyles.background};`);
            expect(screen.getByTestId('infobanner-icon-container')).toHaveStyle(`color: ${expectedStyles.iconColor};`);
        });
    });

    describe('renders the different variants of the container when emphasized', () => {
        const testCases = [
            [
                'info',
                {
                    background: getSemanticValue('background-surface-info-emphasized'),
                    iconColor: getSemanticValue('foreground-on-background-info')
                }
            ],
            [
                'success',
                {
                    background: getSemanticValue('background-surface-success-emphasized'),
                    iconColor: getSemanticValue('foreground-on-background-success')
                }
            ],
            [
                'warning',
                {
                    background: getSemanticValue('background-surface-warning-emphasized'),
                    iconColor: getSemanticValue('foreground-on-background-warning')
                }
            ],
            [
                'error',
                {
                    background: getSemanticValue('background-surface-danger-emphasized'),
                    iconColor: getSemanticValue('foreground-on-background-danger')
                }
            ]
        ] as const;

        test.each(testCases)('"%s" with correct styles', (variant: InfoBannerVariants, expectedStyles) => {
            expect(
                render(<InfoBanner title="Title" description="Description" variant={variant} emphasized />).container
                    .firstChild
            ).toHaveStyle(`background: ${expectedStyles.background};`);
            expect(screen.getByTestId('infobanner-icon-container')).toHaveStyle(`color: ${expectedStyles.iconColor};`);
        });
    });
});
