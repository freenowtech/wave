jest.autoMockOff();
const { defineTest } = require('jscodeshift/dist/testUtils');

const tests = ['local-rename', 'explicit-boolean-false', 'explicit-boolean-true', 'styled-rename'];

describe('inverted-to-wrapper', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'inverted-to-wrapper', { quote: 'single' }, `inverted-to-wrapper/${test}`, {
            parser: 'tsx'
        })
    );
});
