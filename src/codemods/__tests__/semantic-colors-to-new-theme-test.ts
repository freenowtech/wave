jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = [
    'color-in-JSX-multi-import'
    // no-usage
];

describe('semantic-colors-to-new-theme', () => {
    tests.forEach(test =>
        defineTest(
            __dirname,
            'semantic-colors-to-new-theme',
            { quote: 'single' },
            `semantic-colors-to-new-theme/${test}`,
            {
                parser: 'tsx'
            }
        )
    );
});
