jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = ['basic-usage', 'local-rename', 'boolean-true', 'boolean-false', 'dynamic-value', 'no-weak-usage'];

describe('weak-to-secondary', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'weak-to-secondary', { quote: 'single' }, `weak-to-secondary/${test}`, {
            parser: 'tsx'
        })
    );
});
