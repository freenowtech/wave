import { render } from '@testing-library/react';
import * as React from 'react';
import { Button } from '../Button/Button';
import { ColorMode } from './ColorMode';

const renderColorMode = ({ dark }: { dark: boolean }) =>
    render(
        <ColorMode dark={dark}>
            <Button>Click</Button>
        </ColorMode>
    );

describe('ColorMode', () => {
    it('renders a div wrapper with light-mode by default', () => {
        const { container } = renderColorMode({ dark: false });

        expect(container.firstChild).toHaveClass('light-theme');
    });

    it('renders a div wrapper with dark-mode if passed dark prop', () => {
        const { container } = renderColorMode({ dark: true });

        expect(container.firstChild).toHaveClass('dark-theme');
    });
});
