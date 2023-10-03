jest.autoMockOff();
const { defineTest } = require('jscodeshift/dist/testUtils');

const tests = ['basic-usage', 'local-rename', 'boolean-true', 'boolean-false', 'dynamic-value'];

describe('weak-to-secondary', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'weak-to-secondary', { quote: 'single' }, `weak-to-secondary/${test}`, {
            parser: 'tsx'
        })
    );
});
