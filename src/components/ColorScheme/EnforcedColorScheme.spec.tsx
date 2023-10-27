import { render } from '@testing-library/react';
import * as React from 'react';
import { Button } from '../Button/Button';
import { EnforcedColorScheme } from './EnforcedColorScheme';

const renderColorScheme = ({ dark }: { dark: boolean }) =>
    render(
        <EnforcedColorScheme scheme={dark ? 'dark' : 'light'}>
            <Button>Click</Button>
        </EnforcedColorScheme>
    );

describe('ColorScheme', () => {
    it('renders a div wrapper with light-mode by default', () => {
        const { container } = renderColorScheme({ dark: false });

        expect(container.firstChild).toHaveClass('light-scheme');
    });

    it('renders a div wrapper with dark-mode if passed dark prop', () => {
        const { container } = renderColorScheme({ dark: true });

        expect(container.firstChild).toHaveClass('dark-scheme');
    });
});
