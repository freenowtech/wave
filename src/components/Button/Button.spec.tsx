import React from 'react';
import { render, screen } from '@testing-library/react';
import { getSemanticValue } from '../../utils/cssVariables';
import { Button } from './Button';

describe('standard button', () => {
    it('renders by default the primary variant', () => {
        const { container: primaryTree } = render(<Button variant="primary">Click</Button>);
        const { container: defaultTree } = render(<Button>Click</Button>);

        expect(primaryTree).toEqual(defaultTree);
    });

    it('renders a medium primary button by default', () => {
        render(<Button>Click</Button>);

        expect(screen.getByRole('button')).toHaveStyleRule(
            'background',
            getSemanticValue('background-element-primary-default')
        );
        expect(screen.getByRole('button')).toHaveStyleRule('height', '3rem');
    });

    it('applies the variant and size it receives', () => {
        render(
            <Button variant="secondary" size="small">
                Click
            </Button>
        );

        expect(screen.getByRole('button')).toHaveStyleRule('background', getSemanticValue('background-page-default'));
        expect(screen.getByRole('button')).toHaveStyleRule('height', '2rem');
    });
});
