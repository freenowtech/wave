jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = [
    'jsx-usage-single-import',
    'jsx-usage-multi-import',
    'styled-usage',
    'constant-usage',
    'no-deprecated-usage'
];

describe('deprecated-icons', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'deprecated-icons', { quote: 'single' }, `deprecated-icons/${test}`, {
            parser: 'tsx'
        })
    );
});
