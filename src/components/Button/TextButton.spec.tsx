import React from 'react';
import { render, screen } from '@testing-library/react';
import { getSemanticValue } from '../../utils/cssVariables';
import { TextButton } from './TextButton';

describe('TextButton', () => {
    it('renders a medium default button by default', () => {
        render(<TextButton>Click</TextButton>);

        expect(screen.getByRole('button')).toHaveStyleRule('color', getSemanticValue('foreground-accent-default'));
        expect(screen.getByRole('button')).toHaveStyleRule('height', '3rem');
    });

    it('applies the variant and size it receives', () => {
        render(
            <TextButton variant="danger" size="small">
                Click
            </TextButton>
        );

        expect(screen.getByRole('button')).toHaveStyleRule('color', getSemanticValue('foreground-danger-default'));
        expect(screen.getByRole('button')).toHaveStyleRule('height', '2rem');
    });
});
