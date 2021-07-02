import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';
import { Colors } from '../../essentials';
import { generateImage } from 'jsdom-screenshot';
import { Box } from '../Box/Box';

describe('Button', () => {
    it('should render the primary variant by default', () => {
        const { container: primaryTree } = render(<Button variant="primary">Click</Button>);
        const { container: defaultTree } = render(<Button>Click</Button>);

        expect(primaryTree).toEqual(defaultTree);
    });

    test.each(['primary', 'secondary', 'danger'])(
        'should render the variant %s correctly',
        async (variant: 'primary' | 'secondary' | 'danger') => {
            render(
                <Box display="grid" gridTemplateColumns="repeat(auto-fill, 100px)" gridGap="1rem" p={3}>
                    <Button variant={variant}>Medium</Button>
                    <Button variant={variant} disabled>
                        Disabled
                    </Button>
                    <Button variant={variant} size="small">
                        Small
                    </Button>
                    <Button variant={variant} size="small" disabled>
                        Small
                    </Button>
                </Box>
            );

            expect(await generateImage()).toMatchImageSnapshot();
        }
    );

    test.each(['primary', 'secondary', 'danger'])(
        'should render the inverted variant %s correctly',
        async (variant: 'primary' | 'secondary' | 'danger') => {
            render(
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fill, 100px)"
                    gridGap="1rem"
                    background={Colors.AUTHENTIC_BLUE_900}
                    p={3}
                >
                    <Button inverted variant={variant}>
                        Medium
                    </Button>
                    <Button inverted variant={variant} disabled>
                        Disabled
                    </Button>
                    <Button inverted variant={variant} size="small">
                        Small
                    </Button>
                    <Button inverted variant={variant} size="small" disabled>
                        Small
                    </Button>
                </Box>
            );

            expect(await generateImage()).toMatchImageSnapshot();
        }
    );
});
