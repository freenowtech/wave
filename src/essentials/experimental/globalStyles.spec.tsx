import React from 'react';
import { render } from '@testing-library/react';
import { styled } from 'styled-components';
import { darkTheme } from './globalStyles';

describe('darkTheme', () => {
    it('applies the styles with their interpolations in the dark scheme', () => {
        const color = 'hsl(0, 0%, 10%)';
        const Dark = styled.div<{ $dense: boolean }>`
            ${darkTheme<{ $dense: boolean }>`
                color: ${color};
                padding: ${props => (props.$dense ? '1px' : '2px')};
            `}
        `;

        const { container } = render(<Dark $dense />);

        expect(container.firstChild).toHaveStyleRule('color', color, { media: '(prefers-color-scheme:dark)' });
        expect(container.firstChild).toHaveStyleRule('padding', '1px', { media: '(prefers-color-scheme:dark)' });
    });
});
