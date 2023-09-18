jest.autoMockOff();
const { defineTest } = require('jscodeshift/dist/testUtils');

const tests = [
    'local-rename',
    'explicit-boolean-false',
    'explicit-boolean-true',
    'styled-rename',
    'siblings',
    'siblings-multi'
];

describe('inverted-to-flip-theme', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'inverted-to-flip-theme', { quote: 'single' }, `inverted-to-flip-theme/${test}`, {
            parser: 'tsx'
        })
    );
});
