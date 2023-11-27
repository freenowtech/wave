jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = [
    'color-in-JSX-multi-import',
    'color-in-JSX-single-import',
    'template-multi-quasis-even',
    'template-multi-quasis-odd',
    'template-single-quasis',
    'no-colors-usage'
];

describe('colors-to-css-vars', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'colors-to-css-vars', { quote: 'single' }, `colors-to-css-vars/${test}`, {
            parser: 'tsx'
        })
    );
});
