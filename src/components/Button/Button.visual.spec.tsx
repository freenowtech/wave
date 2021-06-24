import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import * as React from 'react';
import { Button } from './Button';

describe('Button', () => {
    test.each(['primary', 'secondary', 'danger'])(
        'should render the variant %s',
        async (variant: 'primary' | 'secondary' | 'danger') => {
            render(<Button variant={variant}>Button</Button>);

            expect(await generateImage()).toMatchImageSnapshot();
        }
    );
});
