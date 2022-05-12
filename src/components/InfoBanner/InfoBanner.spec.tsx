import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { get as themeGet } from '../../utils/themeGet';
import { theme } from '../../essentials/theme';
import { BannerVariants, InfoBanner } from './InfoBanner';

const get = (path: string) => themeGet(path)({ theme });

describe('InfoBanner', () => {
    describe('renders the different variants', () => {
        const testCases = [
            [
                'info',
                {
                    background: get('semanticColors.background.info'),
                    borderColor: get('semanticColors.border.info'),
                    iconColor: get('semanticColors.icon.action'),
                    textColor: get('semanticColors.text.primary')
                }
            ],
            [
                'success',
                {
                    background: get('semanticColors.background.success'),
                    borderColor: get('semanticColors.border.success'),
                    iconColor: get('semanticColors.icon.success'),
                    textColor: get('semanticColors.text.primary')
                }
            ],
            [
                'warning',
                {
                    background: get('semanticColors.background.warning'),
                    borderColor: get('semanticColors.border.warning'),
                    iconColor: get('semanticColors.icon.primary'),
                    textColor: get('semanticColors.text.primary')
                }
            ],
            [
                'error',
                {
                    background: get('semanticColors.background.danger'),
                    borderColor: get('semanticColors.border.danger'),
                    iconColor: get('semanticColors.icon.danger'),
                    textColor: get('semanticColors.text.primary')
                }
            ]
        ] as const;

        test.each(testCases)('"%s" with correct styles', (variant: BannerVariants, expectedStyles) => {
            expect(
                render(<InfoBanner title="Title" description="Description" variant={variant} />).container.firstChild
            ).toHaveStyle(`
                    background: ${expectedStyles.background};
                    border-color: ${expectedStyles.borderColor};
                `);
            expect(screen.getByTestId('infobanner-icon-container')).toHaveStyle(`color: ${expectedStyles.iconColor};`);
            expect(screen.getByText('Title')).toHaveStyle(`color: ${expectedStyles.textColor};`);
        });
    });

    describe('renders the different variants of the container when emphasized', () => {
        const testCases = [
            [
                'info',
                {
                    background: get('semanticColors.background.infoEmphasized'),
                    borderColor: get('semanticColors.border.infoEmphasized'),
                    iconColor: get('semanticColors.icon.primaryInverted'),
                    textColor: get('semanticColors.text.primaryInverted')
                }
            ],
            [
                'success',
                {
                    background: get('semanticColors.background.successEmphasized'),
                    borderColor: get('semanticColors.border.successEmphasized'),
                    iconColor: get('semanticColors.icon.primaryInverted'),
                    textColor: get('semanticColors.text.primaryInverted')
                }
            ],
            [
                'warning',
                {
                    background: get('semanticColors.background.warningEmphasized'),
                    borderColor: get('semanticColors.border.warningEmphasized'),
                    iconColor: get('semanticColors.icon.primary'),
                    textColor: get('semanticColors.text.primary')
                }
            ],
            [
                'error',
                {
                    background: get('semanticColors.background.dangerEmphasized'),
                    borderColor: get('semanticColors.border.dangerEmphasized'),
                    iconColor: get('semanticColors.icon.primaryInverted'),
                    textColor: get('semanticColors.text.primaryInverted')
                }
            ]
        ] as const;

        test.each(testCases)('"%s" with correct styles', (variant: BannerVariants, expectedStyles) => {
            expect(
                render(<InfoBanner title="Title" description="Description" variant={variant} emphasized />).container
                    .firstChild
            ).toHaveStyle(`
                    background: ${expectedStyles.background};
                    border-color: ${expectedStyles.borderColor};
                `);
            expect(screen.getByTestId('infobanner-icon-container')).toHaveStyle(`color: ${expectedStyles.iconColor};`);
            expect(screen.getByText('Title')).toHaveStyle(`color: ${expectedStyles.textColor};`);
        });
    });
});
