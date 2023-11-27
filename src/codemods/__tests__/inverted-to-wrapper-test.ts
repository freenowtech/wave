jest.autoMockOff();
const { defineTest } = require('jscodeshift/dist/testUtils');

const tests = [
    'basic-usage',
    'explicit-boolean-false',
    'explicit-boolean-true',
    'styled-rename',
    'individual-wrap-siblings',
    'no-inverted-usage'
];

describe('inverted-to-wrapper', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'inverted-to-wrapper', { quote: 'single' }, `inverted-to-wrapper/${test}`, {
            parser: 'tsx'
        })
    );
});
